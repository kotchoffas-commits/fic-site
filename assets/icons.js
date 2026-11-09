/* ============================================================
   FIC â€” SystÃ¨me d'icÃ´nes SVG professionnel
   Usage : <div class="ico" data-icon="building"></div>
   ============================================================ */

const FIC_ICONS = {
  /* Concept & valeurs */
  building:   '<path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6"/>',
  search:     '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
  exchange:   '<path d="M7 10 3 14l4 4M3 14h13M17 4l4 4-4 4M21 8H8"/>',
  link:       '<path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/>',
  rocket:     '<path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c1.3-1.4 1.3-3.6 0-5-1.4-1.3-3.6-1.3-5 0z"/><path d="m12 15-3-3c1.5-5 6-10 12-10 0 6-5 10.5-10 12z"/><circle cx="15" cy="9" r="1.2"/>',
  globe:      '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
  lightbulb:  '<path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/>',
  hands:      '<path d="M11 14 7 10a2 2 0 0 1 3-3l2 2 2-2a2 2 0 0 1 3 3l-4 4"/><path d="M5 20h14M5 20v-4M19 20v-4"/>',
  leaf:       '<path d="M11 20A7 7 0 0 1 4 13c0-6 6-11 16-11 0 10-5 16-11 16-2 0-4-1-4-1"/><path d="M2 22c3-3 7-5 12-5"/>',
  star:       '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',

  /* Contact */
  pin:        '<path d="M12 22s-7-6.5-7-13a7 7 0 0 1 14 0c0 6.5-7 13-7 13z"/><circle cx="12" cy="9" r="2.5"/>',
  calendar:   '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/>',
  mail:       '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  phone:      '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>',
  target:     '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  check:      '<path d="M4 12l5 5L20 6"/>',
  arrow:      '<path d="M5 12h14M13 6l6 6-6 6"/>',

  /* FiliÃ¨res & Made in Collines */
  wheat:      '<path d="M3 22 12 3l9 19M7 14h10M8 8h8"/>',
  shirt:      '<path d="M8 3 4 5l2 5 2-1v12h8V9l2 1 2-5-4-2-4 2-4-2z"/>',
  tools:      '<path d="M14 7 3 18l3 3 11-11"/><path d="m14 7 3-3 3 3-3 3M18 4l3 3-1.5 1.5L16.5 5.5"/>',
  drop:       '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
  fork:       '<path d="M4 3v7a3 3 0 0 0 6 0V3M7 3v18M17 3v18M14 3h6l-1 7h-4l-1-7z"/>',
  palette:    '<circle cx="12" cy="12" r="9"/><circle cx="8" cy="10" r="1"/><circle cx="12" cy="7" r="1"/><circle cx="16" cy="10" r="1"/><path d="M12 21a3 3 0 0 1-3-3 2 2 0 0 1 2-2h2a3 3 0 0 1 0 6z"/>',
  vase:       '<path d="M8 3h8l-1 6c2 2 2 8 0 12H9c-2-4-2-10 0-12L8 3z"/>',
  bag:        '<path d="M6 8h12l-1 13H7L6 8z"/><path d="M9 8V5a3 3 0 0 1 6 0v3"/>',

  /* Tourisme */
  compass:    '<circle cx="12" cy="12" r="9"/><polygon points="16 8 14 14 8 16 10 10 16 8"/>',
  mountain:   '<path d="m3 20 6-12 4 7 3-4 5 9H3z"/>',
  church:     '<path d="M12 2v4M9 5h6M5 22V12l7-5 7 5v10M10 22v-4a2 2 0 0 1 4 0v4"/>',
  crown:      '<path d="M3 18h18l-2-9-4 4-3-6-3 6-4-4-2 9z"/>',
  image:      '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5-11 11"/>',
  drum:       '<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
  hiking:     '<circle cx="13" cy="4" r="2"/><path d="m4 22 5-8 4 3 3-6 4 5M8 22l3-6"/>',
  map:        '<path d="M3 6v15l6-3 6 3 6-3V3l-6 3-6-3-6 3z"/><path d="M9 3v15M15 6v15"/>',

  /* Divers */
  briefcase:  '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18"/>',
  users:      '<circle cx="9" cy="8" r="3.5"/><path d="M2 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2"/><circle cx="18" cy="8" r="2.5"/><path d="M22 21v-2a3.5 3.5 0 0 0-2-3.2"/>'
};

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-icon]').forEach(el => {
    const name = el.getAttribute('data-icon');
    const path = FIC_ICONS[name];
    if (path) {
      el.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
        width="28" height="28">${path}</svg>`;
    }
  });
});