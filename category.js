const categories = {
  murale: {
    title: 'Murale',
    kicker: 'Sztuka w przestrzeni',
    description: 'Autorskie malowidła tworzone dla domów, ogrodów, bibliotek i przestrzeni dziecięcych. Każdy projekt powstaje dla konkretnego miejsca.',
    works: [
      ['assets/murale/sciezka-panorama.jpg', 'Kolorowa ścieżka', 'Ogród'],
      ['assets/murale/sciezka-detal.jpg', 'Kolorowa ścieżka — detal', 'Ogród'],
      ['assets/murale/sciezka-z-artystka.jpg', 'Kolorowa ścieżka', 'Ogród'],
      ['assets/murale/orchidee-gotowy-mural.jpg', 'Orchidee', 'Wnętrze'],
      ['assets/murale/orchidee-z-artystka.jpg', 'Orchidee', 'Wnętrze'],
      ['assets/murale/piotr-pan-panorama.jpg', 'Piotruś Pan', 'Pokój dziecięcy'],
      ['assets/murale/piotr-pan-z-artystka.jpg', 'Piotruś Pan', 'Pokój dziecięcy'],
      ['assets/murale/bajkowy-las-panorama.jpg', 'Bajkowy las', 'Przestrzeń dziecięca'],
      ['assets/murale/bajkowy-las-detal.jpg', 'Bajkowy las — detal', 'Przestrzeń dziecięca'],
      ['assets/murale/biblioteka-sowa.png', 'Sowa w bibliotece', 'Biblioteka'],
      ['assets/murale/biblioteka-wejscie.jpg', 'Baśniowe wejście', 'Biblioteka'],
      ['assets/murale/lesny-staw.jpg', 'Leśny staw', 'Wnętrze'],
      ['assets/murale/tyranozaur.jpg', 'Tyranozaur', 'Pokój dziecięcy'],
      ['assets/murale/puchatek-na-szkle.jpg', 'Kubuś Puchatek na szkle', 'Witryna']
    ]
  },
  obrazy: {
    title: 'Obrazy', kicker: 'Płótno, drewno i wyobraźnia',
    description: 'Portrety, pejzaże i symboliczne kompozycje. Prace tworzone tradycyjnie, często z wykorzystaniem naturalnej struktury drewna.',
    works: [
      ['assets/obrazy/zloty-portret.jpg', 'Złoty portret', 'Portret'],
      ['assets/obrazy/portret-kwiatowy.jpg', 'Portret kwiatowy', 'Obraz na drewnie'],
      ['assets/obrazy/dziewczyna-sowa-kon.jpg', 'Dziewczyna, sowa i koń', 'Kompozycja'],
      ['assets/obrazy/pory-roku-lato.jpg', 'Pory roku — lato', 'Cykl'],
      ['assets/obrazy/pory-roku-zima.jpeg', 'Pory roku — zima', 'Cykl'],
      ['assets/obrazy/baszta.jpg', 'Baszta', 'Pejzaż'],
      ['assets/obrazy/postac-z-ogniem.jpg', 'Postać z ogniem', 'Fantastyka'],
      ['assets/obrazy/portret-kobiety.jpg', 'Portret kobiety', 'Portret'],
      ['assets/obrazy/dziewczynka-z-kwiatami.jpg', 'Dziewczynka z kwiatami', 'Obraz na drewnie']
    ]
  },
  anioly: {
    title: 'Anioły', kicker: 'Symboliczne postacie',
    description: 'Barwne, ręcznie malowane anioły — każdy z własnym charakterem, detalem i historią. Obiekty na pograniczu obrazu i rękodzieła.',
    works: [
      ['assets/anioly/aniol-kolorowy.jpg', 'Kolorowy anioł', 'Kolekcja kolorowa'],
      ['assets/anioly/aniol-z-kotem.jpg', 'Anioł z kotem', 'Kolekcja kolorowa'],
      ['assets/anioly/aniol-kolorowy-detal.jpg', 'Kolorowy anioł — detal', 'Kolekcja kolorowa'],
      ['assets/anioly/aniol-kwiaty.jpg', 'Anioł w kwiatach', 'Kolekcja kwiatowa'],
      ['assets/anioly/aniol-kwiaty-z-artystka.jpg', 'Anioł w kwiatach — skala', 'Kolekcja kwiatowa'],
      ['assets/anioly/aniol-kwiaty-detal.jpg', 'Anioł w kwiatach — detal', 'Kolekcja kwiatowa'],
      ['assets/anioly/aniol-natura.jpg', 'Anioł natury', 'Kolekcja natura'],
      ['assets/anioly/aniol-natura-detal.jpg', 'Anioł natury — detal', 'Kolekcja natura']
    ]
  },
  fotografia: {
    title: 'Fotografia', kicker: 'Światło, natura i uważność',
    description: 'Kadry odnajdywane blisko — w lesie, na łące i w zmieniającym się świetle. Fotografia jako ćwiczenie patrzenia.',
    works: [
      ['assets/fotografia/laka-o-zachodzie.jpg', 'Łąka o zachodzie', 'Krajobraz'],
      ['assets/fotografia/sowa-w-lesie.jpg', 'Bella w zimowym lesie', 'Natura'],
      ['assets/fotografia/slonce-w-trawach.jpg', 'Słońce w trawach', 'Detal'],
      ['assets/fotografia/zimowy-zachod.jpg', 'Zimowy zachód', 'Krajobraz'],
      ['assets/fotografia/burzowe-niebo.jpg', 'Burzowe niebo', 'Krajobraz'],
      ['assets/fotografia/konwalia.jpg', 'Konwalia', 'Makro'],
      ['assets/fotografia/dziupla-drzewa.jpg', 'Dziupla drzewa', 'Detal'],
      ['assets/fotografia/rosa-na-trawie.jpg', 'Rosa na trawie', 'Makro']
    ]
  },
  rekodzielo: {
    title: 'Rękodzieło', kicker: 'Przedmioty z charakterem',
    description: 'Unikatowe kubki i małe formy tworzone ręcznie. Tutaj najważniejszy jest detal, faktura i odrobina baśniowego humoru.',
    videos: [
      ['assets/rekodzielo/kubek-kotek.mp4', 'Kubek z kotkiem'],
      ['assets/rekodzielo/kubek-smok.mp4', 'Kubek ze smokiem'],
      ['assets/rekodzielo/kubek-zaba.mp4', 'Kubek z żabą']
    ]
  }
};

