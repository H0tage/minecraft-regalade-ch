const galleries = [
  {
    title: "Construire, automatiser, relier",
    source: "https://modrinth.com/mod/create-deco",
    sourceName: "Create Deco & Create Big Cannons",
    images: [
      ["https://cdn.modrinth.com/data/sMvUb4Rb/images/58509c01dadcf6e3d5803a5c55bca64f9d1b61cd_350.webp", "Intérieur d'usine — Create Deco", "https://modrinth.com/mod/create-deco"],
      ["https://cdn.modrinth.com/data/sMvUb4Rb/images/2aac2463a5b5a734d6168b4b82b7b476cdebbc44_350.webp", "Conteneurs et logistique — Create Deco", "https://modrinth.com/mod/create-deco"],
      ["https://cdn.modrinth.com/data/sMvUb4Rb/images/ee4b157259d55e63ad672155e859f9320c10484b_350.webp", "Bâtiments industriels — Create Deco", "https://modrinth.com/mod/create-deco"],
      ["https://cdn.modrinth.com/data/GWp4jCJj/images/2d81addfc6c1c2fb5c3e08e60725f824cb328bb1_350.webp", "Véhicule à canons automatiques — Create Big Cannons", "https://modrinth.com/mod/create-big-cannons"]
    ]
  },
  {
    title: "Explorer un monde vivant",
    source: "https://modrinth.com/mod/sgjourney",
    sourceName: "Stargate Journey",
    images: [
      ["https://cdn.modrinth.com/data/qlc8dxM6/images/4aad03c48768aa1818878dbcfc0d5808c19f5b80_350.webp", "Porte enterrée — Stargate Journey", "https://modrinth.com/mod/sgjourney"],
      ["https://cdn.modrinth.com/data/qlc8dxM6/images/5b9e55329ab2c9468edc526fbf717e1085b9f3bb_350.webp", "Porte découverte — Stargate Journey", "https://modrinth.com/mod/sgjourney"],
      ["https://cdn.modrinth.com/data/qlc8dxM6/images/f0907c9b0779e8b613d3ebf3571cf14ced51b490_350.webp", "Pyramide d'Abydos — Stargate Journey", "https://modrinth.com/mod/sgjourney"],
      ["https://cdn.modrinth.com/data/qlc8dxM6/images/4cbcee3531cfb4c1a7c254a747cc416cbbd10cc7_350.webp", "Porte de Pégase — Stargate Journey", "https://modrinth.com/mod/sgjourney"]
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
    sourceName: "Simple Voice Chat, Exposure & Etched",
    images: [
      ["https://cdn.modrinth.com/data/9eGKb6K1/images/972b1b3ddd3d7a3305b018ac73b960378a034b34_350.webp", "Créer un groupe — Simple Voice Chat", "https://modrinth.com/mod/simple-voice-chat"],
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
  element.innerHTML = gallery.images.map(([image, alt, link]) => `<figure><a href="${link}" target="_blank" rel="noreferrer"><img src="${image}" alt="${alt}" loading="lazy"></a><figcaption>${alt}</figcaption></figure>`).join('') + `<p class="image-credit">Visuels issus des pages officielles de <a href="${gallery.source}" target="_blank" rel="noreferrer">${gallery.sourceName}</a>.</p>`;
  chapter.append(element);
}
