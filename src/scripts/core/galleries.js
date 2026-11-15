const lightbox = document.querySelector('.image-lightbox');
const lightboxImage = lightbox.querySelector('.image-lightbox-image');
let lastTrigger = null;
function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImage.removeAttribute('src');
  lastTrigger?.focus();
}
document.addEventListener('click', (event) => {
  const trigger = event.target.closest('.gallery-trigger');
  if (trigger) {
    lastTrigger = trigger;
    lightboxImage.src = trigger.dataset.image;
    lightboxImage.alt = trigger.dataset.alt;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    lightbox.querySelector('.image-lightbox-close').focus();
  } else if (event.target === lightbox || event.target.closest('.image-lightbox-close')) {
    closeLightbox();
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
});
