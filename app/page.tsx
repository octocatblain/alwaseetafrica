import Header from '@/app/components/Header';
import HeroSection from '@/app/components/HeroSection';
import AboutSection from '@/app/components/AboutSection';
import ServicesSection from '@/app/components/ServicesSection';
import PresenceSection from '@/app/components/PresenceSection';
import WhySection from '@/app/components/WhySection';
import ContactSection from '@/app/components/ContactSection';
import Footer from '@/app/components/Footer';
import ScrollToTop from '@/app/components/ScrollToTop';
import I18nInitializer from '@/app/components/I18nInitializer';

export default function Home() {
  return (
    <main>
      <I18nInitializer />
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PresenceSection />
      <WhySection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