const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.nav');
const params = new URLSearchParams(location.search);
const pageType = document.body.dataset.category;
const type = categories[pageType] ? pageType : (categories[params.get('typ')] ? params.get('typ') : 'murale');
const category = categories[type];
const grid = document.querySelector('#category-grid');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox.querySelector('img');
let cards = [];
let currentIndex = 0;
let lastFocus;

if (!pageType) {
  document.title = `${category.title} — Joanne-Art`;
  document.querySelector('meta[name="description"]').content = `${category.title} Joanne-Art — ${category.description}`;
  document.querySelector('meta[property="og:title"]').content = `${category.title} — Joanne-Art`;
  document.querySelector('meta[property="og:description"]').content = category.description;
  document.querySelector('meta[name="twitter:title"]').content = `${category.title} — Joanne-Art`;
  document.querySelector('meta[name="twitter:description"]').content = category.description;
}
document.querySelector('#category-title').textContent = category.title;
document.querySelector('#category-kicker').textContent = category.kicker;
document.querySelector('#category-description').textContent = category.description;

document.querySelector('#category-switcher').innerHTML = Object.entries(categories).map(([key, item]) =>
  `<a href="${key}.html"${key === type ? ' aria-current="page"' : ''}>${item.title}</a>`
).join('');

if (category.works) {
  grid.innerHTML = category.works.map(([src, title, series], index) => `
    <a class="category-card${index % 5 === 0 ? ' featured-card' : ''}" href="${src}" data-title="${title}">
      <img src="${src}" alt="${title}" loading="lazy">
      <div><span>${series}</span><h2>${title}</h2></div>
    </a>`).join('');
  cards = [...grid.querySelectorAll('.category-card')];
} else {
  grid.classList.add('video-grid');
  grid.innerHTML = category.videos.map(([src, title]) => `
    <article class="video-card"><video src="${src}" controls muted playsinline preload="metadata"></video><p>Rękodzieło</p><h2>${title}</h2></article>`).join('');
}
document.querySelector('#category-count').textContent = category.works?.length || category.videos.length;

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

function showImage(index) {
  currentIndex = (index + cards.length) % cards.length;
  const card = cards[currentIndex];
  lightboxImage.src = card.href;
  lightboxImage.alt = card.dataset.title;
  lightbox.querySelector('.lightbox-caption').textContent = `${card.dataset.title} · ${currentIndex + 1} / ${cards.length}`;
}
function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  lightboxImage.removeAttribute('src');
  lastFocus?.focus();
}
cards.forEach((card, index) => card.addEventListener('click', event => {
  event.preventDefault();
  lastFocus = document.activeElement;
  showImage(index);
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  lightbox.querySelector('.lightbox-close').focus();
}));
lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
lightbox.querySelector('.prev').addEventListener('click', () => showImage(currentIndex - 1));
lightbox.querySelector('.next').addEventListener('click', () => showImage(currentIndex + 1));
lightbox.addEventListener('click', event => { if (event.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') lightbox.classList.contains('open') ? closeLightbox() : setMenu(false);
  if (lightbox.classList.contains('open') && event.key === 'ArrowLeft') showImage(currentIndex - 1);
  if (lightbox.classList.contains('open') && event.key === 'ArrowRight') showImage(currentIndex + 1);
});
