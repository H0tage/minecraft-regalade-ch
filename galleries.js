const galleries = [
  {
    title: "Construire, automatiser, relier",
    source: "https://modrinth.com/mod/create-deco",
    sourceName: "Create Deco & Create Big Cannons",
    images: [
      ["https://cdn.modrinth.com/data/sMvUb4Rb/images/59b0207cf1a83a05719045e7ccb014c365c9edf7.png", "Intérieur d'usine — Create Deco", "https://modrinth.com/mod/create-deco"],
      ["https://media.forgecdn.net/attachments/794/769/64a92e01eaee601cba08f7d3ebbdd72f8d43bd2c.png", "Logistique et automatisation Create"],
      ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQufQGiUAgwmFpoH_OG06ng4egiLjQwwoa7OIANXhAn4CpJV06rKecKlLD&s=10", "Construction industrielle Create"],
      ["https://cdn.modrinth.com/data/GWp4jCJj/images/ebb62eb590e7d007681687bd23bc22ba03ae9ddc.png", "Véhicule à canons automatiques — Create Big Cannons", "https://modrinth.com/mod/create-big-cannons"]
    ]
  },
  {
    title: "Explorer un monde vivant",
    source: "https://modrinth.com/mod/yungs-better-dungeons",
    sourceName: "YUNG's Better Dungeons, Towns and Towers & Stargate Journey",
    images: [
      ["https://cdn.modrinth.com/data/o1C1Dkj5/images/430a7b3df92615ef65e3e4d948f47d30c08a301d.png", "Forteresse des morts-vivants — YUNG's Better Dungeons", "https://modrinth.com/mod/yungs-better-dungeons"],
      ["https://media.forgecdn.net/attachments/1344/480/2025-10-02_16-36-13-png.png", "Catacombes et exploration"],
      ["https://cdn.modrinth.com/data/DjLobEOy/images/ff5e841128a3d5a957386364239bb264e594009d.png", "Village généré — Towns and Towers", "https://modrinth.com/mod/towns-and-towers"],
      ["https://cdn.modrinth.com/data/qlc8dxM6/images/4e2642475221a20805b8bc6752107355d9a4e4a5.png", "Porte des étoiles — Stargate Journey"]
    ]
  },
  {
    title: "Donner vie à tout ça",
    source: "https://modrinth.com/mod/farmers-delight",
    sourceName: "Farmer's Delight",
    images: [
      ["https://cdn.modrinth.com/data/R2OftAxM/images/abbdd61b7ad127fdf039742363f923507cd6ddef.png", "Cuisine et ustensiles — Farmer's Delight", "https://modrinth.com/mod/farmers-delight"],
      ["https://cdn.modrinth.com/data/R2OftAxM/images/6f52edff9b1932f6c65536a65f6bb74f25ae2740.png", "Paille, corde et compost — Farmer's Delight", "https://modrinth.com/mod/farmers-delight"],
      ["https://cdn.modrinth.com/data/R2OftAxM/images/814cbbb6eefd8f70af0c6f5137db8ff871ab584f.png", "Un grand festin — Farmer's Delight", "https://modrinth.com/mod/farmers-delight"],
      ["https://cdn.modrinth.com/data/R2OftAxM/images/27f7cf333fb35a3f2b3d7e2a489ae5280fc16bb8.png", "Décoration cosy — Farmer's Delight", "https://modrinth.com/mod/farmers-delight"]
    ]
  },
  {
    title: "Jouer avec les autres, à son rythme",
    source: "https://modrinth.com/mod/simple-voice-chat",
    sourceName: "Collector's Album, Simple Voice Chat, Exposure & Etched",
    images: [
      ["https://media.forgecdn.net/attachments/1708/698/2026-05-31_20-13-43-png.png", "Collector's Album"],
      ["https://cdn.modrinth.com/data/9eGKb6K1/images/975131df603729941d6549a8e78fed1509bf0518.png", "Discussion de proximité — Simple Voice Chat", "https://modrinth.com/mod/simple-voice-chat"],
      ["https://cdn.modrinth.com/data/hB899VmG/images/5a84f1c7734227560999184ca8e6ab4dec8f7b15.png", "Maison de village — Exposure", "https://modrinth.com/mod/exposure"],
      ["https://cdn.modrinth.com/data/zi3Fnfmc/images/795340620699a1d0dd46cbda6518a4cc5acf24f3.png", "Le barde — Etched", "https://modrinth.com/mod/etched"]
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
