(() => {
  const tabList = document.querySelector('#tutoriels .tutorial-tabs');
  const tutorialContent = document.querySelector('#tutoriels .tutorial-content');
  if (!tabList || !tutorialContent || document.querySelector('#tutorial-economy')) return;

  const asset = name => `assets/economy/${name}.png`;

  const tab = document.createElement('button');
  tab.className = 'tutorial-tab';
  tab.id = 'tutorial-economy-tab';
  tab.type = 'button';
  tab.setAttribute('role', 'tab');
  tab.setAttribute('aria-selected', 'false');
  tab.setAttribute('aria-controls', 'tutorial-economy');
  tab.textContent = 'Argent et échanges';
  tabList.append(tab);

  const panel = document.createElement('div');
  panel.className = 'tutorial-panel';
  panel.id = 'tutorial-economy';
  panel.setAttribute('role', 'tabpanel');
  panel.setAttribute('aria-labelledby', tab.id);
  panel.hidden = true;
  panel.innerHTML = `
    <article class="eco-intro">
      <div>
        <p class="eco-kicker">Vie du serveur</p>
        <h1>Une économie pour faire vivre le monde</h1>
        <p>Ici, l’argent n’est pas un score à faire monter. Il permet à une prise de pêche de finir dans la cuisine d’un restaurant, à un constructeur de commander ses matériaux ou à une petite gare de devenir le point de départ d’un service de livraison. Tu peux garder quelques pièces dans un coffre, ouvrir un compte, utiliser une carte bancaire ou installer ta propre boutique.</p>
      </div>
      <div class="eco-coins" aria-label="Pièces Sprocket, Cog et Crown">
        <span class="eco-coin"><img src="${asset('sprocket')}" alt="Sprocket"></span>
        <span class="eco-coin"><img src="${asset('cog')}" alt="Cog"></span>
        <span class="eco-coin"><img src="${asset('crown')}" alt="Crown"></span>
      </div>
    </article>

    <nav class="eco-route" aria-label="Sommaire du tutoriel économie">
      <a href="#eco-revenus"><span>01</span>Comment l’argent circule</a>
      <a href="#eco-missions"><span>02</span>Les petits boulots</a>
      <a href="#eco-vendre"><span>03</span>Vendre son surplus</a>
      <a href="#eco-echanges"><span>04</span>Boutiques et services</a>
    </nav>

    <section class="eco-section" id="eco-revenus">
      <div class="eco-marker">01</div>
      <div>
        <div class="eco-heading">
          <p class="eco-label">Présente, mais pas envahissante</p>
          <h2>L’argent arrive en jouant normalement</h2>
          <p>Pas besoin de choisir une « classe » ni de passer sa soirée à farmer des pièces. Le système accompagne ce que tu fais déjà : construire, explorer, cuisiner, pêcher ou bricoler avec Create.</p>
        </div>
        <div class="eco-income-grid">
          <article class="eco-income"><img src="${asset('sprocket')}" alt=""><h3>En avançant dans ta partie</h3><p>Certains progrès Vanilla et Create glissent automatiquement quelques pièces dans ta poche. Construire ta première machine ou franchir une étape importante peut donc aussi alimenter tes futurs échanges.</p></article>
          <article class="eco-income"><img src="${asset('sprocket')}" alt=""><h3>En prenant simplement ton temps</h3><p>Chaque heure de jeu apporte <strong>1 Sprocket</strong>. Une soirée passée à décorer une maison ou discuter dans un café compte autant qu’une soirée dans une grosse usine.</p></article>
          <article class="eco-income"><img src="${asset('cog')}" alt=""><h3>En regardant les petites annonces</h3><p>La commande <code>/missions</code> présente six petits boulots : fabriquer, cuisiner, pêcher, élever des animaux, voyager ou utiliser Create, par exemple.</p></article>
          <article class="eco-income"><img src="${asset('fish')}" alt=""><h3>En vendant ce que tu ramènes</h3><p>Une pêche ou une récolte dont tu n’as pas besoin peut être déposée dans un bac de vente. Les poissons rares, grands ou dorés valent davantage.</p></article>
        </div>
        <div class="eco-reward-strip" aria-label="Récompenses des progrès">
          <article class="eco-reward"><img src="${asset('sprocket')}" alt="Sprocket"><div><b>Progrès ordinaire</b><span>1 Sprocket</span></div></article>
          <article class="eco-reward"><img src="${asset('cog')}" alt="Cog"><div><b>Étape importante</b><span>1 Cog</span></div></article>
          <article class="eco-reward"><img src="${asset('crown')}" alt="Crown"><div><b>Défi rare</b><span>1 Crown</span></div></article>
        </div>
      </div>
    </section>

    <section class="eco-section" id="eco-missions">
      <div class="eco-marker">02</div>
      <div>
        <div class="eco-heading">
          <p class="eco-label">Le panneau des petits boulots</p>
          <h2>Trouver quelque chose à faire cette semaine</h2>
          <p>Les missions ressemblent davantage à de petites annonces qu’à une quête principale. Elles sont facultatives, personnelles et peuvent différer d’un joueur à l’autre. Si l’une correspond à ce que tu avais déjà envie de faire, elle te rapportera quelques Sprockets.</p>
        </div>
        <div class="eco-missions">
          <article class="eco-panel">
            <h3>La procédure</h3>
            <ol class="eco-list">
              <li>Tape <span class="eco-command">/missions</span> dans le chat.</li>
              <li>Parcours les six annonces et ignore simplement celles qui ne t’intéressent pas.</li>
              <li>Si une proposition te plaît, réalise l’action demandée : pêcher, cuisiner, fabriquer, marcher, élever des animaux ou utiliser une machine Create.</li>
              <li>Retourne dans l’interface pour récupérer le paiement du travail terminé.</li>
            </ol>
          </article>
          <aside class="eco-panel eco-reset"><strong>Dimanche · 00:00</strong><span>Les missions sont renouvelées chaque semaine, à l’heure suisse. Si tu es absent, ton renouvellement est appliqué à ta prochaine connexion.</span></aside>
        </div>
      </div>
    </section>

    <section class="eco-section" id="eco-vendre">
      <div class="eco-marker">03</div>
      <div>
        <div class="eco-heading">
          <p class="eco-label">Donner une valeur au surplus</p>
          <h2>Vendre une récolte ou une prise</h2>
          <p>Le Selling Bin est la solution la plus simple quand tu n’as pas encore de commerce. Tu y déposes les objets pris en charge et il les convertit en monnaie. Tout n’est pas vendable : vérifie le prix affiché avant de confirmer.</p>
        </div>
        <div class="eco-sell-layout">
          <article class="eco-recipe">
            <div class="eco-recipe-head"><img src="${asset('selling-bin')}" alt="Icône du mod Selling Bin"><div><h3>Recette du Selling Bin</h3><p>3 tapis · 1 tonneau · 5 dalles en bois</p></div></div>
            <div class="eco-craft" aria-label="Recette de fabrication du Selling Bin">
              <span class="eco-slot carpet">Tapis</span><span class="eco-slot carpet">Tapis</span><span class="eco-slot carpet">Tapis</span>
              <span class="eco-slot">Dalle</span><span class="eco-slot barrel">Tonneau</span><span class="eco-slot">Dalle</span>
              <span class="eco-slot">Dalle</span><span class="eco-slot">Dalle</span><span class="eco-slot">Dalle</span>
            </div>
          </article>
          <div class="eco-sell-steps">
            <article class="eco-sell-step"><div><h3>Pose puis ouvre le bac</h3><p>Un clic droit ouvre son interface de vente.</p></div></article>
            <article class="eco-sell-step"><div><h3>Dépose les objets à vendre</h3><p>Commence avec une petite quantité. Si l’objet est accepté, l’interface indique sa valeur.</p></div></article>
            <article class="eco-sell-step"><div><h3>Choisis la monnaie</h3><p>Sélectionne une pièce Numismatics adaptée au montant proposé. Une carte bancaire Numismatics peut aussi être placée dans l’emplacement prévu.</p></div></article>
            <article class="eco-sell-step"><div><h3>Confirme la vente</h3><p><strong>Sell</strong> vend la sélection ; <strong>Sell All</strong> vend tout le contenu accepté. Récupère ensuite le paiement indiqué.</p></div></article>
          </div>
        </div>
        <p class="eco-note"><strong>Auto-Sell :</strong> cette option vend automatiquement les objets compatibles déposés dans le bac. Active-la seulement après avoir vérifié ce que tu lui envoies, surtout si le bac est relié à une automatisation.</p>

        <div class="eco-fish-layout">
          <div class="eco-table-wrap">
            <table class="eco-table">
              <thead><tr><th>Rareté du poisson</th><th>Valeur de base</th></tr></thead>
              <tbody>
                <tr><td>Commun</td><td>25</td></tr>
                <tr><td>Peu commun</td><td>50</td></tr>
                <tr><td>Rare</td><td>100</td></tr>
                <tr><td>Épique</td><td>150</td></tr>
                <tr><td>Légendaire</td><td>200</td></tr>
              </tbody>
            </table>
          </div>
          <aside class="eco-fish-card"><img src="${asset('fish')}" alt="Poisson Starcatcher"><h3>Une prise peut finir au marché</h3><p>La taille et la qualité modifient le prix. Un poisson doré vaut <strong>dix fois</strong> sa valeur habituelle.</p></aside>
        </div>
        <p class="eco-note eco-warning"><strong>Pas besoin de transformer la pêche en usine.</strong> Tu peux simplement jeter ta ligne, attendre une prise, la vendre et repartir construire. Le système récompense aussi ce rythme-là.</p>
      </div>
    </section>

    <section class="eco-section" id="eco-echanges">
      <div class="eco-marker">04</div>
      <div>
        <div class="eco-heading">
          <p class="eco-label">Des lieux et des métiers</p>
          <h2>Du porte-monnaie à la rue commerçante</h2>
          <p>Les pièces peuvent rester de simples objets rangés dans un coffre, mais elles peuvent aussi devenir le début d’un commerce, d’une banque de groupe ou d’un service entre plusieurs villes. Rien ne t’oblige à jouer un rôle : ces possibilités donnent seulement du contexte aux constructions et aux rencontres.</p>
        </div>
        <div class="eco-loop" aria-label="Possibilités de l’économie entre joueurs">
          <article><b>1. Garde des pièces</b><span>La monnaie est physique : transporte-la, range-la ou cache-la dans un coffre.</span></article>
          <article><b>2. Ouvre un compte</b><span>Un terminal bancaire et une carte permettent de payer sans promener toute ta fortune.</span></article>
          <article><b>3. Monte une boutique</b><span>Un Vendor peut acheter ou vendre tes produits même quand tu n’es pas connecté.</span></article>
          <article><b>4. Organise la logistique</b><span>Packagers, gares et trains peuvent alimenter des commerces éloignés.</span></article>
        </div>
        <p class="eco-note eco-warning"><strong>Ce ne sont pas des métiers imposés.</strong> Tu peux vendre trois poissons une fois dans ta vie, tenir une boulangerie tous les soirs ou devenir la personne déterminée qui livre les marchandises des autres par train. Le jeu fournit les outils ; les joueurs décident de l’histoire qui se construit autour.</p>
        <div class="eco-examples">
          <article class="eco-example"><h3>Le pêcheur, le restaurant et le livreur</h3><p>L’un ramène les prises, le second les achète pour ses recettes et un troisième peut assurer les livraisons entre le port et la ville.</p></article>
          <article class="eco-example"><h3>Une boutique qui existe vraiment</h3><p>Construis ton échoppe, remplis les rayons et configure un Vendor. Les autres joueurs peuvent acheter sans attendre que tu sois présent.</p></article>
          <article class="eco-example"><h3>Une entreprise de transport</h3><p>Avec assez d’organisation, une gare peut recevoir les commandes, charger les colis et desservir plusieurs commerces par le rail.</p></article>
        </div>
      </div>
    </section>
  `;
  tutorialContent.append(panel);
})();
