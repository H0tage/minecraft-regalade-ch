const galleries = [
  {
    title: "Construire, automatiser, relier",
    source: "https://modrinth.com/mod/create-deco",
    sourceName: "Create Deco & Create Big Cannons",
    images: [
      ["https://cdn.modrinth.com/data/sMvUb4Rb/images/58509c01dadcf6e3d5803a5c55bca64f9d1b61cd_350.webp", "Intérieur d'usine — Create Deco", "https://modrinth.com/mod/create-deco"],
      ["https://media.forgecdn.net/attachments/794/769/64a92e01eaee601cba08f7d3ebbdd72f8d43bd2c.png", "Logistique et automatisation Create"],
      ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQufQGiUAgwmFpoH_OG06ng4egiLjQwwoa7OIANXhAn4CpJV06rKecKlLD&s=10", "Construction industrielle Create"],
      ["https://cdn.modrinth.com/data/GWp4jCJj/images/2d81addfc6c1c2fb5c3e08e60725f824cb328bb1_350.webp", "Véhicule à canons automatiques — Create Big Cannons", "https://modrinth.com/mod/create-big-cannons"]
    ]
  },
  {
    title: "Explorer un monde vivant",
    source: "https://modrinth.com/mod/yungs-better-dungeons",
    sourceName: "YUNG's Better Dungeons, Towns and Towers & Stargate Journey",
    images: [
      ["https://cdn.modrinth.com/data/o1C1Dkj5/images/1a3ee86e7269bd3703d8ece03cf897b70d2188df_350.webp", "Forteresse des morts-vivants — YUNG's Better Dungeons", "https://modrinth.com/mod/yungs-better-dungeons"],
      ["https://media.forgecdn.net/attachments/1344/480/2025-10-02_16-36-13-png.png", "Catacombes et exploration"],
      ["https://cdn.modrinth.com/data/DjLobEOy/images/48a216a3f454dd61c929bd4f73fb2f14355d3ea5_350.webp", "Village généré — Towns and Towers", "https://modrinth.com/mod/towns-and-towers"],
      ["https://cdn.modrinth.com/data/qlc8dxM6/images/4e2642475221a20805b8bc6752107355d9a4e4a5.png", "Porte des étoiles — Stargate Journey"]
    ]
  },
  {
    title: "Donner vie à tout ça",
    source: "https://modrinth.com/mod/farmers-delight",
    sourceName: "Farmer's Delight",
    images: [
      ["https://cdn.modrinth.com/data/R2OftAxM/images/a5a80d8833b40a7cc5c2baa06ecc7960c819ac74_350.webp", "Cuisine et ustensiles — Farmer's Delight", "https://modrinth.com/mod/farmers-delight"],
      ["https://cdn.modrinth.com/data/R2OftAxM/images/ae533ae3e35b41e9063d3edba36b5b18ac6f0f25_350.webp", "Paille, corde et compost — Farmer's Delight", "https://modrinth.com/mod/farmers-delight"],
      ["https://cdn.modrinth.com/data/R2OftAxM/images/c6eeaef40ec38d8cbb78fe8ce4307ccced9e5aca_350.webp", "Un grand festin — Farmer's Delight", "https://modrinth.com/mod/farmers-delight"],
      ["https://cdn.modrinth.com/data/R2OftAxM/images/f8c229496ddff8398757c2d7e81a9e73fed42efb_350.webp", "Décoration cosy — Farmer's Delight", "https://modrinth.com/mod/farmers-delight"]
    ]
  },
  {
    title: "Jouer avec les autres, à son rythme",
    source: "https://modrinth.com/mod/simple-voice-chat",
    sourceName: "Collector's Album, Simple Voice Chat, Exposure & Etched",
    images: [
      ["https://media.forgecdn.net/attachments/1708/698/2026-05-31_20-13-43-png.png", "Collector's Album"],
      ["https://cdn.modrinth.com/data/9eGKb6K1/images/95490c1c7cf1be0d2981476efbc6acfe79c8b58b_350.webp", "Discussion de proximité — Simple Voice Chat", "https://modrinth.com/mod/simple-voice-chat"],
      ["https://cdn.modrinth.com/data/hB899VmG/images/5a84f1c7734227560999184ca8e6ab4dec8f7b15.png", "Maison de village — Exposure", "https://modrinth.com/mod/exposure"],
      ["https://cdn.modrinth.com/data/zi3Fnfmc/images/15d486da752dd0cca6bcfbc578aa065b7786c1a3_350.webp", "Le barde — Etched", "https://modrinth.com/mod/etched"]
    ]
  }
];
for (const gallery of galleries) {
  const chapter = [...document.querySelectorAll('#accueil .presentation-chapter')].find(section => section.querySelector('h2')?.textContent.trim() === gallery.title);
  if (!chapter) continue;
  const element = document.createElement('div');
  element.className = 'chapter-gallery';
  element.innerHTML = gallery.images.map(([image, alt]) => `<figure><button class="gallery-trigger" type="button" data-image="${image}" data-alt="${alt}" aria-label="Afficher ${alt} en grand"><img src="${image}" alt="${alt}" loading="lazy"></button></figure>`).join('');
  chapter.append(element);
}

const lightbox = document.createElement('div');
lightbox.className = 'image-lightbox';
lightbox.setAttribute('aria-hidden', 'true');
lightbox.innerHTML = '<button class="image-lightbox-close" type="button" aria-label="Fermer l’image">×</button><img class="image-lightbox-image" alt="">';
document.body.append(lightbox);

const lightboxImage = lightbox.querySelector('.image-lightbox-image');
let lastTrigger = null;
function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImage.removeAttribute('src');
  lastTrigger?.focus();
}
document.addEventListener('click', event => {
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
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
});
