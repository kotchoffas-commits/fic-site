/* ============================================================
   FIC 2026 — Interactions
   ============================================================ */

// -------- MENU PLEIN ÉCRAN --------
const body = document.body;
const menuBtn = document.getElementById('menuBtn');
const menuClose = document.getElementById('menuClose');

function openMenu()  { body.classList.add('menu-open'); }
function closeMenu() { body.classList.remove('menu-open'); }

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    body.classList.contains('menu-open') ? closeMenu() : openMenu();
  });
}
if (menuClose) {
  menuClose.addEventListener('click', closeMenu);
}

document.querySelectorAll('.menu-nav a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && body.classList.contains('menu-open')) closeMenu();
});

// -------- HEADER AU SCROLL --------
const header = document.querySelector('header');
if (header) {
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// -------- RÉVÉLATION AU SCROLL --------
const reveals = document.querySelectorAll('.reveal');
if (reveals.length && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -80px 0px' });
  reveals.forEach(el => io.observe(el));
} else {
  reveals.forEach(el => el.classList.add('visible'));
}

// -------- COUNTDOWN --------
const cd = document.getElementById('countdown');
if (cd) {
  const target = new Date('2026-12-20T09:00:00+01:00').getTime();
  const render = () => {
    const diff = target - Date.now();
    if (diff <= 0) {
      cd.innerHTML = '<div class="cd-box" style="flex:1"><strong>Ouvert</strong><small>La FIC est en cours</small></div>';
      return;
    }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    cd.innerHTML = `
      <div class="cd-box"><strong>${d}</strong><small>Jours</small></div>
      <div class="cd-box"><strong>${h}</strong><small>Heures</small></div>
      <div class="cd-box"><strong>${m}</strong><small>Minutes</small></div>
      <div class="cd-box"><strong>${s}</strong><small>Secondes</small></div>
    `;
  };
  render();
  setInterval(render, 1000);
}

// -------- COMPTEUR DE VISITEURS --------
const compteurEl = document.getElementById('compteur-visiteurs');
if (compteurEl) {
  fetch('compteur.php', { cache: 'no-store' })
    .then(r => {
      if (!r.ok) throw new Error();
      return r.json();
    })
    .then(data => {
      compteurEl.textContent = Number(data.visiteurs).toLocaleString('fr-FR');
    })
    .catch(() => {
      // Le fameux tiret qui s'affichait mal est corrigé ici
      compteurEl.textContent = '-';
    });
}

// -------- MODAL IMAGE (LIGHTBOX AVEC NAVIGATION) --------
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeModalBtn = document.getElementById('closeModal');
const prevBtn = document.getElementById('prevImage');
const nextBtn = document.getElementById('nextImage');
const counter = document.getElementById('imageCounter');

let currentImages = [];
let currentIndex = 0;

const allNewsImages = document.querySelectorAll('.news-card-single-img, .news-card-album img, .news-card-images img');

if (modal && modalImg) {
  
  const updateModalImage = () => {
    modalImg.src = currentImages[currentIndex];
    if (counter) {
      counter.textContent = `${currentIndex + 1} / ${currentImages.length}`;
    }
  };

  const showImage = (index) => {
    currentIndex = index;
    updateModalImage();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  const showNext = () => {
    if (currentImages.length > 1) {
      currentIndex = (currentIndex + 1) % currentImages.length;
      updateModalImage();
    }
  };

  const showPrev = () => {
    if (currentImages.length > 1) {
      currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
      updateModalImage();
    }
  };

  allNewsImages.forEach((img) => {
    img.addEventListener('click', function() {
      const parentCard = this.closest('.news-card');
      if (parentCard) {
        const imagesInCard = parentCard.querySelectorAll('img');
        currentImages = Array.from(imagesInCard).map(i => i.src);
        currentIndex = Array.from(imagesInCard).indexOf(this);
      } else {
        currentImages = [this.src];
        currentIndex = 0;
      }
      showImage(currentIndex);
    });
  });

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (nextBtn) nextBtn.addEventListener('click', showNext);
  if (prevBtn) prevBtn.addEventListener('click', showPrev);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (modal.classList.contains('active')) {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    }
  });
}

// -------- BADGE RECENT (MOINS DE 7 JOURS) --------
document.addEventListener('DOMContentLoaded', () => {
    const maintenant = new Date();
    const cartes = document.querySelectorAll('.news-card[data-date]');
    
    cartes.forEach(carte => {
        const dateStr = carte.getAttribute('data-date');
        if (!dateStr) return;
        
        const datePub = new Date(dateStr);
        const differenceEnMs = maintenant - datePub;
        const differenceEnJours = differenceEnMs / (1000 * 60 * 60 * 24);
        
        // Si la publication a moins de 7 jours
        if (differenceEnJours <= 7 && differenceEnJours >= 0) {
            carte.classList.add('pinned');
        }
    });
});

// -------- FORMULAIRE (démo) --------
function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const nom = form.nom?.value || '';
  alert(`Merci ${nom}.\n\nVotre message a bien été enregistré.\nL'équipe FIC vous recontactera rapidement.`);
  form.reset();
}