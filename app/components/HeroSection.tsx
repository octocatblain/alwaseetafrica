'use client';

import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

const Counter = ({ value, duration = 2000 }: { value: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  
  // Extract only the first group of digits for the animation
  const match = value.match(/(\d+)(.*)/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : value;

  useEffect(() => {
    if (target === 0) {
      setCount(0);
      return;
    }

    let start = 0;
    const end = target;
    const incrementTime = Math.max(duration / end, 16); // Cap at 60fps approx

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count}{suffix}</span>;
};

const marketingSlides = [
  {
    eyebrow: "STRATEGIC ADVISORY • PAN-AFRICAN OPERATIONS",
    title: (
      <>
        Your Strategic Partner <br/>
        <em>for Business Growth</em><br/>
        Across Africa
      </>
    ),
    subtitle: "We bridge global capital with Africa's fastest-growing markets. Combining legal rigor, logistical expertise, and commercial intelligence so you can invest intelligently and scale confidently.",
    video: "/hero-bg.mp4"
  },
  {
    eyebrow: "CORPORATE LAW & JURISDICTIONAL COMPLIANCE",
    title: (
      <>
        Uncompromising <br/>
        <em>Legal Architecture</em><br/>
        for Enterprises
      </>
    ),
    subtitle: "Navigate complex regulatory landscapes with absolute precision. We deliver airtight corporate governance, equity management, and compliance structuring across 20+ African jurisdictions.",
    video: "/vid2.mp4"
  },
  {
    eyebrow: "FINANCE, TAX & INSTITUTIONAL ADVISORY",
    title: (
      <>
        Optimizing Capital <br/>
        <em>Flows & Returns</em><br/>
        Nationwide
      </>
    ),
    subtitle: "Secure elite trade finance solutions, ensure stringent tax compliance, and streamline multi-national institutional accounts to maximize your investment velocity.",
    video: "/vid3.mp4"
  },
  {
    eyebrow: "CROSS-BORDER TRADE & LOGISTICS",
    title: (
      <>
        Frictionless <em>Trade</em><br/>
        & Multinational Execution
      </>
    ),
    subtitle: "Eliminate operational bottlenecks. Our end-to-end commercial law and logistics frameworks ensure your cross-border supply chains run with unprecedented efficiency.",
    // video: "/vid4.mp4"
        video: "https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4"
  }
];

export default function HeroSection() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % marketingSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = marketingSlides[currentSlide];

  return (
    <section className="hero" id="home">
      {/* Video Background with overlay - Crossfading multiple videos */}
      <div className="hero-video-bg">
        {marketingSlides.map((slideData, idx) => (
          <video
            key={idx}
            autoPlay={true}
            muted={true}
            loop={true}
            playsInline={true}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: idx === currentSlide ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              zIndex: idx === currentSlide ? 1 : 0
            }}
          >
            <source src={slideData.video} type="video/mp4" />
          </video>
        ))}
      </div>
      <div className="hero-overlay" style={{ zIndex: 2 }} />

      <div className="hero-content" style={{ zIndex: 3, position: 'relative' }}>
        {/* Key forces re-render/re-animation of fading elements */}
        <div key={currentSlide} className="carousel-animator">
          <div className="hero-eyebrow fade-in-up" style={{ animationDelay: '0s' }}>
            {slide.eyebrow}
          </div>
          
          <h1 className="fade-in-up" style={{ animationDelay: '0.1s' }}>
            {slide.title}
          </h1>

          <p className="hero-sub fade-in-up" style={{ animationDelay: '0.2s' }}>
            {slide.subtitle}
          </p>

          <div className="hero-actions fade-in-up" style={{ animationDelay: '0.3s' }}>
            <a href="#services" className="btn-primary">
              {t('hero.cta1')}
            </a>
            <a href="#about" className="btn-outline">
              {t('hero.cta2')}
            </a>
          </div>
        </div>

        {/* Carousel Navigation Dots */}
        <div className="carousel-dots fade-in-up" style={{ animationDelay: '0.4s', display: 'flex', gap: '0.75rem', marginTop: '1rem', marginBottom: '2rem' }}>
          {marketingSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{
                width: index === currentSlide ? '28px' : '10px',
                height: '10px',
                borderRadius: '5px',
                background: index === currentSlide ? 'var(--green-light)' : 'rgba(255,255,255,0.3)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                padding: 0
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="hero-stats fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div>
            <div className="stat-num">
              <Counter value={t('hero.stat1Num')} />
            </div>
            <div className="stat-label">{t('hero.stat1Label')}</div>
          </div>
          <div>
            <div className="stat-num">
              <Counter value={t('hero.stat2Num')} />
            </div>
            <div className="stat-label">{t('hero.stat2Label')}</div>
          </div>
          <div>
            <div className="stat-num">
              <Counter value={t('hero.stat3Num')} />
            </div>
            <div className="stat-label">{t('hero.stat3Label')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
