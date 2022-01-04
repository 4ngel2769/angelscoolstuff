/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS("particles-js", {
  particles: {
    number: { value: 600, density: { enable: true, value_area: 1000 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 0.9774622835762292,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: true,
        speed: 19.476567255021315,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 9.614383117143237,
      direction: "bottom-left",
      random: false,
      straight: true,
      out_mode: "out",
      bounce: false,
      attract: { enable: true, rotateX: 600, rotateY: 961.4383117143238 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "bubble" },
      onclick: { enable: true, mode: "repulse" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: {
        distance: 97.38283627510657,
        size: 24.345709068776646,
        duration: 4.219922905254619,
        opacity: 0.8926759991884771,
        speed: 3
      },
      repulse: { distance: 162.30472712517764, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});
      //"background_color": "#b61924",
      //"background_image": "",
      //"background_position": "50% 50%",
      //"background_repeat": "no-repeat",
      //"background_size": "cover"