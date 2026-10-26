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
      ['assets/murale/puchatek-na-szkle.jpg', 'Kubuś Puchatek na szkle', 'Witryna'],
      ["assets/murale/sloneczniki-szkola-tymowa.jpg", "Słoneczniki dla szkoły w Tymowej", "Szkoła"],
      ["assets/murale/sloneczniki-szkola-detal.jpg", "Słoneczniki — detal z tablicą", "Szkoła"],
      ["assets/murale/sloneczniki-szkola-kwiaty.jpg", "Słoneczniki — detal kwiatów", "Szkoła"],
      ["assets/murale/sloneczniki-szkola-w-trakcie.jpg", "Słoneczniki — podczas malowania", "Szkoła"],
      ["assets/murale/sloneczniki-szkola-z-artystka.jpg", "Słoneczniki — z artystką", "Szkoła"]
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
      ['assets/obrazy/dziewczynka-z-kwiatami.jpg', 'Dziewczynka z kwiatami', 'Obraz na drewnie'],
      ["assets/obrazy/portret-w-ciemnych-wlosach.jpg", "Portret w ciemnych włosach", "Portret"],
      ["assets/obrazy/portret-w-blekitach.jpg", "Portret w błękitach", "Obraz na drewnie"],
      ["assets/obrazy/portret-wsrod-lisci.jpg", "Portret wśród liści", "Rysunek"],
      ["assets/obrazy/skrzydlata-dziewczynka.jpg", "Skrzydlata dziewczynka", "Rysunek"],
      ["assets/obrazy/portrety-z-motylem.jpg", "Portrety z motylem", "Kompozycja"],
      ["assets/obrazy/portret-olowkiem.jpg", "Portret ołówkiem", "Rysunek"],
      ["assets/obrazy/para-ze-skrzydlami.jpg", "Para ze skrzydłami", "Kompozycja"],
      ["assets/obrazy/portret-w-zamysleniu.jpg", "Portret w zamyśleniu", "Rysunek"]
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
      ['assets/anioly/aniol-natura-detal.jpg', 'Anioł natury — detal', 'Kolekcja natura'],
      ["assets/anioly/aniol-jesienny.jpg", "Jesienny anioł", "Anioły na płótnie"],
      ["assets/anioly/aniol-z-klosami.jpg", "Anioł z kłosami", "Anioły na drewnie"],
      ["assets/anioly/aniol-z-dzieckiem.jpg", "Anioł z dzieckiem", "Anioły na płótnie"],
      ["assets/anioly/aniol-z-perlami.jpg", "Anioł z perłami", "Anioły na drewnie"],
      ["assets/anioly/aniol-z-ptakiem.jpg", "Anioł z ptakiem", "Anioły na płótnie"],
      ["assets/anioly/jasnowlosy-aniol.jpg", "Jasnowłosy anioł", "Anioły na płótnie"],
      ["assets/anioly/aniol-z-motylem.jpg", "Anioł z motylem", "Anioły na płótnie"],
      ["assets/anioly/aniol-ognia.jpg", "Anioł ognia", "Anioły na płótnie"],
      ["assets/anioly/aniol-w-czerwieni.jpg", "Anioł w czerwieni", "Anioły na płótnie"],
      ["assets/anioly/skrzydlata-postac-szkic.jpg", "Skrzydlata postać — szkic", "Rysunek"]
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

