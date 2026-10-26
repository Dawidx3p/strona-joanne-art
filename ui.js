/* Shared navigation and gallery behavior for the local demo. */
window.JoanneUI = {
  init({ cards }) {
    const header = document.querySelector('.site-header');
    const menuButton = document.querySelector('.menu-button');
    const navigation = document.querySelector('.nav');
    const lightbox = document.querySelector('.lightbox');
    const image = lightbox.querySelector('img');
    const caption = lightbox.querySelector('.lightbox-caption');
    const closeButton = lightbox.querySelector('.lightbox-close');
    const previous = lightbox.querySelector('.prev');
    const next = lightbox.querySelector('.next');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    const skipLink = document.querySelector('.skip-link');
    const contactButton = document.createElement('a');
    contactButton.className = 'mobile-contact-button';
    contactButton.href = document.querySelector('#kontakt') ? '#kontakt' : 'index.html#kontakt';
    contactButton.innerHTML = 'Porozmawiajmy o projekcie <span aria-hidden="true">↗</span>';
    document.body.append(contactButton);
    document.body.classList.add('has-mobile-contact');
    const contactSection = document.querySelector('.contact');
    if (contactSection) {
      new IntersectionObserver(([entry]) => {
        contactButton.hidden = entry.isIntersecting;
      }, { threshold: 0 }).observe(contactSection);
    }
    let gallery = [];
    let currentIndex = 0;
    let opener;
    let touchStart;

    const details = document.createElement('div');
    details.className = 'lightbox-details';
    const enquiry = document.createElement('a');
    enquiry.className = 'lightbox-enquiry';
    enquiry.textContent = 'Zapytaj o podobną pracę ↗';
    caption.setAttribute('aria-live', 'polite');
    details.append(caption, enquiry);
    lightbox.append(details);
    const hint = document.createElement('p');
    hint.className = 'lightbox-help';
    hint.textContent = 'Przesuń zdjęcie lub użyj strzałek. Esc zamyka podgląd.';
    details.append(hint);

    function setMenu(open, restoreFocus = true) {
      navigation.classList.toggle('open', open);
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? 'Zamknij menu' : 'Otwórz menu');
      document.body.classList.toggle('menu-open', open);
      main.inert = open;
      footer.inert = open;
      skipLink.inert = open;
      if (open) requestAnimationFrame(() => navigation.querySelector('a').focus());
      else if (restoreFocus) menuButton.focus();
    }
    navigation.addEventListener('transitionend', event => {
      if (event.target === navigation && event.propertyName === 'opacity' && navigation.classList.contains('open')) navigation.querySelector('a').focus();
    });
    lightbox.addEventListener('transitionend', event => {
      if (event.target === lightbox && event.propertyName === 'opacity' && lightbox.classList.contains('open')) closeButton.focus();
    });
    menuButton.addEventListener('click', () => setMenu(!navigation.classList.contains('open')));
    navigation.addEventListener('click', event => {
      if (event.target.closest('a') && navigation.classList.contains('open')) setMenu(false, false);
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 720 && navigation.classList.contains('open')) setMenu(false, false);
    });
    function updateHeader() {
      header.classList.toggle('scrolled', window.scrollY > 32);
    }
    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader();

    function showImage(index) {
      currentIndex = (index + gallery.length) % gallery.length;
      const card = gallery[currentIndex];
      const title = card.dataset.title;
      image.src = card.href;
      image.alt = title;
      caption.textContent = `${title} · ${currentIndex + 1} / ${gallery.length}`;
      enquiry.href = `mailto:daridebiec@gmail.com?subject=${encodeURIComponent(`Zapytanie o pracę: ${title}`)}&body=${encodeURIComponent(`Dzień dobry,\n\nZainteresowała mnie praca „${title}” z portfolio Joanne-Art. Chcę porozmawiać o podobnej realizacji.\n\nMój pomysł:\nMiejscowość i przybliżone wymiary:\nPlanowany termin:\n\nPozdrawiam`)}`;
      previous.hidden = next.hidden = gallery.length < 2;
      lightbox.classList.toggle('single-image', gallery.length < 2);
      hint.textContent = gallery.length < 2 ? 'Esc zamyka podgląd.' : 'Przesuń zdjęcie lub użyj strzałek. Esc zamyka podgląd.';
    }
    function closeLightbox() {
      lightbox.classList.remove('open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');
      [header, main, footer, skipLink].forEach(element => { element.inert = false; });
      image.removeAttribute('src');
      touchStart = undefined;
      opener?.focus();
    }
    cards().forEach(card => card.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      gallery = cards().filter(item => !card.dataset.project || item.dataset.project === card.dataset.project);
      if (!gallery.length) return;
      opener = card;
      showImage(gallery.indexOf(card));
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');
      [header, main, footer, skipLink].forEach(element => { element.inert = true; });
      requestAnimationFrame(() => closeButton.focus());
    }));
    closeButton.addEventListener('click', closeLightbox);
    previous.addEventListener('click', () => showImage(currentIndex - 1));
    next.addEventListener('click', () => showImage(currentIndex + 1));
    lightbox.addEventListener('click', event => {
      if (event.target === lightbox) closeLightbox();
    });
    image.addEventListener('touchstart', event => {
      const touch = event.touches[0];
      touchStart = event.touches.length === 1 ? { x: touch.clientX, y: touch.clientY } : undefined;
    }, { passive: true });
    image.addEventListener('touchend', event => {
      if (!touchStart || !event.changedTouches.length) return;
      const touch = event.changedTouches[0];
      const dx = touch.clientX - touchStart.x;
      const dy = touch.clientY - touchStart.y;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) showImage(currentIndex + (dx < 0 ? 1 : -1));
      touchStart = undefined;
    }, { passive: true });
    image.addEventListener('touchcancel', () => { touchStart = undefined; });
    document.addEventListener('keydown', event => {
      const modalOpen = lightbox.classList.contains('open');
      const menuOpen = navigation.classList.contains('open');
      if (event.key === 'Escape') {
        if (modalOpen) closeLightbox();
        else if (menuOpen) setMenu(false);
      }
      if (modalOpen && ['ArrowLeft', 'ArrowRight'].includes(event.key)) {
        event.preventDefault();
        showImage(currentIndex + (event.key === 'ArrowRight' ? 1 : -1));
      }
      if (event.key === 'Tab' && (modalOpen || menuOpen)) {
        const container = modalOpen ? lightbox : header;
        const focusable = [...container.querySelectorAll('a[href], button')].filter(element => !element.hidden && element.getClientRects().length);
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!container.contains(document.activeElement)) {
          event.preventDefault(); (event.shiftKey ? last : first).focus();
        } else if (event.shiftKey && document.activeElement === first) {
          event.preventDefault(); last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault(); first.focus();
        }
      }
    });
    document.querySelectorAll('[data-copy-email]').forEach(button => {
      button.addEventListener('click', async () => {
        const status = button.closest('.contact').querySelector('.copy-status');
        try {
          await navigator.clipboard.writeText(button.dataset.copyEmail);
          status.textContent = 'Adres e-mail skopiowany.';
        } catch {
          status.textContent = `Skopiuj adres ręcznie: ${button.dataset.copyEmail}`;
        }
      });
    });
  }
};
