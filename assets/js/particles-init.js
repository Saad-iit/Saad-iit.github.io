document.addEventListener("DOMContentLoaded", function () {
  particlesJS("particles-js", {
    particles: {
      number: { value: 30, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "polygon", polygon: { nb_sides: 5 } },
      opacity: { value: 0.5, random: false },
      size: { value: 3, random: true },
      line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
      move: { enable: true, speed: 4, random: true, out_mode: "out" }
    },
    interactivity: {
      detect_on: "canvas",
      events: { onclick: { enable: true, mode: "push" }, resize: true },
      modes: { push: { particles_nb: 4 } }
    },
    retina_detect: true
  });
});