const params = new URLSearchParams(location.search);
const pageType = document.body.dataset.category;
const type = categories[pageType] ? pageType : (categories[params.get('typ')] ? params.get('typ') : 'murale');
const category = categories[type];
const grid = document.querySelector('#category-grid');
let cards = [];
const imageSizes = {"assets/murale/sciezka-panorama.jpg": [1536, 2048], "assets/murale/sciezka-detal.jpg": [2048, 1536], "assets/murale/sciezka-z-artystka.jpg": [1536, 2048], "assets/murale/orchidee-gotowy-mural.jpg": [1316, 2048], "assets/murale/orchidee-z-artystka.jpg": [1536, 2048], "assets/murale/piotr-pan-panorama.jpg": [2000, 1173], "assets/murale/piotr-pan-z-artystka.jpg": [960, 720], "assets/murale/bajkowy-las-panorama.jpg": [2048, 1119], "assets/murale/bajkowy-las-detal.jpg": [2048, 1536], "assets/murale/biblioteka-sowa.png": [1541, 1021], "assets/murale/biblioteka-wejscie.jpg": [1848, 1224], "assets/murale/lesny-staw.jpg": [1915, 800], "assets/murale/tyranozaur.jpg": [960, 540], "assets/murale/puchatek-na-szkle.jpg": [1536, 2048], "assets/obrazy/zloty-portret.jpg": [1378, 1923], "assets/obrazy/portret-kwiatowy.jpg": [1536, 2048], "assets/obrazy/dziewczyna-sowa-kon.jpg": [1536, 2048], "assets/obrazy/pory-roku-lato.jpg": [1739, 2048], "assets/obrazy/pory-roku-zima.jpeg": [1856, 2048], "assets/obrazy/baszta.jpg": [2048, 1536], "assets/obrazy/postac-z-ogniem.jpg": [1536, 2048], "assets/obrazy/portret-kobiety.jpg": [1011, 1539], "assets/obrazy/dziewczynka-z-kwiatami.jpg": [2048, 1981], "assets/anioly/aniol-kolorowy.jpg": [1532, 2048], "assets/anioly/aniol-z-kotem.jpg": [1532, 2048], "assets/anioly/aniol-kolorowy-detal.jpg": [1532, 2048], "assets/anioly/aniol-kwiaty.jpg": [1536, 2048], "assets/anioly/aniol-kwiaty-z-artystka.jpg": [1536, 2048], "assets/anioly/aniol-kwiaty-detal.jpg": [1536, 2048], "assets/anioly/aniol-natura.jpg": [1536, 2048], "assets/anioly/aniol-natura-detal.jpg": [673, 2048], "assets/fotografia/laka-o-zachodzie.jpg": [2048, 1322], "assets/fotografia/sowa-w-lesie.jpg": [2048, 922], "assets/fotografia/slonce-w-trawach.jpg": [2048, 1596], "assets/fotografia/zimowy-zachod.jpg": [2048, 1542], "assets/fotografia/burzowe-niebo.jpg": [2048, 1542], "assets/fotografia/konwalia.jpg": [1466, 1156], "assets/fotografia/dziupla-drzewa.jpg": [2048, 1536], "assets/fotografia/rosa-na-trawie.jpg": [1350, 1084], "assets/murale/sloneczniki-szkola-tymowa.jpg": [1350, 1800], "assets/murale/sloneczniki-szkola-detal.jpg": [1350, 1800], "assets/murale/sloneczniki-szkola-kwiaty.jpg": [1350, 1800], "assets/murale/sloneczniki-szkola-w-trakcie.jpg": [1350, 1800], "assets/murale/sloneczniki-szkola-z-artystka.jpg": [1350, 1800], "assets/anioly/aniol-jesienny.jpg": [1247, 1800], "assets/anioly/aniol-z-klosami.jpg": [650, 1800], "assets/anioly/aniol-z-dzieckiem.jpg": [935, 999], "assets/anioly/aniol-z-perlami.jpg": [666, 1432], "assets/anioly/aniol-z-ptakiem.jpg": [1800, 1528], "assets/anioly/jasnowlosy-aniol.jpg": [1537, 1800], "assets/anioly/aniol-z-motylem.jpg": [1448, 1800], "assets/anioly/aniol-ognia.jpg": [1214, 1800], "assets/anioly/aniol-w-czerwieni.jpg": [1209, 1800], "assets/anioly/skrzydlata-postac-szkic.jpg": [1355, 1800], "assets/obrazy/portret-w-ciemnych-wlosach.jpg": [902, 1800], "assets/obrazy/portret-w-blekitach.jpg": [1784, 1734], "assets/obrazy/portret-wsrod-lisci.jpg": [1295, 1800], "assets/obrazy/skrzydlata-dziewczynka.jpg": [1522, 1536], "assets/obrazy/portrety-z-motylem.jpg": [1800, 1068], "assets/obrazy/portret-olowkiem.jpg": [1800, 1575], "assets/obrazy/para-ze-skrzydlami.jpg": [1225, 1800], "assets/obrazy/portret-w-zamysleniu.jpg": [1738, 1800]};

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

