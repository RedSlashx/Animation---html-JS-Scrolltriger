document.addEventListener("DOMContentLoaded", function() {
    // Tu código de GSAP aquí
    gsap.registerPlugin(MotionPathPlugin, ScrollTrigger, MorphSVGPlugin);
gsap.to(".green", { 
    rotation: 900,
    duration: 1,
    scrollTrigger: {
      trigger: '.box',
      scrub: 2,
      markers: true,
    }
  });
});

