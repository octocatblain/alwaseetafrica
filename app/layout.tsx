import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const _playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

const _inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://alwaseetafrica.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Alwaseet Africa | Integrated Consultancy',
    template: '%s | Alwaseet Africa',
  },
  description:
    'Alwaseet Africa provides integrated consultancy across Africa: legal solutions & dispute resolution, corporate governance, financial & tax advisory, trade finance & cross-border logistics, commercial law, regulatory compliance, and market-entry strategy.',
  keywords: [
    'Alwaseet Africa',
    'integrated consultancy',
    'legal advisory',
    'corporate governance',
    'financial and tax advisory',
    'trade finance',
    'cross-border logistics',
    'regulatory compliance',
    'market entry',
    'Africa consulting',
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Alwaseet Africa | Integrated Consultancy',
    description:
      'Integrated legal, financial, and operational advisory to help businesses move faster and scale across Africa.',
    siteName: 'Alwaseet Africa',
    images: [
      {
        url: '/favicon/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'Alwaseet Africa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alwaseet Africa | Integrated Consultancy',
    description:
      'Integrated legal, financial, and operational advisory to help businesses move faster and scale across Africa.',
  },
  icons: {
    icon: [
      {
        url: '/favicon/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/favicon/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${_playfair.variable} ${_inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
