// Typing effect
const tagline = "Engineering Trust. Building Stability.";
const typingTagline = document.querySelector('.typing-tagline');
let idx = 0;
function typeTagline() {
  if (idx < tagline.length) {
    typingTagline.textContent += tagline[idx];
    idx++;
    setTimeout(typeTagline, 80);
  }
}
typeTagline();

// Mouse parallax effect
document.querySelector('.parallax-section').addEventListener('mousemove', (e) => {
  let x = (e.clientX/window.innerWidth - 0.5) * 40;
  let y = (e.clientY/window.innerHeight - 0.5) * 40;
  document.querySelector('.parallax-bg').style.transform = `translate(${x}px, ${y}px) scale(1.08)`;
});

// Scroll fade-in for project/treatment cards
function onScrollFadeIn(selector) {
  document.querySelectorAll(selector).forEach(card => {
    let rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      card.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', () => {
  onScrollFadeIn('.project-card');
  onScrollFadeIn('.treatment-card');
});
window.addEventListener('load', () => {
  onScrollFadeIn('.project-card');
  onScrollFadeIn('.treatment-card');
});
