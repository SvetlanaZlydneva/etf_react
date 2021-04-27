export default {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 1500,
      },
    },
    line_linked: {
      enable: true,
      opacity: 0.3,
      color: '#0055aa',
    },
    move: {
      direction: 'top',
      speed: 0.2,
    },
    color: '#0055aa',
    size: {
      value: 1,
    },
    opacity: {
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
      },
    },
  },
  interactivity: {
    events: {
      onclick: {
        enable: true,
        mode: 'push',
      },
    },
    modes: {
      push: {
        particles_nb: 1,
      },
    },
  },
  retina_detect: true,
};
