// Slide-in navbar
gsap.to(".navbar", { y: 0, duration: 1, ease: "power3.out" });

// Pulse animation for button
gsap.to(".cta-btn", {
  scale: 1.05,
  repeat: -1,
  yoyo: true,
  duration: 0.8,
  ease: "power1.inOut"
});

// Scroll-triggered fade-in
const fadeSections = document.querySelectorAll('.fade-section');
window.addEventListener('scroll', () => {
  fadeSections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const triggerBottom = window.innerHeight * 0.9;

    if (sectionTop < triggerBottom) {
      gsap.to(section, { opacity: 1, y: 0, duration: 1, ease: "power2.out" });
    }
  });
});
