'use client';

import { useTranslation } from 'react-i18next';
import { Instagram, Linkedin, Facebook, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const { t } = useTranslation();
  
  const social = {
    linkedin: 'https://www.linkedin.com/company/alwaseetafrica/',
    facebook: 'https://www.facebook.com/alwaseetafrica',
    instagram: 'https://www.instagram.com/alwaseetafrica/',
    x: 'https://x.com/alwaseetafrica',
    youtube: 'https://www.youtube.com/@alwaseetafrica',
    tiktok: 'https://www.tiktok.com/@alwaseetafrica',
    whatsapp: 'https://wa.me/254104444446',
    snapchat: 'https://www.snapchat.com/add/alwaseetafrica',
  } as const;

  const services = [
    { title: t('services.service1Title'), href: '#services' },
    { title: t('services.service2Title'), href: '#services' },
    { title: t('services.service3Title'), href: '#services' },
    { title: t('services.service4Title'), href: '#services' },
    { title: t('services.service5Title'), href: '#services' },
    { title: t('services.service6Title'), href: '#services' },
    { title: t('services.service7Title'), href: '#services' },
  ];

  const quickLinks = [
    { title: t('nav.about'), href: '#home' },
    { title: t('nav.services'), href: '#services' },
    { title: t('nav.presence'), href: '#presence' },
    { title: t('nav.why'), href: '#why' },
    { title: t('nav.contact'), href: '#contact' },
  ];

  return (
    <footer className="footer-main">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Column 1: Brand */}
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <Image
                src="/logos/alwaseet_logo.png"
                alt={t('nav.logo')}
                width={220}
                height={56}
                style={{ height: '48px', width: 'auto' }}
              />
            </div>
            <p className="footer-tagline">
              {t('hero.eyebrow')}
            </p>
            <div className="footer-motto">
              {t('contact.motto')}
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="footer-col">
            <h4 className="footer-h">{t('nav.services')}</h4>
            <ul className="footer-u">
              {services.map((s, i) => (
                <li key={i}><a href={s.href}>{s.title}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-h">{t('nav.about')}</h4>
            <ul className="footer-u">
              {quickLinks.map((l, i) => (
                <li key={i}><a href={l.href}>{l.title}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="footer-col">
            <h4 className="footer-h">{t('nav.contact')}</h4>
            <ul className="footer-contact-info">
              <li>
                <MapPin size={18} className="gold" />
                <span>{t('contact.offices')}</span>
              </li>
              <li>
                <Phone size={18} className="gold" />
                <a href={`tel:${t('contact.phone').replace(/\s/g, '')}`}>{t('contact.phone')}</a>
              </li>
              <li>
                <Mail size={18} className="gold" />
                <a href={`mailto:${t('contact.email')}`}>{t('contact.email')}</a>
              </li>
            </ul>
            <div className="footer-social-wrap">
              <a href={social.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <Image src="/logos/whatsapp.svg" alt="" width={22} height={22} />
              </a>
              <a href={social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={22} />
              </a>
              <a href={social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={22} />
              </a>
              <a href={social.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <Image src="/logos/tiktok.svg" alt="" width={22} height={22} />
              </a>
              <a href={social.snapchat} target="_blank" rel="noopener noreferrer" aria-label="Snapchat">
                <Image src="/logos/snapchat.svg" alt="" width={22} height={22} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">{t('footer.copyright')}</div>
          <div className="footer-legal">
            <Link href="/privacy/">{t('footer.privacy')}</Link>
            <span>|</span>
            <Link href="/legal/">{t('footer.terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
