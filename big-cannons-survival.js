(() => {
  const root = document.querySelector('#tutorial-big-cannons .cbc');
  if (!root || document.getElementById('cbc-autocannon-panel')) return;

  const oldManual = root.querySelector('#cbc-manual-panel');
  const oldRecipes = root.querySelector('#cbc-recipes-panel');
  oldManual?.remove();
  oldRecipes?.remove();

  const switcher = root.querySelector('.cbc-switcher');
  switcher.innerHTML = `
    <button id="cbc-guide-tab" type="button" role="tab" aria-selected="true" aria-controls="cbc-guide-panel">Fonctionnement général</button>
    <button id="cbc-autocannon-tab" type="button" role="tab" aria-selected="false" aria-controls="cbc-autocannon-panel" tabindex="-1">Premier autocanon</button>`;

  const panel = document.createElement('div');
  panel.className = 'cbc-survival';
  panel.id = 'cbc-autocannon-panel';
  panel.setAttribute('role', 'tabpanel');
  panel.setAttribute('aria-labelledby', 'cbc-autocannon-tab');
  panel.hidden = true;
  panel.innerHTML = `
    <header class="cbc-survival-hero">
      <p class="cbc-eyebrow">Parcours survie · de zéro au premier tir</p>
      <h1>Construire un autocanon simple.</h1>
      <p>On part de matières premières et on fabrique une arme réellement fonctionnelle : pièces coulées ensemble, tube alésé, culasse terminée, munitions chargées et affût commandé.</p>
      <div class="cbc-project-line" aria-label="Architecture du premier autocanon">
        <b>[Breech / Culasse]</b><i>→</i><b>[Recoil Spring / Ressort de recul]</b><i>→</i><b>[Barrel / Canon]</b><i>→</i><b>[Barrel / Canon]</b><i>→</i><b>Air</b>
      </div>
    </header>

    <section class="cbc-survival-step" id="cbc-auto-project">
      <div class="cbc-step-title"><span>01</span><div><p class="cbc-step-kicker">Le projet</p><h2>Savoir exactement ce que l’on construit.</h2></div></div>
      <p class="cbc-body-copy">Pour un premier essai, construis un autocanon en <strong>fonte</strong> composé d’une <strong>[Breech / Culasse]</strong>, d’un <strong>[Recoil Spring / Ressort de recul]</strong> et de deux <strong>[Barrels / Canons]</strong>. Le ressort est facultatif pour tirer, mais ce parcours l’inclut afin d’apprendre sa fabrication et d’obtenir l’animation de recul complète.</p>
      <div class="cbc-reason-grid">
        <article><b>Pourquoi la fonte ?</b><span>Elle se fabrique tôt avec du fer et du charbon.</span></article>
        <article><b>Pourquoi deux canons ?</b><span>Avec le ressort, ils remplissent les trois sections disponibles après la culasse en fonte.</span></article>
        <article><b>À quoi sert le ressort ?</b><span>Il fait reculer visuellement le tube à chaque tir. Il est optionnel et ne supprime pas le recul physique de l’arme.</span></article>
      </div>
      <div class="cbc-checkpoint"><b>Objectif final</b><span>Une ligne droite de quatre blocs, fermée côté culasse et ouverte côté cible.</span></div>
    </section>

    <section class="cbc-survival-step" id="cbc-auto-shopping">
      <div class="cbc-step-title"><span>02</span><div><p class="cbc-step-kicker">Avant de commencer</p><h2>Réunir l’atelier et les consommables.</h2></div></div>
      <div class="cbc-budget-grid">
        <article><h3>Atelier réutilisable</h3><ul><li>1 [Basin Foundry Lid / Couvercle de fonderie]</li><li>1 [Cannon Drill / Foreuse à canon]</li><li>1 [Mechanical Bearing / Roulement mécanique]</li><li>1 [Mechanical Saw / Scie mécanique]</li><li>1 [Cannon Mount / Affût de canon]</li><li>1 [Cannon Mount Extension / Extension d’affût]</li><li>1 [Cannon Welder / Soudeur de canon], facultatif mais conseillé</li></ul></article>
        <article><h3>Pour ce premier canon</h3><ul><li>15 lingots de fonte</li><li>4 blocs de sable de moulage</li><li>3 bûches pour les moules</li><li>9 plaques de fer</li><li>1 lingot de laiton</li><li>6 arbres, 2 boîtiers d’andésite</li><li>16 poudres à canon + 12 pépites de cuivre</li></ul></article>
      </div>
      <p class="cbc-note"><strong>Les 15 lingots de fonte :</strong> 14 seront fondus pour couler les quatre pièces ; le dernier deviendra l’extracteur qui termine la culasse. Une des 9 plaques de fer sert à fabriquer le mécanisme du ressort.</p>
      <p class="cbc-note"><strong>Soudeur facultatif :</strong> ajoute 1 poignée de vanne, 1 plaque de fer, 3 plaques de laiton et 1 brûleur à Blaze si tu veux pouvoir reconnecter des pièces séparées.</p>
    </section>

    <section class="cbc-survival-step" id="cbc-auto-cast-iron">
      <div class="cbc-step-title"><span>03</span><div><p class="cbc-step-kicker">Métallurgie</p><h2>Produire 15 lingots de fonte.</h2></div></div>
      <div class="cbc-process-line"><b>1 lingot de fer</b><i>+</i><b>1 charbon</b><i>→</i><b>[Mechanical Press / Presse mécanique]</b><i>→</i><strong>1 lingot de fonte</strong></div>
      <div class="cbc-actions">
        <article><b>1.</b><span>Place un [Basin / Bassin] sous une presse.</span></article>
        <article><b>2.</b><span>Chauffe le bassin avec un [Blaze Burner / Brûleur à Blaze]. Le niveau chauffé ordinaire suffit.</span></article>
        <article><b>3.</b><span>Compacte 15 lingots de fer avec 15 charbons.</span></article>
      </div>
      <p class="cbc-checkpoint"><b>Tu dois repartir avec :</b><span>15 lingots de fonte solides.</span></p>
    </section>

    <section class="cbc-survival-step" id="cbc-auto-foundry">
      <div class="cbc-step-title"><span>04</span><div><p class="cbc-step-kicker">Fonderie</p><h2>Faire fondre 14 lingots.</h2></div></div>
      <p class="cbc-body-copy">Pose le <strong>[Basin Foundry Lid / Couvercle de fonderie]</strong> sur un bassin chauffé. Il transforme les lingots de fonte en métal liquide, que tu peux transporter avec les tuyaux et pompes de Create.</p>
      <div class="cbc-math"><span>14 lingots</span><i>×</i><span>90 mB</span><i>=</i><strong>1 260 mB de fonte liquide</strong></div>
      <p class="cbc-note">Garde le quinzième lingot sous forme solide : il sert à fabriquer le [Breech Extractor / Extracteur de culasse].</p>
    </section>

    <section class="cbc-survival-step" id="cbc-auto-moulds">
      <div class="cbc-step-title"><span>05</span><div><p class="cbc-step-kicker">Moules</p><h2>Préparer les quatre couches de coulée.</h2></div></div>
      <div class="cbc-recipe-pairs">
        <article><h3>Moules en bois</h3><p>Découpe trois bûches pour obtenir les moules de <strong>culasse</strong>, de <strong>ressort de recul</strong> et de <strong>canon</strong>. Le moule de canon est réutilisé pour les deux canons.</p></article>
        <article><h3>Sable de moulage</h3><p><strong>2 sables + 1 terre + 1 boule d’argile</strong> produisent 1 bloc. Fabrique-en quatre.</p></article>
      </div>
      <div class="cbc-cast-stack" aria-label="Quatre couches du moule vertical">
        <div><b>Haut</b><span>Moule de canon + sable</span></div>
        <div><b>Couche 3</b><span>Moule de canon + sable</span></div>
        <div><b>Couche 2</b><span>Moule de ressort de recul + sable</span></div>
        <div><b>Bas</b><span>Moule de culasse + sable</span></div>
      </div>
    </section>

    <section class="cbc-survival-step" id="cbc-auto-casting">
      <div class="cbc-step-title"><span>06</span><div><p class="cbc-step-kicker">Coulée connectée</p><h2>Couler les quatre pièces en une seule colonne.</h2></div></div>
      <p class="cbc-body-copy">Empile les quatre formes <strong>directement les unes sur les autres</strong>, puis remplis-les sans les déplacer. La coulée commune crée automatiquement les connexions internes entre les pièces.</p>
      <div class="cbc-workshop-diagram">
        <div class="top"><b>[Barrel / Canon]</b><span>270 mB</span></div>
        <div class="middle"><b>[Barrel / Canon]</b><span>270 mB</span></div>
        <div class="middle"><b>[Recoil Spring / Ressort de recul]</b><span>360 mB</span></div>
        <div class="bottom"><b>[Breech / Culasse]</b><span>360 mB</span></div>
        <div class="out"><strong>Total : 1 260 mB</strong><span>Attends la solidification complète.</span></div>
      </div>
      <p class="cbc-checkpoint"><b>Pourquoi une seule colonne ?</b><span>Parce qu’un assemblage coulé ensemble est déjà connecté. Aucun soudage n’est nécessaire tant que tu ne sépares pas les blocs.</span></p>
    </section>

    <section class="cbc-survival-step" id="cbc-auto-boring">
      <div class="cbc-step-title"><span>07</span><div><p class="cbc-step-kicker">Usinage</p><h2>Aléser le tube de part en part.</h2></div></div>
      <p class="cbc-body-copy">Les pièces sorties du moule sont pleines. Il faut créer leur passage intérieur avec la <strong>[Cannon Drill / Foreuse à canon]</strong>.</p>
      <div class="cbc-boring-diagram"><div class="drill">Foreuse + eau</div><i>→</i><div class="work">Canon vertical sur roulement mécanique</div></div>
      <ol class="cbc-numbered">
        <li>Fixe la colonne sur un [Mechanical Bearing / Roulement mécanique] afin qu’elle tourne comme sur un tour.</li>
        <li>Aligne la foreuse exactement avec l’axe du canon.</li>
        <li>Alimente la foreuse en eau.</li>
        <li>Donne à la foreuse et au roulement la <strong>même vitesse de rotation</strong>.</li>
        <li>Fais traverser les quatre blocs par la tête de forage.</li>
      </ol>
      <p class="cbc-warning"><strong>Si rien ne se passe :</strong> vérifie d’abord l’eau, l’alignement et l’égalité des vitesses.</p>
    </section>

    <section class="cbc-survival-step" id="cbc-auto-extractor">
      <div class="cbc-step-title"><span>08</span><div><p class="cbc-step-kicker">Terminer les mécanismes</p><h2>Installer le ressort interne et l’extracteur.</h2></div></div>
      <div class="cbc-process-line"><b>1 plaque de fer</b><i>→</i><b>Scie</b><i>→</i><b>[Spring Wire / Fil à ressort]</b><i>→</i><b>Presse × 3 cycles</b><i>→</i><strong>[Recoil Spring / Ressort de recul]</strong></div>
      <p class="cbc-body-copy">Prends l’objet ressort en main et fais un clic droit sur le bloc de ressort de recul incomplet. Tu termines ainsi le mécanisme placé entre la culasse et les canons.</p>
      <div class="cbc-process-line"><b>1 lingot de fonte</b><i>→</i><b>Scie × 3 passages</b><i>→</i><strong>[Breech Extractor / Extracteur de culasse]</strong></div>
      <p class="cbc-body-copy">Prends l’extracteur en main et fais un clic droit sur la culasse incomplète. Elle devient une véritable <strong>[Autocannon Breech / Culasse d’autocanon]</strong>, sans perdre les connexions créées pendant la coulée.</p>
    </section>

    <section class="cbc-survival-step" id="cbc-auto-moving">
      <div class="cbc-step-title"><span>09</span><div><p class="cbc-step-kicker">Déplacer sans casser</p><h2>Préserver l’assemblage coulé.</h2></div></div>
      <div class="cbc-choice-grid">
        <article><b>Solution recommandée</b><p>Déplace tout le canon d’un seul tenant avec une contraption Create ou construis l’atelier près de l’affût.</p></article>
        <article><b>Avec Silk Touch</b><p>Tu récupères les blocs, mais les reposer séparément ne recrée pas leurs connexions. Il faudra souder chaque jonction.</p></article>
        <article><b>Sans Silk Touch</b><p>Une pièce de canon coulée cassée normalement risque de devenir de la ferraille.</p></article>
      </div>
    </section>

    <section class="cbc-survival-step cbc-welding" id="cbc-auto-welding">
      <div class="cbc-step-title"><span>10</span><div><p class="cbc-step-kicker">Réparation et montage</p><h2>Reconnecter deux pièces avec la soudure.</h2></div></div>
      <p class="cbc-checkpoint"><b>Cette section ne vous concerne que si vous avez récupéré les pièces avec une pioche Silk Touch, puis les avez reposées séparément.</b><span>Si elles ont été cassées sans Silk Touch et transformées en ferraille, elles sont irrécupérables : vous devez recommencer leur fabrication depuis le début.</span></p>
      <p class="cbc-body-copy">La soudure n’est utile que si les pièces ont été coulées séparément, démontées ou replacées. Elle relie deux blocs adjacents pour que le jeu les reconnaisse comme un seul canon.</p>
      <div class="cbc-weld-recipe"><b>[Cannon Welder / Soudeur de canon]</b><span>1 [Valve Handle / Poignée de vanne]</span><span>1 plaque de fer</span><span>3 plaques de laiton</span><span>1 [Blaze Burner / Brûleur à Blaze]</span></div>
      <div class="cbc-weld-line"><div><b>1</b><span>Prends le soudeur en main.</span></div><i>→</i><div><b>2</b><span>Clic droit sur la première pièce.</span></div><i>→</i><div><b>3</b><span>Clic droit sur la pièce voisine.</span></div><i>→</i><div><b>4</b><span>Recommence à chaque jonction.</span></div></div>
      <p class="cbc-note"><strong>Pour annuler une sélection :</strong> accroupis-toi avec Maj. Tu peux ensuite recommencer sur la bonne paire.</p>
      <h3>Si le soudage refuse de fonctionner</h3>
      <div class="cbc-condition-grid">
        <span>Même matériau</span><span>Même famille de canon</span><span>Blocs directement adjacents</span><span>Ouvertures parfaitement alignées</span><span>Pièces terminées et alésées</span><span>Une jonction à la fois</span>
      </div>
      <p class="cbc-warning"><strong>Attention :</strong> sur certains matériaux, un canon soudé supporte moins de pression. Pour cet autocanon en fonte, retiens surtout qu’une coulée commune évite le problème.</p>
    </section>

    <section class="cbc-survival-step" id="cbc-auto-mount">
      <div class="cbc-step-title"><span>11</span><div><p class="cbc-step-kicker">Installation</p><h2>Poser le canon sur son affût.</h2></div></div>
      <div class="cbc-recipe-pairs">
        <article><h3>[Cannon Mount / Affût]</h3><p>1 boîtier d’andésite + 4 arbres + 2 plaques de fer + 2 poudres à canon.</p></article>
        <article><h3>[Mount Extension / Extension]</h3><p>1 boîtier d’andésite + 2 arbres + 2 poudres à canon.</p></article>
      </div>
      <ol class="cbc-numbered"><li>Pose l’affût.</li><li>Place l’extension au-dessus.</li><li>Pose l’autocanon horizontalement, culasse vers l’arrière, en alignant le bloc de ressort au-dessus de l’extension.</li><li>Ne mets pas encore l’affût sous tension : laisse le canon sous forme de blocs pour préparer ses commandes.</li></ol>
      <p class="cbc-checkpoint"><b>À ce stade, rien ne bouge :</b><span>c’est normal. L’étape 13 transformera ces blocs en un véritable canon manipulable.</span></p>
    </section>

    <section class="cbc-survival-step" id="cbc-auto-ammo">
      <div class="cbc-step-title"><span>12</span><div><p class="cbc-step-kicker">Munitions</p><h2>Fabriquer douze cartouches et leur chargeur.</h2></div></div>
      <div class="cbc-ammo-chain"><b>1 plaque de fer</b><i>Scie</i><b>3 feuilles de cartouche</b><i>Scie</i><b>12 douilles vides</b><i>+ poudre + cuivre</i><strong>12 cartouches</strong></div>
      <p class="cbc-body-copy">Chaque douille vide reçoit <strong>1 poudre à canon + 1 pépite de cuivre</strong>. Fabrique ensuite un <strong>[Autocannon Ammo Container / Conteneur de munitions]</strong> avec 1 lingot de laiton et 5 plaques de fer. Il peut contenir 128 cartouches.</p>
      <p class="cbc-note">Remplis le conteneur puis fais un clic droit sur la culasse avec celui-ci pour l’attacher.</p>
    </section>

    <section class="cbc-survival-step" id="cbc-auto-fire">
      <div class="cbc-step-title"><span>13</span><div><p class="cbc-step-kicker">Premier tir</p><h2>Transformer les blocs en canon contrôlable, puis tirer.</h2></div></div>
      <p class="cbc-body-copy">Pour l’instant, ton autocanon est encore une rangée de blocs immobiles. Le <strong>[Cannon Mount / Affût de canon]</strong> va les convertir en une <strong>contraption Create</strong> : un seul objet mobile, attaché à l’affût, que le jeu peut orienter et faire tirer. Il ne faut ni colle ni outil spécial pour cette conversion.</p>

      <h3>1. Activer le pilotage manuel</h3>
      <ol class="cbc-numbered"><li>Vérifie que la face de l’affût marquée d’un marteau n’est pas alimentée.</li><li>Avec une <strong>[Wrench / Clé]</strong> de Create, fais un clic droit sur la <strong>[Breech / Culasse]</strong>. Des poignées doivent apparaître.</li><li>Ces poignées sont l’élément important : elles permettent au joueur de monter sur l’autocanon et de l’orienter avec sa caméra.</li><li>Si ce n’est pas déjà fait, fixe le conteneur de munitions rempli sur la culasse.</li></ol>
      <p class="cbc-checkpoint"><b>Option vivement conseillée — ajouter un siège :</b><span>prends n’importe quel [Seat / Siège] de Create et fais un clic droit sur la culasse munie de poignées. Le siège est purement visuel : les poignées assurent le pilotage, mais le siège donne enfin au canon l’apparence d’un vrai poste de tir. Sur cet affût, il tourne avec le canon sans rouler au sol ; un véritable canon mobile utilise un [Cannon Carriage / Chariot de canon].</span></p>

      <h3>2. Transformer le canon en contraption</h3>
      <ol class="cbc-numbered"><li>Place un levier de façon à alimenter la face de l’affût portant le symbole du marteau.</li><li>Active le levier. Toute la rangée — culasse, ressort et canons — doit quitter la grille de blocs et devenir un seul ensemble mobile attaché à l’affût.</li><li>Garde ce signal actif pendant l’utilisation. Si tu le coupes, l’affût désassemble le canon et replace ses blocs dans le monde.</li></ol>
      <p class="cbc-checkpoint"><b>Si seule une pièce est emportée :</b><span>les blocs ne sont pas tous connectés. Coupe le signal, puis retourne à l’étape 10 pour souder les jonctions manquantes.</span></p>

      <h3>3. Monter, viser et tirer</h3>
      <ol class="cbc-numbered"><li>Fais un clic droit sur la culasse assemblée — ou sur son siège — pour prendre les commandes.</li><li>Déplace la souris : l’autocanon suit ton regard en hauteur et en direction.</li><li>Place un <strong>[Analog Lever / Levier analogique]</strong> sur la face lumineuse de l’affût et règle-le sur <strong>1</strong>. Avec les poignées, ce signal fixe la cadence sans déclencher le tir tout seul.</li><li>Vise une cible sûre, puis maintiens le clic gauche pour tirer. Relâche-le pour cesser le feu.</li><li>Appuie sur Maj pour quitter le poste de tir. Tu pourras ensuite augmenter progressivement le levier ; le niveau 15 correspond à 300 coups par minute.</li></ol>
      <p class="cbc-checkpoint"><b>Le canon ne tire pas ?</b><span>vérifie d’abord que tu es bien monté sur la culasse à poignées, que le conteneur contient des cartouches et que le levier de cadence n’est pas à zéro.</span></p>
    </section>

    <section class="cbc-survival-step" id="cbc-auto-next">
      <div class="cbc-step-title"><span>14</span><div><p class="cbc-step-kicker">Après le prototype</p><h2>Améliorer sans repartir dans le flou.</h2></div></div>
      <p class="cbc-body-copy">Ton premier autocanon valide toute la chaîne : fonte, coulée connectée, alésage, ressort interne, finition de la culasse, affût et munitions. Tu peux maintenant automatiser l’approvisionnement, passer au bronze ou à l’acier, puis concevoir un système de visée.</p>
      <p class="cbc-checkpoint"><b>La règle utile :</b><span>ne change qu’un élément à la fois. Tu sauras ainsi immédiatement quelle modification améliore — ou casse — le canon.</span></p>
    </section>`;
  root.append(panel);

  const tabs = [...switcher.querySelectorAll('[role="tab"]')];
  const panels = [root.querySelector('#cbc-guide-panel'), panel];
  const storageKey = 'regalade.big-cannons.mode';
  const select = mode => {
    const safeMode = mode === 'autocannon' ? mode : 'guide';
    tabs.forEach(button => {
      const selected = button.id === `cbc-${safeMode}-tab`;
      button.setAttribute('aria-selected', String(selected));
      button.tabIndex = selected ? 0 : -1;
    });
    panels.forEach(item => { if (item) item.hidden = item.id !== `cbc-${safeMode}-panel`; });
    try { localStorage.setItem(storageKey, safeMode); } catch (_) { /* Storage is optional. */ }
    document.dispatchEvent(new CustomEvent('regalade:tutorial-content-changed'));
  };
  tabs.forEach((button, index) => {
    const mode = button.id === 'cbc-autocannon-tab' ? 'autocannon' : 'guide';
    button.addEventListener('click', () => select(mode));
    button.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
      tabs[next].focus();
      tabs[next].click();
    });
  });

  let saved = 'guide';
  try { saved = localStorage.getItem(storageKey) === 'autocannon' ? 'autocannon' : 'guide'; } catch (_) { /* Storage is optional. */ }
  select(saved);
})();
