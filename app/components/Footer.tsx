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
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.148-.67.15-.23.297-.921 1.165-.949 1.404-.029.239-.197.363-.469.472-.272.149-1.758.467-3.426 2.126-1.27 1.13-2.017 2.529-2.251 2.826-.23.297.048.458.229.606.149.149.472.382.707.573.235.19.393.271.59.271.196 0 .328-.036.475-.117.146-.08 1.013-.472 1.206-.78.193-.308.385-.921.46-1.428.075-.507.256-.842.55-1.104.29-.261.77-.333 1.2-.25.43.084 1.686.546 1.966 1.04.28.494.371 1.1.26 1.366-.11.265-.44.404-.758.472-1.033.215-2.133-.066-3.738-1.977-1.45-1.658-1.768-2.644-1.933-3.583-.067-.404.132-1.08.535-1.656.396-.56.834-1.29 1.017-1.586l.063-.105c.28-.46.197-1.277-.289-1.67-.479-.385-1.22-.496-1.756-.293-.506.19-1.282.667-1.528 1.368-.224.623-.11 1.26.267 2.044.378.787 1.076 1.717 1.813 2.582.737.865 2.113 2.44 4.582 3.643 1.31.692 2.203.79 2.805.655.602-.135 1.395-.54 1.588-1.042.193-.502.29-.97.203-1.283-.087-.313-.378-.5-.89-.656z"/>
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
