'use client';

import { useEffect } from 'react';

const SmoothScroll = () => {
  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      
      // Vérifier si c'est un lien interne (commence par #) et qu'il est sur la même page
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        const href = target.getAttribute('href');
        if (!href || href === '#') return;
        
        e.preventDefault();
        e.stopPropagation();
        
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        // Calculer la position en tenant compte du header fixe
        const headerHeight = 80; // Hauteur approximative du header
        const elementRect = targetElement.getBoundingClientRect();
        const currentScrollY = window.pageYOffset;
        const targetPosition = currentScrollY + elementRect.top - headerHeight;
        
        // Scroll fluide vers la section avec une animation personnalisée
        const startPosition = currentScrollY;
        const distance = targetPosition - startPosition;
        const duration = 50; //  pour l'animation
        let startTime: number | null = null;
        
        const animateScroll = (currentTime: number) => {
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const progress = Math.min(timeElapsed / duration, 1);
          
          // Fonction d'easing pour un mouvement plus fluide
          const easeInOutQuad = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
          const easedProgress = easeInOutQuad(progress);
          
          window.scrollTo(0, startPosition + distance * easedProgress);
          
          if (progress < 1) {
            requestAnimationFrame(animateScroll);
          }
        };
        
        requestAnimationFrame(animateScroll);
        
        // Fermer le menu mobile si ouvert
        const mobileMenuButton = document.querySelector('[aria-expanded="true"]') as HTMLButtonElement;
        if (mobileMenuButton) {
          mobileMenuButton.click();
        }
      }
    };

    // Ajouter l'écouteur d'événements avec capture pour intercepter avant Next.js
    document.addEventListener('click', handleSmoothScroll, true);
    
    // Nettoyer l'écouteur lors du démontage
    return () => {
      document.removeEventListener('click', handleSmoothScroll, true);
    };
  }, []);

  return null; // Ce composant ne rend rien visuellement
};

export default SmoothScroll;