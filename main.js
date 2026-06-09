(async () => {
  'use strict';

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (typeof tsParticles === 'undefined') return;

  const isMobile = window.innerWidth < 768;

  if (typeof loadSlim === 'function') {
    await loadSlim(tsParticles);
  }

  await tsParticles.load({
    id: 'tsparticles',
    options: {
      fpsLimit: 60,
      detectRetina: true,
      fullScreen: { enable: false },
      particles: {
        number: {
          value: isMobile ? 18 : 30,
          density: { enable: true, width: 1200, height: 800 },
        },
        color: { value: ['#e8e8e8', '#d4d4d4'] },
        opacity: {
          value: { min: 0.15, max: 0.3 },
          animation: { enable: true, speed: 0.4, sync: false },
        },
        size: {
          value: { min: 1, max: 2 },
        },
        links: {
          enable: true,
          distance: 120,
          color: '#ffffff',
          opacity: 0.12,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.5,
          direction: 'none',
          random: true,
          straight: false,
          outModes: { default: 'out' },
        },
      },
      interactivity: {
        detectsOn: 'window',
        events: {
          onHover: {
            enable: true,
            mode: 'repulse',
          },
        },
        modes: {
          repulse: {
            distance: 80,
            duration: 0.4,
          },
        },
      },
    },
  });
})();
