document.addEventListener("DOMContentLoaded", function () {
  // Detect if it's mobile by screen width
  var isMobile = window.innerWidth < 768;

  // Mobile-optimized settings
  var particleSettings = {
    particles: {
      number: { value: isMobile ? 15 : 30, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "polygon", polygon: { nb_sides: 5 } },
      opacity: { value: 0.5, random: false },
      size: { value: isMobile ? 2 : 3, random: true },
      line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
      move: { enable: true, speed: isMobile ? 2 : 4, random: true, out_mode: "out" }
    },
    interactivity: {
      detect_on: "canvas",
      events: { onclick: { enable: true, mode: "push" }, resize: true },
      modes: { push: { particles_nb: isMobile ? 2 : 4 } }
    },
    retina_detect: true
  };

  particlesJS("particles-js", particleSettings);
});
