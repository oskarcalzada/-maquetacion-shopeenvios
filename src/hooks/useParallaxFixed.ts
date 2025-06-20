import { useEffect, useRef } from 'react';

interface ParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down';
  enableOnMobile?: boolean;
  maxOffset?: number; // Maximum pixel offset
}

export const useParallax = ({
  speed = 0.5,
  direction = 'up',
  enableOnMobile = false,
  maxOffset = 30 // Limit movement to 30px max
}: ParallaxOptions = {}) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Disable on mobile devices if not enabled
    if (!enableOnMobile && window.innerWidth <= 768) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Check if element is in viewport
      if (elementTop < windowHeight && elementTop + elementHeight > 0) {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = scrolled * speed;
        
        // Limit the parallax movement to prevent images from going out of bounds
        const clampedOffset = Math.max(-maxOffset, Math.min(maxOffset, parallaxSpeed));
        
        const yPos = direction === 'up' 
          ? -clampedOffset 
          : clampedOffset;

        element.style.transform = `translate3d(0, ${yPos}px, 0)`;
      }
    };

    // Initial call
    handleScroll();

    // Add scroll listener with throttling
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
