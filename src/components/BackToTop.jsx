import React, { useState, useEffect } from 'react';

const BackToTop = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;

      if (totalHeight > 0) {
        const progress = (currentScroll / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }

      // Afficher dès qu'on commence à défiler (ex: 100px)
      setIsVisible(currentScroll > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Calcul de la taille dynamique basée sur le pourcentage (de 0.85 à 1.25)
  const dynamicScale = 0.85 + (scrollProgress / 100) * 0.4;

  // Calcul du cercle SVG de progression
  const size = 56;
  const strokeWidth = 3;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Retour en haut"
      title="Retour en haut"
      className={`back-to-top-growing ${isVisible ? 'visible' : ''}`}
      style={{
        transform: isVisible
          ? `translateY(0) scale(${dynamicScale})`
          : 'translateY(20px) scale(0.5)',
      }}
    >
      {/* Anneau de progression SVG */}
      <svg className="progress-ring" width={size} height={size}>
        <circle
          className="progress-ring__bg"
          stroke="var(--color-line)"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className="progress-ring__circle"
          stroke="url(#growing-theme-gradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset }}
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <defs>
          <linearGradient id="growing-theme-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-brand)" />
            <stop offset="100%" stopColor="var(--color-brand-2)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Contenu : Pourcentage fixe au centre + Flèche discrète au-dessus */}
      <div className="btn-content">
        <svg
          className="arrow-small"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
        <span className="percent-num">{Math.round(scrollProgress)}%</span>
      </div>
    </button>
  );
};

export default BackToTop;