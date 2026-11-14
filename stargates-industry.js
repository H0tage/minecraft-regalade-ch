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
      <h1>Construire sa première porte.</h1>
      <p>Ce parcours construit une véritable usine de bout en bout : un prototype manuel, des lignes reproductibles, les vingt-quatre blocs de la porte, puis l’énergie et le premier appel.</p>
      <p class="sgu-version">Première installation : 21 fournées · 168 cristaux cryostabilisés · 64 plaques</p>
      <div class="sgu-project-line"><b>Prototype</b><i>→</i><b>Raffinerie</b><i>→</i><b>Plaques et cristaux</b><i>→</i><b>24 blocs</b><i>→</i><b>Énergie</b><i>→</i><strong>Premier voyage</strong></div>
    </header>

    ${step(1, 'Préparer le projet', 'Le résultat final', 'Définir l’installation complète avant de produire.', `
      <p class="sgu-copy">L’objectif n’est pas seulement de fabriquer un anneau. Une installation utilisable comprend une <strong>porte classique formée</strong>, un <strong>[DHD / Console de composition]</strong>, une <strong>[Basic Interface / Interface basique]</strong> et une alimentation FE externe.</p>
      <div class="sgu-target-grid">
        <article><b>Structure</b><span>1 base + 14 anneaux + 9 chevrons.</span></article>
        <article><b>Commande</b><span>1 DHD placé à portée de la porte.</span></article>
        <article><b>Énergie</b><span>1 interface reliée aux accumulateurs ou à la centrale.</span></article>
        <article><b>Destination</b><span>Une adresse valide appartenant à une autre porte.</span></article>
      </div>
      <div class="sgu-readiness">
        <h3>Les verrous de progression</h3>
        <p>Ne lance pas la production de masse avant d’avoir accès à ces quatre éléments. La chaîne est volontairement endgame.</p>
        <div><span>Nether</span><span>Blaze Burner, Blaze Powder, quartz et Cinder Flour</span></div>
        <div><span>End</span><span>Une tête de dragon pour l’activation finale du Naquadah</span></div>
        <div><span>Create</span><span>Brass, Precision Mechanisms, Mechanical Crafters et assemblage séquencé</span></div>
        <div><span>Électricité</span><span>Réseau FE pour les machines et au moins 6,4 MFE disponibles pour un appel complet</span></div>
      </div>
      ${checkpoint('Projet retenu :', 'une porte classique avec son DHD alimenté, son interface, une destination connue et un stock externe capable de financer le voyage.')}`)}

    ${step(2, 'Préparer le projet', 'Carte de l’usine', 'Voir où va la matière avant de poser les machines.', `
      <p class="sgu-copy">L’usine possède un tronc commun puis deux branches. Les <strong>cristaux cryostabilisés</strong> sont le carrefour : certains deviennent des plaques, les autres alimentent l’électronique.</p>
      <div class="sgu-factory-map" role="img" aria-label="Carte de production de la porte des étoiles">
        <div class="sgu-map-row"><span>Trois précurseurs</span><i>→</i><span>Scories instables</span><i>→</i><span>Raffinerie</span></div>
        <div class="sgu-map-drop"><i>↓</i><strong>168 cristaux cryostabilisés</strong><i>↓</i></div>
        <div class="sgu-map-split">
          <div><b>128 cristaux</b><i>↓</i><span>Métallurgie</span><i>↓</i><strong>64 plaques</strong><small>Structure et machines</small></div>
          <div><b>33 cristaux</b><i>↓</i><span>Crystal Bases</span><i>↓</i><strong>33 cristaux technologiques</strong><small>Commande et fonctionnement</small></div>
          <div><b>7 cristaux</b><i>↓</i><span>Liquidizer</span><i>↓</i><strong>3 500 mB de liquide</strong><small>Alimente le Crystallizer</small></div>
        </div>
      </div>
      <p class="sgu-note"><b>Principe de l’atelier :</b> place un stockage étiqueté entre chaque grande transformation. Une panne ne doit jamais bloquer ou mélanger toute la chaîne.</p>
      <details class="sgu-details"><summary>Voir les principales ressources consommées</summary><div class="sgu-details-body">
        <p><b>Raffinerie, 21 fournées :</b> 336 améthystes, 84 or, 84 zinc, 168 obsidiennes, 168 Netherracks, 168 Blaze Powder, 168 redstones, 84 glowstones, 21 000 mB de potion étrange et environ 21 seaux de lave avec marge.</p>
        <p><b>Électronique :</b> 33 améthystes, 75 quartz, 39 diamants, 28 Ender Pearls, 129 redstones et 30 glowstones, en plus des cristaux réservés.</p>
        <p><b>Composants Create principaux :</b> 14 Andesite Casings, 28 Iron Sheets, 40 Sturdy Sheets, 24 Brass Sheets, 26 Electron Tubes, 16 Precision Mechanisms, 11 Redstone Links et 4 Brass Casings.</p>
      </div></details>
      <p class="sgu-warning"><b>Ne rassemble pas encore les vingt et une fournées :</b> valide d’abord le prototype. Une erreur répétée vingt et une fois coûterait beaucoup plus cher qu’une fournée ratée.</p>`)}

    ${step(3, 'Construire le prototype', 'Atelier minimal', 'Rassembler uniquement les postes de la première fournée.', `
      <p class="sgu-copy">Installe les machines dans un espace lisible. Elles peuvent partager la même transmission, mais garde assez de place pour observer chaque sortie et intervenir à la main.</p>
      <div class="sgu-workshop-grid">
        <article><h3>Préparation</h3><ul><li>Millstone ou Crushing Wheels</li><li>cuve d’eau pour produire la potion</li><li>Mechanical Mixer + Basin</li><li>Blaze Burner chauffé puis surchauffé</li></ul></article>
        <article><h3>Traitement</h3><ul><li>Mechanical Press et Mechanical Saw</li><li>3 Encased Fans minimum</li><li>eau, feu ou lave, neige poudreuse</li><li>tête de dragon conservée pour plus tard</li></ul></article>
        <article><h3>Fluides</h3><ul><li>1 petite cuve pour la potion</li><li>1 cuve séparée pour la lave</li><li>tuyaux et Mechanical Pumps</li><li>Spout pour les recettes de remplissage</li></ul></article>
        <article><h3>Logistique</h3><ul><li>tapis ou Depots entre les postes</li><li>6 stockages étiquetés</li><li>filtres pour les sorties finales</li><li>lunettes Create pour contrôler les recettes</li></ul></article>
      </div>
      <div class="sgu-blueprint" aria-label="Organisation recommandée du prototype">
        <div class="sgu-blueprint-title"><b>Organisation recommandée</b><span>Vue du dessus — les trois branches convergent vers la synthèse.</span></div>
        <div class="sgu-lane"><span class="input">Améthyste + potion</span><i>→</i><span class="machine">Mixer chauffé</span><i>→</i><span class="buffer">Matrices</span></div>
        <div class="sgu-lane"><span class="input">Obsidienne + Cinder</span><i>→</i><span class="machine">Presse chauffée</span><i>→</i><span class="buffer">Briquettes</span></div>
        <div class="sgu-lane"><span class="input">Blaze + redstone</span><i>→</i><span class="machine">Mixer</span><i>→</i><span class="buffer">Flux</span></div>
        <div class="sgu-converge"><i>↓</i><strong>Mixer surchauffé de synthèse</strong></div>
      </div>
      ${checkpoint('Atelier prêt :', 'chaque branche possède son poste, sa source de fluide éventuelle et son stockage de sortie.')}`)}

    ${step(4, 'Construire le prototype', 'Branche 1', 'Produire quatre matrices cristallines.', `
      <div class="sgu-station-head">${icon('crystalline-matrix.png', 'Matrice cristalline')}<div><b>Entrée d’une fournée</b><span>16 éclats d’améthyste · 4 or · 4 zinc · 1 000 mB de potion étrange</span></div><strong>4 matrices</strong></div>
      <div class="sgu-two-column">
        <article><h3>Préparer la potion avec Create</h3><ol class="sgu-plain-steps"><li>Injecte 1 000 mB d’eau dans un Basin chauffé.</li><li>Ajoute 1 Nether Wart et mélange avec le Mechanical Mixer.</li><li>Récupère les 1 000 mB de potion étrange dans une cuve dédiée.</li><li>Relie cette réserve au Basin des matrices avec une pompe orientée vers celui-ci.</li></ol><p class="sgu-card-note">Des potions brassées peuvent aussi être vidées avec un Item Drain, mais la production liquide est plus simple à répéter.</p></article>
        <article><h3>Mélanger</h3><ol class="sgu-plain-steps"><li>Broie les 16 éclats en 16 poudres d’améthyste.</li><li>Place le Basin au-dessus d’un Blaze Burner chauffé.</li><li>Ajoute les poudres, l’or et le zinc.</li><li>Injecte exactement 1 000 mB de potion puis démarre le Mixer.</li></ol></article>
      </div>
      <div class="sgu-side-diagram"><span class="machine top">Mechanical Mixer</span><i>↓</i><span class="machine">Basin</span><i>↓</i><span class="catalyst">Blaze Burner chauffé</span><small>La recette exige la chaleur normale, pas le niveau surchauffé.</small></div>
      ${checkpoint('Sortie de la branche 1 :', '4 [Crystalline Matrices / Matrices cristallines] dans leur stockage dédié.')}`)}

    ${step(5, 'Construire le prototype', 'Branches 2 et 3', 'Produire les briquettes et les flux.', `
      <div class="sgu-branch-grid">
        <article>${icon('refractory-briquette.png', 'Briquette réfractaire')}<h3>4 briquettes réfractaires</h3><ol><li>Broie 8 obsidiennes en Powdered Obsidian.</li><li>Broie 8 Netherracks dans les Crushing Wheels pour obtenir au moins 8 Cinder Flour.</li><li>Place les 16 poudres dans un Basin chauffé sous une Mechanical Press.</li><li>Injecte 250 mB de lave et laisse la presse compacter.</li></ol></article>
        <article>${icon('catalytic-flux.png', 'Flux catalytique')}<h3>8 flux catalytiques</h3><ol><li>Place 8 Blaze Powder dans un second Basin.</li><li>Ajoute 8 redstones et 4 glowstones.</li><li>Mélange avec le Mechanical Mixer ; aucune chaleur n’est nécessaire.</li><li>Sépare immédiatement la sortie en deux piles de 4.</li></ol></article>
      </div>
      <div class="sgu-batch-logic"><div><b>4 flux</b><span>partent maintenant dans la synthèse</span></div><i>+</i><div><b>4 flux</b><span>sont réservés au futur billet</span></div><i>=</i><strong>8 flux utilisés sans perte</strong></div>
      ${checkpoint('Avant la synthèse :', '4 matrices, 4 briquettes et 4 flux disponibles ; 4 autres flux sont rangés dans le stock métallurgie.')}`)}

    ${step(6, 'Construire le prototype', 'Convergence', 'Synthétiser quatre scories instables.', `
      <div class="sgu-process"><b>4 matrices</b><i>+</i><b>4 briquettes</b><i>+</i><b>4 flux</b><i>+</i><b>250 mB lave</b><i>→</i><strong>Mixer surchauffé</strong></div>
      <ol class="sgu-actions">
        <li><b>Place le Basin au-dessus d’un Blaze Burner surchauffé.</b><span>Le niveau chauffé ordinaire ne suffit pas.</span></li>
        <li><b>Insère les quatre ingrédients et la lave.</b><span>Vérifie dans les lunettes Create que la recette est reconnue.</span></li>
        <li><b>Laisse travailler environ 60 secondes.</b><span>Cette synthèse est volontairement le goulot d’étranglement de la raffinerie.</span></li>
      </ol>
      ${checkpoint('Sortie attendue :', '4 [Unstable Naquadah Slag / Scories instables de Naquadah].')}`)}

    ${step(7, 'Construire le prototype', 'Ligne de raffinage', 'Construire les cinq transformations dans le bon ordre.', `
      <p class="sgu-copy">Commence par des Depots séparés, puis relie-les avec des tapis lorsque chaque poste fonctionne. Cette ligne double la quantité au passage dans les Crushing Wheels : quatre scories deviennent huit cristaux.</p>
      <div class="sgu-refining-line">
        <article>${icon('unstable-slag.png', 'Scorie instable')}<b>Presse</b><span>4 scories → 4 briquettes brutes</span></article><i>→</i>
        <article>${icon('raw-briquette.png', 'Briquette brute')}<b>Bulk Blasting</b><span>souffle à travers feu ou lave → 4 Naquadahs calcinés</span></article><i>→</i>
        <article>${icon('calcined-naquadah.png', 'Naquadah calciné')}<b>Crushing Wheels</b><span>4 unités → 8 poudres impures</span></article><i>→</i>
        <article>${icon('impure-powder.png', 'Poudre impure')}<b>Bulk Washing</b><span>souffle à travers eau → 8 granulés purifiés</span></article><i>→</i>
        <article>${icon('purified-granules.png', 'Granulé purifié')}<b>Bulk Freezing</b><span>souffle à travers neige poudreuse → 8 cristaux</span></article>
      </div>
      <div class="sgu-bulk-lessons">
        <article><h3>Vue latérale d’un procédé Bulk</h3><div class="sgu-bulk-diagram"><span class="fan">Ventilateur</span><i>»»</i><span class="catalyst">Feu, eau ou neige</span><i>»»</i><span class="belt">Objet sur tapis ou Depot</span></div><p>Le souffle traverse le catalyseur puis atteint l’objet. L’objet n’est jamais jeté dans le fluide.</p></article>
        <article><h3>Disposition conseillée</h3><div class="sgu-bulk-diagram"><span class="buffer">Entrée</span><i>→</i><span class="machine">Poste</span><i>→</i><span class="buffer">Sortie</span></div><p>Un coffre ou un Depot avant et après chaque étape rend la panne immédiatement visible.</p></article>
      </div>
      <ol class="sgu-actions">
        <li><b>Presse les quatre scories.</b><span>Chaque scorie devient une briquette brute.</span></li>
        <li><b>Fais cuire les briquettes dans le souffle chaud.</b><span>Un four fonctionne aussi pour le test, mais le Bulk Blasting s’intègre mieux à la ligne.</span></li>
        <li><b>Passe les quatre unités dans les Crushing Wheels.</b><span>La sortie doit contenir huit poudres impures.</span></li>
        <li><b>Lave les huit poudres.</b><span>Le souffle traverse l’eau avant d’atteindre les objets.</span></li>
        <li><b>Fais geler les huit granulés.</b><span>Le souffle traverse la neige poudreuse : tu obtiens les cristaux cryostabilisés.</span></li>
      </ol>
      ${checkpoint('Ligne construite :', 'les cinq postes produisent correctement 8 cristaux à partir des 4 scories.')}`)}

    ${step(8, 'Valider le prototype', 'Premier cycle complet', 'Faire circuler une fournée sans automatiser les quantités.', `
      <p class="sgu-copy">Exécute maintenant la chaîne entière avec les quantités d’une seule fournée. Déplace les objets manuellement entre les stocks : le but est de valider la recette, pas encore la vitesse.</p>
      <div class="sgu-batch-ledger">
        <div><b>Entrée</b><span>16 améthystes · 4 or · 4 zinc · 8 obsidiennes · 8 Netherracks · 8 Blaze Powder · 8 redstones · 4 glowstones · 1 000 mB potion · 500 mB lave</span></div>
        <i>→</i><div><b>Sortie immédiate</b><span>8 cristaux cryostabilisés</span></div>
        <i>+</i><div><b>Réserve</b><span>4 flux catalytiques pour la métallurgie</span></div>
      </div>
      <p class="sgu-note"><b>Pourquoi cette fournée est pratique :</b> ses 8 cristaux et ses 4 flux réservés correspondent exactement aux besoins d’un billet stabilisé, qui donnera ensuite 4 plaques.</p>
      ${checkpoint('Prototype validé :', '8 cristaux et 4 flux sont stockés, sans objet intermédiaire bloqué dans une machine.')}`)}

    ${step(9, 'Industrialiser', 'Passage à l’échelle', 'Transformer le prototype en atelier reproductible.', `
      <p class="sgu-copy">Tu peux automatiser les tapis sans automatiser le dosage. La version la plus robuste utilise trois postes de précurseurs, une synthèse lente, puis la ligne de raffinage continue.</p>
      <div class="sgu-scale-grid">
        <article><span>1</span><div><b>Prépare les lots</b><p>Place dans trois coffres les ingrédients déjà comptés pour une fournée. N’alimente jamais le Basin depuis un vrac non contrôlé.</p></div></article>
        <article><span>2</span><div><b>Conserve des tampons</b><p>Stocke matrices, briquettes, flux, scories et cristaux séparément. Les tapis peuvent relier les postes après ces tampons.</p></div></article>
        <article><span>3</span><div><b>Dimensionne le goulot</b><p>La synthèse surchauffée dure environ 60 secondes. Accélérer uniquement la raffinerie ne raccourcira pas ce temps.</p></div></article>
        <article><span>4</span><div><b>Compte les sorties</b><p>Une fourniture réussie ajoute toujours 8 cristaux et 4 flux au stock métallurgie. Toute autre quantité signale une perte.</p></div></article>
      </div>
      <div class="sgu-industrial-lane"><span>3 postes de précurseurs</span><i>→</i><span>stocks tampons</span><i>→</i><strong>1 synthèse surchauffée</strong><i>→</i><span>5 postes de raffinage</span><i>→</i><span>coffre de comptage</span></div>
      ${checkpoint('Atelier industrialisé :', 'un nouveau lot peut être lancé sans retirer ni mélanger le contenu du lot précédent.')}`)}

    ${step(10, 'Industrialiser', 'Production de masse', 'Produire 168 cristaux et les répartir immédiatement.', `
      <p class="sgu-copy">Réalise vingt et une fournées au total, prototype compris. Chaque sortie rejoint d’abord le coffre de comptage, puis trois stockages séparés.</p>
      <div class="sgu-allocation">
        <article><b>128</b><span>pour fabriquer 64 plaques</span></article>
        <article><b>33</b><span>pour fabriquer 33 Crystal Bases</span></article>
        <article><b>7</b><span>pour produire 3 500 mB de Liquid Naquadah</span></article>
      </div>
      <div class="sgu-routing-diagram"><span class="source">Coffre : 168 cristaux</span><div><i>↙</i><b>128 · plaques</b></div><div><i>↓</i><b>33 · bases</b></div><div><i>↘</i><b>7 · liquide</b></div></div>
      <p class="sgu-warning"><b>Répartis avant de fabriquer :</b> si les 168 cristaux passent accidentellement dans la métallurgie, tu devras relancer cinq fournées pour l’électronique.</p>
      ${checkpoint('Total obligatoire :', '168 cristaux répartis 128 / 33 / 7, plus 84 flux métallurgiques issus des fournées.')}`)}

    ${step(11, 'Fabriquer les plaques', 'Atelier de métallurgie', 'Construire la boucle du billet avant de consommer les cristaux.', `
      <div class="sgu-process"><b>8 cristaux</b><i>→</i><b>Compacting chauffé</b><i>→</i><strong>1 billet incomplet</strong></div>
      <p class="sgu-copy">Le billet incomplet doit parcourir quatre fois la même séquence. Construis une boucle fermée et place une sortie filtrée sur le billet stabilisé : les objets incomplets continuent de tourner, le produit fini quitte la boucle.</p>
      <div class="sgu-loop-blueprint" role="img" aria-label="Boucle d’assemblage du billet de Naquadah">
        <div class="sgu-loop-track"><span class="machine">Deployer<br><small>1 flux</small></span><i>→</i><span class="machine">Spout<br><small>125 mB lave</small></span><i>→</i><span class="machine">Press</span><i>→</i><span class="machine">Saw</span></div>
        <div class="sgu-loop-return"><i>↑</i><span>retour des billets incomplets · 4 passages</span><i>↵</i></div>
        <div class="sgu-loop-exit"><strong>Sortie avec filtre : billet stabilisé uniquement</strong><i>→</i><span class="buffer">Stock final</span></div>
      </div>
      <ol class="sgu-actions">
        <li><b>Alimente le Deployer en flux catalytique.</b><span>Chaque passage consomme un flux ; un billet complet en demande donc quatre.</span></li>
        <li><b>Relie le Spout à la lave.</b><span>Chaque passage consomme 125 mB, soit 500 mB par billet.</span></li>
        <li><b>Place la presse puis la scie dans cet ordre.</b><span>Inverser les deux machines empêche la recette de progresser.</span></li>
        <li><b>Filtre la sortie sur le billet stabilisé.</b><span>Teste avec le billet du prototype avant d’envoyer les 120 cristaux restants.</span></li>
      </ol>
      ${checkpoint('Boucle validée :', 'le billet sort après quatre tours ; 4 flux et 500 mB de lave ont été consommés.')}`)}

    ${step(12, 'Fabriquer les plaques', 'Activation finale', 'Transformer seize billets en soixante-quatre plaques.', `
      <div class="sgu-metallurgy-line">
        ${icon('stabilized-billet.png', 'Billet stabilisé')}<b>Billet stabilisé</b><i>→ Scie →</i>${icon('dormant-ingot.png', 'Lingot dormant')}<b>4 lingots dormants</b><i>→ Bulk Ending →</i><b>4 lingots éveillés</b><i>→ Presse →</i>${icon('naquadah-plate.png', 'Plaque de Naquadah')}<strong>4 plaques</strong>
      </div>
      <div class="sgu-bulk-lessons single">
        <article><h3>Poste de [Bulk Ending / Activation draconique]</h3><div class="sgu-bulk-diagram"><span class="fan">Ventilateur</span><i>»»</i><span class="catalyst">Tête de dragon</span><i>»»</i><span class="belt">Lingots dormants</span></div><p>La tête reste en place et n’est pas consommée. Le souffle doit la traverser avant d’atteindre les lingots.</p></article>
      </div>
      <ol class="sgu-actions">
        <li><b>Produis seize billets.</b><span>Chaque billet consomme 8 cristaux, 4 flux et 500 mB de lave.</span></li>
        <li><b>Découpe chaque billet en quatre lingots dormants.</b><span>Tu dois obtenir 64 lingots.</span></li>
        <li><b>Active-les avec la tête de dragon.</b><span>Ne presse pas les lingots avant cette dernière transformation.</span></li>
        <li><b>Presse les 64 lingots éveillés.</b><span>Chaque lingot donne une plaque.</span></li>
      </ol>
      ${checkpoint('Métallurgie terminée :', '64 plaques de Naquadah dans le stock plaques ; 20 flux de réserve doivent encore rester.')}`)}

    ${step(13, 'Construire l’électronique', 'Machines spécialisées', 'Fabriquer puis installer le Liquidizer et le Crystallizer.', `
      <p class="sgu-copy">Les deux [Reaction Chambers / Chambres de réaction] sont des composants de recette : elles seront absorbées par les deux machines finales.</p>
      <div class="sgu-machine-grid">
        <article>${icon('reaction-chamber.png', 'Reaction Chamber')}<h3>2 Reaction Chambers</h3><pre>SES\nBMB\nSDS</pre><span>S : Sturdy Sheet · E : Electron Tube · B : Brass Sheet · M : Precision Mechanism · D : Diamond</span></article>
        <article>${icon('naquadah-liquidizer.png', 'Naquadah Liquidizer')}<h3>1 Naquadah Liquidizer</h3><pre>PFP\nBRB\nPMP</pre><span>P : plaque · F : Fluid Tank · B : Brass Sheet · R : Reaction Chamber · M : Mechanical Pump</span></article>
        <article>${icon('crystallizer.png', 'Crystallizer')}<h3>1 Crystallizer</h3><pre>PDP\nERE\nPMP</pre><span>P : plaque · D : Diamond · E : Electron Tube · R : Reaction Chamber · M : Precision Mechanism</span></article>
      </div>
      <div class="sgu-blueprint compact" aria-label="Disposition des machines de cristallisation">
        <div class="sgu-lane"><span class="buffer">Cristaux réservés</span><i>→</i><span class="machine">Liquidizer</span><i>→ tuyau →</i><span class="buffer">Cuve de Naquadah</span></div>
        <div class="sgu-lane"><span class="buffer">Bases + réactifs</span><i>→</i><span class="machine">Crystallizer</span><i>→</i><span class="buffer">Cristaux triés</span></div>
        <div class="sgu-converge horizontal"><span>Réseau FE</span><i>→</i><strong>1 000 FE/t par machine en fonctionnement</strong></div>
      </div>
      <ol class="sgu-actions">
        <li><b>Pose une cuve entre les deux machines.</b><span>Le Liquidizer la remplit ; le Crystallizer y prélève ensuite son liquide.</span></li>
        <li><b>Relie les fluides avec des tuyaux et des pompes.</b><span>Contrôle le sens des pompes avec la clé Create.</span></li>
        <li><b>Relie chaque machine au réseau FE.</b><span>Chacune consomme 1 000 FE/t pendant le traitement et possède un tampon de 1 MFE.</span></li>
        <li><b>Garde les entrées d’objets accessibles.</b><span>Le premier lot sera chargé manuellement pour apprendre l’interface.</span></li>
      </ol>
      ${checkpoint('Atelier électrique prêt :', 'les deux machines reçoivent du FE et la cuve intermédiaire est reliée sans mélange avec la lave.')}`)}

    ${step(14, 'Construire l’électronique', 'Naquadah liquide et socles', 'Préparer les deux entrées du Crystallizer.', `
      <div class="sgu-two-column">
        <article><h3>3 500 mB de [Liquid Naquadah / Naquadah liquide]</h3><p>Charge successivement les 7 cristaux réservés. Pour chaque opération, le Liquidizer reçoit aussi 100 mB de lave et produit 500 mB dans la cuve.</p><div class="sgu-mini-process"><b>1 cristal + 100 mB lave</b><i>→</i><strong>500 mB liquide</strong></div><p><b>Contrôle :</b> après sept cycles, la cuve contient exactement 3 500 mB.</p></article>
        <article><h3>33 [Crystal Bases / Bases de cristal]</h3><p>Fabrique les socles à l’établi. Chaque base consomme 1 cristal cryostabilisé, 1 améthyste, 2 quartz et 1 diamant.</p><div class="sgu-mini-process"><b>Cristal + améthyste + 2 quartz + diamant</b><i>→</i><strong>Crystal Base</strong></div><p><b>Contrôle :</b> le coffre électronique doit contenir les 33 bases avant le premier cycle.</p></article>
      </div>
      ${checkpoint('Avant le Crystallizer :', '33 Crystal Bases et 3 500 mB de Liquid Naquadah disponibles.')}`)}

    ${step(15, 'Construire l’électronique', 'Cristallisation', 'Fabriquer et trier les trente-trois cristaux technologiques.', `
      <p class="sgu-copy">Chaque opération du Crystallizer consomme 1 Crystal Base, 100 mB de Liquid Naquadah et les deux réactifs indiqués.</p>
      <div class="sgu-crystal-grid">
        <article><b>10 × Energy</b><span>3 redstones + 3 redstones</span></article>
        <article><b>10 × Transfer</b><span>3 redstones + 3 glowstones</span></article>
        <article><b>9 × Materialization</b><span>3 Ender Pearls + 3 redstones</span></article>
        <article><b>3 × Communication</b><span>3 quartz + 3 redstones</span></article>
        <article><b>1 × Control</b><span>3 diamants + 3 redstones</span></article>
      </div>
      <ol class="sgu-actions">
        <li><b>Teste d’abord un cristal Energy.</b><span>Insère une base, 3 redstones dans chaque entrée de réactif et laisse la machine prendre 100 mB.</span></li>
        <li><b>Vérifie la sortie et la cuve.</b><span>Le cristal terminé doit apparaître et le niveau de liquide doit diminuer de 100 mB.</span></li>
        <li><b>Produis ensuite par familles.</b><span>Termine les dix Energy avant de changer les réactifs, puis passe aux Transfer, Materialization, Communication et Control.</span></li>
        <li><b>Utilise cinq stockages étiquetés.</b><span>Mélanger les cristaux rend le comptage des composants finaux inutilement difficile.</span></li>
      </ol>
      ${checkpoint('Compte avant de continuer :', '10 Energy, 10 Transfer, 9 Materialization, 3 Communication et 1 Control. Il reste 200 mB de liquide.')}`)}

    ${step(16, 'Fabriquer les composants', 'Deux lignes séquencées', 'Produire les quatorze anneaux et neuf corps de chevrons.', `
      <p class="sgu-copy">Ces deux recettes demandent deux passages. Elles utilisent la même logique que le billet, mais pas les mêmes ingrédients : construis deux petites boucles ou change soigneusement les filtres entre les séries.</p>
      <div class="sgu-sequence-grid">
        <article><h3>14 [Ring Blocks / Blocs d’anneau]</h3><p><b>Objet de départ :</b> 1 Andesite Casing par anneau.</p><div><span>Deployer : Iron Sheet</span><i>→</i><span>Deployer : Sturdy Sheet</span><i>→</i><span>Deployer : plaque</span><i>→</i><span>Presse</span></div><p><b>Deux tours.</b> Filtre la sortie sur le bloc d’anneau terminé.</p></article>
        <article><h3>9 corps de chevrons incomplets</h3><p><b>Objet de départ :</b> 1 Polished Rose Quartz par chevron.</p><div><span>Deployer : plaque</span><i>→</i><span>Deployer : Brass Sheet</span><i>→</i><span>Deployer : Electron Tube</span><i>→</i><span>Presse</span></div><p><b>Deux tours.</b> Filtre la sortie sur le corps incomplet terminé.</p></article>
      </div>
      <div class="sgu-sequence-rule"><b>Règle commune</b><span>objet de départ → quatre opérations → retour au début → deuxième passage → sortie filtrée</span></div>
      ${checkpoint('Sorties de ligne :', '14 blocs d’anneau terminés et 9 corps de chevrons incomplets.')}`)}

    ${step(17, 'Fabriquer les composants', 'Mechanical Crafting', 'Terminer les chevrons, la base, le DHD et l’interface.', `
      <p class="sgu-copy">Ces quatre recettes se réalisent avec des [Mechanical Crafters / Fabricateurs mécaniques] orientés vers une sortie commune. La taille indiquée correspond au rectangle réellement nécessaire.</p>
      <div class="sgu-crafting-grid">
        <article><h3>Chevron · 3 × 3</h3><pre> T \nEIM\n PR</pre><span>T Transfer · E Energy · I corps incomplet · M Materialization · P Precision Mechanism · R Redstone Link</span></article>
        <article><h3>Base · 5 × 3</h3><pre>SPTPS\nBMCMB\nSPGPS</pre><span>S Sturdy Sheet · P plaque · T Transfer · B Brass Casing · M Precision Mechanism · C Control · G Communication</span></article>
        <article><h3>DHD · 5 × 3</h3><pre>BEBEB\nPMAMP\nECROE</pre><span>B Stone Button · E Electron Tube · P plaque · M Precision Mechanism · A Brass Casing · C Communication · R Redstone Link · O Ender Eye</span></article>
        <article><h3>Interface · 5 × 4</h3><pre>N W N\nK E K\nC B R\nN W N</pre><span>N plaque · W Copper Spool · K Capacitor · E Energy · C Communication · B Brass Casing · R Redstone Link</span></article>
      </div>
      ${checkpoint('Inventaire final :', '14 anneaux + 9 chevrons + 1 base + 1 DHD + 1 Basic Interface.')}`)}

    ${step(18, 'Installer la porte', 'Construction', 'Monter l’anneau et former la structure.', `
      <div class="sgu-build-layout">
        <figure><img src="${A}official-classic-stargate-structure.png" alt="Structure exacte de la porte classique" loading="lazy"><figcaption>Vue de face officielle : base au centre inférieur, intérieur entièrement vide.</figcaption></figure>
        <ol class="sgu-actions">
          <li><b>Pose la base en bas, au centre.</b><span>Sa face avant doit regarder vers la zone de passage.</span></li>
          <li><b>Reproduis exactement le cercle.</b><span>Place les 14 anneaux et les 9 chevrons aux positions illustrées.</span></li>
          <li><b>Vérifie l’ouverture.</b><span>Aucun bloc ne doit occuper l’intérieur ou remplacer un élément du contour.</span></li>
          <li><b>Clique la base à main nue.</b><span>Les vingt-quatre blocs se convertissent en une porte animée.</span></li>
        </ol>
      </div>
      <p class="sgu-warning"><b>Zone de sécurité :</b> laisse au moins sept blocs entièrement libres devant la porte. Le vortex d’ouverture peut détruire les blocs, objets et entités présents dans cet axe.</p>
      ${checkpoint('Résultat visible :', 'les blocs séparés deviennent une seule porte formée et animée.')}`)}

    ${step(19, 'Installer la porte', 'Alimentation', 'Relier l’interface à un véritable stock externe.', `
      <div class="sgu-power-line"><b>Centrale ou accumulateurs</b><i>→ grand connecteur →</i><b>Basic Interface</b><i>→ contact direct →</i><strong>Porte</strong></div>
      <ol class="sgu-actions">
        <li><b>Colle l’interface directement à un bloc de la porte.</b><span>Aucun vide ni bloc intermédiaire : la face de communication touche la porte et le côté noir regarde vers l’extérieur.</span></li>
        <li><b>Relie le réseau FE sur une autre face.</b><span>L’interface et la porte acceptent jusqu’à 50 000 FE/t dans la configuration Régalade.</span></li>
        <li><b>Utilise un grand connecteur.</b><span>Le petit connecteur plafonne à 1 000 FE/t et ne peut pas couvrir les 4 500 FE/t de maintien ; le grand atteint 5 000 FE/t.</span></li>
        <li><b>Charge la porte et le stock externe.</b><span>La porte contient 1,36 MFE, mais un appel de 60 secondes demande 6,4 MFE au total.</span></li>
      </ol>
      <div class="sgu-metrics compact"><div><b>1 MFE</b><span>ouverture</span></div><div><b>4 500 FE/t</b><span>maintien</span></div><div><b>6,4 MFE</b><span>60 secondes</span></div></div>
      <div class="sgu-two-column energy-options">
        <article><h3>Voyage rare</h3><p>Charge complètement la porte et au moins 3 accumulateurs de 2 MFE. Quatre accumulateurs donnent une marge confortable.</p></article>
        <article><h3>Usage fréquent</h3><p>Construis une production réelle d’au moins 4 500 FE/t et conserve un tampon pour absorber l’ouverture initiale d’un million de FE.</p></article>
      </div>
      ${checkpoint('Test sans appel :', 'Jade ou l’interface montre que l’énergie entre réellement ; la porte est pleine et le stock externe dépasse 5,04 MFE.')}`)}

    ${step(20, 'Effectuer le voyage', 'Adresse et DHD', 'Préparer l’aller et le retour avant de composer.', `
      <ol class="sgu-actions">
        <li><b>Lis ta propre adresse.</b><span>Clic droit sur un bloc de la porte avec la [Wrench / Clé] Create ; copie l’adresse affichée dans le chat.</span></li>
        <li><b>Pose et alimente le DHD à moins de 16 blocs.</b><span>Relie-le au FE ou fournis-lui un conteneur énergétique chargé, puis vérifie qu’il contrôle la porte.</span></li>
        <li><b>Choisis une destination sûre.</b><span>Elle doit posséder une porte fonctionnelle, un DHD alimenté et assez d’énergie pour effectuer le retour après fermeture.</span></li>
        <li><b>Compose les nombres dans l’ordre.</b><span>Maintiens Maj pour afficher les numéros du DHD, saisis l’adresse, puis presse le bouton central : il ajoute automatiquement le Point d’origine et lance l’appel.</span></li>
        <li><b>Recule pendant le vortex initial.</b><span>Ne traverse qu’une fois le passage stabilisé.</span></li>
        <li><b>Ferme depuis l’autre côté.</b><span>Sur Régalade, le DHD d’arrivée peut couper la connexion et arrêter immédiatement la dépense.</span></li>
      </ol>
      <p class="sgu-warning"><b>Sécurité :</b> entrer par l’arrière de la porte reste mortel. Le passage stable est bidirectionnel, mais uniquement par les faces avant.</p>
      ${checkpoint('Premier voyage réussi :', 'les deux adresses sont conservées, le DHD d’arrivée est alimenté et tu peux couper puis recomposer la connexion pour revenir.')}`)}

    ${step(21, 'Après le premier voyage', 'Dépannage', 'Identifier le problème par son symptôme.', `
      <div class="sgu-diagnosis">
        <article><b>La potion n’arrive pas dans le Basin</b><span>Vérifie la pompe et son sens. La route recommandée produit 1 000 mB avec de l’eau et une Nether Wart ; des bouteilles peuvent aussi être vidées avec un Item Drain.</span></article>
        <article><b>Le Mixer refuse la scorie</b><span>Vérifie les quatre matrices, quatre briquettes, quatre flux, 250 mB de lave et le Blaze Burner surchauffé.</span></article>
        <article><b>Le Bulk Freezing ne produit rien</b><span>Le ventilateur doit souffler à travers la neige poudreuse avant d’atteindre les granulés.</span></article>
        <article><b>Le billet reste incomplet</b><span>Chaque boucle demande flux, 125 mB de lave, presse et scie, dans cet ordre, quatre fois.</span></article>
        <article><b>Le Liquidizer reste arrêté</b><span>Contrôle le cristal, les 100 mB de lave, l’entrée FE et l’espace disponible dans la sortie liquide.</span></article>
        <article><b>Le Crystallizer reste arrêté</b><span>Vérifie la Crystal Base, les deux réactifs, 100 mB de Liquid Naquadah et le réseau FE.</span></article>
        <article><b>Les blocs ne forment pas la porte</b><span>Compare les 14 anneaux, 9 chevrons et la base à l’image, puis clique la base à main nue.</span></article>
        <article><b>Le DHD ne réagit pas</b><span>Contrôle son énergie, sa distance de 16 blocs et sa liaison avec la porte avant de modifier l’adresse.</span></article>
        <article><b>La clé n’affiche aucune adresse</b><span>Vise un bloc appartenant à la porte déjà formée et utilise bien la clé Create en main principale.</span></article>
        <article><b>La connexion coupe rapidement</b><span>Le stock externe est vide ou ne fournit pas les 4 500 FE/t nécessaires au maintien.</span></article>
      </div>`)}

    ${step(22, 'Après le premier voyage', 'Après le prototype', 'Réutiliser l’usine au lieu de recommencer de zéro.', `
      <p class="sgu-copy">La première porte finance toute l’infrastructure : raffinerie, Liquidizer, Crystallizer, circuits de traitement et mur de Mechanical Crafters. Conserve-les comme une usine communautaire.</p>
      <div class="sgu-next-grid">
        <article><b>Une seconde porte</b><span>Elle réutilise les machines existantes et demande 19 fournées selon la nomenclature actuelle.</span></article>
        <article><b>Changer d’apparence</b><span>Fabrique ensuite les cristaux d’amélioration ou de variante sans reconstruire la porte classique.</span></article>
        <article><b>Industrialiser davantage</b><span>Automatise le dosage uniquement lorsque les stocks tampons et les contrôles de sortie sont fiables.</span></article>
      </div>
      ${checkpoint('Règle utile :', 'ne détruis pas l’usine après le premier voyage ; sa valeur principale est de rendre les portes suivantes beaucoup plus accessibles.')}`)}
  `;

  root.querySelectorAll('.sgu-actions').forEach(list => {
    list.setAttribute('role', 'list');
    list.querySelectorAll(':scope > li').forEach(item => item.setAttribute('role', 'listitem'));
  });
  guided.dataset.industryUpgrade = 'ready';
  document.dispatchEvent(new CustomEvent('regalade:tutorial-content-changed'));
})();
