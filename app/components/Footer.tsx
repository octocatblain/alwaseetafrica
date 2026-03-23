'use client';

import { useTranslation } from 'react-i18next';
import { Instagram, Twitter, Youtube, Music2 } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const { t } = useTranslation();
  const logo = t('footer.logo');

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

  return (
    <footer>
      <div className="footer-logo">
        <Image
          src="/logos/alwaseet_logo.png"
          alt={logo}
          width={220}
          height={56}
          priority
          style={{ height: '44px', width: 'auto' }}
        />
      </div>
      <div className="footer-copy">{t('footer.copyright')}</div>
      <ul className="footer-links">
        <li><a href="/privacy">{t('footer.privacy')}</a></li>
        <li><a href="/legal">{t('footer.terms')}</a></li>
        <li>
          <a href={social.whatsapp} target="_blank" rel="noopener noreferrer" title={t('footer.whatsapp')} aria-label={t('footer.whatsapp')}>
            <Image src="/logos/whatsapp.svg" alt="WhatsApp" width={20} height={20} />
          </a>
        </li>
        <li>
          <a href={social.snapchat} target="_blank" rel="noopener noreferrer" title={t('footer.snapchat')} aria-label={t('footer.snapchat')}>
            <Image src="/logos/snapchat.svg" alt="Snapchat" width={20} height={20} />
          </a>
        </li>
        <li>
          <a href={social.instagram} target="_blank" rel="noopener noreferrer" title={t('footer.instagram')} aria-label={t('footer.instagram')}>
            <Instagram size={20} />
          </a>
        </li>
        <li>
          <a href={social.tiktok} target="_blank" rel="noopener noreferrer" title={t('footer.tiktok')} aria-label={t('footer.tiktok')}>
            <Image src="/logos/tiktok.svg" alt="TikTok" width={20} height={20} />
          </a>
        </li>
      </ul>
    </footer>
  );
}
