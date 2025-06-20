import React from 'react';
import { useInViewport } from '../../hooks/useInViewport';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animationDelay?: number;
  animationType?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'zoomIn';
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animationDelay = 0,
  animationType = 'fadeInUp'
}) => {
  const { elementRef, isInViewport } = useInViewport({ threshold: 0.1 });

  const getAnimationClass = () => {
    switch (animationType) {
      case 'fadeInLeft':
        return isInViewport ? 'animate-in-left' : 'animate-out-left';
      case 'fadeInRight':
        return isInViewport ? 'animate-in-right' : 'animate-out-right';
      case 'zoomIn':
        return isInViewport ? 'animate-zoom-in' : 'animate-zoom-out';
      default:
        return isInViewport ? 'animate-in' : 'animate-out';
    }
  };

  return (
    <div
      ref={elementRef as any}
      className={`animated-section ${getAnimationClass()} ${className}`}
      style={{
        animationDelay: `${animationDelay}ms`,
        transitionDelay: `${animationDelay}ms`
      }}
    >
      {children}
    </div>
  );
};
