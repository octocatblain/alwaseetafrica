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
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.767 0 1.267.408 2.445 1.103 3.394l-.737 2.73 2.77-.721a5.721 5.721 0 002.631.663c3.181 0 5.767-2.586 5.767-5.767 0-3.181-2.586-5.767-5.767-5.767zm3.39 8.161c-.131.37-.751.711-1.039.75-.288.039-.58.05-.88.05-.299 0-.613-.021-.93-.057-.317-.036-.631-.082-.942-.143a5.57 5.57 0 01-1.636-.61c-.482-.284-.916-.628-1.291-1.02a5.748 5.748 0 01-1.353-2.1c-.11-.326-.164-.672-.164-1.041 0-.37.054-.716.164-1.041a5.748 5.748 0 011.353-2.1c.375-.392.809-.736 1.291-1.02.482-.284.916-.61 1.636-.61.311.061.625.107.942.143.317.036.631.057.93.057.3 0 .592-.011.88-.05.288-.039.908-.38 1.039-.75.131-.37.131-.692.091-.75-.04-.058-.152-.091-.322-.178-.17-.087-.17-.087-1.011-.518-.841-.431-1.011-.518-1.121-.578-.11-.06-.23-.098-.328-.098-.098 0-.188.038-.344.204-.156.166-.604.75-.74.916-.136.166-.272.188-.442.101-.17-.087-.714-.264-1.359-.838-.501-.447-.838-.999-.937-1.168-.099-.169-.011-.261.076-.347.078-.077.17-.198.255-.297.085-.099.113-.169.17-.281.057-.112.028-.21-.014-.297-.042-.087-.375-.91-.514-1.246-.135-.327-.272-.282-.375-.287l-.319-.004c-.11-.001-.289.041-.441.206-.152.165-.58.566-.58 1.38s.602 1.625.686 1.74c.084.115 1.185 1.848 2.872 2.578.401.173.714.276.958.353.402.128.769.11 1.058.067.322-.048.99-.404 1.13-.794.14-.39.14-.724.098-.794-.042-.07-.152-.109-.322-.196z"/>
            </svg>
          </a>
        </li>
        <li>
          <a href={social.snapchat} target="_blank" rel="noopener noreferrer" title={t('footer.snapchat')} aria-label={t('footer.snapchat')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.59 9.54c-.12-.23-.27-.45-.46-.64.19-.19.34-.41.46-.64 1.31-2.55.42-5.54-2.03-6.75-1.3-.66-2.84-.72-4.21-.16-.35-.21-.72-.4-1.11-.56-.4-.17-.81-.32-1.24-.42.27-.08.53-.16.79-.26.51-.19.96-.47 1.3-.81-1.16-.57-2.45-.83-3.73-.73-1.27.09-2.46.53-3.42 1.28-.96.76-1.54 1.81-1.7 2.98-.06.44.06.88.33 1.23.26.35.66.54 1.07.54.41 0 .81-.19 1.08-.54.27-.35.45-.79.51-1.23.12-.95.68-1.76 1.51-2.16.83-.4 1.81-.34 2.58.16.52.35 1.01.75 1.44 1.22-.18.19-.33.41-.46.64-.12.23-.21.47-.28.72-.07.25-.12.5-.15.76.19.05.37.13.54.23.6.36 1.09.91 1.38 1.56.03.07.07.14.1.21-.07.04-.14.08-.21.12-1.02.66-1.76 1.65-1.95 2.76-.1.62.01 1.24.33 1.79.31.55.82.96 1.42 1.14.89.27 1.86.13 2.63-.4.38-.27.69-.61.92-.99.23.38.54.72.92.99.77.53 1.74.67 2.63.4.6-.18 1.11-.59 1.42-1.14.32-.55.43-1.17.33-1.79-.19-1.11-.93-2.1-1.95-2.76-.07-.04-.14-.08-.21-.12.03-.07.07-.14.1-.21.29-.65.78-1.2 1.38-1.56.17-.1.35-.18.54-.23-.03-.26-.08-.51-.15-.76z"/>
            </svg>
          </a>
        </li>
        <li>
          <a href={social.instagram} target="_blank" rel="noopener noreferrer" title={t('footer.instagram')} aria-label={t('footer.instagram')}>
            <Instagram size={20} />
          </a>
        </li>
        <li>
          <a href={social.tiktok} target="_blank" rel="noopener noreferrer" title={t('footer.tiktok')} aria-label={t('footer.tiktok')}>
            <Music2 size={20} />
          </a>
        </li>
      </ul>
    </footer>
  );
}
