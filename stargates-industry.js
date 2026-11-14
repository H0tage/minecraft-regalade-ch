(() => {
  const root = document.querySelector('#tutorial-stargates .sgx-shell');
  const guided = root?.querySelector('#sgx-guide');
  if (!guided || guided.dataset.industryUpgrade === 'ready') return;

  const A = 'assets/stargate/';
  const icon = (file, alt = '') => `<img src="${A}${file}" alt="${alt}" loading="lazy">`;
  const checkpoint = (title, text) => `<p class="sgu-checkpoint"><b>${title}</b><span>${text}</span></p>`;
  const step = (number, phase, kicker, title, body) => `
    <section class="sg-step sgu-step" id="sgu-step-${String(number).padStart(2, '0')}" data-phase="${phase}">
      <div class="sgu-step-title"><span aria-hidden="true">${String(number).padStart(2, '0')}</span><div><p class="sgx-eyebrow">${kicker}</p><h2>${title}</h2></div></div>
      ${body}
    </section>`;

  guided.innerHTML = `
    <header class="sgu-hero">
      <p class="sgx-eyebrow">De l’atelier expérimental au premier voyage</p>
      <h1>Construire sa première porte</h1>
      <p>Ce parcours va des matières premières au premier voyage : prototype, production en série, composants, montage et alimentation.</p>
      <p class="sgu-version">Première installation : 21 fournées · 168 Cryostabilized Naquadah Crystals · 64 Naquadah Plates</p>
      <div class="sgu-project-line"><b>Prototype</b><i>→</i><b>Raffinerie</b><i>→</i><b>Naquadah Plates et Crystals</b><i>→</i><b>24 blocs</b><i>→</i><b>Énergie</b><i>→</i><strong>Premier voyage</strong></div>
    </header>

    ${step(1, 'Préparer le projet', 'Le résultat final', 'Préparer l’installation complète', `
      <p class="sgu-copy">L’installation comprend une <strong>Classic Stargate formée</strong>, un <strong>DHD</strong>, une <strong>Basic Interface</strong> et une alimentation FE externe.</p>
      <div class="sgu-target-grid">
        <article><b>Structure</b><span>1 Classic Stargate Base Block + 14 Classic Stargate Ring Blocks + 9 Classic Stargate Chevron Blocks.</span></article>
        <article><b>Commande</b><span>1 DHD placé à portée de la porte.</span></article>
        <article><b>Énergie</b><span>1 Basic Interface reliée aux accumulateurs ou à la centrale.</span></article>
        <article><b>Destination</b><span>Une adresse valide appartenant à une autre porte.</span></article>
      </div>
      <div class="sgu-readiness">
        <h3>Prérequis</h3>
        <div><span>Nether</span><span>Blaze Burner, Blaze Powder, quartz et Cinder Flour</span></div>
        <div><span>End</span><span>Une tête de dragon pour l’activation finale du Naquadah</span></div>
        <div><span>Create</span><span>Brass, Precision Mechanisms, Mechanical Crafters et assemblage séquencé</span></div>
        <div><span>Électricité</span><span>Réseau FE pour les machines et au moins 6,4 MFE disponibles pour un appel complet</span></div>
      </div>`)}

    ${step(2, 'Préparer le projet', 'Carte de l’usine', 'Comprendre la chaîne complète', `
      <div class="sgu-factory-map" role="img" aria-label="Carte de production de la porte des étoiles">
        <section class="sgu-map-stage">
          <div class="sgu-map-stage-title"><span>1</span><div><b>Produire les trois précurseurs</b><small>Quantités pour une fournée</small></div></div>
          <div class="sgu-map-precursors">
            <article><div class="sgu-map-inputs"><span>16 Amethyst Powder</span><span>4 Gold Ingots</span><span>4 Zinc Ingots</span><span>1 000 mB Awkward Potion</span></div><div class="sgu-map-machine">Mechanical Mixer · Basin · Heated Blaze Burner</div><i>↓</i><div class="sgu-map-material">${icon('crystalline-matrix.png', 'Crystalline Matrix')}<b>4 Crystalline Matrices</b></div></article>
            <article><div class="sgu-map-inputs"><span>8 Powdered Obsidian</span><span>8 Cinder Flour</span><span>250 mB Lava</span></div><div class="sgu-map-machine">Mechanical Press · Basin · Heated Blaze Burner</div><i>↓</i><div class="sgu-map-material">${icon('refractory-briquette.png', 'Refractory Briquette')}<b>4 Refractory Briquettes</b></div></article>
            <article><div class="sgu-map-inputs"><span>8 Blaze Powder</span><span>8 Redstone Dust</span><span>4 Glowstone Dust</span></div><div class="sgu-map-machine">Mechanical Mixer · Basin · sans chaleur</div><i>↓</i><div class="sgu-map-material">${icon('catalytic-flux.png', 'Catalytic Flux')}<b>8 Catalytic Flux</b><small>4 pour la synthèse · 4 réservés</small></div></article>
          </div>
        </section>

        <div class="sgu-map-merge"><i>↓</i><span>Les trois branches convergent</span><i>↓</i></div>

        <section class="sgu-map-stage">
          <div class="sgu-map-stage-title"><span>2</span><div><b>Synthétiser le Naquadah brut</b><small>Mechanical Mixer surchauffé</small></div></div>
          <div class="sgu-map-equation"><span>4 Crystalline Matrices</span><i>+</i><span>4 Refractory Briquettes</span><i>+</i><span>4 Catalytic Flux</span><i>+</i><span>250 mB Lava</span><i>→</i><strong>Mechanical Mixer<br>Superheated Blaze Burner</strong><i>→</i><span class="output">${icon('unstable-slag.png', 'Unstable Naquadah Slag')}4 Unstable Naquadah Slag</span></div>
        </section>

        <div class="sgu-map-merge"><i>↓</i><span>Raffinage</span><i>↓</i></div>

        <section class="sgu-map-stage">
          <div class="sgu-map-stage-title"><span>3</span><div><b>Raffiner les matériaux intermédiaires</b><small>Chaque machine reçoit la matière produite par la précédente</small></div></div>
          <div class="sgu-refinery-map">
            <div class="sgu-refinery-row"><span class="material">${icon('unstable-slag.png', 'Unstable Naquadah Slag')}<b>4 Unstable Naquadah Slag</b></span><i>→</i><span class="machine">Mechanical Press</span><i>→</i><span class="material">${icon('raw-briquette.png', 'Raw Naquadah Briquette')}<b>4 Raw Naquadah Briquettes</b></span><i>→</i><span class="machine">Bulk Blasting</span><i>→</i><span class="material">${icon('calcined-naquadah.png', 'Calcined Naquadah')}<b>4 Calcined Naquadah</b></span></div>
            <div class="sgu-refinery-continue"><i>↓</i></div>
            <div class="sgu-refinery-row"><span class="material">${icon('calcined-naquadah.png', 'Calcined Naquadah')}<b>4 Calcined Naquadah</b></span><i>→</i><span class="machine">Crushing Wheels</span><i>→</i><span class="material doubled">${icon('impure-powder.png', 'Impure Naquadah Dust')}<b>8 Impure Naquadah Dust</b><small>La quantité double ici</small></span><i>→</i><span class="machine">Bulk Washing</span><i>→</i><span class="material">${icon('purified-granules.png', 'Purified Naquadah Granule')}<b>8 Purified Naquadah Granules</b></span></div>
            <div class="sgu-refinery-continue"><i>↓</i></div>
            <div class="sgu-refinery-row final"><span class="material">${icon('purified-granules.png', 'Purified Naquadah Granule')}<b>8 Purified Naquadah Granules</b></span><i>→</i><span class="machine">Bulk Freezing</span><i>→</i><span class="material output">${icon('cryostabilized-crystal.png', 'Cryostabilized Naquadah Crystal')}<b>8 Cryostabilized Naquadah Crystals</b></span></div>
          </div>
        </section>

        <div class="sgu-map-batch-total"><span>1 fournée</span><i>→</i><b>8 Cryostabilized Naquadah Crystals</b><i>× 21</i><strong>168 Cryostabilized Naquadah Crystals</strong></div>

        <div class="sgu-map-stage-title split"><span>4</span><div><b>Répartir la production</b><small>Trois stocks distincts avant toute transformation</small></div></div>
        <div class="sgu-map-split">
          <div><b>128 Crystals</b><i>↓</i><span>Métallurgie</span><i>↓</i><strong>64 Naquadah Plates</strong><small>Structure et machines</small></div>
          <div><b>33 Crystals</b><i>↓</i><span>Crystal Bases</span><i>↓</i><strong>33 cristaux technologiques</strong><small>Commande et fonctionnement</small></div>
          <div><b>7 Crystals</b><i>↓</i><span>Naquadah Liquidizer</span><i>↓</i><strong>3 500 mB de Liquid Naquadah</strong><small>Alimente le Crystallizer</small></div>
        </div>
      </div>
      <details class="sgu-details"><summary>Voir les principales ressources consommées</summary><div class="sgu-details-body">
        <p><b>Raffinerie, 21 fournées :</b> 336 améthystes, 84 or, 84 zinc, 168 obsidiennes, 168 Netherracks, 168 Blaze Powder, 168 redstones, 84 glowstones, 21 000 mB de potion étrange et environ 21 seaux de lave avec marge.</p>
        <p><b>Électronique :</b> 33 améthystes, 75 quartz, 39 diamants, 28 Ender Pearls, 129 redstones et 30 glowstones, en plus des cristaux réservés.</p>
        <p><b>Composants Create principaux :</b> 14 Andesite Casings, 28 Iron Sheets, 40 Sturdy Sheets, 24 Brass Sheets, 26 Electron Tubes, 16 Precision Mechanisms, 11 Redstone Links et 4 Brass Casings.</p>
      </div></details>
      <p class="sgu-warning"><b>Commence par une seule fournée</b> Produis les vingt suivantes après validation du prototype.</p>`)}

    ${step(3, 'Construire le prototype', 'Atelier minimal', 'Préparer les postes de la première fournée', `
      <div class="sgu-workshop-grid">
        <article><h3>Préparation</h3><ul><li>Millstone ou Crushing Wheels</li><li>cuve d’eau pour produire la potion</li><li>Mechanical Mixer + Basin</li><li>Blaze Burner chauffé puis surchauffé</li></ul></article>
        <article><h3>Traitement</h3><ul><li>Mechanical Press et Mechanical Saw</li><li>3 Encased Fans minimum</li><li>eau, feu ou lave, neige poudreuse</li><li>tête de dragon conservée pour plus tard</li></ul></article>
        <article><h3>Fluides</h3><ul><li>1 petite cuve pour la potion</li><li>1 cuve séparée pour la lave</li><li>tuyaux et Mechanical Pumps</li><li>Spout pour les recettes de remplissage</li></ul></article>
        <article><h3>Logistique</h3><ul><li>tapis ou Depots entre les postes</li><li>6 stockages étiquetés</li><li>filtres pour les sorties finales</li><li>lunettes Create pour contrôler les recettes</li></ul></article>
      </div>
      <div class="sgu-blueprint" aria-label="Organisation recommandée du prototype">
        <div class="sgu-blueprint-title"><b>Disposition du prototype</b><span>Place un stockage à la sortie de chaque branche</span></div>
        <div class="sgu-lane"><span class="input">Potion + Amethyst Powder + or + zinc</span><i>→</i><span class="machine">Mixer / Basin / Heated Blaze Burner</span><i>→</i><span class="buffer">Crystalline Matrices</span></div>
        <div class="sgu-lane"><span class="input">Powdered Obsidian + Cinder Flour + lave</span><i>→</i><span class="machine">Press / Basin / Heated Blaze Burner</span><i>→</i><span class="buffer">Refractory Briquettes</span></div>
        <div class="sgu-lane"><span class="input">Blaze Powder + Redstone Dust + Glowstone Dust</span><i>→</i><span class="machine">Mixer / Basin / sans chaleur</span><i>→</i><span class="buffer">Catalytic Flux</span></div>
        <div class="sgu-prototype-convergence">
          <div class="sgu-convergence-inputs">
            <span><b>4 Crystalline Matrices</b><small>stock branche 1</small></span>
            <span><b>4 Refractory Briquettes</b><small>stock branche 2</small></span>
            <span><b>4 Catalytic Flux</b><small>stock branche 3</small></span>
            <span class="fluid"><b>250 mB Lava</b><small>cuve de lave</small></span>
          </div>
          <div class="sgu-convergence-rail" aria-hidden="true"><i></i><span>↓</span></div>
          <div class="sgu-synthesis-flow">
            <div class="sgu-synthesis-machine"><b>Mechanical Mixer</b><span>Basin</span><strong>Superheated Blaze Burner</strong></div>
            <i>→</i>
            <div class="sgu-synthesis-output">${icon('unstable-slag.png', 'Unstable Naquadah Slag')}<b>4 Unstable Naquadah Slag</b></div>
          </div>
        </div>
      </div>`)}

    ${step(4, 'Construire le prototype', 'Branche 1', 'Produire 4 Crystalline Matrices', `
      <div class="sgu-station-head">${icon('crystalline-matrix.png', 'Crystalline Matrix')}<div><b>Entrée d’une fournée</b><span>16 éclats d’améthyste · 4 or · 4 zinc · 1 000 mB de potion étrange</span></div><strong>4 Crystalline Matrices</strong></div>
      <div class="sgu-matrix-production" role="img" aria-label="Fabrication de l’Awkward Potion puis des Crystalline Matrices">
        <article class="sgu-production-card potion">
          <div class="sgu-production-heading"><span>1</span><div><b>Fabriquer l’Awkward Potion</b><small>Une cuve séparée pour le liquide</small></div></div>
          <div class="sgu-production-inputs"><span>1 000 mB Water</span><i>+</i><span>1 Nether Wart</span></div>
          <div class="sgu-production-arrow">↓</div>
          <div class="sgu-machine-stack"><b>Mechanical Mixer</b><span>Basin</span><strong>Heated Blaze Burner</strong></div>
          <div class="sgu-production-arrow">↓</div>
          <div class="sgu-liquid-output"><b>1 000 mB Awkward Potion</b><small>Transférer vers la seconde cuve</small></div>
        </article>
        <div class="sgu-transfer-flow"><span>Mechanical Pump</span><i>→</i><small>1 000 mB</small></div>
        <article class="sgu-production-card matrix">
          <div class="sgu-production-heading"><span>2</span><div><b>Former les Crystalline Matrices</b><small>La potion devient un ingrédient</small></div></div>
          <div class="sgu-production-inputs four"><span>16 Amethyst Powder</span><i>+</i><span>4 Gold Ingots</span><i>+</i><span>4 Zinc Ingots</span><i>+</i><span>1 000 mB Awkward Potion</span></div>
          <div class="sgu-production-arrow">↓</div>
          <div class="sgu-machine-stack"><b>Mechanical Mixer</b><span>Basin</span><strong>Heated Blaze Burner</strong></div>
          <div class="sgu-production-arrow">↓</div>
          <div class="sgu-matrix-output">${icon('crystalline-matrix.png', 'Crystalline Matrix')}<b>4 Crystalline Matrices</b></div>
        </article>
      </div>
      <div class="sgu-two-column">
        <article><h3>Préparer la potion avec Create</h3><ol class="sgu-plain-steps"><li>Injecte 1 000 mB d’eau dans un Basin chauffé.</li><li>Ajoute 1 Nether Wart et mélange avec le Mechanical Mixer.</li><li>Transfère la potion dans le Basin des Crystalline Matrices.</li></ol></article>
        <article><h3>Mélanger</h3><ol class="sgu-plain-steps"><li>Broie les 16 éclats en 16 poudres d’améthyste.</li><li>Place le Basin au-dessus d’un Blaze Burner chauffé.</li><li>Ajoute les poudres, l’or et le zinc.</li><li>Injecte 1 000 mB de potion puis démarre le Mixer.</li></ol></article>
      </div>
      `)}

    ${step(5, 'Construire le prototype', 'Branches 2 et 3', 'Produire 4 Refractory Briquettes et 8 Catalytic Flux', `
      <div class="sgu-branch-grid">
        <article>${icon('refractory-briquette.png', 'Refractory Briquette')}<h3>4 Refractory Briquettes</h3><div class="sgu-machine-sketch" role="img" aria-label="Mechanical Press au-dessus d’un Basin chauffé par un Blaze Burner"><strong class="sgu-sketch-block machine">Mechanical Press</strong><i>↓</i><div class="sgu-sketch-block basin"><b>Basin</b><div class="sgu-sketch-inputs"><span>8 Powdered Obsidian</span><span>8 Cinder Flour</span><span>250 mB Lava</span></div></div><i>↓</i><strong class="sgu-sketch-block heat">Heated Blaze Burner</strong><div class="sgu-sketch-output">→ 4 Refractory Briquettes</div></div><ol><li>Broie 8 obsidiennes en Powdered Obsidian.</li><li>Broie 8 Netherracks dans les Crushing Wheels pour obtenir au moins 8 Cinder Flour.</li><li>Place les 16 poudres dans le Basin.</li><li>Injecte 250 mB de lave et compacte.</li></ol></article>
        <article>${icon('catalytic-flux.png', 'Catalytic Flux')}<h3>8 Catalytic Flux</h3><div class="sgu-machine-sketch" role="img" aria-label="Mechanical Mixer au-dessus d’un Basin sans source de chaleur"><strong class="sgu-sketch-block machine">Mechanical Mixer</strong><i>↓</i><div class="sgu-sketch-block basin"><b>Basin</b><div class="sgu-sketch-inputs"><span>8 Blaze Powder</span><span>8 Redstone Dust</span><span>4 Glowstone Dust</span></div></div><i>↓</i><strong class="sgu-sketch-block no-heat">Sans chaleur</strong><div class="sgu-sketch-output">→ 8 Catalytic Flux</div></div><ol><li>Place 8 Blaze Powder dans un second Basin.</li><li>Ajoute 8 Redstone Dust et 4 Glowstone Dust.</li><li>Mélange avec le Mechanical Mixer.</li><li>Réserve 4 Catalytic Flux pour la métallurgie.</li></ol></article>
      </div>
      <div class="sgu-batch-logic"><div><b>4 Catalytic Flux</b><span>partent maintenant dans la synthèse</span></div><i>+</i><div><b>4 Catalytic Flux</b><span>sont réservés au futur billet</span></div><i>=</i><strong>8 Catalytic Flux utilisés sans perte</strong></div>
      `)}

    ${step(6, 'Construire le prototype', 'Convergence', 'Produire 4 Unstable Naquadah Slag', `
      <div class="sgu-process"><b>4 Crystalline Matrices</b><i>+</i><b>4 Refractory Briquettes</b><i>+</i><b>4 Catalytic Flux</b><i>+</i><b>250 mB lave</b><i>→</i><strong>Mechanical Mixer surchauffé</strong></div>
      <div class="sgu-side-diagram"><span class="machine">Mechanical Mixer</span><i>↓</i><span class="machine">Basin</span><i>↓</i><span class="catalyst">Superheated Blaze Burner</span></div>
      <ol class="sgu-actions">
        <li><b>Place le Basin au-dessus d’un Blaze Burner surchauffé.</b><span>Le niveau chauffé ordinaire ne suffit pas.</span></li>
        <li><b>Insère les quatre ingrédients et la lave.</b><span>Vérifie dans les lunettes Create que la recette est reconnue.</span></li>
        <li><b>Laisse travailler environ 60 secondes.</b></li>
      </ol>
      `)}

    ${step(7, 'Construire le prototype', 'Ligne de raffinage', 'Construire la ligne de raffinage', `
      <div class="sgu-refining-line">
        <article>${icon('unstable-slag.png', 'Unstable Naquadah Slag')}<b>Mechanical Press</b><span>4 Unstable Naquadah Slag → 4 Raw Naquadah Briquettes</span></article><i>→</i>
        <article>${icon('raw-briquette.png', 'Raw Naquadah Briquette')}<b>Bulk Blasting</b><span>souffle à travers feu ou lave → 4 Calcined Naquadah</span></article><i>→</i>
        <article>${icon('calcined-naquadah.png', 'Calcined Naquadah')}<b>Crushing Wheels</b><span>4 unités → 8 Impure Naquadah Dust</span></article><i>→</i>
        <article>${icon('impure-powder.png', 'Impure Naquadah Dust')}<b>Bulk Washing</b><span>souffle à travers eau → 8 Purified Naquadah Granules</span></article><i>→</i>
        <article>${icon('purified-granules.png', 'Purified Naquadah Granule')}<b>Bulk Freezing</b><span>souffle à travers neige poudreuse → 8 Cryostabilized Naquadah Crystals</span></article>
      </div>
      <div class="sgu-bulk-lessons single">
        <article><h3>Vue latérale d’un procédé Bulk</h3><div class="sgu-bulk-diagram"><span class="fan">Encased Fan</span><i>»»</i><span class="catalyst">Feu, eau ou neige</span><i>»»</i><span class="belt">Objet sur Mechanical Belt ou Depot</span></div><p>Le souffle traverse le catalyseur puis atteint l’objet. L’objet n’est jamais jeté dans le fluide.</p></article>
      </div>
      `)}

    ${step(8, 'Valider le prototype', 'Premier cycle complet', 'Valider une première fournée', `
      <p class="sgu-copy">Exécute maintenant la chaîne entière avec les quantités d’une seule fournée. Déplace les objets manuellement entre les stocks : le but est de valider la recette, pas encore la vitesse.</p>
      <div class="sgu-batch-ledger">
        <div><b>Entrée</b><span>16 améthystes · 4 or · 4 zinc · 8 obsidiennes · 8 Netherracks · 8 Blaze Powder · 8 redstones · 4 glowstones · 1 000 mB potion · 500 mB lave</span></div>
        <i>→</i><div><b>Sortie immédiate</b><span>8 Cryostabilized Naquadah Crystals</span></div>
        <i>+</i><div><b>Réserve</b><span>4 Catalytic Flux pour la métallurgie</span></div>
      </div>
      ${checkpoint('Prototype validé :', '8 Cryostabilized Naquadah Crystals et 4 Catalytic Flux sont stockés, sans objet intermédiaire bloqué dans une machine.')}`)}

    ${step(9, 'Industrialiser', 'Passage à l’échelle', 'Passer à une production reproductible', `
      <div class="sgu-scale-grid">
        <article><span>1</span><div><b>Dose une fournée</b><p>Prépare les trois groupes d’ingrédients dans des stockages séparés.</p></div></article>
        <article><span>2</span><div><b>Ajoute les tampons</b><p>Place un stockage entre les précurseurs, la synthèse et le raffinage.</p></div></article>
        <article><span>3</span><div><b>Cadence la synthèse</b><p>Un cycle surchauffé dure environ 60 secondes.</p></div></article>
      </div>
      <div class="sgu-industrial-lane"><span>3 postes de précurseurs</span><i>→</i><span>stocks tampons</span><i>→</i><strong>1 synthèse surchauffée</strong><i>→</i><span>5 postes de raffinage</span><i>→</i><span>coffre de comptage</span></div>
      `)}

    ${step(10, 'Industrialiser', 'Production de masse', 'Produire et répartir 168 Cryostabilized Naquadah Crystals', `
      <p class="sgu-copy">Réalise vingt et une fournées au total, prototype compris. Chaque sortie rejoint d’abord le coffre de comptage, puis trois stockages séparés.</p>
      <div class="sgu-routing-diagram"><span class="source">Coffre : 168 Cryostabilized Naquadah Crystals</span><div><i>↙</i>${icon('naquadah-plate.png', 'Naquadah Plate')}<b>128 · Naquadah Plates</b><small>Étapes 11–12 · métallurgie détaillée</small></div><div><i>↓</i>${icon('crystal-base.png', 'Crystal Base')}<b>33 · Crystal Bases</b><small>Étapes 13–15 · cristallisation détaillée</small></div><div><i>↘</i>${icon('liquid-naquadah-bucket.png', 'Liquid Naquadah')}<b>7 · Liquid Naquadah</b><small>Étapes 13–15 · circuit liquide détaillé</small></div></div>
      `)}

    ${step(11, 'Fabriquer les Naquadah Plates', 'Atelier de métallurgie', 'Construire la boucle du Stabilized Naquadah Billet', `
      <div class="sgu-process"><b>8 Cryostabilized Naquadah Crystals</b><i>→</i><b>Compacting chauffé</b><i>→</i><strong>1 Incomplete Naquadah Billet</strong></div>
      <p class="sgu-copy">L’Incomplete Naquadah Billet doit parcourir quatre fois la même séquence. Construis une boucle fermée et place une sortie filtrée sur le Stabilized Naquadah Billet : les objets incomplets continuent de tourner, le produit fini quitte la boucle.</p>
      <div class="sgu-loop-blueprint" role="img" aria-label="Boucle d’assemblage du billet de Naquadah">
        <div class="sgu-loop-track"><span class="machine">Deployer<br><small>1 flux</small></span><i>→</i><span class="machine">Spout<br><small>125 mB lave</small></span><i>→</i><span class="machine">Press</span><i>→</i><span class="machine">Saw</span></div>
        <div class="sgu-loop-return"><i>↑</i><span>retour des Incomplete Naquadah Billets · 4 passages</span><i>↵</i></div>
        <div class="sgu-loop-exit"><strong>Sortie avec filtre : Stabilized Naquadah Billet uniquement</strong><i>→</i><span class="buffer">Stock final</span></div>
      </div>
      <ol class="sgu-actions">
        <li><b>Alimente le Deployer en Catalytic Flux.</b><span>Chaque passage consomme un Catalytic Flux ; un billet complet en demande donc quatre.</span></li>
        <li><b>Relie le Spout à la lave.</b><span>Chaque passage consomme 125 mB, soit 500 mB par billet.</span></li>
        <li><b>Place la Mechanical Press puis la Mechanical Saw dans cet ordre.</b><span>Inverser les deux machines empêche la recette de progresser.</span></li>
        <li><b>Filtre la sortie sur le Stabilized Naquadah Billet.</b><span>Teste avec le billet du prototype avant d’envoyer les 120 Cryostabilized Naquadah Crystals restants.</span></li>
      </ol>
      `)}

    ${step(12, 'Fabriquer les Naquadah Plates', 'Activation finale', 'Produire 64 Naquadah Plates', `
      <div class="sgu-metallurgy-line">
        ${icon('stabilized-billet.png', 'Stabilized Naquadah Billet')}<b>Stabilized Naquadah Billet</b><i>→ Mechanical Saw →</i>${icon('dormant-ingot.png', 'Dormant Naquadah Ingot')}<b>4 Dormant Naquadah Ingots</b><i>→ Bulk Ending →</i><b>4 Naquadah Ingots</b><i>→ Mechanical Press →</i>${icon('naquadah-plate.png', 'Naquadah Plate')}<strong>4 Naquadah Plates</strong>
      </div>
      <div class="sgu-bulk-lessons single">
        <article><h3>Poste de Bulk Ending</h3><div class="sgu-bulk-diagram"><span class="fan">Encased Fan</span><i>»»</i><span class="catalyst">Dragon Head</span><i>»»</i><span class="belt">Dormant Naquadah Ingots</span></div><p>La Dragon Head reste en place et n’est pas consommée. Le souffle doit la traverser avant d’atteindre les Dormant Naquadah Ingots.</p></article>
      </div>
      <ol class="sgu-actions">
        <li><b>Produis seize Stabilized Naquadah Billets.</b><span>Chaque billet consomme 8 Cryostabilized Naquadah Crystals, 4 Catalytic Flux et 500 mB de lave.</span></li>
        <li><b>Découpe chaque Stabilized Naquadah Billet en quatre Dormant Naquadah Ingots.</b><span>Tu dois obtenir 64 Dormant Naquadah Ingots.</span></li>
        <li><b>Active-les avec la Dragon Head.</b><span>Ne presse pas les Naquadah Ingots avant cette dernière transformation.</span></li>
        <li><b>Presse les 64 Naquadah Ingots.</b><span>Chaque lingot donne une Naquadah Plate.</span></li>
      </ol>
      ${checkpoint('Métallurgie terminée :', '64 Naquadah Plates dans leur stock ; 20 Catalytic Flux de réserve doivent encore rester.')}`)}

    ${step(13, 'Construire l’électronique', 'Machines spécialisées', 'Installer le Naquadah Liquidizer et le Crystallizer', `
      <p class="sgu-copy">Les deux Reaction Chambers sont des composants de recette : elles seront absorbées par les deux machines finales.</p>
      <div class="sgu-machine-grid">
        <article>${icon('reaction-chamber.png', 'Reaction Chamber')}<h3>2 Reaction Chambers</h3><pre>SES\nBMB\nSDS</pre><span>S : Sturdy Sheet · E : Electron Tube · B : Brass Sheet · M : Precision Mechanism · D : Diamond</span></article>
        <article>${icon('naquadah-liquidizer.png', 'Naquadah Liquidizer')}<h3>1 Naquadah Liquidizer</h3><pre>PFP\nBRB\nPMP</pre><span>P : Naquadah Plate · F : Fluid Tank · B : Brass Sheet · R : Reaction Chamber · M : Mechanical Pump</span></article>
        <article>${icon('crystallizer.png', 'Crystallizer')}<h3>1 Crystallizer</h3><pre>PDP\nERE\nPMP</pre><span>P : Naquadah Plate · D : Diamond · E : Electron Tube · R : Reaction Chamber · M : Precision Mechanism</span></article>
      </div>
      <div class="sgu-blueprint compact" aria-label="Disposition des machines de cristallisation">
        <div class="sgu-lane"><span class="buffer">Cryostabilized Naquadah Crystals réservés</span><i>→</i><span class="machine">Naquadah Liquidizer</span><i>→ tuyau →</i><span class="buffer">Fluid Tank de Liquid Naquadah</span></div>
        <div class="sgu-lane"><span class="buffer">Crystal Bases + réactifs</span><i>→</i><span class="machine">Crystallizer</span><i>→</i><span class="buffer">Cristaux triés</span></div>
        <div class="sgu-converge horizontal"><span>Réseau FE</span><i>→</i><strong>1 000 FE/t par machine en fonctionnement</strong></div>
      </div>
      <ol class="sgu-actions">
        <li><b>Pose un Fluid Tank entre les deux machines.</b><span>Le Naquadah Liquidizer le remplit ; le Crystallizer y prélève ensuite son Liquid Naquadah.</span></li>
        <li><b>Relie les fluides avec des Fluid Pipes et des Mechanical Pumps.</b><span>Contrôle le sens des Mechanical Pumps avec la Create Wrench.</span></li>
        <li><b>Relie chaque machine au réseau FE.</b><span>Chacune consomme 1 000 FE/t pendant le traitement et possède un tampon de 1 MFE.</span></li>
      </ol>
      `)}

    ${step(14, 'Construire l’électronique', 'Liquid Naquadah et Crystal Bases', 'Préparer les entrées du Crystallizer', `
      <div class="sgu-two-column">
        <article><h3>3 500 mB de Liquid Naquadah</h3><p>Charge successivement les 7 Cryostabilized Naquadah Crystals réservés. Pour chaque opération, le Naquadah Liquidizer reçoit aussi 100 mB de lave et produit 500 mB dans le Fluid Tank.</p><div class="sgu-mini-process"><b>1 Cryostabilized Naquadah Crystal + 100 mB lave</b><i>→</i><strong>500 mB Liquid Naquadah</strong></div></article>
        <article><h3>33 Crystal Bases</h3><p>Fabrique les Crystal Bases à la Crafting Table. Chacune consomme 1 Cryostabilized Naquadah Crystal, 1 Amethyst Shard, 2 Quartz et 1 Diamond.</p><div class="sgu-mini-process"><b>Cryostabilized Naquadah Crystal + Amethyst Shard + 2 Quartz + Diamond</b><i>→</i><strong>Crystal Base</strong></div></article>
      </div>
      `)}

    ${step(15, 'Construire l’électronique', 'Cristallisation', 'Produire les 33 cristaux technologiques', `
      <p class="sgu-copy">Chaque opération du Crystallizer consomme 1 Crystal Base, 100 mB de Liquid Naquadah et les deux réactifs indiqués.</p>
      <div class="sgu-crystal-grid">
        <article><b>10 × Energy Crystal</b><span>3 Redstone Dust + 3 Redstone Dust</span></article>
        <article><b>10 × Transfer Crystal</b><span>3 Redstone Dust + 3 Glowstone Dust</span></article>
        <article><b>9 × Materialization Crystal</b><span>3 Ender Pearls + 3 Redstone Dust</span></article>
        <article><b>3 × Communication Crystal</b><span>3 Quartz + 3 Redstone Dust</span></article>
        <article><b>1 × Control Crystal</b><span>3 Diamonds + 3 Redstone Dust</span></article>
      </div>
      <ol class="sgu-actions">
        <li><b>Teste d’abord un Energy Crystal.</b><span>Insère une Crystal Base, 3 Redstone Dust dans chaque entrée de réactif et laisse la machine prendre 100 mB.</span></li>
        <li><b>Vérifie la sortie et la cuve.</b><span>Le cristal terminé doit apparaître et le niveau de liquide doit diminuer de 100 mB.</span></li>
        <li><b>Produis ensuite par familles.</b><span>Termine les dix Energy Crystals avant de changer les réactifs, puis passe aux Transfer Crystals, Materialization Crystals, Communication Crystals et au Control Crystal.</span></li>
        <li><b>Utilise cinq stockages étiquetés.</b><span>Mélanger les cristaux rend le comptage des composants finaux inutilement difficile.</span></li>
      </ol>
      ${checkpoint('Compte avant de continuer :', '10 Energy Crystals, 10 Transfer Crystals, 9 Materialization Crystals, 3 Communication Crystals et 1 Control Crystal. Il reste 200 mB de Liquid Naquadah.')}`)}

    ${step(16, 'Fabriquer les composants', 'Deux lignes séquencées', 'Produire les Ring Blocks et les Incomplete Stargate Chevrons', `
      <p class="sgu-copy">Ces deux recettes demandent deux passages. Elles utilisent la même logique que le billet, mais pas les mêmes ingrédients : construis deux petites boucles ou change soigneusement les filtres entre les séries.</p>
      <div class="sgu-sequence-grid">
        <article><h3>14 Classic Stargate Ring Blocks</h3><p><b>Objet de départ :</b> 1 Andesite Casing par bloc.</p><div><span>Deployer : Iron Sheet</span><i>→</i><span>Deployer : Sturdy Sheet</span><i>→</i><span>Deployer : Naquadah Plate</span><i>→</i><span>Mechanical Press</span></div><p><b>Deux tours.</b> Filtre la sortie sur le Classic Stargate Ring Block terminé.</p></article>
        <article><h3>9 Incomplete Stargate Chevrons</h3><p><b>Objet de départ :</b> 1 Polished Rose Quartz par chevron.</p><div><span>Deployer : Naquadah Plate</span><i>→</i><span>Deployer : Brass Sheet</span><i>→</i><span>Deployer : Electron Tube</span><i>→</i><span>Mechanical Press</span></div><p><b>Deux tours.</b> Filtre la sortie sur l’Incomplete Stargate Chevron terminé.</p></article>
      </div>
      <div class="sgu-sequence-rule"><b>Règle commune</b><span>objet de départ → quatre opérations → retour au début → deuxième passage → sortie filtrée</span></div>
      `)}

    ${step(17, 'Fabriquer les composants', 'Mechanical Crafting', 'Terminer les composants de la porte', `
      <p class="sgu-copy">Ces quatre recettes se réalisent avec des Mechanical Crafters orientés vers une sortie commune. La taille indiquée correspond au rectangle réellement nécessaire.</p>
      <div class="sgu-crafting-grid">
        <article><h3>Classic Stargate Chevron Block · 3 × 3</h3><pre> T \nEIM\n PR</pre><span>T Transfer Crystal · E Energy Crystal · I Incomplete Stargate Chevron · M Materialization Crystal · P Precision Mechanism · R Redstone Link</span></article>
        <article><h3>Classic Stargate Base Block · 5 × 3</h3><pre>SPTPS\nBMCMB\nSPGPS</pre><span>S Sturdy Sheet · P Naquadah Plate · T Transfer Crystal · B Brass Casing · M Precision Mechanism · C Control Crystal · G Communication Crystal</span></article>
        <article><h3>Classic DHD · 5 × 3</h3><pre>BEBEB\nPMAMP\nECROE</pre><span>B Stone Button · E Electron Tube · P Naquadah Plate · M Precision Mechanism · A Brass Casing · C Communication Crystal · R Redstone Link · O Ender Eye</span></article>
        <article><h3>Basic Interface · 5 × 4</h3><pre>N W N\nK E K\nC B R\nN W N</pre><span>N Naquadah Plate · W Copper Spool · K Capacitor · E Energy Crystal · C Communication Crystal · B Brass Casing · R Redstone Link</span></article>
      </div>
      ${checkpoint('Inventaire final :', '14 Classic Stargate Ring Blocks + 9 Classic Stargate Chevron Blocks + 1 Classic Stargate Base Block + 1 Classic DHD + 1 Basic Interface.')}`)}

    ${step(18, 'Installer la porte', 'Construction', 'Assembler et former la Classic Stargate', `
      <div class="sgu-build-layout">
        <figure><img src="${A}official-classic-stargate-structure.png" alt="Structure exacte de la Classic Stargate" loading="lazy"><figcaption>Vue de face officielle : Classic Stargate Base Block au centre inférieur, intérieur entièrement vide.</figcaption></figure>
        <ol class="sgu-actions">
          <li><b>Pose le Classic Stargate Base Block en bas, au centre.</b><span>Sa face avant doit regarder vers la zone de passage.</span></li>
          <li><b>Reproduis exactement le cercle.</b><span>Place les 14 Classic Stargate Ring Blocks et les 9 Classic Stargate Chevron Blocks aux positions illustrées.</span></li>
          <li><b>Vérifie l’ouverture.</b><span>Aucun bloc ne doit occuper l’intérieur ou remplacer un élément du contour.</span></li>
          <li><b>Clique le Classic Stargate Base Block à main nue.</b><span>Les vingt-quatre blocs se convertissent en une porte animée.</span></li>
        </ol>
      </div>
      <p class="sgu-warning"><b>Zone de sécurité :</b> laisse au moins sept blocs entièrement libres devant la porte. Le vortex d’ouverture peut détruire les blocs, objets et entités présents dans cet axe.</p>
      `)}

    ${step(19, 'Installer la porte', 'Alimentation', 'Relier la Basic Interface au stock FE', `
      <div class="sgu-power-line"><b>Centrale ou accumulateurs</b><i>→ Large Connector →</i><b>Basic Interface</b><i>→ contact direct →</i><strong>Stargate</strong></div>
      <ol class="sgu-actions">
        <li><b>Colle la Basic Interface directement à un bloc de la Stargate.</b><span>Aucun vide ni bloc intermédiaire : la face de communication touche la Stargate et le côté noir regarde vers l’extérieur.</span></li>
        <li><b>Relie le réseau FE sur une autre face.</b><span>L’interface et la porte acceptent jusqu’à 50 000 FE/t dans la configuration Régalade.</span></li>
        <li><b>Utilise un Large Connector.</b><span>Le Small Connector plafonne à 1 000 FE/t et ne peut pas couvrir les 4 500 FE/t de maintien ; le Large Connector atteint 5 000 FE/t.</span></li>
        <li><b>Charge la porte et le stock externe.</b><span>La porte contient 1,36 MFE, mais un appel de 60 secondes demande 6,4 MFE au total.</span></li>
      </ol>
      <div class="sgu-metrics compact"><div><b>1 MFE</b><span>ouverture</span></div><div><b>4 500 FE/t</b><span>maintien</span></div><div><b>6,4 MFE</b><span>60 secondes</span></div></div>
      <div class="sgu-two-column energy-options">
        <article><h3>Voyage rare</h3><p>Charge complètement la porte et au moins 3 accumulateurs de 2 MFE. Quatre accumulateurs donnent une marge confortable.</p></article>
        <article><h3>Usage fréquent</h3><p>Construis une production réelle d’au moins 4 500 FE/t et conserve un tampon pour absorber l’ouverture initiale d’un million de FE.</p></article>
      </div>
      ${checkpoint('Test sans appel :', 'Jade ou l’interface montre que l’énergie entre réellement ; la porte est pleine et le stock externe dépasse 5,04 MFE.')}`)}

    ${step(20, 'Effectuer le voyage', 'Adresse et DHD', 'Lire une adresse et composer avec le DHD', `
      <ol class="sgu-actions">
        <li><b>Lis ta propre adresse.</b><span>Clic droit sur un bloc de la Stargate avec la Create Wrench ; copie l’adresse affichée dans le chat.</span></li>
        <li><b>Pose et alimente le DHD à moins de 16 blocs.</b><span>Relie-le au FE ou fournis-lui un conteneur énergétique chargé, puis vérifie qu’il contrôle la porte.</span></li>
        <li><b>Choisis une destination sûre.</b><span>Elle doit posséder une porte fonctionnelle, un DHD alimenté et assez d’énergie pour effectuer le retour après fermeture.</span></li>
        <li><b>Compose les nombres dans l’ordre.</b><span>Maintiens Maj pour afficher les numéros du DHD, saisis l’adresse, puis presse le bouton central : il ajoute automatiquement le Point d’origine et lance l’appel.</span></li>
        <li><b>Recule pendant le vortex initial.</b><span>Ne traverse qu’une fois le passage stabilisé.</span></li>
        <li><b>Ferme depuis l’autre côté.</b><span>Sur Régalade, le DHD d’arrivée peut couper la connexion et arrêter immédiatement la dépense.</span></li>
      </ol>
      <p class="sgu-warning"><b>Sécurité :</b> entrer par l’arrière de la porte reste mortel. Le passage stable est bidirectionnel, mais uniquement par les faces avant.</p>
      ${checkpoint('Premier voyage réussi :', 'les deux adresses sont conservées, le DHD d’arrivée est alimenté et tu peux couper puis recomposer la connexion pour revenir.')}`)}

    ${step(21, 'Après le premier voyage', 'Dépannage', 'Identifier le problème', `
      <div class="sgu-diagnosis">
        <article><b>La potion n’arrive pas dans le Basin</b><span>Vérifie la Mechanical Pump et son sens. Le Basin doit recevoir 1 000 mB d’eau et une Nether Wart.</span></article>
        <article><b>Le Mechanical Mixer refuse la recette</b><span>Vérifie les quatre Crystalline Matrices, quatre Refractory Briquettes, quatre Catalytic Flux, 250 mB de lave et le Blaze Burner surchauffé.</span></article>
        <article><b>Le Bulk Freezing ne produit rien</b><span>L’Encased Fan doit souffler à travers la Powder Snow avant d’atteindre les Purified Naquadah Granules.</span></article>
        <article><b>L’Incomplete Naquadah Billet ne progresse plus</b><span>Chaque boucle demande Catalytic Flux, 125 mB de lave, Mechanical Press et Mechanical Saw, dans cet ordre, quatre fois.</span></article>
        <article><b>Le Naquadah Liquidizer reste arrêté</b><span>Contrôle le Cryostabilized Naquadah Crystal, les 100 mB de lave, l’entrée FE et l’espace disponible dans la sortie liquide.</span></article>
        <article><b>Le Crystallizer reste arrêté</b><span>Vérifie la Crystal Base, les deux réactifs, 100 mB de Liquid Naquadah et le réseau FE.</span></article>
        <article><b>Les blocs ne forment pas la Stargate</b><span>Compare les 14 Classic Stargate Ring Blocks, 9 Classic Stargate Chevron Blocks et le Classic Stargate Base Block à l’image, puis clique ce dernier à main nue.</span></article>
        <article><b>Le DHD ne réagit pas</b><span>Contrôle son énergie, sa distance de 16 blocs et sa liaison avec la porte avant de modifier l’adresse.</span></article>
        <article><b>La Create Wrench n’affiche aucune adresse</b><span>Vise un bloc appartenant à la Stargate déjà formée et utilise bien la Create Wrench en main principale.</span></article>
        <article><b>La connexion coupe rapidement</b><span>Le stock externe est vide ou ne fournit pas les 4 500 FE/t nécessaires au maintien.</span></article>
      </div>`)}

    ${step(22, 'Après le premier voyage', 'Après le prototype', 'Réutiliser l’usine pour la porte suivante', `
      <p class="sgu-copy">La première porte finance toute l’infrastructure : raffinerie, Naquadah Liquidizer, Crystallizer, circuits de traitement et mur de Mechanical Crafters. Conserve-les comme une usine communautaire.</p>
      <div class="sgu-next-grid">
        <article><b>Une seconde porte</b><span>Elle réutilise les machines existantes et demande 19 fournées selon la nomenclature actuelle.</span></article>
        <article><b>Changer d’apparence</b><span>Fabrique ensuite les cristaux d’amélioration ou de variante sans reconstruire la porte classique.</span></article>
        <article><b>Industrialiser davantage</b><span>Automatise le dosage uniquement lorsque les stocks tampons et les contrôles de sortie sont fiables.</span></article>
      </div>`)}
  `;

  root.querySelectorAll('.sgu-actions').forEach(list => {
    list.setAttribute('role', 'list');
    list.querySelectorAll(':scope > li').forEach(item => item.setAttribute('role', 'listitem'));
  });
  guided.dataset.industryUpgrade = 'ready';
  document.dispatchEvent(new CustomEvent('regalade:tutorial-content-changed'));
})();
