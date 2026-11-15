(() => {
  const panel = document.getElementById('tutorial-stargates');
  if (!panel || panel.dataset.stargateGuide === 'ready') return;
  const outerTab = document.getElementById('tutorial-stargates-tab');
  if (outerTab) outerTab.textContent = 'Porte des étoiles';

  const A = 'assets/stargate/';
  const icon = (name, alt = '') => `<img src="${A}${name}" alt="${alt}" loading="lazy">`;
  const item = (name, image, text) => `
    <article class="sgx-item">${icon(image, name)}<div><b>${name}</b><span>${text}</span></div></article>`;
  const mission = (number, kicker, title, lead, body, id = `sgx-m${number}`) => `
    <section class="sgx-mission" id="${id}">
      <div class="sgx-mission-number" aria-hidden="true">${String(number).padStart(2, '0')}</div>
      <div class="sgx-mission-body">
        <p class="sgx-eyebrow">Mission ${number} · ${kicker}</p>
        <h2>${title}</h2>
        <p class="sgx-lead">${lead}</p>
        ${body}
      </div>
    </section>`;

  const guided = `
    <div class="sgx-panel" id="sgx-guide" role="tabpanel" aria-labelledby="sgx-guide-tab">
      <section class="sgx-start" aria-label="Objectif et prérequis">
        <div>
          <p class="sgx-eyebrow">Tutoriel guidé</p>
          <h2>Objectif : construire une porte des étoiles</h2>
          <p>Fabriquer la porte bloc par bloc, l’alimenter, composer une adresse et effectuer un premier voyage. La chaîne complète demande <strong>168 cristaux cryostabilisés</strong> et <strong>64 plaques</strong>.</p>
        </div>
        <ul>
          <li><b>1 raffinerie Create</b><span>des poudres jusqu'au cristal</span></li>
          <li><b>3 machines de cristallisation</b><span>2 chambres, puis Liquidizer + Crystallizer</span></li>
          <li><b>24 blocs de porte</b><span>1 base + 14 anneaux + 9 chevrons</span></li>
          <li><b>1 poste de contrôle</b><span>DHD + Basic Interface + énergie externe</span></li>
        </ul>
      </section>

      ${mission(1, 'Préparer', 'Construire d’abord la raffinerie.', 'Ne pas collecter 21 fournées avant d’avoir validé la chaîne. Assembler les postes ci-dessous et prévoir de la place pour les relier.', `
        <div class="sgx-workshops">
          <article><h3>Préparation</h3><p>Millstone ou Crushing Wheels, Mechanical Mixer + Basin chauffé, stockage de fluides et pompes.</p></article>
          <article><h3>Façonnage</h3><p>Mechanical Press, Mechanical Saw, tapis, Deployers et boucle d’assemblage séquencé.</p></article>
          <article><h3>Traitements en vrac</h3><p>Encased Fan devant chaleur/lave, eau, neige poudreuse et enfin une tête de dragon.</p></article>
          <article><h3>Assemblage final</h3><p>Un mur de Mechanical Crafters assez grand pour la base, le DHD, l’interface et les chevrons.</p></article>
        </div>
        <div class="sgx-warning"><strong>Point difficile :</strong> la tête de dragon n’intervient qu’à la toute fin de la métallurgie. Le reste de la raffinerie peut être préparé avant l’End.</div>`)}

      ${mission(2, 'Valider', 'Réaliser une seule fournée d’essai.', 'Cette fournée doit parcourir toute la ligne et produire 8 cristaux cryostabilisés. Une fois validée, passer à la production de masse.', `
        <div class="sgx-three-lines">
          ${item('4 matrices cristallines', 'crystalline-matrix.png', '16 améthystes broyées + 4 or + 4 zinc + 1 000 mB de potion étrange, au Mixer chauffé.')}
          ${item('4 briquettes réfractaires', 'refractory-briquette.png', '8 obsidiennes broyées + 8 netherracks broyés + 250 mB de lave, compactés à chaud.')}
          ${item('8 flux catalytiques', 'catalytic-flux.png', '8 Blaze Powder + 8 redstone + 4 glowstone, mélangées.')}
        </div>
        <div class="sgx-converge">
          <div><b>4 matrices</b><span>+</span><b>4 briquettes</b><span>+</span><b>4 flux</b><span>+</span><b>250 mB lave</b></div>
          <strong>Mechanical Mixer surchauffé</strong>
          <div class="sgx-result">→ ${icon('unstable-slag.png', 'Scorie instable')} <b>4 scories instables</b></div>
        </div>
        <div class="sgx-flow" aria-label="Ordre de raffinage">
          ${item('Scorie instable', 'unstable-slag.png', 'Mechanical Press')}
          ${item('Brique brute', 'raw-briquette.png', 'Bulk Blasting')}
          ${item('Naquadah calciné', 'calcined-naquadah.png', 'Crushing Wheels')}
          ${item('Poudre impure', 'impure-powder.png', 'Bulk Washing')}
          ${item('Granulé purifié', 'purified-granules.png', 'Bulk Freezing, neige poudreuse')}
          ${item('8 cristaux cryostabilisés', 'cryostabilized-crystal.png', 'Résultat validé')}
        </div>
        <p class="sgx-done"><strong>Mission réussie :</strong> obtenir 8 cristaux cryostabilisés sans qu’aucun intermédiaire ne soit bloqué.</p>`)}

      ${mission(3, 'Produire', 'Répète la fournée 21 fois.', 'La première installation complète demande 168 cristaux cryostabilisés. Voici la liste de courses cumulée : elle évite de recalculer chaque recette.', `
        <div class="sgx-shopping">
          <div><b>336</b><span>éclats d’améthyste</span></div><div><b>84</b><span>lingots d’or</span></div><div><b>84</b><span>lingots de zinc</span></div>
          <div><b>168</b><span>obsidiennes</span></div><div><b>168</b><span>netherracks</span></div><div><b>168</b><span>Blaze Powder</span></div>
          <div><b>168</b><span>redstones</span></div><div><b>84</b><span>glowstones</span></div><div><b>21</b><span>Nether Warts</span></div>
          <div><b>21 000 mB</b><span>potion étrange</span></div><div><b>21 000 mB</b><span>lave de raffinerie</span></div>
        </div>
        <p class="sgx-note"><strong>Répartition des 168 cristaux :</strong> 128 pour les plaques, 33 pour les Crystal Bases et 7 pour fabriquer 3 500 mB de Liquid Naquadah.</p>`)}

      ${mission(4, 'Métallurgie', 'Transformer 128 cristaux en 64 plaques.', 'Lancer 16 fois la recette ci-dessous. Chaque cycle consomme 8 cristaux cryostabilisés et rend 4 plaques.', `
        <div class="sgx-process-line">
          ${item('Billet incomplet', 'incomplete-billet.png', 'Compacting chauffé')}
          ${item('Billet stabilisé', 'stabilized-billet.png', 'Assemblage séquencé ×4')}
          ${item('4 lingots dormants', 'dormant-ingot.png', 'Mechanical Saw')}
          <article class="sgx-item sgx-text-icon"><span class="sgx-symbol">✦</span><div><b>4 lingots éveillés</b><span>Bulk Ending devant une tête de dragon</span></div></article>
          ${item('4 plaques', 'naquadah-plate.png', 'Mechanical Press')}
        </div>
        <div class="sgx-allocation"><h3>Réserver les plaques dès maintenant</h3><div><b>56</b><span>porte + DHD + interface</span></div><div><b>4</b><span>Liquidizer</span></div><div><b>4</b><span>Crystallizer</span></div></div>
        <p class="sgx-done"><strong>Mission réussie :</strong> disposer de 64 plaques et conserver 40 cristaux cryostabilisés.</p>`)}

      ${mission(5, 'Industrialiser', 'Fabriquer les machines de cristallisation dans cet ordre.', 'Deux Reaction Chambers sont nécessaires : elles sont ensuite absorbées par le Liquidizer et le Crystallizer.', `
        <ol class="sgx-machine-order">
          <li>${icon('reaction-chamber.png', 'Reaction Chamber')}<div><b>Deux Reaction Chambers</b><p>Chacune : 4 sturdy sheets, 1 electron tube, 2 brass sheets, 1 Precision Mechanism et 1 diamant.</p></div></li>
          <li>${icon('naquadah-liquidizer.png', 'Naquadah Liquidizer')}<div><b>Un Naquadah Liquidizer</b><p>4 plaques, 1 fluid tank, 2 brass sheets, 1 Reaction Chamber et 1 mechanical pump.</p></div></li>
          <li>${icon('crystallizer.png', 'Crystallizer')}<div><b>Un Crystallizer</b><p>4 plaques, 1 diamant, 2 electron tubes, 1 Reaction Chamber et 1 Precision Mechanism.</p></div></li>
        </ol>
        <div class="sgx-warning"><strong>Avant de continuer :</strong> placer un cristal cryostabilisé et 100 mB de lave dans le Liquidizer, afin d’obtenir 500 mB de Liquid Naquadah.</div>`)}

      ${mission(6, 'Cristalliser', 'Produire les 33 cristaux technologiques.', 'Chaque cristal commence par une Crystal Base, puis passe dans le Crystallizer avec 100 mB de Liquid Naquadah et ses deux réactifs.', `
        <div class="sgx-base-recipe">
          ${icon('cryostabilized-crystal.png', 'Cristal cryostabilisé')}<span>+</span><b>1 améthyste</b><span>+</span><b>2 quartz</b><span>+</span><b>1 diamant</b><strong>→ 1 Crystal Base</strong>
        </div>
        <div class="sgx-crystals">
          <article><b>10 × Energy</b><p>Base + 3 redstone + 3 redstone + 100 mB liquide</p></article>
          <article><b>10 × Transfer</b><p>Base + 3 redstone + 3 glowstone + 100 mB liquide</p></article>
          <article><b>9 × Materialization</b><p>Base + 3 ender pearls + 3 redstone + 100 mB liquide</p></article>
          <article><b>3 × Communication</b><p>Base + 3 quartz + 3 redstone + 100 mB liquide</p></article>
          <article><b>1 × Control</b><p>Base + 3 diamants + 3 redstone + 100 mB liquide</p></article>
        </div>
        <p class="sgx-note">Les 7 cristaux réservés au liquide produisent 3 500 mB. Les 33 recettes en consomment 3 300 mB : <strong>il reste 200 mB</strong>.</p>
        <p class="sgx-done"><strong>Mission réussie :</strong> disposer de 10 / 10 / 9 / 3 / 1 cristaux.</p>`)}

      ${mission(7, 'Fabriquer', 'Transformer plaques et cristaux en composants.', 'Les anneaux et chevrons utilisent Create. La base, le DHD et l’interface passent par le Mechanical Crafting.', `
        <div class="sgx-components">
          ${item('14 anneaux', 'ring-segment.png', 'Par anneau : 1 andesite casing, puis 2 cycles iron sheet + sturdy sheet + plaque, puis Mechanical Press.')}
          ${item('9 chevrons', 'chevron.png', 'Corps : polished rose quartz + 2 cycles plaque + brass sheet + electron tube + press. Final : Transfer + Energy + Materialization + Precision Mechanism + Redstone Link.')}
          ${item('1 base', 'classic-stargate-base.png', '4 sturdy sheets, 4 plaques, 1 Transfer, 2 brass casings, 2 Precision Mechanisms, 1 Control et 1 Communication.')}
          ${item('1 DHD', 'classic-dhd.png', '3 stone buttons, 4 electron tubes, 2 plaques, 2 Precision Mechanisms, brass casing, Communication, Redstone Link et Ender Eye.')}
          ${item('1 Basic Interface', 'basic-interface.png', '4 plaques, 2 copper spools, 2 capacitors, Energy, Communication, brass casing et Redstone Link.')}
        </div>
        <p class="sgx-done"><strong>Contrôle avant montage :</strong> 14 anneaux + 9 chevrons + 1 base + 1 DHD + 1 Basic Interface.</p>`)}

      ${mission(8, 'Construire', 'Monter la porte, bloc par bloc.', 'Choisir un mur dégagé. L’image officielle ci-dessous montre la vue de face exacte : la reproduire telle quelle.', `
        <figure class="sgx-official-figure">
          <img src="${A}official-classic-stargate-structure.png" alt="Structure officielle de la Stargate classique : anneaux et chevrons disposés en cercle autour de la base centrale" loading="lazy">
          <figcaption><b>Vue de face.</b> La base bleue est au centre, tout en bas. L’intérieur noir doit rester entièrement vide.</figcaption>
        </figure>
        <ol class="sgx-actions">
          <li><b>Poser la base</b><span>Orienter la base dans la direction de la porte.</span></li>
          <li><b>Reproduire l’anneau</b><span>Placer les 14 ring blocks et les 9 chevrons aux positions montrées.</span></li>
          <li><b>Vérifier le passage</b><span>Ne laisser aucun bloc dans l’ouverture intérieure ni sur le contour.</span></li>
          <li><b>Former la porte</b><span>Faire un clic droit à main nue sur la Classic Stargate Base Block.</span></li>
        </ol>
        <p class="sgx-done"><strong>Mission réussie :</strong> obtenir une Stargate animée complète à partir des blocs séparés.</p>`)}

      ${mission(9, 'Alimenter', 'Brancher une vraie centrale et un tampon externe.', 'Orienter l’interface face à la porte, côté noir vers l’extérieur. Raccorder le réseau FE sur un autre côté de l’interface.', `
        <div class="sgx-power-layout">
          <figure><img src="${A}official-interface-power.png" alt="Exemple officiel d’une interface Stargate reliée à une source d’énergie" loading="lazy"><figcaption>Exemple officiel de branchement. Sur Régalade, la production et les accumulateurs restent externes et visibles.</figcaption></figure>
          <div class="sgx-power-facts"><div><b>1 MFE</b><span>pour ouvrir</span></div><div><b>4 500 FE/t</b><span>pour maintenir</span></div><div><b>6,4 MFE</b><span>pour 60 secondes</span></div><div><b>1,36 MFE</b><span>tampon interne configuré</span></div></div>
        </div>
        <div class="sgx-scenarios">
          <article><p class="sgx-eyebrow">Option accessible</p><h3>Un voyage rare</h3><p>4 grandes roues à eau, 1 alternateur à 32 RPM et 3 accumulateurs fournissent environ 6 MFE externes. Recharge complète : environ <strong>1 h 58</strong>.</p></article>
          <article><p class="sgx-eyebrow">Option industrielle</p><h3>Une porte soutenue</h3><p>13 alternateurs à 256 RPM donnent environ 4 680 FE/t. Ils couvrent le maintien et rechargent doucement le coût d’ouverture.</p></article>
        </div>
        <p class="sgx-note"><strong>Test conseillé :</strong> charger au moins 1,36 MFE dans la porte, puis observer le stockage externe pendant un appel court.</p>`)}

      ${mission(10, 'Composer', 'Trouver une adresse et ouvrir le premier passage.', 'Le moyen le plus simple est le DHD. La porte d’arrivée peut être inactive : c’est la porte appelante qui paie l’énergie.', `
        <div class="sgx-dial">
          <figure><img src="${A}official-dhd-gui.png" alt="Interface du DHD" loading="lazy"><figcaption>Le DHD affiche les symboles disponibles et le gros bouton central d’activation.</figcaption></figure>
          <ol class="sgx-actions">
            <li><b>Poser le DHD à moins de 16 blocs</b><span>Sans cristal de communication installé, cette distance correspond à sa portée de connexion.</span></li>
            <li><b>Récupérer une adresse valide</b><span>Sur une cartouche, une structure ou auprès d’un autre joueur.</span></li>
            <li><b>Saisir les symboles dans l’ordre</b><span>L’ordre fait partie de l’adresse.</span></li>
            <li><b>Ajouter le point d’origine</b><span>Le symbole 0 termine toujours l’adresse.</span></li>
            <li><b>Presser le bouton central</b><span>Se tenir à distance du vortex initial, puis traverser lorsque le passage est stable.</span></li>
          </ol>
        </div>
        <p class="sgx-warning"><strong>Important :</strong> seul le côté appelant peut normalement fermer la connexion. Ne pas rester dans le plan de la porte pendant son ouverture.</p>`)}

      ${mission(11, 'Diagnostiquer', 'En cas de problème, contrôler dans cet ordre.', 'Un contrôle ordonné évite de casser toute l’installation au hasard.', `
        <div class="sgx-troubleshooting">
          <details open><summary>Les blocs ne forment pas la porte</summary><p>Compare la structure à l’image : 1 base en bas au centre, 14 anneaux, 9 chevrons, ouverture vide. Puis clique la base à main nue.</p></details>
          <details><summary>Le DHD ne contrôle rien</summary><p>Le rapprocher à moins de 16 blocs et vérifier que la porte est bien formée avant de le poser.</p></details>
          <details><summary>La porte manque d’énergie</summary><p>Vérifier l’orientation de l’interface, la charge interne, les câbles, le débit instantané et le stock externe. L’ouverture exige 1 MFE d’un coup.</p></details>
          <details><summary>L’adresse est refusée</summary><p>Vérifier l’ordre, ajouter le symbole 0 à la fin, puis s’assurer que la destination existe, est chargée et n’est pas déjà occupée.</p></details>
          <details><summary>La connexion coupe toute seule</summary><p>Le débit de maintien est probablement insuffisant, le tampon est vide ou la durée maximale de 60 secondes est atteinte.</p></details>
        </div>
        <div class="sgx-finish"><span>✓</span><div><h3>Première ligne terminée</h3><p>Conserver la raffinerie, le Liquidizer et le Crystallizer : la porte suivante ne demande plus que 56 plaques et 19 fournées de raffinerie.</p></div></div>`)}
    </div>`;

  const reference = `
    <div class="sgx-panel" id="sgx-reference" role="tabpanel" aria-labelledby="sgx-reference-tab" hidden>
      <section class="sgx-ref-intro">
        <div><p class="sgx-eyebrow">Référence technique</p><h2>Trouver rapidement une recette ou une valeur</h2><p>Choisir une rubrique pour accéder directement aux informations utiles.</p></div>
        <nav class="sgx-ref-nav" aria-label="Sommaire de la référence">
          <a href="#sgx-ref-totaux">Totaux</a><a href="#sgx-ref-raffinerie">Raffinerie</a><a href="#sgx-ref-cristaux">Cristaux</a><a href="#sgx-ref-composants">Composants</a><a href="#sgx-ref-energie">Énergie</a><a href="#sgx-ref-reseau">Réseau</a>
        </nav>
      </section>

      <section class="sgx-reference-section" id="sgx-ref-totaux"><p class="sgx-eyebrow">Nomenclature</p><h2>Première installation complète</h2>
        <div class="sgx-metrics"><div><b>21</b><span>fournées</span></div><div><b>168</b><span>Cryostabilized Naquadah Crystals</span></div><div><b>64</b><span>Naquadah Plates</span></div><div><b>33</b><span>cristaux technologiques</span></div><div><b>24</b><span>blocs de Stargate</span></div></div>
        <div class="sgx-table-wrap" tabindex="0"><table><thead><tr><th>Élément</th><th>Quantité</th><th>Naquadah Plates</th></tr></thead><tbody>
          <tr><td>Classic Stargate Ring Blocks</td><td>14</td><td>28</td></tr><tr><td>Classic Stargate Chevron Blocks</td><td>9</td><td>18</td></tr><tr><td>Classic Stargate Base Block</td><td>1</td><td>4</td></tr><tr><td>Classic DHD</td><td>1</td><td>2</td></tr><tr><td>Basic Interface</td><td>1</td><td>4</td></tr><tr><td>Naquadah Liquidizer + Crystallizer</td><td>2</td><td>8</td></tr><tr class="sgx-total"><td>Total première installation</td><td>Sans objet</td><td>64</td></tr>
        </tbody></table></div>
      </section>

      <section class="sgx-reference-section" id="sgx-ref-raffinerie"><p class="sgx-eyebrow">Raffinerie</p><h2>Une fournée standard</h2>
        <div class="sgx-flow compact">${item('Crystalline Matrix', 'crystalline-matrix.png', '×4')}${item('Refractory Briquette', 'refractory-briquette.png', '×4')}${item('Catalytic Flux', 'catalytic-flux.png', '×4 utilisés')}${item('Unstable Naquadah Slag', 'unstable-slag.png', '×4')}${item('Cryostabilized Naquadah Crystal', 'cryostabilized-crystal.png', '×8')}</div>
        <p>Entrées par fournée : 16 améthystes, 4 or, 4 zinc, 8 obsidiennes, 8 netherracks, 8 Blaze Powder, 8 redstone, 4 glowstones, 1 000 mB de potion étrange et 1 000 mB de lave au total.</p>
      </section>

      <section class="sgx-reference-section" id="sgx-ref-cristaux"><p class="sgx-eyebrow">Crystallizer</p><h2>Recettes des cinq cristaux</h2>
        <p><strong>Base commune :</strong> 1 Crystal Base + 100 mB de Liquid Naquadah. La Crystal Base coûte 1 Cryostabilized Naquadah Crystal, 1 Amethyst Shard, 2 Quartz et 1 Diamond.</p>
        <div class="sgx-table-wrap" tabindex="0"><table><thead><tr><th>Crystal</th><th>Quantité</th><th>Réactif A</th><th>Réactif B</th></tr></thead><tbody>
          <tr><td>Energy Crystal</td><td>10</td><td>3 Redstone Dust</td><td>3 Redstone Dust</td></tr><tr><td>Transfer Crystal</td><td>10</td><td>3 Redstone Dust</td><td>3 Glowstone Dust</td></tr><tr><td>Materialization Crystal</td><td>9</td><td>3 Ender Pearls</td><td>3 Redstone Dust</td></tr><tr><td>Communication Crystal</td><td>3</td><td>3 Quartz</td><td>3 Redstone Dust</td></tr><tr><td>Control Crystal</td><td>1</td><td>3 Diamonds</td><td>3 Redstone Dust</td></tr>
        </tbody></table></div>
      </section>

      <section class="sgx-reference-section" id="sgx-ref-composants"><p class="sgx-eyebrow">Assemblage</p><h2>Composants de la porte</h2>
        <div class="sgx-components compact">${item('Classic Stargate Ring Block', 'ring-segment.png', '2 Naquadah Plates chacun')}${item('Classic Stargate Chevron Block', 'chevron.png', '2 Naquadah Plates + Energy Crystal + Transfer Crystal + Materialization Crystal')}${item('Classic Stargate Base Block', 'classic-stargate-base.png', '4 Naquadah Plates + Control Crystal + Communication Crystal + Transfer Crystal')}${item('Classic DHD', 'classic-dhd.png', '2 Naquadah Plates + Communication Crystal')}${item('Basic Interface', 'basic-interface.png', '4 Naquadah Plates + Energy Crystal + Communication Crystal')}</div>
        <figure class="sgx-official-figure small"><img src="${A}official-classic-stargate-structure.png" alt="Structure officielle de la Classic Stargate" loading="lazy"><figcaption>Structure officielle : 14 Classic Stargate Ring Blocks, 9 Classic Stargate Chevron Blocks et le Classic Stargate Base Block.</figcaption></figure>
      </section>

      <section class="sgx-reference-section" id="sgx-ref-energie"><p class="sgx-eyebrow">Configuration Régalade</p><h2>Énergie et durée</h2>
        <div class="sgx-table-wrap" tabindex="0"><table><thead><tr><th>Paramètre</th><th>Valeur</th></tr></thead><tbody><tr><td>Ouverture</td><td>1 000 000 FE</td></tr><tr><td>Maintien</td><td>4 500 FE/t = 90 000 FE/s</td></tr><tr><td>Durée maximale</td><td>60 secondes</td></tr><tr><td>Appel complet</td><td>6,4 MFE</td></tr><tr><td>Stockage interne de la porte</td><td>1,36 MFE</td></tr><tr><td>Stockage de la Basic Interface</td><td>environ 50 000 FE</td></tr></tbody></table></div>
      </section>

      <section class="sgx-reference-section" id="sgx-ref-reseau"><p class="sgx-eyebrow">Règles de réseau</p><h2>Ce qui est autorisé sur le serveur</h2>
        <ul class="sgx-bullets"><li>La porte appelante paie l’ouverture et le maintien ; la destination peut être sans énergie.</li><li>Le passage est bidirectionnel une fois ouvert.</li><li>Les destinations prévues sont l’Overworld, le Nether et l’End.</li><li>Des portes sauvages rares et protégées peuvent servir de premières destinations.</li><li>Les dimensions supplémentaires du mod restent exclues du parcours.</li></ul>
      </section>

      <section class="sgx-reference-section sgx-docs"><p class="sgx-eyebrow">Pour aller plus loin</p><h2>Schémas et documentation</h2>
        <div class="sgx-doc-links"><a href="assets/stargate/arbre-dependances-complet.png" target="_blank" rel="noopener"><b>Arbre de dépendance complet</b><span>Recettes Régalade et branches de progression</span></a><a href="https://povstalec.github.io/StargateJourney/stargate-technology/stargate/" target="_blank" rel="noopener"><b>Documentation officielle</b><span>Formation, DHD, adresses et fonctionnement du mod</span></a></div>
      </section>
    </div>`;

  panel.innerHTML = `
    <div class="sgx-shell">
      <div class="sgx-tabs" role="tablist" aria-label="Contenu porte des étoiles">
        <button class="sgx-tab active" id="sgx-guide-tab" type="button" role="tab" aria-selected="true" aria-controls="sgx-guide">Tutoriel guidé</button>
        <button class="sgx-tab" id="sgx-reference-tab" type="button" role="tab" aria-selected="false" aria-controls="sgx-reference" tabindex="-1">Référence technique</button>
      </div>
      ${guided}${reference}
    </div>`;
  panel.dataset.stargateGuide = 'ready';


  const tabs = [...panel.querySelectorAll('.sgx-tab')];
  const subpanels = [...panel.querySelectorAll('.sgx-panel')];
  const select = tab => {
    tabs.forEach(button => {
      const active = button === tab;
      button.classList.toggle('active', active);
      button.setAttribute('aria-selected', String(active));
      button.tabIndex = active ? 0 : -1;
    });
    subpanels.forEach(section => { section.hidden = section.id !== tab.getAttribute('aria-controls'); });
    try { localStorage.setItem('regalade-stargate-view', tab.id); } catch (_) {}
  };
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => select(tab));
    tab.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
      tabs[next].focus(); select(tabs[next]);
    });
  });
  try {
    const saved = document.getElementById(localStorage.getItem('regalade-stargate-view'));
    if (saved?.classList.contains('sgx-tab')) select(saved);
  } catch (_) {}
})();