// Only explicitly related views are grouped. Separate works stay separate.
const groupIndexes = {
  murale: [[14, 15, 16, 17, 18], [0, 1, 2], [3, 4], [5, 6], [7, 8], [9], [10], [11], [12], [13]],
  anioly: [[8], [9], [10], [11], [12], [13], [14], [15], [16], [17], [0, 2], [1], [3, 4, 5], [6, 7]],
  obrazy: [[10], [16], [14], [11], [9], [15], [13], [12], [0], [1], [2], [3], [4], [5], [6], [7], [8]]
};
const viewLabels = {
  'assets/murale/sciezka-detal.jpg': 'Kolorowa ścieżka — detal',
  'assets/murale/sciezka-z-artystka.jpg': 'Kolorowa ścieżka — z „artystką”',
  'assets/murale/orchidee-z-artystka.jpg': 'Orchidee — z artystką',
  'assets/murale/piotr-pan-z-artystka.jpg': 'Piotruś Pan — z artystką'
};
const plurals = new Intl.PluralRules('pl');
function quantity(count, one, few, many) {
  return `${count} ${{ one, few, many }[plurals.select(count)] || many}`;
}
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
}
function photoLink(work, project, cover = false, views = 1) {
  const [src, name] = work;
  const title = viewLabels[src] || name;
  const [width, height] = imageSizes[src];
  return `<a class="collection-photo ${cover ? 'collection-cover' : 'collection-thumbnail'}" href="${escapeHTML(src)}" data-title="${escapeHTML(title)}" data-project="${project}" aria-label="${escapeHTML(title)} — powiększ zdjęcie">
    <img src="${escapeHTML(src)}" alt="${escapeHTML(title)}" width="${width}" height="${height}" loading="lazy" decoding="async">
    ${cover ? `<span class="collection-open" aria-hidden="true">Powiększ ↗</span>${views > 1 ? `<span class="collection-views">${quantity(views, 'ujęcie', 'ujęcia', 'ujęć')}</span>` : ''}` : '<span aria-hidden="true">↗</span>'}
  </a>`;
}

if (category.works) {
  const groups = groupIndexes[type] || category.works.map((_, index) => [index]);
  grid.classList.add('collection-grid');
  grid.innerHTML = groups.map((indexes, index) => {
    const works = indexes.map(i => category.works[i]);
    const [, title, series] = works[0];
    const project = `${type}-${index}`;
    return `<article class="collection-work" aria-labelledby="work-${index}">
      ${photoLink(works[0], project, true, works.length)}
      <div class="collection-heading"><div><p>${escapeHTML(series)}</p><h2 id="work-${index}">${escapeHTML(title)}</h2></div><span class="collection-number" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span></div>
      ${works.length > 1 ? `<div class="collection-thumbnails" role="group" aria-label="Dodatkowe ujęcia: ${escapeHTML(title)}"><p>Dodatkowe ujęcia</p>${works.slice(1).map(work => photoLink(work, project)).join('')}</div>` : ''}
    </article>`;
  }).join('');
  cards = [...grid.querySelectorAll('.collection-photo')];
  document.querySelector('#category-count').textContent = `${quantity(groups.length, 'praca', 'prace', 'prac')} · ${quantity(category.works.length, 'zdjęcie', 'zdjęcia', 'zdjęć')}`;
} else {
  grid.classList.add('video-grid');
  grid.innerHTML = category.videos.map(([src, title], index) => `
    <article class="video-card"><video src="${src}" poster="${src.replace(/\.mp4$/, '.jpg')}" aria-label="${escapeHTML(title)}" controls muted playsinline preload="none"></video><div class="collection-heading"><div><p>Rękodzieło · film</p><h2>${escapeHTML(title)}</h2></div><span class="collection-number" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span></div></article>`).join('');
  const videos = [...grid.querySelectorAll('video')];
  videos.forEach(video => video.addEventListener('play', () => {
    videos.forEach(other => { if (other !== video) other.pause(); });
  }));
  document.querySelector('#category-count').textContent = `${quantity(videos.length, 'praca', 'prace', 'prac')} · ${quantity(videos.length, 'film', 'filmy', 'filmów')}`;
}
document.querySelector('.gallery-hint').textContent = category.works
  ? 'Otwórz zdjęcie, by obejrzeć pracę z bliska. Miniatury pokazują dodatkowe ujęcia tego samego projektu.'
  : 'Włącz film i obejrzyj detale z każdej strony. Możesz powiększyć odtwarzacz na pełny ekran.';

