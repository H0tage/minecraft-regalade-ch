(() => {
  const root = document.querySelector('#tutorial-big-cannons .cbc');
  if (!root || document.getElementById('cbc-autocannon-panel')) return;


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
      <p class="cbc-eyebrow">De zéro au premier tir</p>
      <h1>Construire un autocanon simple.</h1>
      <p>De la boue à la bombe nucléaire… Bon, peut-être pas, mais pas loin ! Grâce à ce guide, tu vas pouvoir créer ta première tourelle ou ton premier canon mobile, de A à Z : de la matière première au premier assas… hum, au « premier tir de test en conditions sécurisées ».</p>
      <p class="cbc-version">Validé pour Create Big Cannons 5.11.7 · Modpack Régalade</p>
      <div class="cbc-project-line" aria-label="Architecture du premier autocanon">
        <b>[Breech / Culasse]</b><i>→</i><b>[Recoil Spring / Ressort de recul]</b><i>→</i><b>[Barrel / Canon]</b><i>→</i><b>[Barrel / Canon]</b><i>→</i><b>Air</b>
      </div>
    </header>

    <section class="cbc-survival-step" id="cbc-auto-project" data-phase="Préparer le projet">
      <div class="cbc-step-title"><span>01</span><div><p class="cbc-step-kicker">Le projet</p><h2>Préparation du projet</h2></div></div>
      <p class="cbc-body-copy">Pour un premier essai, construis un autocanon en <strong>fonte</strong> composé d’une <strong>[Breech / Culasse]</strong>, d’un <strong>[Recoil Spring / Ressort de recul]</strong> et de deux <strong>[Barrels / Canons]</strong>.</p>
      <div class="cbc-reason-grid">
        <article><b>Pourquoi la fonte ?</b><span>Elle se fabrique tôt avec du fer et du charbon.</span></article>
        <article><b>Pourquoi deux canons ?</b><span>Avec le ressort, ils remplissent les trois sections disponibles après la culasse en fonte.</span></article>
      </div>
      <div class="cbc-early-choice" aria-label="Choisir le support final">
        <article><b>A · Tourelle sur affût</b><span>Reste au sol et se pilote depuis la culasse. Choisis cette route pour une installation permanente.</span></article>
        <article><b>B · Chariot mobile</b><span>Devient un véhicule d’artillerie. Choisis cette route pour rouler, viser et tirer depuis le chariot.</span></article>
      </div>
      <p class="cbc-note"><strong>Choisis maintenant :</strong> le tube de l’autocanon reste identique, mais la liste de courses du support change.</p>
    </section>

    <section class="cbc-survival-step" id="cbc-auto-shopping" data-phase="Préparer le projet">
      <div class="cbc-step-title"><span>02</span><div><p class="cbc-step-kicker">Avant de commencer</p><h2>Réunir l’atelier et les consommables.</h2></div></div>
      <div class="cbc-workshop-list">
        <h3>Atelier commun aux deux routes</h3>
        <ul><li>1 [Mechanical Press / Presse mécanique] et 1 [Mechanical Saw / Scie mécanique]</li><li>1 [Basin Foundry Lid / Couvercle de fonderie] et 1 [Blaze Burner / Brûleur à Blaze]</li><li>1 [Cannon Drill / Foreuse à canon] et 1 [Mechanical Bearing / Roulement mécanique]</li><li>Des tuyaux, 1 [Mechanical Pump / Pompe mécanique] et une source de rotation Create</li><li>Des arbres et engrenages pour relier les machines selon la forme de ton atelier</li></ul>
      </div>
      <div class="cbc-shopping-grid">
        <article class="common"><p class="cbc-route-tag">Tronc commun</p><h3>Le tube et ses munitions</h3><ul><li>15 lingots de fer + 15 charbons</li><li>8 sables + 4 terres + 4 boules d’argile</li><li>3 bûches pour les moules</li><li>7 plaques de fer</li><li>1 lingot de laiton</li><li>12 poudres à canon + 12 pépites de cuivre</li></ul></article>
        <article class="fixed"><p class="cbc-route-tag">A · Tourelle sur affût</p><h3>Supplément fixe</h3><ul><li>6 arbres</li><li>2 boîtiers d’andésite</li><li>2 plaques de fer</li><li>4 poudres à canon</li></ul><strong>Total : 9 plaques de fer</strong></article>
        <article class="mobile"><p class="cbc-route-tag">B · Chariot mobile</p><h3>Supplément mobile</h3><ul><li>1 bûche + 4 planches</li><li>1 arbre</li><li>4 plaques de fer</li><li>1 selle facultative</li></ul><strong>Total : 11 plaques de fer</strong></article>
      </div>
      <p class="cbc-note"><strong>Pourquoi 7 plaques communes ?</strong> Une devient le mécanisme du ressort, une produit les feuilles des douilles et cinq servent au conteneur de munitions.</p>
      <p class="cbc-note"><strong>Le soudeur n’est pas requis :</strong> sa recette et son usage restent disponibles plus bas uniquement si tu démontes accidentellement le canon.</p>
    </section>

    <section class="cbc-survival-step" id="cbc-auto-cast-iron" data-phase="Fabriquer le tube">
      <div class="cbc-step-title"><span>03</span><div><p class="cbc-step-kicker">Métallurgie</p><h2>Produire 15 lingots de fonte.</h2></div></div>
      <div class="cbc-process-line"><b>1 lingot de fer</b><i>+</i><b>1 charbon</b><i>→</i><b>[Mechanical Press / Presse mécanique]</b><i>→</i><strong>1 lingot de fonte</strong></div>
      <div class="cbc-actions">
        <article><b>1.</b><span>Place un [Basin / Bassin] sous une presse.</span></article>
        <article><b>2.</b><span>Chauffe le bassin avec un [Blaze Burner / Brûleur à Blaze]. Le niveau chauffé ordinaire suffit.</span></article>
        <article><b>3.</b><span>Compacte 15 lingots de fer avec 15 charbons.</span></article>
      </div>
      <p class="cbc-checkpoint"><b>Tu dois repartir avec :</b><span>15 lingots de fonte solides.</span></p>
    </section>

    <section class="cbc-survival-step" id="cbc-auto-foundry" data-phase="Fabriquer le tube">
      <div class="cbc-step-title"><span>04</span><div><p class="cbc-step-kicker">Fonderie</p><h2>Faire fondre 14 lingots.</h2></div></div>
      <p class="cbc-body-copy">Pose le <strong>[Basin Foundry Lid / Couvercle de fonderie]</strong> sur un bassin chauffé. Il transforme les lingots de fonte en métal liquide, que tu peux transporter avec les tuyaux et pompes de Create.</p>
      <div class="cbc-math"><span>14 lingots</span><i>×</i><span>90 mB</span><i>=</i><strong>1 260 mB de fonte liquide</strong></div>
      <p class="cbc-note">Garde le quinzième lingot sous forme solide : il sert à fabriquer le [Breech Extractor / Extracteur de culasse].</p>
    </section>

    <section class="cbc-survival-step" id="cbc-auto-moulds" data-phase="Fabriquer le tube">
      <div class="cbc-step-title"><span>05</span><div><p class="cbc-step-kicker">Moules</p><h2>Préparer les quatre couches de coulée.</h2></div></div>
      <div class="cbc-recipe-pairs">
        <article><h3>Moules en bois</h3><p>Découpe trois bûches pour obtenir les moules de <strong>culasse</strong>, de <strong>ressort de recul</strong> et de <strong>canon</strong>. Le moule de canon est réutilisé pour les deux canons.</p></article>
        <article><h3>Sable de moulage</h3><p><strong>2 sables + 1 terre + 1 boule d’argile</strong> produisent 1 bloc. Fabrique-en quatre : un pour remplir le moule central de chaque couche.</p></article>
      </div>
      <p class="cbc-body-copy">Chaque étage se prépare de la même manière. Le <strong>deuxième clic</strong> est indispensable : sans lui, tu n’as pas encore créé une véritable couche de coulée.</p>
      <div class="cbc-mould-sequence" aria-label="Former une couche de moule d’autocanon">
        <article><img src="assets/big-cannons/cast-mould-block.png" alt=""><b>1 · Poser le moule</b><span>Place au sol le moule en bois correspondant à la pièce.</span></article><i>→</i>
        <article><img src="assets/big-cannons/casting-sand.png" alt=""><b>2 · Ajouter le sable</b><span>Clic droit sur le moule avec 1 [Casting Sand / Sable de moulage].</span></article><i>→</i>
        <article><img src="assets/big-cannons/cannon-cast.png" alt=""><b>3 · Valider la couche</b><span>À main vide, refais un clic droit : la couche de coulée se forme réellement.</span></article><i>→</i>
        <article><img src="assets/big-cannons/cast-mould-block.png" alt=""><b>4 · Continuer au-dessus</b><span>Pose le moule suivant sur la couche terminée et répète les deux clics.</span></article>
      </div>
      <p class="cbc-note"><strong>Pas de carré de 3 × 3 ici :</strong> cette couronne de sable sert aux grands moules de gros canon, pas aux petites pièces d’autocanon.</p>
      <div class="cbc-cast-stack" aria-label="Quatre couches du moule vertical">
        <div><b>Haut</b><span>Moule de canon rempli</span></div>
        <div><b>Couche 3</b><span>Moule de canon rempli</span></div>
        <div><b>Couche 2</b><span>Moule de ressort de recul rempli</span></div>
        <div><b>Bas</b><span>Moule de culasse rempli</span></div>
      </div>
    </section>

    <section class="cbc-survival-step" id="cbc-auto-casting" data-phase="Fabriquer le tube">
      <div class="cbc-step-title"><span>06</span><div><p class="cbc-step-kicker">Coulée connectée</p><h2>Couler les quatre pièces en une seule colonne.</h2></div></div>
      <p class="cbc-body-copy">Empile les quatre formes <strong>directement les unes sur les autres</strong>, puis remplis-les sans les déplacer. La coulée commune crée automatiquement les connexions internes entre les pièces.</p>
      <div class="cbc-fluid-scene" aria-label="Acheminer la fonte liquide vers le moule">
        <article><img src="assets/big-cannons/basin-foundry-lid.png" alt=""><b>Fonderie chauffée</b><span>Elle contient les 1 260 mB de fonte liquide.</span></article><i>→</i>
        <article><b>Tuyau + pompe mécanique</b><span>Relie la sortie de la fonderie à une face libre de la colonne. Vérifie la flèche de la pompe.</span></article><i>→</i>
        <article><img src="assets/big-cannons/cannon-cast.png" alt=""><b>Colonne terminée</b><span>Laisse couler les 1 260 mB, puis attends la solidification complète.</span></article>
      </div>
      <div class="cbc-workshop-diagram">
        <div class="top"><b>[Barrel / Canon]</b><span>270 mB</span></div>
        <div class="middle"><b>[Barrel / Canon]</b><span>270 mB</span></div>
        <div class="middle"><b>[Recoil Spring / Ressort de recul]</b><span>360 mB</span></div>
        <div class="bottom"><b>[Breech / Culasse]</b><span>360 mB</span></div>
        <div class="out"><strong>Total : 1 260 mB</strong><span>Attends la solidification complète.</span></div>
      </div>
      <p class="cbc-checkpoint"><b>Pourquoi une seule colonne ?</b><span>Parce qu’un assemblage coulé ensemble est déjà connecté. Aucun soudage n’est nécessaire tant que tu ne sépares pas les blocs.</span></p>
    </section>

    <section class="cbc-survival-step" id="cbc-auto-boring" data-phase="Fabriquer le tube">
      <div class="cbc-step-title"><span>07</span><div><p class="cbc-step-kicker">Usinage</p><h2>Aléser le tube de part en part.</h2></div></div>
      <p class="cbc-body-copy">Les pièces sorties du moule sont pleines. Il faut créer leur passage intérieur avec la <strong>[Cannon Drill / Foreuse à canon]</strong>.</p>
      <div class="cbc-boring-diagram"><div class="drive"><b>Rotation Create</b><span>fait avancer la foreuse</span></div><i>→</i><div class="drill"><img src="assets/big-cannons/cannon-drill.png" alt=""><b>[Cannon Drill / Foreuse à canon]</b><span>alimentée en eau</span></div><i>→</i><div class="work"><b>Tube horizontal</b><span>tourne sur le [Mechanical Bearing / Roulement mécanique]</span></div></div>
      <ol class="cbc-numbered">
        <li>Couche le tube à l’horizontale et fixe son extrémité arrière sur un [Mechanical Bearing / Roulement mécanique] pour le faire tourner comme sur un tour.</li>
        <li>En face de la bouche, pose une [Cannon Drill / Foreuse à canon] parfaitement alignée avec l’axe du tube. Son système d’extension doit lui permettre d’avancer tout droit.</li>
        <li>Raccorde de l’eau à la foreuse avec un tuyau.</li>
        <li>Alimente le roulement et la foreuse. La foreuse doit tourner <strong>au moins aussi vite</strong> que le tube ; elle peut aller plus vite.</li>
        <li>Laisse la tête de forage avancer et traverser successivement les quatre blocs, puis retire-la complètement.</li>
      </ol>
      <p class="cbc-warning"><strong>Si rien ne se passe :</strong> vérifie l’eau, l’alignement, le sens d’avancement et surtout que la foreuse n’est pas plus lente que le tube.</p>
    </section>

    <section class="cbc-survival-step" id="cbc-auto-extractor" data-phase="Fabriquer le tube">
      <div class="cbc-step-title"><span>08</span><div><p class="cbc-step-kicker">Terminer les mécanismes</p><h2>Installer le ressort interne et l’extracteur.</h2></div></div>
      <div class="cbc-process-line"><b>1 plaque de fer</b><i>→</i><b>Scie</b><i>→</i><b>[Spring Wire / Fil à ressort]</b><i>→</i><b>Presse × 3 cycles</b><i>→</i><strong>[Recoil Spring / Ressort de recul]</strong></div>
      <p class="cbc-body-copy">Prends l’objet ressort en main et fais un clic droit sur le bloc de ressort de recul incomplet. Tu termines ainsi le mécanisme placé entre la culasse et les canons.</p>
      <div class="cbc-process-line"><b>1 lingot de fonte</b><i>→</i><b>Scie × 3 passages</b><i>→</i><strong>[Breech Extractor / Extracteur de culasse]</strong></div>
      <p class="cbc-body-copy">Prends l’extracteur en main et fais un clic droit sur la culasse incomplète. Elle devient une véritable <strong>[Autocannon Breech / Culasse d’autocanon]</strong>, sans perdre les connexions créées pendant la coulée.</p>
    </section>

    <details class="cbc-rescue" id="cbc-auto-rescue">
      <summary>Tu as démonté ou cassé une pièce ? Ouvre cette procédure de secours.</summary>
      <div class="cbc-rescue-body">
        <p class="cbc-checkpoint"><b>Cette section ne sert que si tu as récupéré les pièces avec une pioche Silk Touch avant de les reposer séparément.</b><span>Si elles ont été cassées sans Silk Touch et transformées en ferraille, elles sont irrécupérables : recommence leur fabrication.</span></p>
        <div class="cbc-choice-grid">
          <article><b>Assemblage encore intact</b><p>Ne le casse pas. Construis l’affût près de l’atelier ou déplace tout le canon d’un seul tenant avec une contraption Create.</p></article>
          <article><b>Pièces récupérées avec Silk Touch</b><p>Les blocs sont sauvés, mais leurs anciennes connexions ne reviennent pas quand tu les reposes. Soude chaque jonction.</p></article>
          <article><b>Pièces devenues ferraille</b><p>Le canon n’est plus réparable. Refais la coulée, l’alésage et les mécanismes.</p></article>
        </div>
        <h3>Reconnecter les pièces récupérées</h3>
        <div class="cbc-weld-recipe"><b>[Cannon Welder / Soudeur de canon]</b><span>1 [Valve Handle / Poignée de vanne]</span><span>1 plaque de fer</span><span>3 plaques de laiton</span><span>1 [Blaze Burner / Brûleur à Blaze]</span></div>
        <div class="cbc-weld-line"><div><b>1</b><span>Prends le soudeur en main.</span></div><i>→</i><div><b>2</b><span>Clic droit sur la première pièce.</span></div><i>→</i><div><b>3</b><span>Clic droit sur sa voisine.</span></div><i>→</i><div><b>4</b><span>Répète à chaque jonction.</span></div></div>
        <p class="cbc-note"><strong>Pour annuler une sélection :</strong> accroupis-toi avec Maj, puis recommence sur la bonne paire.</p>
        <div class="cbc-condition-grid"><span>Même matériau</span><span>Même famille de canon</span><span>Blocs adjacents</span><span>Ouvertures alignées</span><span>Pièces terminées et alésées</span><span>Une jonction à la fois</span></div>
      </div>
    </details>

    <section class="cbc-survival-step" id="cbc-auto-mount" data-phase="Assembler et tirer">
      <div class="cbc-step-title"><span>09</span><div><p class="cbc-step-kicker">Choix du support</p><h2>Tourelle sur affût ou canon mobile ?</h2></div></div>
      <p class="cbc-body-copy">Les deux supports utilisent exactement le même autocanon et les mêmes munitions. Choisis ton parcours, puis reste dans la même colonne à l’étape 11.</p>
      <div class="cbc-support-grid">
        <article class="cbc-support-route fixed">
          <p class="cbc-route-tag">A · Tourelle sur affût</p><h3>[Cannon Mount / Affût de canon]</h3>
          <p>Une tourelle permanente, pilotable par un joueur ou automatisable avec Create. Elle reste ancrée au sol.</p>
          <h4>À fabriquer</h4>
          <ul><li><b>1 support :</b> 1 boîtier d’andésite + 4 arbres + 2 plaques de fer + 2 poudres à canon.</li><li><b>1 extension :</b> 1 boîtier d’andésite + 2 arbres + 2 poudres à canon.</li></ul>
          <h4>À installer</h4>
          <ol class="cbc-numbered"><li>Pose l’affût au sol.</li><li>Place l’extension au-dessus.</li><li>Pose l’autocanon horizontalement, culasse vers l’arrière, avec le ressort aligné au-dessus de l’extension.</li><li>Ne l’alimente pas encore : il doit rester sous forme de blocs.</li></ol>
          <div class="cbc-mount-faces"><article><img src="assets/big-cannons/cannon-mount-hammer-face.png" alt=""><b>Face marteau</b><span>Assemble ou désassemble l’affût.</span></article><article><img src="assets/big-cannons/cannon-mount-firing-face.png" alt=""><b>Face lumineuse</b><span>Commande la cadence de tir.</span></article></div>
        </article>
        <article class="cbc-support-route mobile">
          <p class="cbc-route-tag">B · Installation mobile</p><h3>[Cannon Carriage / Chariot de canon]</h3>
          <p>Un véhicule d’artillerie conduit manuellement. Il roule et tire, mais ne s’automatise pas comme l’affût.</p>
          <h4>À fabriquer</h4>
          <ul><li><b>2 paires de roues :</b> 1 bûche + 4 plaques de fer.</li><li><b>1 chariot :</b> 4 planches + 1 arbre + les 2 paires de roues.</li><li><b>Option confort :</b> 1 selle vanilla.</li></ul>
          <h4>À installer</h4>
          <ol class="cbc-numbered"><li>Pose le chariot sur un terrain plat, orienté vers la future cible.</li><li>Si tu veux un véritable siège conducteur, fais un clic droit sur le chariot avec une selle.</li><li>Pose l’autocanon directement au-dessus, sur le même axe et dans la même direction, culasse vers l’arrière.</li><li>Pour ce premier essai, laisse la culasse sans poignées : le chariot assurera les commandes.</li></ol>
        </article>
      </div>
      <p class="cbc-checkpoint"><b>À ce stade, rien ne bouge encore :</b><span>c’est normal. Le support choisi transformera les blocs en canon utilisable à l’étape 11.</span></p>
    </section>

    <section class="cbc-survival-step" id="cbc-auto-ammo" data-phase="Assembler et tirer">
      <div class="cbc-step-title"><span>10</span><div><p class="cbc-step-kicker">Munitions</p><h2>Fabriquer douze cartouches de mitrailleuse et leur chargeur.</h2></div></div>
      <div class="cbc-ammo-chain"><b>1 plaque de fer</b><i>Scie</i><b>3 feuilles de cartouche</b><i>Scie</i><b>12 douilles vides</b><i>+ poudre + cuivre</i><strong>12 [Machine Gun Rounds / Cartouches de mitrailleuse]</strong></div>
      <div class="cbc-ammo-identity">
        <article><img src="assets/big-cannons/machine-gun-round.png" alt=""><div><b>Munition de départ</b><span>Chaque douille vide reçoit 1 poudre à canon et 1 pépite de cuivre. Cette cartouche simple est acceptée par ton autocanon.</span></div></article>
        <article><img src="assets/big-cannons/ammo-container.png" alt=""><div><b>[Autocannon Ammo Container / Conteneur de munitions]</b><span>1 lingot de laiton + 5 plaques de fer. Il stocke jusqu’à 128 cartouches de mitrailleuse.</span></div></article>
      </div>
      <p class="cbc-note"><strong>Deux nombres à ne pas confondre :</strong> les cartouches de mitrailleuse de ce guide s’empilent par 128 dans le conteneur. Les véritables [Autocannon Cartridges / Cartouches d’autocanon], plus élaborées et non utilisées ici, sont limitées à 64.</p>
      <p class="cbc-note">Remplis le conteneur, puis fais un clic droit sur la culasse avec celui-ci pour l’attacher.</p>
    </section>

    <section class="cbc-survival-step" id="cbc-auto-fire" data-phase="Assembler et tirer">
      <div class="cbc-step-title"><span>11</span><div><p class="cbc-step-kicker">Assemblage et premier tir</p><h2>Suivre la procédure de ton support.</h2></div></div>
      <p class="cbc-body-copy">Assembler signifie convertir la rangée de blocs en une seule contraption utilisable. Il ne faut pas de colle : le support récupère automatiquement toutes les pièces correctement connectées.</p>
      <div class="cbc-support-grid cbc-operation-grid">
        <article class="cbc-support-route fixed">
          <p class="cbc-route-tag">A · Tourelle sur affût</p><h3>Une tourelle pilotée depuis la culasse</h3>
          <h4>Préparer le poste de tir</h4>
          <ol class="cbc-numbered"><li>Avec une <b>[Wrench / Clé]</b> de Create, fais un clic droit sur la <b>[Breech / Culasse]</b> : des poignées doivent apparaître.</li><li>Option conseillée : prends un [Seat / Siège] de Create et fais un clic droit sur la culasse à poignées. Le siège est esthétique ; les poignées activent réellement le pilotage.</li><li>Vérifie que le conteneur de munitions rempli est fixé à la culasse.</li></ol>
          <h4>Assembler et tirer</h4>
          <ol class="cbc-numbered"><li>Pose un levier contre la face marteau de l’affût, puis active-le.</li><li>Le canon entier doit devenir un seul ensemble mobile. Laisse le levier actif pendant l’utilisation.</li><li>Fais un clic droit sur la culasse ou son siège pour monter.</li><li>Vise avec la souris.</li><li>Sur la face lumineuse, règle un [Analog Lever / Levier analogique] sur 1 pour choisir une cadence lente.</li><li>Maintiens le clic gauche pour tirer ; relâche-le pour arrêter. Maj permet de descendre.</li></ol>
          <p class="cbc-route-help"><b>Pour le redéposer :</b> coupe le levier de la face marteau. Le canon redevient immédiatement une rangée de blocs.</p>
        </article>
        <article class="cbc-support-route mobile">
          <p class="cbc-route-tag">B · Chariot mobile</p><h3>Un canon conduit comme un véhicule</h3>
          <h4>Assembler</h4>
          <ol class="cbc-numbered"><li>Vérifie que le conteneur de munitions rempli est fixé à la culasse.</li><li>Fais un clic droit avec la <b>[Wrench / Clé]</b> sur le chariot encore posé comme un bloc.</li><li>Le chariot devient un véhicule et emporte automatiquement le canon placé juste au-dessus. Aucune redstone n’est nécessaire.</li><li>Fais un clic droit à main vide sur le chariot pour prendre les commandes.</li></ol>
          <h4>Conduire et tirer</h4>
          <ol class="cbc-numbered"><li><b>Z/S</b> font avancer ou reculer le chariot ; <b>Q/D</b> le font tourner.</li><li>Maintiens <b>C</b>, puis utilise <b>Z/S</b> pour lever ou abaisser le canon au lieu d’avancer.</li><li>Maintiens le clic gauche pour tirer.</li><li>Utilise la molette pour modifier la cadence de l’autocanon.</li><li>Appuie sur Maj pour descendre.</li></ol>
          <p class="cbc-route-help"><b>Pour le redéposer :</b> fais un clic droit avec la clé sur le chariot assemblé. Il redevient un bloc avec le canon au-dessus.</p>
        </article>
      </div>
      <p class="cbc-checkpoint"><b>Le support part sans tout le canon ?</b><span>une jonction manque, ou le chariot et le canon ne regardent pas dans la même direction. Désassemble, corrige l’alignement et ouvre la procédure de secours si une soudure est nécessaire.</span></p>
    </section>

    <section class="cbc-survival-step" id="cbc-auto-diagnostics" data-phase="Après le premier tir">
      <div class="cbc-step-title"><span>12</span><div><p class="cbc-step-kicker">Dépannage</p><h2>Identifier le problème par son symptôme.</h2></div></div>
      <div class="cbc-diagnosis-grid">
        <article><b>Le moule reste en bois</b><span>Après le clic avec le sable de moulage, refais un clic droit à main vide pour valider la couche.</span></article>
        <article><b>Le métal ne remplit rien</b><span>Vérifie la chauffe, le sens de la pompe, la connexion du tuyau et les 1 260 mB disponibles.</span></article>
        <article><b>La foreuse refuse d’avancer</b><span>Contrôle l’eau, l’axe, l’espace devant elle et une vitesse au moins égale à celle du tube.</span></article>
        <article><b>Une partie reste au sol</b><span>La pièce est mal alignée, incomplète ou déconnectée. Ouvre la procédure de secours pour la ressouder.</span></article>
        <article><b>Le conteneur refuse la munition</b><span>Ne mélange pas plusieurs familles de cartouches dans le même conteneur et fixe-le à la culasse.</span></article>
        <article><b>Le canon vise mais ne tire pas</b><span>Vérifie les munitions, la cadence sur la face lumineuse et l’assemblage actif via la face marteau.</span></article>
      </div>
    </section>

    <section class="cbc-survival-step" id="cbc-auto-next" data-phase="Après le premier tir">
      <div class="cbc-step-title"><span>13</span><div><p class="cbc-step-kicker">Après le prototype</p><h2>Améliorer :)</h2></div></div>
      <p class="cbc-body-copy">Ton premier autocanon valide toute la chaîne : fonte, coulée connectée, alésage, ressort interne, finition de la culasse, affût et munitions. Tu peux maintenant choisir une seule piste à la fois.</p>
      <div class="cbc-reason-grid"><article><b>Changer de matériau</b><span>Passe au bronze ou à l’acier pour construire un canon plus performant.</span></article><article><b>Automatiser les munitions</b><span>Relie la production, le stockage et l’approvisionnement à ton usine Create.</span></article><article><b>Passer aux gros canons</b><span>Réutilise les principes appris ici avec des chambres, des charges propulsives et de plus gros projectiles.</span></article></div>
      <p class="cbc-checkpoint"><b>La règle utile :</b><span>ne change qu’un élément à la fois. Tu sauras ainsi immédiatement quelle modification améliore (ou casse) le canon.</span></p>
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
