import { useEffect, useRef } from 'react';

interface ParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down';
  enableOnMobile?: boolean;
  maxOffset?: number;
}

export const useParallax = ({
  speed = 0.5,
  direction = 'up',
  enableOnMobile = false,
  maxOffset = 30
}: ParallaxOptions = {}) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (!enableOnMobile && window.innerWidth <= 768) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight && elementTop + elementHeight > 0) {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = scrolled * speed;
        
        const clampedOffset = Math.max(-maxOffset, Math.min(maxOffset, parallaxSpeed));
        
        const yPos = direction === 'up' 
          ? -clampedOffset 
          : clampedOffset;

        element.style.transform = `translate3d(0, ${yPos}px, 0)`;
      }
    };

    handleScroll();

    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll);

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [speed, direction, enableOnMobile, maxOffset]);

  return elementRef;
};