const switcher = document.querySelector('#category-switcher');
const activeCategory = switcher.querySelector('[aria-current="page"]');
if (activeCategory) switcher.scrollLeft = Math.max(0, activeCategory.offsetLeft - switcher.offsetLeft - (switcher.clientWidth - activeCategory.offsetWidth) / 2);
JoanneUI.init({ cards: () => cards });

// Photo collections use the gallery overview; video works keep their navigation.
grid.classList.add('work-stages');
const stages = [...grid.querySelectorAll('.collection-work, .video-card')];
stages.forEach(stage => stage.classList.add('gallery-stage'));
if (category.works) {
  document.body.classList.add('mosaic-view');
  document.querySelector('.gallery-hint').textContent = 'Każdy kafel to osobna praca. Powiększ zdjęcie, aby obejrzeć je z bliska; małe miniatury pokazują dodatkowe ujęcia tego samego projektu.';
  let module;
  stages.forEach((stage, index) => {
    if (index % 3 === 0) {
      module = document.createElement('div');
      module.className = 'gallery-module';
      module.dataset.count = String(Math.min(3, stages.length - index));
      grid.append(module);
    }
    module.append(stage);
  });
} else {
const workNavigation = document.createElement('nav');
workNavigation.className = 'work-navigation';
workNavigation.setAttribute('aria-label', 'Przewijanie prac');
workNavigation.hidden = true;
workNavigation.innerHTML = '<button type="button" class="work-previous" aria-label="Poprzednia praca">↑</button><select class="work-select" aria-label="Wybierz pracę"></select><span class="work-position" role="status" aria-live="polite"></span><button type="button" class="work-next" aria-label="Następna praca">↓</button>';
document.body.append(workNavigation);
const previousWork = workNavigation.querySelector('.work-previous');
const nextWork = workNavigation.querySelector('.work-next');
const workPosition = workNavigation.querySelector('.work-position');
const workSelect = workNavigation.querySelector('.work-select');
stages.forEach((stage, index) => {
  const option = document.createElement('option');
  option.value = String(index);
  option.textContent = stage.querySelector('h2').textContent;
  workSelect.append(option);
});
workSelect.addEventListener('change', () => centerWork(Number(workSelect.value)));
let activeWork = 0;
let scrollFrame = 0;

function viewingCenter() {
  const style = getComputedStyle(document.documentElement);
  const top = parseFloat(style.scrollPaddingTop) || 0;
  const bottom = parseFloat(style.scrollPaddingBottom) || 0;
  return top + (window.innerHeight - top - bottom) / 2;
}
function updateWorkNavigation() {
  scrollFrame = 0;
  const center = viewingCenter();
  const bounds = grid.getBoundingClientRect();
  const overlayOpen = document.body.classList.contains('modal-open') || document.body.classList.contains('menu-open');
  workNavigation.hidden = overlayOpen || bounds.top > center || bounds.bottom < center;
  let closest = Infinity;
  stages.forEach((stage, index) => {
    const rect = stage.getBoundingClientRect();
    const distance = Math.abs(rect.top + rect.height / 2 - center);
    if (distance < closest) { closest = distance; activeWork = index; }
  });
  const label = `${activeWork + 1} / ${stages.length}`;
  if (workPosition.textContent !== label) workPosition.textContent = label;
  if (document.activeElement !== workSelect) workSelect.value = String(activeWork);
  previousWork.disabled = activeWork === 0;
  nextWork.disabled = activeWork === stages.length - 1;
}
function centerWork(index) {
  const stage = stages[index];
  if (!stage) return;
  const rect = stage.getBoundingClientRect();
  window.scrollTo({
    top: window.scrollY + rect.top + rect.height / 2 - viewingCenter(),
    behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
  });
}
previousWork.addEventListener('click', () => centerWork(activeWork - 1));
nextWork.addEventListener('click', () => centerWork(activeWork + 1));
function scheduleWorkNavigation() {
  if (!scrollFrame) scrollFrame = requestAnimationFrame(updateWorkNavigation);
}
window.addEventListener('scroll', scheduleWorkNavigation, { passive: true });
window.addEventListener('resize', scheduleWorkNavigation);
new MutationObserver(scheduleWorkNavigation).observe(document.body, { attributes: true, attributeFilter: ['class'] });
updateWorkNavigation();

}
