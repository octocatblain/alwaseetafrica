import { NextResponse } from 'next/server';
import { z } from 'zod';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const ContactSchema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email().max(120),
  phone: z.string().min(7).max(25),
  message: z.string().min(10).max(2000),
  website: z.string().optional().default(''),
  notRobot: z.boolean(),
  recaptchaToken: z.string().optional().default(''),
});

function getClientIp(req: Request) {
  const forwarded = req.headers.get('x-forwarded-for');
  const fromForwarded = forwarded?.split(',')[0]?.trim();
  return (
    fromForwarded ||
    req.headers.get('x-real-ip') ||
    req.headers.get('cf-connecting-ip') ||
    'unknown'
  );
}

function checkRateLimit(ipKey: string) {
  const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
  const MAX = 5; // 5 submissions / window

  const store =
    (globalThis as any).__alwaseet_contact_rate_store ??
    ((globalThis as any).__alwaseet_contact_rate_store = new Map<
      string,
      { count: number; resetTime: number }
    >());

  const now = Date.now();
  const existing = store.get(ipKey);

  if (!existing || now > existing.resetTime) {
    store.set(ipKey, { count: 1, resetTime: now + WINDOW_MS });
    return { allowed: true as const, retryAfterSeconds: 0 };
  }

  if (existing.count >= MAX) {
    const retryAfterSeconds = Math.max(
      0,
      Math.ceil((existing.resetTime - now) / 1000)
    );
    return { allowed: false as const, retryAfterSeconds };
  }

  existing.count += 1;
  store.set(ipKey, existing);
  return { allowed: true as const, retryAfterSeconds: 0 };
}

export async function POST(req: Request) {
  const ip = getClientIp(req);
  const rate = checkRateLimit(`ip:${ip}`);

  if (!rate.allowed) {
    const res = NextResponse.json(
      {
        ok: false,
        errorCode: 'RATE_LIMITED',
        retryAfterSeconds: rate.retryAfterSeconds,
      },
      { status: 429 }
    );
    res.headers.set('Retry-After', String(rate.retryAfterSeconds));
    res.headers.set('Cache-Control', 'no-store');
    return res;
  }

  const json = await req.json().catch(() => null);
  const parsed = ContactSchema.safeParse(json);
  if (!parsed.success) {
    const res = NextResponse.json(
      { ok: false, errorCode: 'VALIDATION_FAILED' },
      { status: 400 }
    );
    res.headers.set('Cache-Control', 'no-store');
    return res;
  }

  const { name, email, phone, message, website, notRobot, recaptchaToken } =
    parsed.data;

  if (!notRobot) {
    const res = NextResponse.json(
      { ok: false, errorCode: 'ROBOT_VERIFICATION_FAILED' },
      { status: 400 }
    );
    res.headers.set('Cache-Control', 'no-store');
    return res;
  }

  // Honeypot detection (bots often fill hidden fields).
  if (website && website.trim().length > 0) {
    const res = NextResponse.json(
      { ok: false, errorCode: 'BOT_DETECTED' },
      { status: 403 }
    );
    res.headers.set('Cache-Control', 'no-store');
    return res;
  }

  // Optional Google reCAPTCHA verification (enable by setting env vars).
  const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
  if (recaptchaSecret) {
    if (!recaptchaToken) {
      const res = NextResponse.json(
        { ok: false, errorCode: 'ROBOT_VERIFICATION_FAILED' },
        { status: 403 }
      );
      res.headers.set('Cache-Control', 'no-store');
      return res;
    }

    const verifyRes = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          secret: recaptchaSecret,
          response: recaptchaToken,
          remoteip: ip,
        }).toString(),
      }
    );

    const verifyJson = (await verifyRes.json().catch(() => null)) as
      | { success?: boolean }
      | null;

    if (!verifyJson?.success) {
      const res = NextResponse.json(
        { ok: false, errorCode: 'ROBOT_VERIFICATION_FAILED' },
        { status: 403 }
      );
      res.headers.set('Cache-Control', 'no-store');
      return res;
    }
  }

  // Premium behaviour: we validate + rate-limit here; the client opens WhatsApp.
  // Keeping server stateless means no spam can trigger repeated WhatsApp opens.
  void name;
  void email;
  void phone;
  void message;

  const res = NextResponse.json({ ok: true });
  res.headers.set('Cache-Control', 'no-store');
  return res;
}

