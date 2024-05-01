import anime from 'animejs';
import { useEffect } from 'react';

export const useAnime = () => {
  useEffect(() => {
    const svgPath = window.document.querySelectorAll('.hello_dentech path');
    anime({
      targets: svgPath,
      loop: true,
      direction: 'alternate',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 700,
      delay: (el, i) => {
        return i * 500;
      },
      translateY: {
        value: [-30, 0],
        duration: 900,
        delay: 1000,
        elasticity: 600,
        easing: 'easeOutElastic',
      },
      opacity: {
        value: [0, 1],
        duration: 300,
        easing: 'linear',
        delay: 1000,
      },
    });
  }, []);
};
