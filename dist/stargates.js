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
          <p>Tu vas fabriquer la porte bloc par bloc, l’alimenter, composer une adresse et effectuer un premier voyage. La chaîne complète demande <strong>168 cristaux cryostabilisés</strong> et <strong>64 plaques</strong>.</p>
        </div>
        <ul>
          <li><b>1 raffinerie Create</b><span>des poudres jusqu'au cristal</span></li>
          <li><b>3 machines de cristallisation</b><span>2 chambres, puis Liquidizer + Crystallizer</span></li>
          <li><b>24 blocs de porte</b><span>1 base + 14 anneaux + 9 chevrons</span></li>
          <li><b>1 poste de contrôle</b><span>DHD + Basic Interface + énergie externe</span></li>
        </ul>
      </section>

      <nav class="sgx-route" aria-label="Parcours du tutoriel">
        <a href="#sgx-m1"><b>01</b>Atelier</a><a href="#sgx-m2"><b>02</b>Essai</a><a href="#sgx-m3"><b>03</b>Série</a>
        <a href="#sgx-m4"><b>04</b>Plaques</a><a href="#sgx-m5"><b>05</b>Machines</a><a href="#sgx-m6"><b>06</b>Cristaux</a>
        <a href="#sgx-m7"><b>07</b>Composants</a><a href="#sgx-m8"><b>08</b>Montage</a><a href="#sgx-m9"><b>09</b>Énergie</a>
        <a href="#sgx-m10"><b>10</b>Voyage</a><a href="#sgx-m11"><b>11</b>Dépannage</a>
      </nav>

      ${mission(1, 'Préparer', 'Construis d’abord la raffinerie.', 'Ne collecte pas 21 fournées avant d’avoir validé la chaîne. Assemble les postes ci-dessous et garde de la place pour les relier.', `
        <div class="sgx-workshops">
          <article><h3>Préparation</h3><p>Millstone ou Crushing Wheels, Mechanical Mixer + Basin chauffé, stockage de fluides et pompes.</p></article>
          <article><h3>Façonnage</h3><p>Mechanical Press, Mechanical Saw, tapis, Deployers et boucle d’assemblage séquencé.</p></article>
          <article><h3>Traitements en vrac</h3><p>Encased Fan devant chaleur/lave, eau, neige poudreuse et enfin une tête de dragon.</p></article>
          <article><h3>Assemblage final</h3><p>Un mur de Mechanical Crafters assez grand pour la base, le DHD, l’interface et les chevrons.</p></article>
        </div>
        <div class="sgx-warning"><strong>Point difficile :</strong> la tête de dragon n’intervient qu’à la toute fin de la métallurgie. Le reste de la raffinerie peut être préparé avant l’End.</div>`)}

      ${mission(2, 'Valider', 'Fais une seule fournée d’essai.', 'Cette fournée doit parcourir toute la ligne et produire 8 cristaux cryostabilisés. Si elle fonctionne, seulement alors tu passes à la production de masse.', `
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
        <p class="sgx-done"><strong>Mission réussie si :</strong> tu tiens 8 cristaux cryostabilisés en main et aucun intermédiaire n’est bloqué.</p>`)}

      ${mission(3, 'Produire', 'Répète la fournée 21 fois.', 'La première installation complète demande 168 cristaux cryostabilisés. Voici la liste de courses cumulée : elle évite de recalculer chaque recette.', `
        <div class="sgx-shopping">
          <div><b>336</b><span>éclats d’améthyste</span></div><div><b>84</b><span>lingots d’or</span></div><div><b>84</b><span>lingots de zinc</span></div>
          <div><b>168</b><span>obsidiennes</span></div><div><b>168</b><span>netherracks</span></div><div><b>168</b><span>Blaze Powder</span></div>
          <div><b>168</b><span>redstones</span></div><div><b>84</b><span>glowstones</span></div><div><b>21</b><span>Nether Warts</span></div>
          <div><b>21 000 mB</b><span>potion étrange</span></div><div><b>21 000 mB</b><span>lave de raffinerie</span></div>
        </div>
        <p class="sgx-note"><strong>Répartition des 168 cristaux :</strong> 128 pour les plaques, 33 pour les Crystal Bases et 7 pour fabriquer 3 500 mB de Liquid Naquadah.</p>`)}

      ${mission(4, 'Métallurgie', 'Transforme 128 cristaux en 64 plaques.', 'Lance 16 fois la recette ci-dessous. Chaque cycle consomme 8 cristaux cryostabilisés et rend 4 plaques.', `
        <div class="sgx-process-line">
          ${item('Billet incomplet', 'incomplete-billet.png', 'Compacting chauffé')}
          ${item('Billet stabilisé', 'stabilized-billet.png', 'Assemblage séquencé ×4')}
          ${item('4 lingots dormants', 'dormant-ingot.png', 'Mechanical Saw')}
          <article class="sgx-item sgx-text-icon"><span class="sgx-symbol">✦</span><div><b>4 lingots éveillés</b><span>Bulk Ending devant une tête de dragon</span></div></article>
          ${item('4 plaques', 'naquadah-plate.png', 'Mechanical Press')}
        </div>
        <div class="sgx-allocation"><h3>Ne dépense pas les plaques au hasard</h3><div><b>56</b><span>porte + DHD + interface</span></div><div><b>4</b><span>Liquidizer</span></div><div><b>4</b><span>Crystallizer</span></div></div>
        <p class="sgx-done"><strong>Mission réussie si :</strong> tu as exactement 64 plaques et encore 40 cristaux cryostabilisés.</p>`)}

      ${mission(5, 'Industrialiser', 'Fabrique les machines de cristallisation dans cet ordre.', 'Deux Reaction Chambers sont nécessaires : elles sont ensuite absorbées par le Liquidizer et le Crystallizer.', `
        <ol class="sgx-machine-order">
          <li>${icon('reaction-chamber.png', 'Reaction Chamber')}<div><b>Deux Reaction Chambers</b><p>Chacune : 4 sturdy sheets, 1 electron tube, 2 brass sheets, 1 Precision Mechanism et 1 diamant.</p></div></li>
          <li>${icon('naquadah-liquidizer.png', 'Naquadah Liquidizer')}<div><b>Un Naquadah Liquidizer</b><p>4 plaques, 1 fluid tank, 2 brass sheets, 1 Reaction Chamber et 1 mechanical pump.</p></div></li>
          <li>${icon('crystallizer.png', 'Crystallizer')}<div><b>Un Crystallizer</b><p>4 plaques, 1 diamant, 2 electron tubes, 1 Reaction Chamber et 1 Precision Mechanism.</p></div></li>
        </ol>
        <div class="sgx-warning"><strong>Avant de continuer :</strong> place un cristal cryostabilisé et 100 mB de lave dans le Liquidizer. Tu dois obtenir 500 mB de Liquid Naquadah.</div>`)}

      ${mission(6, 'Cristalliser', 'Produis les 33 cristaux technologiques.', 'Chaque cristal commence par une Crystal Base, puis passe dans le Crystallizer avec 100 mB de Liquid Naquadah et ses deux réactifs.', `
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
        <p class="sgx-done"><strong>Mission réussie si :</strong> ton coffre contient bien 10 / 10 / 9 / 3 / 1 cristaux.</p>`)}

      ${mission(7, 'Fabriquer', 'Transforme plaques et cristaux en composants.', 'Les anneaux et chevrons utilisent Create. La base, le DHD et l’interface passent par le Mechanical Crafting.', `
        <div class="sgx-components">
          ${item('14 anneaux', 'ring-segment.png', 'Par anneau : 1 andesite casing, puis 2 cycles iron sheet + sturdy sheet + plaque, puis Mechanical Press.')}
          ${item('9 chevrons', 'chevron.png', 'Corps : polished rose quartz + 2 cycles plaque + brass sheet + electron tube + press. Final : Transfer + Energy + Materialization + Precision Mechanism + Redstone Link.')}
          ${item('1 base', 'classic-stargate-base.png', '4 sturdy sheets, 4 plaques, 1 Transfer, 2 brass casings, 2 Precision Mechanisms, 1 Control et 1 Communication.')}
          ${item('1 DHD', 'classic-dhd.png', '3 stone buttons, 4 electron tubes, 2 plaques, 2 Precision Mechanisms, brass casing, Communication, Redstone Link et Ender Eye.')}
          ${item('1 Basic Interface', 'basic-interface.png', '4 plaques, 2 copper spools, 2 capacitors, Energy, Communication, brass casing et Redstone Link.')}
        </div>
        <p class="sgx-done"><strong>Contrôle avant montage :</strong> 14 anneaux + 9 chevrons + 1 base + 1 DHD + 1 Basic Interface.</p>`)}

      ${mission(8, 'Construire', 'Monte enfin la porte, bloc par bloc.', 'Choisis un mur dégagé. L’image officielle ci-dessous montre la vue de face exacte : reproduis-la telle quelle.', `
        <figure class="sgx-official-figure">
          <img src="${A}official-classic-stargate-structure.png" alt="Structure officielle de la Stargate classique : anneaux et chevrons disposés en cercle autour de la base centrale" loading="lazy">
          <figcaption><b>Vue de face.</b> La base bleue est au centre, tout en bas. L’intérieur noir doit rester entièrement vide.</figcaption>
        </figure>
        <ol class="sgx-actions">
          <li><b>Pose la base</b><span>Face à la direction dans laquelle tu veux regarder la porte.</span></li>
          <li><b>Reproduis l’anneau</b><span>Place les 14 ring blocks et les 9 chevrons aux positions montrées.</span></li>
          <li><b>Vérifie le passage</b><span>Aucun bloc ne doit occuper l’ouverture intérieure ni couper le contour.</span></li>
          <li><b>Forme la porte</b><span>Clic droit à main nue sur la Classic Stargate Base Block.</span></li>
        </ol>
        <p class="sgx-done"><strong>Mission réussie si :</strong> les blocs séparés se transforment en une Stargate animée complète.</p>`)}

      ${mission(9, 'Alimenter', 'Branche une vraie centrale et un tampon externe.', 'L’interface doit faire face à la porte, côté noir tourné vers l’extérieur. Branche le réseau FE sur un autre côté de l’interface.', `
        <div class="sgx-power-layout">
          <figure><img src="${A}official-interface-power.png" alt="Exemple officiel d’une interface Stargate reliée à une source d’énergie" loading="lazy"><figcaption>Exemple officiel de branchement. Sur Régalade, la production et les accumulateurs restent externes et visibles.</figcaption></figure>
          <div class="sgx-power-facts"><div><b>1 MFE</b><span>pour ouvrir</span></div><div><b>4 500 FE/t</b><span>pour maintenir</span></div><div><b>6,4 MFE</b><span>pour 60 secondes</span></div><div><b>1,36 MFE</b><span>tampon interne configuré</span></div></div>
        </div>
        <div class="sgx-scenarios">
          <article><p class="sgx-eyebrow">Option accessible</p><h3>Un voyage rare</h3><p>4 grandes roues à eau, 1 alternateur à 32 RPM et 3 accumulateurs fournissent environ 6 MFE externes. Recharge complète : environ <strong>1 h 58</strong>.</p></article>
          <article><p class="sgx-eyebrow">Option industrielle</p><h3>Une porte soutenue</h3><p>13 alternateurs à 256 RPM donnent environ 4 680 FE/t. Ils couvrent le maintien et rechargent doucement le coût d’ouverture.</p></article>
        </div>
        <p class="sgx-note"><strong>Test conseillé :</strong> charge d’abord au moins 1,36 MFE dans la porte, puis observe le stockage externe pendant un appel court.</p>`)}

      ${mission(10, 'Composer', 'Trouve une adresse et ouvre le premier passage.', 'Le moyen le plus simple est le DHD. La porte d’arrivée peut être inactive : c’est la porte appelante qui paie l’énergie.', `
        <div class="sgx-dial">
          <figure><img src="${A}official-dhd-gui.png" alt="Interface du DHD" loading="lazy"><figcaption>Le DHD affiche les symboles disponibles et le gros bouton central d’activation.</figcaption></figure>
          <ol class="sgx-actions">
            <li><b>Pose le DHD à moins de 16 blocs</b><span>Sans cristal de communication installé, c’est sa portée de connexion.</span></li>
            <li><b>Récupère une adresse valide</b><span>Sur une cartouche, une structure ou auprès d’un autre joueur.</span></li>
            <li><b>Saisis les symboles dans l’ordre</b><span>L’ordre fait partie de l’adresse.</span></li>
            <li><b>Ajoute le point d’origine</b><span>Le symbole 0 termine toujours l’adresse.</span></li>
            <li><b>Presse le bouton central</b><span>Recule du vortex initial, puis traverse quand le passage est stable.</span></li>
          </ol>
        </div>
        <p class="sgx-warning"><strong>Important :</strong> seul le côté appelant peut normalement fermer la connexion. Ne reste pas dans le plan de la porte pendant son ouverture.</p>`)}

      ${mission(11, 'Diagnostiquer', 'Si ça ne marche pas, cherche dans cet ordre.', 'Un contrôle ordonné évite de casser toute l’installation au hasard.', `
        <div class="sgx-troubleshooting">
          <details open><summary>Les blocs ne forment pas la porte</summary><p>Compare la structure à l’image : 1 base en bas au centre, 14 anneaux, 9 chevrons, ouverture vide. Puis clique la base à main nue.</p></details>
          <details><summary>Le DHD ne contrôle rien</summary><p>Rapproche-le à moins de 16 blocs et vérifie que la porte est bien formée avant de le poser.</p></details>
          <details><summary>La porte manque d’énergie</summary><p>Vérifie l’orientation de l’interface, la charge interne, les câbles, le débit instantané et le stock externe. Ouvrir exige 1 MFE d’un coup.</p></details>
          <details><summary>L’adresse est refusée</summary><p>Vérifie l’ordre, ajoute le symbole 0 à la fin, assure-toi que la destination existe, est chargée et n’est pas déjà occupée.</p></details>
          <details><summary>La connexion coupe toute seule</summary><p>Le débit de maintien est probablement insuffisant, le tampon est vide ou la durée maximale de 60 secondes est atteinte.</p></details>
        </div>
        <div class="sgx-finish"><span>✓</span><div><h3>Ta première ligne est terminée.</h3><p>Conserve la raffinerie, le Liquidizer et le Crystallizer : la porte suivante ne demande plus que 56 plaques et 19 fournées de raffinerie.</p></div></div>`)}
    </div>`;

  const reference = `
    <div class="sgx-panel" id="sgx-reference" role="tabpanel" aria-labelledby="sgx-reference-tab" hidden>
      <section class="sgx-ref-intro">
        <div><p class="sgx-eyebrow">Référence technique</p><h2>Trouver rapidement une recette ou une valeur</h2><p>Choisis une rubrique pour accéder directement aux informations utiles.</p></div>
        <nav class="sgx-ref-nav" aria-label="Sommaire de la référence">
          <a href="#sgx-ref-totaux">Totaux</a><a href="#sgx-ref-raffinerie">Raffinerie</a><a href="#sgx-ref-cristaux">Cristaux</a><a href="#sgx-ref-composants">Composants</a><a href="#sgx-ref-energie">Énergie</a><a href="#sgx-ref-reseau">Réseau</a>
        </nav>
      </section>

      <section class="sgx-reference-section" id="sgx-ref-totaux"><p class="sgx-eyebrow">Nomenclature</p><h2>Première installation complète</h2>
        <div class="sgx-metrics"><div><b>21</b><span>fournées</span></div><div><b>168</b><span>cristaux cryostabilisés</span></div><div><b>64</b><span>plaques</span></div><div><b>33</b><span>cristaux technologiques</span></div><div><b>24</b><span>blocs de porte</span></div></div>
        <div class="sgx-table-wrap" tabindex="0"><table><thead><tr><th>Élément</th><th>Quantité</th><th>Plaques</th></tr></thead><tbody>
          <tr><td>14 anneaux</td><td>14</td><td>28</td></tr><tr><td>9 chevrons</td><td>9</td><td>18</td></tr><tr><td>Base</td><td>1</td><td>4</td></tr><tr><td>DHD</td><td>1</td><td>2</td></tr><tr><td>Basic Interface</td><td>1</td><td>4</td></tr><tr><td>Liquidizer + Crystallizer</td><td>2</td><td>8</td></tr><tr class="sgx-total"><td>Total première installation</td><td>—</td><td>64</td></tr>
        </tbody></table></div>
      </section>

      <section class="sgx-reference-section" id="sgx-ref-raffinerie"><p class="sgx-eyebrow">Raffinerie</p><h2>Une fournée standard</h2>
        <div class="sgx-flow compact">${item('Matrice', 'crystalline-matrix.png', '×4')}${item('Briquette', 'refractory-briquette.png', '×4')}${item('Flux', 'catalytic-flux.png', '×4 utilisés')}${item('Scorie', 'unstable-slag.png', '×4')}${item('Cristal', 'cryostabilized-crystal.png', '×8')}</div>
        <p>Entrées par fournée : 16 améthystes, 4 or, 4 zinc, 8 obsidiennes, 8 netherracks, 8 Blaze Powder, 8 redstone, 4 glowstones, 1 000 mB de potion étrange et 1 000 mB de lave au total.</p>
      </section>

      <section class="sgx-reference-section" id="sgx-ref-cristaux"><p class="sgx-eyebrow">Crystallizer</p><h2>Recettes des cinq cristaux</h2>
        <p><strong>Socle commun :</strong> 1 Crystal Base + 100 mB de Liquid Naquadah. La base coûte 1 cristal cryostabilisé, 1 améthyste, 2 quartz et 1 diamant.</p>
        <div class="sgx-table-wrap" tabindex="0"><table><thead><tr><th>Cristal</th><th>Quantité</th><th>Réactif A</th><th>Réactif B</th></tr></thead><tbody>
          <tr><td>Energy</td><td>10</td><td>3 redstone</td><td>3 redstone</td></tr><tr><td>Transfer</td><td>10</td><td>3 redstone</td><td>3 glowstone</td></tr><tr><td>Materialization</td><td>9</td><td>3 ender pearls</td><td>3 redstone</td></tr><tr><td>Communication</td><td>3</td><td>3 quartz</td><td>3 redstone</td></tr><tr><td>Control</td><td>1</td><td>3 diamants</td><td>3 redstone</td></tr>
        </tbody></table></div>
      </section>

      <section class="sgx-reference-section" id="sgx-ref-composants"><p class="sgx-eyebrow">Assemblage</p><h2>Composants de la porte</h2>
        <div class="sgx-components compact">${item('Anneau', 'ring-segment.png', '2 plaques chacun')}${item('Chevron', 'chevron.png', '2 plaques + Energy + Transfer + Materialization')}${item('Base', 'classic-stargate-base.png', '4 plaques + Control + Communication + Transfer')}${item('DHD', 'classic-dhd.png', '2 plaques + Communication')}${item('Interface', 'basic-interface.png', '4 plaques + Energy + Communication')}</div>
        <figure class="sgx-official-figure small"><img src="${A}official-classic-stargate-structure.png" alt="Structure officielle de la Stargate classique" loading="lazy"><figcaption>Structure officielle : 14 anneaux, 9 chevrons et la base centrale inférieure.</figcaption></figure>
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

  const style = document.createElement('style');
  style.id = 'stargate-guide-styles';
  style.textContent = `
    #tutorial-stargates{--sg-blue:#59bce7;--sg-blue-deep:#197cab;--sg-orange:#ff963f;--sg-ink:#17232a;--sg-soft:#eef5f8;--sg-line:#cddce3;--sg-green:#16856a;color:var(--sg-ink)}
    #tutorial-stargates *{box-sizing:border-box}
    .sgx-shell{max-width:1180px;margin:0 auto}.sgx-tabs{position:sticky;top:76px;z-index:8;display:flex;gap:.5rem;width:max-content;max-width:100%;margin:0 0 1.2rem;padding:.42rem;border:1px solid var(--sg-line);border-radius:14px;background:rgba(255,255,255,.94);box-shadow:0 8px 28px rgba(25,52,64,.09);backdrop-filter:blur(12px)}
    .sgx-tab{border:0;border-radius:10px;padding:.78rem 1.05rem;background:transparent;color:#49606b;font:700 .9rem/1 inherit;cursor:pointer}.sgx-tab.active{background:var(--sg-ink);color:#fff}.sgx-tab:focus-visible{outline:3px solid var(--sg-blue);outline-offset:2px}.sgx-panel[hidden]{display:none!important}
    .sgx-eyebrow{margin:0 0 .55rem;text-transform:uppercase;letter-spacing:.12em;font-weight:800;font-size:.73rem;color:var(--sg-blue-deep)}
    .sgx-start{display:grid;grid-template-columns:1fr 1.35fr;gap:2rem;margin:1.1rem 0 1.5rem;padding:1.5rem;border:1px solid var(--sg-line);border-radius:18px;background:#fff}.sgx-start h2{margin:.15rem 0 .55rem;font-size:1.6rem}.sgx-start p{margin:0;line-height:1.6}.sgx-start ul{display:grid;grid-template-columns:1fr 1fr;gap:.7rem;margin:0;padding:0;list-style:none}.sgx-start li{display:flex;flex-direction:column;padding:.9rem;border-radius:12px;background:var(--sg-soft)}.sgx-start li span{margin-top:.25rem;font-size:.84rem;color:#5b6d75}
    .sgx-route{display:grid;grid-template-columns:repeat(6,1fr);gap:.5rem;margin:0 0 2rem}.sgx-route a{display:flex;flex-direction:column;min-height:64px;padding:.7rem;border:1px solid var(--sg-line);border-radius:10px;background:#fff;color:var(--sg-ink);text-decoration:none;font-size:.78rem}.sgx-route a:hover{border-color:var(--sg-blue);transform:translateY(-1px)}.sgx-route b{color:var(--sg-blue-deep);font-size:.68rem;letter-spacing:.09em}
    .sgx-mission{display:grid;grid-template-columns:84px minmax(0,1fr);gap:1rem;padding:3.2rem 0;border-top:1px solid var(--sg-line);scroll-margin-top:145px}.sgx-mission-number{font-size:2.7rem;font-weight:900;letter-spacing:-.06em;color:#aac2cd}.sgx-mission-body>h2,.sgx-reference-section h2{margin:.1rem 0 .55rem;font-size:clamp(1.55rem,3vw,2.45rem);letter-spacing:-.035em}.sgx-lead{max-width:850px;margin:0 0 1.4rem;font-size:1.05rem;line-height:1.65;color:#4d616a}
    .sgx-workshops,.sgx-crystals,.sgx-scenarios{display:grid;grid-template-columns:repeat(2,1fr);gap:.8rem}.sgx-workshops article,.sgx-crystals article,.sgx-scenarios article{padding:1.1rem;border:1px solid var(--sg-line);border-radius:14px;background:#fff}.sgx-workshops h3,.sgx-crystals b,.sgx-scenarios h3{margin:0 0 .35rem}.sgx-workshops p,.sgx-crystals p,.sgx-scenarios p{margin:0;line-height:1.55;color:#52666f}.sgx-warning,.sgx-note,.sgx-done{margin:1rem 0 0;padding:1rem 1.1rem;border-left:4px solid var(--sg-orange);border-radius:0 10px 10px 0;background:#fff4ea;line-height:1.55}.sgx-note{border-color:var(--sg-blue);background:#eef8fc}.sgx-done{border-color:var(--sg-green);background:#edf9f5}
    .sgx-three-lines,.sgx-components{display:grid;grid-template-columns:repeat(3,1fr);gap:.75rem}.sgx-item{display:flex;gap:.8rem;align-items:center;min-width:0;padding:.85rem;border:1px solid var(--sg-line);border-radius:12px;background:#fff}.sgx-item img{flex:0 0 auto;width:50px;height:50px;object-fit:contain;image-rendering:pixelated}.sgx-item div{display:flex;min-width:0;flex-direction:column}.sgx-item span{margin-top:.25rem;font-size:.8rem;line-height:1.38;color:#60727a}.sgx-converge{margin:1rem 0;padding:1.25rem;border-radius:14px;background:var(--sg-ink);color:#fff;text-align:center}.sgx-converge>div:first-child{display:flex;justify-content:center;flex-wrap:wrap;gap:.55rem}.sgx-converge>strong{display:block;margin:.9rem 0;color:#86d8fb}.sgx-result{display:flex;justify-content:center;align-items:center;gap:.6rem}.sgx-result img{width:48px;height:48px;image-rendering:pixelated}.sgx-flow,.sgx-process-line{display:grid;grid-template-columns:repeat(6,1fr);gap:.55rem}.sgx-flow .sgx-item,.sgx-process-line .sgx-item{position:relative;display:block;text-align:center}.sgx-flow .sgx-item:not(:last-child):after,.sgx-process-line .sgx-item:not(:last-child):after{content:"→";position:absolute;right:-.55rem;top:50%;z-index:2;transform:translate(50%,-50%);color:var(--sg-orange);font-weight:900}.sgx-flow .sgx-item img,.sgx-process-line .sgx-item img{width:58px;height:58px}.sgx-flow .sgx-item div,.sgx-process-line .sgx-item div{margin-top:.4rem}.sgx-process-line{grid-template-columns:repeat(5,1fr)}.sgx-symbol{display:grid;width:58px;height:58px;margin:0 auto;place-items:center;border-radius:12px;background:#152c36;color:var(--sg-orange);font-size:1.7rem}
    .sgx-shopping{display:grid;grid-template-columns:repeat(4,1fr);gap:.6rem}.sgx-shopping div,.sgx-allocation div,.sgx-metrics div,.sgx-power-facts div{display:flex;flex-direction:column;padding:.9rem;border-radius:11px;background:var(--sg-soft)}.sgx-shopping b,.sgx-metrics b,.sgx-power-facts b{font-size:1.25rem}.sgx-shopping span,.sgx-allocation span,.sgx-metrics span,.sgx-power-facts span{font-size:.78rem;color:#5d7079}.sgx-allocation{display:grid;grid-template-columns:1fr 180px 180px;gap:.6rem;align-items:stretch;margin-top:1rem}.sgx-allocation h3{margin:0;padding:1rem;border-radius:11px;background:var(--sg-ink);color:#fff}.sgx-allocation b{font-size:1.4rem}
    .sgx-machine-order{display:grid;gap:.7rem;margin:0;padding:0;list-style:none;counter-reset:machines}.sgx-machine-order li{display:grid;grid-template-columns:72px minmax(0,1fr);gap:1rem;align-items:center;padding:1rem;border:1px solid var(--sg-line);border-radius:14px;background:#fff}.sgx-machine-order img{width:68px;height:68px;object-fit:contain;image-rendering:pixelated}.sgx-machine-order p{margin:.3rem 0 0;color:#556970}.sgx-base-recipe{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:.65rem;padding:1rem;border-radius:14px;background:var(--sg-ink);color:#fff}.sgx-base-recipe img{width:54px;height:54px;image-rendering:pixelated}.sgx-base-recipe strong{padding:.6rem;border-radius:8px;background:var(--sg-blue-deep)}.sgx-crystals{grid-template-columns:repeat(5,1fr);margin-top:.8rem}.sgx-crystals article{padding:.85rem}.sgx-crystals p{font-size:.8rem}
    .sgx-components{grid-template-columns:repeat(2,1fr)}.sgx-components .sgx-item:first-child{grid-column:auto}.sgx-components .sgx-item img{width:64px;height:64px}.sgx-official-figure{margin:0 auto 1rem;padding:1.1rem;border:1px solid var(--sg-line);border-radius:18px;background:linear-gradient(145deg,#eaf3f6,#fff);text-align:center}.sgx-official-figure img{display:block;width:min(100%,700px);margin:auto;image-rendering:pixelated}.sgx-official-figure figcaption{margin:.8rem auto 0;max-width:720px;color:#52666f;line-height:1.5}.sgx-official-figure.small{max-width:650px}.sgx-actions{display:grid;grid-template-columns:repeat(2,1fr);gap:.65rem;margin:0;padding:0;list-style:none;counter-reset:sgsteps}.sgx-actions li{display:flex;flex-direction:column;padding:1rem;border-radius:12px;background:var(--sg-soft)}.sgx-actions span{margin-top:.25rem;color:#52666f;font-size:.88rem;line-height:1.45}
    .sgx-power-layout,.sgx-dial{display:grid;grid-template-columns:1fr 1fr;gap:1rem}.sgx-power-layout figure,.sgx-dial figure{margin:0;padding:1rem;border:1px solid var(--sg-line);border-radius:14px;background:#fff}.sgx-power-layout figure img,.sgx-dial figure img{display:block;width:100%;max-height:330px;object-fit:contain}.sgx-power-layout figcaption,.sgx-dial figcaption{margin-top:.7rem;font-size:.82rem;color:#60727a}.sgx-power-facts{display:grid;grid-template-columns:1fr 1fr;gap:.65rem}.sgx-power-facts b{font-size:1.4rem}.sgx-scenarios{margin-top:.8rem}.sgx-dial .sgx-actions{grid-template-columns:1fr}.sgx-troubleshooting{display:grid;gap:.55rem}.sgx-troubleshooting details{border:1px solid var(--sg-line);border-radius:10px;background:#fff}.sgx-troubleshooting summary{padding:.95rem;font-weight:750;cursor:pointer}.sgx-troubleshooting p{margin:0;padding:0 .95rem .95rem;color:#52666f;line-height:1.5}.sgx-finish{display:flex;gap:1rem;align-items:center;margin-top:1rem;padding:1.2rem;border-radius:14px;background:#12303c;color:#fff}.sgx-finish>span{display:grid;flex:0 0 auto;width:48px;height:48px;place-items:center;border-radius:50%;background:var(--sg-green);font-size:1.5rem}.sgx-finish h3,.sgx-finish p{margin:0}.sgx-finish p{margin-top:.25rem;color:#d7e9f0}
    .sgx-ref-intro{display:grid!important;grid-template-columns:1.05fr 1fr;gap:1.5rem;align-items:center;margin:1.1rem 0 0;padding:1.45rem;border:1px solid var(--sg-line);border-radius:18px;background:#fff}.sgx-ref-intro h2{margin:.1rem 0 .45rem;font-size:clamp(1.45rem,2.5vw,2rem);letter-spacing:-.025em}.sgx-ref-intro p:last-child{margin:0;color:#52666f;line-height:1.55}.sgx-ref-nav{display:grid;grid-template-columns:repeat(3,1fr);gap:.55rem}.sgx-ref-nav a{display:grid;min-height:46px;place-items:center;padding:.65rem .75rem;border:1px solid var(--sg-line);border-radius:10px;background:var(--sg-soft);color:var(--sg-ink);text-decoration:none;font-weight:750;font-size:.82rem}.sgx-ref-nav a:hover{border-color:var(--sg-blue);background:#e5f5fb}.sgx-reference-section{padding:2.5rem 0;border-bottom:1px solid var(--sg-line);scroll-margin-top:145px}.sgx-metrics{display:grid;grid-template-columns:repeat(5,1fr);gap:.65rem;margin:1rem 0}.sgx-metrics b{font-size:1.65rem}.sgx-table-wrap{overflow:auto;border:1px solid var(--sg-line);border-radius:13px;background:#fff}.sgx-table-wrap table{width:100%;border-collapse:collapse}.sgx-table-wrap th,.sgx-table-wrap td{padding:.78rem .9rem;border-bottom:1px solid #e3ebee;text-align:left}.sgx-table-wrap th{background:#19333e;color:#fff;font-size:.78rem;text-transform:uppercase;letter-spacing:.06em}.sgx-table-wrap .sgx-total td{font-weight:800;background:#eef8fc}.sgx-flow.compact{grid-template-columns:repeat(5,1fr)}.sgx-components.compact{grid-template-columns:repeat(3,1fr);margin-bottom:1rem}.sgx-bullets{display:grid;gap:.55rem;margin:1rem 0 0;padding:0;list-style:none}.sgx-bullets li{padding:.9rem 1rem .9rem 2.5rem;border-radius:10px;background:var(--sg-soft);position:relative}.sgx-bullets li:before{content:"✓";position:absolute;left:1rem;color:var(--sg-green);font-weight:900}.sgx-doc-links{display:grid;grid-template-columns:1fr 1fr;gap:.7rem}.sgx-doc-links a{display:flex;flex-direction:column;padding:1.1rem;border:1px solid var(--sg-line);border-radius:12px;background:#fff;color:var(--sg-ink);text-decoration:none}.sgx-doc-links a:hover{border-color:var(--sg-blue)}.sgx-doc-links span{margin-top:.3rem;color:#60727a;font-size:.86rem}
    @media (max-width:900px){.sgx-route{grid-template-columns:repeat(4,1fr)}.sgx-crystals{grid-template-columns:repeat(2,1fr)}.sgx-flow,.sgx-process-line{grid-template-columns:repeat(2,1fr)}.sgx-flow .sgx-item:after,.sgx-process-line .sgx-item:after{display:none}.sgx-shopping{grid-template-columns:repeat(3,1fr)}.sgx-metrics{grid-template-columns:repeat(3,1fr)}.sgx-components.compact{grid-template-columns:repeat(2,1fr)}}
    @media (max-width:680px){.sgx-tabs{position:static;width:100%}.sgx-tab{flex:1;padding:.72rem .55rem}.sgx-start,.sgx-ref-intro,.sgx-power-layout,.sgx-dial{grid-template-columns:1fr}.sgx-ref-nav{grid-template-columns:repeat(2,1fr)}.sgx-start ul{grid-template-columns:1fr}.sgx-route{grid-template-columns:repeat(3,1fr)}.sgx-mission{grid-template-columns:1fr;padding:2.2rem 0}.sgx-mission-number{font-size:1.4rem}.sgx-workshops,.sgx-three-lines,.sgx-components,.sgx-scenarios,.sgx-actions,.sgx-doc-links{grid-template-columns:1fr}.sgx-shopping{grid-template-columns:repeat(2,1fr)}.sgx-allocation{grid-template-columns:1fr 1fr}.sgx-allocation h3{grid-column:1/-1}.sgx-crystals{grid-template-columns:1fr}.sgx-metrics{grid-template-columns:repeat(2,1fr)}.sgx-flow.compact,.sgx-components.compact{grid-template-columns:1fr}.sgx-table-wrap{font-size:.82rem}.sgx-official-figure{padding:.6rem}}
  `;
  document.head.appendChild(style);

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
