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
        <p class="eco-kicker">Économie du serveur</p>
        <h1>Gagner et utiliser de l’argent</h1>
        <p>Tu n’as pas besoin de combattre des boss ni d’optimiser une usine pour participer à l’économie. Les progrès ordinaires, les missions, le temps de jeu et la pêche peuvent tous rapporter de l’argent. Ce guide explique <strong>ce qui paie</strong>, <strong>comment vendre</strong> et <strong>quoi faire de tes gains</strong>.</p>
      </div>
      <div class="eco-coins" aria-label="Pièces Sprocket, Cog et Crown">
        <span class="eco-coin"><img src="${asset('sprocket')}" alt="Sprocket"></span>
        <span class="eco-coin"><img src="${asset('cog')}" alt="Cog"></span>
        <span class="eco-coin"><img src="${asset('crown')}" alt="Crown"></span>
      </div>
    </article>

    <nav class="eco-route" aria-label="Sommaire du tutoriel économie">
      <a href="#eco-revenus"><span>01</span>D’où vient l’argent ?</a>
      <a href="#eco-missions"><span>02</span>Missions hebdomadaires</a>
      <a href="#eco-vendre"><span>03</span>Vendre des objets</a>
      <a href="#eco-echanges"><span>04</span>Échanger avec les autres</a>
    </nav>

    <section class="eco-section" id="eco-revenus">
      <div class="eco-marker">01</div>
      <div>
        <div class="eco-heading">
          <p class="eco-label">Plusieurs façons de progresser</p>
          <h2>D’où vient l’argent ?</h2>
          <p>Le serveur récompense plusieurs activités. Tu peux les mélanger librement : construire, explorer, cuisiner, pêcher ou avancer dans Create restent des manières valables de gagner ta place dans l’économie.</p>
        </div>
        <div class="eco-income-grid">
          <article class="eco-income"><img src="${asset('sprocket')}" alt=""><h3>Progrès Vanilla et Create</h3><p>Quand tu valides un progrès reconnu de Minecraft ou de Create, la récompense dépend de sa difficulté : un objectif simple, un objectif important ou un défi.</p></article>
          <article class="eco-income"><img src="${asset('sprocket')}" alt=""><h3>Temps de jeu</h3><p>Tu reçois automatiquement <strong>1 Sprocket par heure de jeu</strong>. C’est un petit revenu régulier : rester tranquille à construire ou décorer compte aussi.</p></article>
          <article class="eco-income"><img src="${asset('cog')}" alt=""><h3>Missions hebdomadaires</h3><p>La commande <code>/missions</code> ouvre six objectifs personnels. Ils peuvent demander de fabriquer, cuisiner, pêcher, élever des animaux, voyager ou utiliser Create.</p></article>
          <article class="eco-income"><img src="${asset('fish')}" alt=""><h3>Pêche et bac de vente</h3><p>Les poissons Starcatcher ont une valeur de vente. Leur rareté, leur taille et certaines qualités particulières peuvent augmenter le prix.</p></article>
        </div>
        <div class="eco-reward-strip" aria-label="Récompenses des progrès">
          <article class="eco-reward"><img src="${asset('sprocket')}" alt="Sprocket"><div><b>Objectif simple</b><span>1 Sprocket</span></div></article>
          <article class="eco-reward"><img src="${asset('cog')}" alt="Cog"><div><b>Objectif important</b><span>1 Cog</span></div></article>
          <article class="eco-reward"><img src="${asset('crown')}" alt="Crown"><div><b>Défi</b><span>1 Crown</span></div></article>
        </div>
      </div>
    </section>

    <section class="eco-section" id="eco-missions">
      <div class="eco-marker">02</div>
      <div>
        <div class="eco-heading">
          <p class="eco-label">Des objectifs renouvelables</p>
          <h2>Faire les missions de la semaine</h2>
          <p>Les missions donnent un but court à ta session sans t’imposer une façon de jouer. Elles sont personnelles, peuvent différer d’un joueur à l’autre et rapportent des Sprockets une fois réclamées.</p>
        </div>
        <div class="eco-missions">
          <article class="eco-panel">
            <h3>La procédure</h3>
            <ol class="eco-list">
              <li>Tape <span class="eco-command">/missions</span> dans le chat.</li>
              <li>Lis les six missions proposées et choisis celles qui correspondent à ce que tu veux faire.</li>
              <li>Réalise l’action demandée : pêcher, cuisiner, fabriquer, marcher, élever des animaux ou utiliser une machine Create, par exemple.</li>
              <li>Retourne dans l’interface pour vérifier la progression et récupérer la récompense.</li>
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
          <p class="eco-label">Du coffre aux pièces</p>
          <h2>Vendre un objet avec le Selling Bin</h2>
          <p>Le Selling Bin est un bac de vente inspiré des jeux de ferme. Il transforme les objets pris en charge en monnaie Numismatics. Tous les objets ne sont pas forcément vendables : vérifie toujours le prix affiché avant de confirmer.</p>
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
          <aside class="eco-fish-card"><img src="${asset('fish')}" alt="Poisson Starcatcher"><h3>La pêche paie vraiment</h3><p>La taille et la qualité modifient le prix. Un poisson doré vaut <strong>dix fois</strong> sa valeur habituelle.</p></aside>
        </div>
        <p class="eco-note eco-warning"><strong>Pas besoin de transformer la pêche en usine.</strong> Tu peux simplement jeter ta ligne, attendre une prise, la vendre et repartir construire. Le système récompense aussi ce rythme-là.</p>
      </div>
    </section>

    <section class="eco-section" id="eco-echanges">
      <div class="eco-marker">04</div>
      <div>
        <div class="eco-heading">
          <p class="eco-label">L’argent sert à circuler</p>
          <h2>Utiliser tes gains avec les autres joueurs</h2>
          <p>L’argent n’est pas un score à maximiser. Il sert surtout à échanger ce que chacun aime produire : ressources, nourriture, décoration, transports ou temps de travail.</p>
        </div>
        <div class="eco-loop" aria-label="Cycle économique entre joueurs">
          <article><b>1. Fais une activité</b><span>Pêche, cuisine, construction, exploration, Create…</span></article>
          <article><b>2. Reçois une récompense</b><span>Progrès, mission, temps de jeu ou vente.</span></article>
          <article><b>3. Dépense ou échange</b><span>Achète un bien ou rémunère un service.</span></article>
          <article><b>4. Fais vivre un projet</b><span>Une boutique, une gare, un café ou un chantier gagne une utilité.</span></article>
        </div>
        <div class="eco-examples">
          <article class="eco-example"><h3>Tu aimes pêcher</h3><p>Vends une partie de tes prises, puis achète des matériaux à une personne qui préfère miner ou automatiser.</p></article>
          <article class="eco-example"><h3>Tu aimes construire</h3><p>Propose des bâtiments, de la décoration ou un chantier contre un prix convenu avec le commanditaire.</p></article>
          <article class="eco-example"><h3>Tu aimes cuisiner</h3><p>Transforme les récoltes en plats et approvisionne un café, une gare ou les expéditions des autres joueurs.</p></article>
        </div>
      </div>
    </section>
  `;
  tutorialContent.append(panel);
})();
