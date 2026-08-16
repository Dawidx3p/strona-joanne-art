const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.nav');
const filterButtons = [...document.querySelectorAll('.filters button')];
const cards = [...document.querySelectorAll('.work-card')];
const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox.querySelector('img');
const lightboxCaption = lightbox.querySelector('.lightbox-caption');
const closeButton = lightbox.querySelector('.lightbox-close');
let visibleCards = cards;
let currentIndex = 0;
let lastFocus = null;

function setMenu(open) {
  navigation.classList.toggle('open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Zamknij menu' : 'Otwórz menu');
  document.body.classList.toggle('menu-open', open);
}

menuButton.addEventListener('click', () => setMenu(!navigation.classList.contains('open')));
navigation.addEventListener('click', event => { if (event.target.closest('a')) setMenu(false); });

window.addEventListener('resize', () => {
  if (window.innerWidth > 720 && navigation.classList.contains('open')) setMenu(false);
});

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(item => item.classList.toggle('active', item === button));
    const filter = button.dataset.filter;
    cards.forEach(card => card.classList.toggle('hidden', filter !== 'all' && card.dataset.category !== filter));
    visibleCards = cards.filter(card => !card.classList.contains('hidden'));
  });
});

function showImage(index) {
  currentIndex = (index + visibleCards.length) % visibleCards.length;
  const card = visibleCards[currentIndex];
  lightboxImage.src = card.href;
  lightboxImage.alt = card.dataset.title;
  lightboxCaption.textContent = `${card.dataset.title} · ${currentIndex + 1} / ${visibleCards.length}`;
}

function openLightbox(card) {
  lastFocus = document.activeElement;
  visibleCards = cards.filter(item => !item.classList.contains('hidden'));
  showImage(visibleCards.indexOf(card));
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  closeButton.focus();
}

function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  lightboxImage.removeAttribute('src');
  lastFocus?.focus();
}

cards.forEach(card => card.addEventListener('click', event => { event.preventDefault(); openLightbox(card); }));
closeButton.addEventListener('click', closeLightbox);
lightbox.querySelector('.prev').addEventListener('click', () => showImage(currentIndex - 1));
lightbox.querySelector('.next').addEventListener('click', () => showImage(currentIndex + 1));
lightbox.addEventListener('click', event => { if (event.target === lightbox) closeLightbox(); });

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    if (lightbox.classList.contains('open')) closeLightbox();
    else if (navigation.classList.contains('open')) setMenu(false);
  }
  if (lightbox.classList.contains('open') && event.key === 'ArrowLeft') showImage(currentIndex - 1);
  if (lightbox.classList.contains('open') && event.key === 'ArrowRight') showImage(currentIndex + 1);
});
