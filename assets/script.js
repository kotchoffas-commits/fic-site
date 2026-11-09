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
// ============================================================
// SYSTÈME DE TRADUCTION (FR / EN)
// ============================================================
const translations = {
  fr: {
    logo: "Foire<br>Internationale<br>des Collines",
    nav_home: "Accueil",
    nav_fic: "La FIC",
    nav_prog: "Programme",
    nav_expo: "Exposants",
    nav_collines: "Les Collines",
    nav_actu: "Actualités",
    nav_part: "Partenaires",
    nav_contact: "Contact",
    hero_title: "La richesse des Collines,<em>à portée de main.</em>",
    hero_lead: "La FIC est un espace de valorisation, de connexion et de projection pour le département des Collines. Exposer, découvrir, échanger et entreprendre.",
    btn_prog: "Découvrir le programme",
    section_fic_title: "Bien plus qu'une foire.",
    section_fic_text: "Un espace de valorisation, de connexion et de projection pour le département des Collines. Découvrez notre mission et nos objectifs.",
    section_actu_title: "La vie de la FIC.",
    btn_actu: "Toutes les actualités",
    section_part_title: "Ils rendent la FIC possible.",
    footer_desc: "Une initiative dédiée à la valorisation des richesses, savoir-faire et opportunités du département des Collines. Première édition du 20 décembre 2026 au 2 janvier 2027.",
    footer_rights: "© 2026 Foire Internationale des Collines. Tous droits réservés.",
    footer_visitors: "Visiteurs :"
  },
  en: {
    logo: "International<br>Fair of the<br>Hills",
    nav_home: "Home",
    nav_fic: "About FIC",
    nav_prog: "Program",
    nav_expo: "Exhibitors",
    nav_collines: "The Hills",
    nav_actu: "News",
    nav_part: "Partners",
    nav_contact: "Contact",
    hero_title: "The wealth of the Hills,<em>at your fingertips.</em>",
    hero_lead: "The FIC is a space for promotion, connection, and projection for the Collines department. Exhibit, discover, exchange, and undertake.",
    btn_prog: "Discover the program",
    section_fic_title: "More than just a fair.",
    section_fic_text: "A space for promotion, connection, and projection for the Collines department. Discover our mission and objectives.",
    section_actu_title: "Life at FIC.",
    btn_actu: "All news",
    section_part_title: "They make FIC possible.",
    footer_desc: "An initiative dedicated to promoting the wealth, know-how, and opportunities of the Collines department. First edition from December 20, 2026, to January 2, 2027.",
    footer_rights: "© 2026 International Fair of the Hills. All rights reserved.",
    footer_visitors: "Visitors:"
  }
};

function setLanguage(lang) {
  // Sauvegarde la langue choisie dans le navigateur
  localStorage.setItem('fic_lang', lang);
  
  // Met à jour l'apparence des boutons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Traduit tous les éléments ayant l'attribut data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      // Si le texte contient des balises HTML (comme <br> ou <em>), on utilise innerHTML
      if (translations[lang][key].includes('<')) {
        el.innerHTML = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });
  
  // Met à jour la langue de la page
  document.documentElement.lang = lang;
}

// Applique la langue sauvegardée au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('fic_lang') || 'fr';
  setLanguage(savedLang);
});