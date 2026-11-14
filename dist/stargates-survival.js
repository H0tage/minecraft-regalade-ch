(() => {
  const root = document.querySelector('#tutorial-stargates .sgx-shell');
  if (!root || root.dataset.survivalUpgrade === 'ready') return;

  const A = 'assets/stargate/';
  const icon = (file, alt = '') => `<img src="${A}${file}" alt="${alt}" loading="lazy">`;
  const checkpoint = (title, text) => `<p class="sgu-checkpoint"><b>${title}</b><span>${text}</span></p>`;
  const step = (number, phase, kicker, title, body) => `
    <section class="sg-step sgu-step" id="sgu-step-${String(number).padStart(2, '0')}" data-phase="${phase}">
      <div class="sgu-step-title"><span>${String(number).padStart(2, '0')}</span><div><p class="sgx-eyebrow">${kicker}</p><h2>${title}</h2></div></div>
      ${body}
    </section>`;

  const oldGuide = root.querySelector('#sgx-guide');
  const reference = root.querySelector('#sgx-reference');
  const tabs = root.querySelector('.sgx-tabs');
  if (!oldGuide || !reference || !tabs) return;

  const general = document.createElement('div');
  general.className = 'sgx-panel sgu-panel';
  general.id = 'sgx-general';
  general.setAttribute('role', 'tabpanel');
  general.setAttribute('aria-labelledby', 'sgx-general-tab');
  general.innerHTML = `
    <header class="sgu-hero">
      <p class="sgx-eyebrow">Fonctionnement général</p>
      <h1>Comprendre une porte avant de construire l’usine.</h1>
      <p>Une installation complète repose sur quatre éléments : la porte, son clavier de composition, une interface énergétique et un stock d’électricité externe.</p>
      <p class="sgu-version">Stargate Journey 0.6.54 · règles énergétiques Régalade</p>
    </header>

    <section class="sg-step sgu-step" id="sgu-general-system" data-phase="Comprendre le système">
      <div class="sgu-step-title compact"><span>A</span><div><p class="sgx-eyebrow">Les quatre éléments</p><h2>Qui fait quoi ?</h2></div></div>
      <div class="sgu-role-grid">
        <article>${icon('classic-stargate-base.png', 'Base de porte')}<div><b>[Stargate / Porte des étoiles]</b><span>Crée le passage. Sa structure formée contient l’adresse et son tampon de 1,36 MFE.</span></div></article>
        <article>${icon('classic-dhd.png', 'DHD')}<div><b>[DHD / Console de composition]</b><span>Permet de saisir une adresse, d’ouvrir la connexion et de la fermer.</span></div></article>
        <article>${icon('basic-interface.png', 'Interface basique')}<div><b>[Basic Interface / Interface basique]</b><span>Transfère le FE du réseau externe vers la porte. Elle n’est pas la batterie principale.</span></div></article>
        <article><span class="sgu-symbol">FE</span><div><b>Production et accumulateurs</b><span>Fournissent le million de FE initial et les 4 500 FE/t nécessaires au maintien.</span></div></article>
      </div>
      <div class="sgu-system-line"><b>Adresse</b><i>→</i><b>DHD</b><i>→</i><b>Porte</b><i>←</i><b>Interface</b><i>←</i><b>Stock FE</b></div>
    </section>

    <section class="sg-step sgu-step" id="sgu-general-energy" data-phase="Comprendre le système">
      <div class="sgu-step-title compact"><span>B</span><div><p class="sgx-eyebrow">Énergie</p><h2>Une ouverture est un événement coûteux.</h2></div></div>
      <div class="sgu-metrics">
        <div><b>1 MFE</b><span>au moment de l’ouverture</span></div>
        <div><b>4 500 FE/t</b><span>pendant le maintien</span></div>
        <div><b>6,4 MFE</b><span>pour 60 secondes</span></div>
        <div><b>1,36 MFE</b><span>dans la porte elle-même</span></div>
      </div>
      <p class="sgu-note"><b>Deux stratégies restent valables :</b> une petite production avec de gros accumulateurs pour voyager rarement, ou une centrale assez puissante pour soutenir la porte presque en continu.</p>
    </section>

    <section class="sg-step sgu-step" id="sgu-general-address" data-phase="Utiliser le réseau">
      <div class="sgu-step-title compact"><span>C</span><div><p class="sgx-eyebrow">Adresses</p><h2>Chaque porte possède sa propre destination.</h2></div></div>
      <div class="sgu-address-flow">
        <article><b>1 · Lire</b><span>Clic droit sur une porte avec la [Wrench / Clé] Create : son adresse apparaît dans le chat.</span></article>
        <i>→</i><article><b>2 · Noter</b><span>Conserve l’ordre exact des symboles ou des nombres.</span></article>
        <i>→</i><article><b>3 · Composer</b><span>Saisis l’adresse d’une autre porte sur le DHD, puis valide avec le bouton central.</span></article>
      </div>
      <p class="sgu-note">Construire une porte ne suffit pas à créer une destination connue : il faut également obtenir l’adresse d’une porte sauvage, du spawn ou d’un autre joueur.</p>
    </section>

    <section class="sg-step sgu-step" id="sgu-general-travel" data-phase="Utiliser le réseau">
      <div class="sgu-step-title compact"><span>D</span><div><p class="sgx-eyebrow">Voyage</p><h2>Attendre la stabilisation, traverser, puis fermer.</h2></div></div>
      <ol class="sgu-actions">
        <li><b>Reste hors du plan de la porte pendant l’ouverture.</b><span>Le vortex initial détruit les blocs, objets et entités placés devant lui.</span></li>
        <li><b>Traverse depuis la face avant.</b><span>Le passage est bidirectionnel après stabilisation, mais entrer par l’arrière reste mortel.</span></li>
        <li><b>Ferme depuis le DHD d’arrivée.</b><span>Sur Régalade, les deux côtés peuvent couper la connexion afin d’économiser l’énergie.</span></li>
      </ol>
    </section>`;

  const guided = document.createElement('div');
  guided.className = 'sgx-panel sgu-panel';
  guided.id = 'sgx-guide';
  guided.setAttribute('role', 'tabpanel');
  guided.setAttribute('aria-labelledby', 'sgx-guide-tab');
  guided.hidden = true;
  guided.innerHTML = `
    <header class="sgu-hero">
      <p class="sgx-eyebrow">De la première poudre au premier voyage</p>
      <h1>Construire sa première porte.</h1>
      <p>Ce parcours suit réellement la matière : une fournée d’essai, la production industrielle, les cristaux technologiques, les vingt-quatre blocs de la porte, puis l’énergie et le premier appel.</p>
      <p class="sgu-version">Première installation : 21 fournées · 168 cristaux cryostabilisés · 64 plaques</p>
      <div class="sgu-project-line"><b>Raffinerie</b><i>→</i><b>Plaques et cristaux</b><i>→</i><b>24 blocs</b><i>→</i><b>Énergie</b><i>→</i><strong>Premier voyage</strong></div>
    </header>

    ${step(1, 'Préparer le projet', 'Le résultat final', 'Savoir exactement ce que l’on construit.', `
      <p class="sgu-copy">L’objectif n’est pas seulement de fabriquer un anneau. Une installation utilisable comprend une <strong>porte classique formée</strong>, un <strong>[DHD / Console de composition]</strong>, une <strong>[Basic Interface / Interface basique]</strong> et une alimentation FE externe.</p>
      <div class="sgu-target-grid">
        <article><b>Structure</b><span>1 base + 14 anneaux + 9 chevrons.</span></article>
        <article><b>Commande</b><span>1 DHD placé à portée de la porte.</span></article>
        <article><b>Énergie</b><span>1 interface reliée aux accumulateurs ou à la centrale.</span></article>
        <article><b>Destination</b><span>Une adresse valide appartenant à une autre porte.</span></article>
      </div>
      ${checkpoint('Projet retenu :', 'une porte classique avec son DHD, son interface et un stock externe capable de fournir au moins 1 MFE.')}`)}

    ${step(2, 'Préparer le projet', 'Avant de commencer', 'Préparer l’atelier sans récolter aveuglément toute l’usine.', `
      <p class="sgu-copy">Commence par construire les postes nécessaires à <strong>une seule fournée d’essai</strong>. La production de masse ne démarre qu’après avoir obtenu huit cristaux cryostabilisés.</p>
      <div class="sgu-workshop-grid">
        <article><h3>Préparation</h3><ul><li>Millstone ou Crushing Wheels</li><li>Mechanical Mixer + Basin</li><li>Blaze Burner chauffé et surchauffé</li><li>Cuves, tuyaux, pompes et Spout</li></ul></article>
        <article><h3>Traitement</h3><ul><li>Mechanical Press et Mechanical Saw</li><li>Encased Fans</li><li>eau, lave et neige poudreuse</li><li>tête de dragon pour la dernière étape</li></ul></article>
        <article><h3>Assemblage</h3><ul><li>tapis et Deployers</li><li>boucles d’assemblage séquencé</li><li>mur de Mechanical Crafters</li><li>stockages étiquetés</li></ul></article>
        <article><h3>Électricité</h3><ul><li>réseau FE pour les machines Journey</li><li>câbles et accumulateurs</li><li>production Create Crafts & Additions</li><li>au moins 1 MFE avant le premier appel</li></ul></article>
      </div>
      <details class="sgu-details"><summary>Voir les grandes quantités de la première installation</summary><div class="sgu-details-body">
        <p><b>Raffinerie, 21 fournées :</b> 336 améthystes, 84 or, 84 zinc, 168 obsidiennes, 168 Netherracks, 168 Blaze Powder, 168 redstones, 84 glowstones, 21 000 mB de potion étrange et environ 21 seaux de lave avec marge.</p>
        <p><b>Crystal Bases :</b> 33 cristaux cryostabilisés, 33 améthystes, 66 quartz et 33 diamants.</p>
        <p><b>Réactifs des cristaux :</b> 129 redstones, 30 glowstones, 27 Ender Pearls, 9 quartz et 3 diamants.</p>
        <p><b>Composants Create principaux :</b> 14 Andesite Casings, 28 Iron Sheets, 40 Sturdy Sheets, 24 Brass Sheets, 26 Electron Tubes, 16 Precision Mechanisms, 11 Redstone Links et 4 Brass Casings.</p>
      </div></details>
      <p class="sgu-note"><b>La liste complète est volontairement repliée :</b> valide d’abord une fournée. Une erreur répétée vingt et une fois coûterait beaucoup plus cher qu’un prototype raté.</p>`)}

    ${step(3, 'Valider une fournée', 'Trois branches', 'Produire les trois ingrédients de départ.', `
      <div class="sgu-branch-grid">
        <article>${icon('crystalline-matrix.png', 'Matrice cristalline')}<h3>4 matrices cristallines</h3><ol><li>Broie 16 éclats d’améthyste.</li><li>Verse 1 000 mB de potion étrange dans un Basin chauffé.</li><li>Ajoute les 16 poudres, 4 lingots d’or et 4 lingots de zinc.</li><li>Fais tourner le Mixer jusqu’à obtenir 4 matrices.</li></ol></article>
        <article>${icon('refractory-briquette.png', 'Briquette réfractaire')}<h3>4 briquettes réfractaires</h3><ol><li>Produis 8 Powdered Obsidian et 8 Cinder Flour.</li><li>Place-les dans un Basin chauffé sous une presse.</li><li>Ajoute 250 mB de lave.</li><li>Compacte pour obtenir 4 briquettes.</li></ol></article>
        <article>${icon('catalytic-flux.png', 'Flux catalytique')}<h3>8 flux catalytiques</h3><ol><li>Place 8 Blaze Powder dans un Basin.</li><li>Ajoute 8 redstones et 4 glowstones.</li><li>Mélange sans chaleur obligatoire.</li><li>Garde 4 flux pour la synthèse et 4 pour la future métallurgie.</li></ol></article>
      </div>
      ${checkpoint('Ne continue pas avant d’avoir :', '4 matrices, 4 briquettes et 8 flux catalytiques.')}`)}

    ${step(4, 'Valider une fournée', 'Convergence', 'Synthétiser quatre scories instables.', `
      <div class="sgu-process"><b>4 matrices</b><i>+</i><b>4 briquettes</b><i>+</i><b>4 flux</b><i>+</i><b>250 mB lave</b><i>→</i><strong>Mixer surchauffé</strong></div>
      <ol class="sgu-actions">
        <li><b>Place le Basin au-dessus d’un Blaze Burner surchauffé.</b><span>Le niveau chauffé ordinaire ne suffit pas.</span></li>
        <li><b>Insère les quatre ingrédients et la lave.</b><span>Vérifie dans les lunettes Create que la recette est reconnue.</span></li>
        <li><b>Laisse travailler environ 60 secondes.</b><span>Cette synthèse est volontairement le goulot d’étranglement de la raffinerie.</span></li>
      </ol>
      ${checkpoint('Sortie attendue :', '4 [Unstable Naquadah Slag / Scories instables de Naquadah].')}`)}

    ${step(5, 'Valider une fournée', 'Raffinage', 'Transformer les quatre scories en huit cristaux.', `
      <p class="sgu-copy">Aligne les postes dans cet ordre. Les objets peuvent circuler sur un tapis, mais chaque procédé peut aussi être testé séparément.</p>
      <div class="sgu-refining-line">
        <article>${icon('unstable-slag.png', 'Scorie instable')}<b>Presse</b><span>4 scories → 4 briquettes brutes</span></article><i>→</i>
        <article>${icon('raw-briquette.png', 'Briquette brute')}<b>Bulk Blasting</b><span>Ventilateur à travers feu ou lave → 4 Naquadahs calcinés</span></article><i>→</i>
        <article>${icon('calcined-naquadah.png', 'Naquadah calciné')}<b>Crushing Wheels</b><span>4 unités → 8 poudres impures</span></article><i>→</i>
        <article>${icon('impure-powder.png', 'Poudre impure')}<b>Bulk Washing</b><span>Ventilateur à travers eau → 8 granulés purifiés</span></article><i>→</i>
        <article>${icon('purified-granules.png', 'Granulé purifié')}<b>Bulk Freezing</b><span>Ventilateur à travers neige poudreuse → 8 cristaux</span></article>
      </div>
      <p class="sgu-warning"><b>Un procédé Bulk ne consiste pas à jeter l’objet dans le fluide :</b> le ventilateur doit souffler à travers le feu, l’eau ou la neige poudreuse, puis atteindre l’objet posé derrière.</p>
      ${checkpoint('Fournée validée :', '8 cristaux de Naquadah cryostabilisés. Tu peux maintenant reproduire exactement cette ligne.')}`)}

    ${step(6, 'Industrialiser', 'Production de masse', 'Produire 168 cristaux et les répartir immédiatement.', `
      <p class="sgu-copy">Répète la fournée validée vingt et une fois au total. Place les sorties dans trois stockages séparés pour ne pas transformer par erreur les cristaux destinés à l’électronique.</p>
      <div class="sgu-allocation">
        <article><b>128</b><span>pour fabriquer 64 plaques</span></article>
        <article><b>33</b><span>pour fabriquer 33 Crystal Bases</span></article>
        <article><b>7</b><span>pour produire 3 500 mB de Liquid Naquadah</span></article>
      </div>
      ${checkpoint('Total obligatoire :', '168 cristaux, répartis 128 / 33 / 7 avant de commencer la métallurgie.')}`)}

    ${step(7, 'Industrialiser', 'Métallurgie', 'Transformer 128 cristaux en 64 plaques.', `
      <div class="sgu-process"><b>8 cristaux</b><i>→</i><b>Compacting chauffé</b><i>→</i><strong>1 billet incomplet</strong></div>
      <div class="sgu-loop">
        <p><b>Faire quatre boucles dans cet ordre :</b></p>
        <div><span>Deployer : 1 flux</span><i>→</i><span>Spout : 125 mB lave</span><i>→</i><span>Mechanical Press</span><i>→</i><span>Mechanical Saw</span></div>
      </div>
      <div class="sgu-metallurgy-line">
        ${icon('stabilized-billet.png', 'Billet stabilisé')}<b>Billet stabilisé</b><i>→ Scie →</i>${icon('dormant-ingot.png', 'Lingot dormant')}<b>4 lingots dormants</b><i>→ Bulk Ending →</i><b>4 lingots éveillés</b><i>→ Presse →</i>${icon('naquadah-plate.png', 'Plaque de Naquadah')}<strong>4 plaques</strong>
      </div>
      <p class="sgu-warning"><b>Bulk Ending :</b> le ventilateur doit souffler à travers une tête de dragon et atteindre les lingots dormants. Cette opération reste la dernière activation du matériau.</p>
      ${checkpoint('Répète seize fois :', '16 billets × 4 plaques = 64 plaques de Naquadah.')}`)}

    ${step(8, 'Cristalliser', 'Machines Journey', 'Construire le Liquidizer et le Crystallizer.', `
      <p class="sgu-copy">Les deux [Reaction Chambers / Chambres de réaction] sont des composants de recette : elles seront absorbées par les deux machines finales.</p>
      <div class="sgu-machine-grid">
        <article>${icon('reaction-chamber.png', 'Reaction Chamber')}<h3>2 Reaction Chambers</h3><pre>SES\nBMB\nSDS</pre><span>S : Sturdy Sheet · E : Electron Tube · B : Brass Sheet · M : Precision Mechanism · D : Diamond</span></article>
        <article>${icon('naquadah-liquidizer.png', 'Naquadah Liquidizer')}<h3>1 Naquadah Liquidizer</h3><pre>PFP\nBRB\nPMP</pre><span>P : plaque · F : Fluid Tank · B : Brass Sheet · R : Reaction Chamber · M : Mechanical Pump</span></article>
        <article>${icon('crystallizer.png', 'Crystallizer')}<h3>1 Crystallizer</h3><pre>PDP\nERE\nPMP</pre><span>P : plaque · D : Diamond · E : Electron Tube · R : Reaction Chamber · M : Precision Mechanism</span></article>
      </div>
      <p class="sgu-note"><b>Alimentation :</b> raccorde chaque machine à un réseau FE. Chacune consomme 1 000 FE/t pendant le traitement et possède un tampon de 1 MFE.</p>
      ${checkpoint('À poser dans l’atelier :', '1 Liquidizer et 1 Crystallizer alimentés en FE. Les Reaction Chambers n’existent plus séparément.')}`)}

    ${step(9, 'Cristalliser', 'Liquide et socles', 'Produire le liquide puis trente-trois Crystal Bases.', `
      <div class="sgu-two-column">
        <article><h3>3 500 mB de Liquid Naquadah</h3><p>Dans le Liquidizer, traite successivement 7 cristaux cryostabilisés avec 100 mB de lave chacun. Chaque opération produit 500 mB.</p><div class="sgu-mini-process"><b>1 cristal + 100 mB lave</b><i>→</i><strong>500 mB liquide</strong></div></article>
        <article><h3>33 Crystal Bases</h3><p>Fabrique les socles à l’établi. Chaque base consomme 1 cristal cryostabilisé, 1 améthyste, 2 quartz et 1 diamant.</p><div class="sgu-mini-process"><b>Cristal + améthyste + 2 quartz + diamant</b><i>→</i><strong>Crystal Base</strong></div></article>
      </div>
      ${checkpoint('Avant le Crystallizer :', '33 Crystal Bases et 3 500 mB de Liquid Naquadah disponibles.')}`)}

    ${step(10, 'Cristalliser', 'Électronique', 'Fabriquer les trente-trois cristaux technologiques.', `
      <p class="sgu-copy">Chaque opération du Crystallizer consomme 1 Crystal Base, 100 mB de Liquid Naquadah et les deux réactifs indiqués.</p>
      <div class="sgu-crystal-grid">
        <article><b>10 × Energy</b><span>3 redstones + 3 redstones</span></article>
        <article><b>10 × Transfer</b><span>3 redstones + 3 glowstones</span></article>
        <article><b>9 × Materialization</b><span>3 Ender Pearls + 3 redstones</span></article>
        <article><b>3 × Communication</b><span>3 quartz + 3 redstones</span></article>
        <article><b>1 × Control</b><span>3 diamants + 3 redstones</span></article>
      </div>
      ${checkpoint('Compte avant de continuer :', '10 Energy, 10 Transfer, 9 Materialization, 3 Communication et 1 Control. Il reste 200 mB de liquide.')}`)}

    ${step(11, 'Fabriquer les composants', 'Assemblage séquencé', 'Produire les quatorze anneaux et neuf corps de chevrons.', `
      <div class="sgu-sequence-grid">
        <article><h3>14 [Ring Blocks / Blocs d’anneau]</h3><p><b>Base :</b> 1 Andesite Casing.</p><div><span>Iron Sheet</span><i>→</i><span>Sturdy Sheet</span><i>→</i><span>Plaque de Naquadah</span><i>→</i><span>Presse</span></div><p><b>Deux boucles par anneau.</b></p></article>
        <article><h3>9 corps de chevrons</h3><p><b>Base :</b> 1 Polished Rose Quartz.</p><div><span>Plaque de Naquadah</span><i>→</i><span>Brass Sheet</span><i>→</i><span>Electron Tube</span><i>→</i><span>Presse</span></div><p><b>Deux boucles par corps.</b></p></article>
      </div>
      <p class="sgu-note">Les Deployers doivent recevoir les ingrédients dans cet ordre. L’objet intermédiaire revient au début de la ligne jusqu’à la fin de la deuxième boucle.</p>
      ${checkpoint('Sorties de ligne :', '14 blocs d’anneau terminés et 9 corps de chevrons incomplets.')}`)}

    ${step(12, 'Fabriquer les composants', 'Mechanical Crafting', 'Terminer les chevrons, la base, le DHD et l’interface.', `
      <div class="sgu-crafting-grid">
        <article><h3>Chevron · 3 × 3</h3><pre> T \nEIM\n PR</pre><span>T Transfer · E Energy · I corps incomplet · M Materialization · P Precision Mechanism · R Redstone Link</span></article>
        <article><h3>Base · 5 × 3</h3><pre>SPTPS\nBMCMB\nSPGPS</pre><span>S Sturdy Sheet · P plaque · T Transfer · B Brass Casing · M Precision Mechanism · C Control · G Communication</span></article>
        <article><h3>DHD · 5 × 3</h3><pre>BEBEB\nPMAMP\nECROE</pre><span>B Stone Button · E Electron Tube · P plaque · M Precision Mechanism · A Brass Casing · C Communication · R Redstone Link · O Ender Eye</span></article>
        <article><h3>Interface · 5 × 4</h3><pre>N W N\nK E K\nC B R\nN W N</pre><span>N plaque · W Copper Spool · K Capacitor · E Energy · C Communication · B Brass Casing · R Redstone Link</span></article>
      </div>
      ${checkpoint('Inventaire final :', '14 anneaux + 9 chevrons + 1 base + 1 DHD + 1 Basic Interface.')}`)}

    ${step(13, 'Installer la porte', 'Construction', 'Monter l’anneau et former la structure.', `
      <div class="sgu-build-layout">
        <figure><img src="${A}official-classic-stargate-structure.png" alt="Structure exacte de la porte classique" loading="lazy"><figcaption>Vue de face officielle : base au centre inférieur, intérieur entièrement vide.</figcaption></figure>
        <ol class="sgu-actions">
          <li><b>Pose la base en bas, au centre.</b><span>Sa face avant doit regarder vers la zone de passage.</span></li>
          <li><b>Reproduis exactement le cercle.</b><span>Place les 14 anneaux et les 9 chevrons aux positions illustrées.</span></li>
          <li><b>Vérifie l’ouverture.</b><span>Aucun bloc ne doit occuper l’intérieur ou remplacer un élément du contour.</span></li>
          <li><b>Clique la base à main nue.</b><span>Les vingt-quatre blocs se convertissent en une porte animée.</span></li>
        </ol>
      </div>
      ${checkpoint('Résultat visible :', 'les blocs séparés deviennent une seule porte formée et animée.')}`)}

    ${step(14, 'Installer la porte', 'Alimentation', 'Relier l’interface à un véritable stock externe.', `
      <div class="sgu-power-line"><b>Centrale ou accumulateurs</b><i>→ câble FE →</i><b>Basic Interface</b><i>→ sans câble →</i><strong>Porte</strong></div>
      <ol class="sgu-actions">
        <li><b>Pose l’interface face à la porte.</b><span>Le côté noir regarde vers l’extérieur ; la face de communication regarde la porte.</span></li>
        <li><b>Relie le réseau FE sur une autre face.</b><span>L’interface et la porte acceptent jusqu’à 50 000 FE/t dans la configuration Régalade.</span></li>
        <li><b>Charge au minimum le tampon interne.</b><span>La porte contient 1,36 MFE, mais un appel de 60 secondes demande 6,4 MFE au total.</span></li>
      </ol>
      <div class="sgu-metrics compact"><div><b>1 MFE</b><span>ouverture</span></div><div><b>4 500 FE/t</b><span>maintien</span></div><div><b>6,4 MFE</b><span>60 secondes</span></div></div>
      ${checkpoint('Test sans appel :', 'Jade ou l’interface doit montrer que l’énergie entre réellement dans la porte.')}`)}

    ${step(15, 'Effectuer le voyage', 'Adresse et DHD', 'Lire une adresse, appeler et fermer depuis l’arrivée.', `
      <ol class="sgu-actions numbered">
        <li><b>Lis ta propre adresse.</b><span>Clic droit sur un bloc de la porte avec la [Wrench / Clé] Create ; copie l’adresse affichée dans le chat.</span></li>
        <li><b>Pose le DHD à moins de 16 blocs.</b><span>Ouvre son interface et vérifie qu’il contrôle la porte.</span></li>
        <li><b>Procure-toi une destination.</b><span>Utilise l’adresse d’une porte sauvage, du spawn ou d’un autre joueur.</span></li>
        <li><b>Compose les symboles dans l’ordre.</b><span>Ajoute le point d’origine à la fin, puis presse le bouton central.</span></li>
        <li><b>Recule pendant le vortex initial.</b><span>Ne traverse qu’une fois le passage stabilisé.</span></li>
        <li><b>Ferme depuis l’autre côté.</b><span>Sur Régalade, le DHD d’arrivée peut couper la connexion et arrêter immédiatement la dépense.</span></li>
      </ol>
      <p class="sgu-warning"><b>Sécurité :</b> entrer par l’arrière de la porte reste mortel. Le passage stable est bidirectionnel, mais uniquement par les faces avant.</p>
      ${checkpoint('Premier voyage réussi :', 'tu peux revenir, conserver les deux adresses et couper la connexion depuis le côté où tu te trouves.')}`)}

    ${step(16, 'Après le premier voyage', 'Dépannage', 'Identifier le problème par son symptôme.', `
      <div class="sgu-diagnosis">
        <article><b>Le Mixer refuse la scorie</b><span>Vérifie les quatre matrices, quatre briquettes, quatre flux, 250 mB de lave et le Blaze Burner surchauffé.</span></article>
        <article><b>Le Bulk Freezing ne produit rien</b><span>Le ventilateur doit souffler à travers la neige poudreuse avant d’atteindre les granulés.</span></article>
        <article><b>Le billet reste incomplet</b><span>Chaque boucle demande flux, 125 mB de lave, presse et scie, dans cet ordre, quatre fois.</span></article>
        <article><b>Le Liquidizer reste arrêté</b><span>Contrôle le cristal, les 100 mB de lave, l’entrée FE et l’espace disponible dans la sortie liquide.</span></article>
        <article><b>Le Crystallizer reste arrêté</b><span>Vérifie la Crystal Base, les deux réactifs, 100 mB de Liquid Naquadah et le réseau FE.</span></article>
        <article><b>Les blocs ne forment pas la porte</b><span>Compare les 14 anneaux, 9 chevrons et la base à l’image, puis clique la base à main nue.</span></article>
        <article><b>La clé n’affiche aucune adresse</b><span>Vise un bloc appartenant à la porte déjà formée et utilise bien la clé Create en main principale.</span></article>
        <article><b>La connexion coupe rapidement</b><span>Le stock externe est vide ou ne fournit pas les 4 500 FE/t nécessaires au maintien.</span></article>
      </div>`)}

    ${step(17, 'Après le premier voyage', 'Après le prototype', 'Réutiliser l’usine au lieu de recommencer de zéro.', `
      <p class="sgu-copy">La première porte finance toute l’infrastructure : raffinerie, Liquidizer, Crystallizer, circuits de traitement et mur de Mechanical Crafters. Conserve-les comme une usine communautaire.</p>
      <div class="sgu-next-grid">
        <article><b>Une seconde porte</b><span>Elle réutilise les machines existantes et demande 19 fournées selon la nomenclature actuelle.</span></article>
        <article><b>Changer d’apparence</b><span>Fabrique ensuite les cristaux d’amélioration ou de variante sans reconstruire la porte classique.</span></article>
        <article><b>Industrialiser</b><span>Automatise une branche à la fois et conserve des stockages tampon entre les procédés.</span></article>
      </div>
      ${checkpoint('Règle utile :', 'ne détruis pas l’usine après le premier voyage ; sa valeur principale est de rendre les portes suivantes beaucoup plus accessibles.')}`)}
  `;

  oldGuide.replaceWith(guided);
  root.insertBefore(general, guided);
  tabs.innerHTML = `
    <button class="sgx-tab active" id="sgx-general-tab" type="button" role="tab" aria-selected="true" aria-controls="sgx-general">Fonctionnement général</button>
    <button class="sgx-tab" id="sgx-guide-tab" type="button" role="tab" aria-selected="false" aria-controls="sgx-guide" tabindex="-1">Première porte</button>
    <button class="sgx-tab" id="sgx-reference-tab" type="button" role="tab" aria-selected="false" aria-controls="sgx-reference" tabindex="-1">Référence technique</button>`;

  const networkRules = reference.querySelector('#sgx-ref-reseau .sgx-bullets');
  if (networkRules) {
    networkRules.insertAdjacentHTML('beforeend', '<li>Clic droit avec la clé Create sur une porte formée : son adresse apparaît dans le chat.</li><li>Les deux extrémités peuvent fermer la connexion ; le passage stable reste bidirectionnel.</li>');
  }

  const buttons = [...tabs.querySelectorAll('[role="tab"]')];
  const panels = [general, guided, reference];
  const storageKey = 'regalade-stargate-view-v2';
  const select = mode => {
    const safeMode = ['general', 'guide', 'reference'].includes(mode) ? mode : 'general';
    buttons.forEach(button => {
      const selected = button.id === `sgx-${safeMode}-tab`;
      button.classList.toggle('active', selected);
      button.setAttribute('aria-selected', String(selected));
      button.tabIndex = selected ? 0 : -1;
    });
    panels.forEach(panel => { panel.hidden = panel.id !== `sgx-${safeMode}`; });
    try { localStorage.setItem(storageKey, safeMode); } catch (_) { /* Storage is optional. */ }
    document.dispatchEvent(new CustomEvent('regalade:tutorial-content-changed'));
  };

  buttons.forEach((button, index) => {
    const mode = button.id.replace('sgx-', '').replace('-tab', '');
    button.addEventListener('click', () => select(mode));
    button.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? buttons.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + buttons.length) % buttons.length;
      buttons[next].focus();
      buttons[next].click();
    });
  });

  let saved = 'general';
  try { saved = localStorage.getItem(storageKey) || 'general'; } catch (_) { /* Storage is optional. */ }
  select(saved);
  root.dataset.survivalUpgrade = 'ready';
})();
