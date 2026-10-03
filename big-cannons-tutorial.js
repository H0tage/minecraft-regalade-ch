(() => {
  const tabList = document.querySelector('#tutoriels .tutorial-tabs');
  const tutorialContent = document.querySelector('#tutoriels .tutorial-content');
  const stargatePanel = document.querySelector('#tutorial-stargates');

  if (!tabList || !tutorialContent || !stargatePanel || document.querySelector('#tutorial-big-cannons')) return;

  const icon = name => `assets/big-cannons/${name}.png`;
  const style = document.createElement('style');
  style.textContent = `
    #tutorial-big-cannons{--cbc-steel:#2c363b;--cbc-brass:#b66d2f;--cbc-cream:#fff9f1;--cbc-red:#b84235}
    .cbc-intro{position:relative;overflow:hidden;display:grid;grid-template-columns:minmax(0,1fr) 250px;gap:30px;align-items:center;padding:38px;border:1px solid #3d4b51;border-radius:var(--radius);background:linear-gradient(125deg,#20292d,#354249 64%,#5b4434);color:#fff;box-shadow:var(--shadow)}
    .cbc-intro::after{content:"";position:absolute;width:300px;height:300px;right:-170px;bottom:-190px;border:26px solid rgba(245,130,56,.2);border-radius:50%;box-shadow:0 0 0 20px rgba(39,169,221,.08)}
    .cbc-intro-copy,.cbc-hero-icons{position:relative;z-index:1}.cbc-kicker,.cbc-label{margin:0 0 9px;color:#ffbb87;font-size:.76rem;font-weight:900;letter-spacing:.1em;text-transform:uppercase}
    .cbc-intro h1{max-width:760px;margin:0;font-size:clamp(2.1rem,4.5vw,3.8rem);line-height:.98;letter-spacing:-.06em}.cbc-intro p{max-width:780px;margin:18px 0 0;color:#e4ecef;font-size:1.04rem}.cbc-intro strong{color:#ffd2ad}
    .cbc-hero-icons{display:grid;grid-template-columns:repeat(3,64px);gap:12px;justify-content:center}.cbc-hero-icons span{display:grid;place-items:center;width:64px;height:64px;border:1px solid rgba(255,255,255,.18);border-radius:16px;background:rgba(255,255,255,.09)}.cbc-hero-icons img{width:45px;height:45px;object-fit:contain;image-rendering:pixelated;filter:drop-shadow(0 5px 5px rgba(0,0,0,.38))}
    .cbc-roadmap{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:8px;margin:26px 0 42px}.cbc-roadmap a{display:block;padding:14px 12px;border:1px solid var(--line);border-radius:13px;background:#fff;color:#526068;font-size:.76rem;font-weight:850;line-height:1.25}.cbc-roadmap a span{display:block;margin-bottom:5px;color:var(--orange);font-size:.7rem}.cbc-roadmap a:hover{border-color:var(--orange);color:#a94a12}
    .cbc-step{display:grid;grid-template-columns:76px minmax(0,1fr);gap:22px;padding:38px 0;border-top:1px solid var(--line);scroll-margin-top:25px}.cbc-marker{display:grid;place-items:center;align-self:start;width:62px;height:62px;border-radius:18px;background:#eef2f3;color:var(--cbc-steel);font-size:1.35rem;font-weight:900;letter-spacing:-.06em}.cbc-step:nth-of-type(even) .cbc-marker{background:var(--orange-pale);color:#c9550b}
    .cbc-heading h2{margin:0;font-size:clamp(1.55rem,3vw,2.25rem);line-height:1.06;letter-spacing:-.045em}.cbc-heading>p{max-width:860px;margin:9px 0 0;color:var(--muted)}
    .cbc-cards{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;margin-top:20px}.cbc-cards.three{grid-template-columns:repeat(3,minmax(0,1fr))}.cbc-card{position:relative;padding:20px;border:1px solid var(--line);border-radius:15px;background:#fff}.cbc-card.with-icon{padding-left:84px;min-height:92px}.cbc-card h3{margin:0 0 7px;font-size:1.02rem}.cbc-card p{margin:0;color:var(--muted);font-size:.91rem}.cbc-card p+p{margin-top:9px}.cbc-icon{position:absolute;top:18px;left:18px;width:48px;height:48px;object-fit:contain;image-rendering:pixelated;filter:drop-shadow(0 4px 3px rgba(26,40,46,.2))}.cbc-inline-icon{width:32px;height:32px;object-fit:contain;image-rendering:pixelated;vertical-align:middle;filter:drop-shadow(0 3px 2px rgba(26,40,46,.18))}
    .cbc-first-cannon{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:7px;align-items:stretch;margin:20px 0}.cbc-first-cannon article{position:relative;padding:18px 15px 15px;border:1px solid #cdd7da;background:#fff;text-align:center}.cbc-first-cannon article:first-child{border-radius:14px 0 0 14px}.cbc-first-cannon article:last-child{border-radius:0 14px 14px 0}.cbc-first-cannon article:not(:last-child)::after{content:"";position:absolute;top:50%;right:-8px;z-index:2;width:14px;height:4px;background:var(--orange);transform:translateY(-50%)}.cbc-first-cannon img{display:block;width:48px;height:48px;object-fit:contain;image-rendering:pixelated;margin:0 auto 8px}.cbc-first-cannon b,.cbc-first-cannon span{display:block}.cbc-first-cannon span{color:var(--muted);font-size:.8rem}
    .cbc-note,.cbc-warning,.cbc-formula{margin-top:18px;padding:16px 18px;border-radius:0 13px 13px 0}.cbc-note{border-left:4px solid var(--cyan);background:var(--cyan-pale);color:#244e5d}.cbc-warning{border-left:4px solid var(--cbc-red);background:#fff0ed;color:#75362e}.cbc-formula{border-left:4px solid var(--orange);background:var(--orange-pale);color:#6c3b1a;font-weight:800}.cbc-note p,.cbc-warning p{margin:0}.cbc-note p+p,.cbc-warning p+p{margin-top:8px}
    .cbc-table-wrap{overflow-x:auto;margin-top:20px;border:1px solid var(--line);border-radius:14px;background:#fff}.cbc-table{width:100%;min-width:650px;border-collapse:collapse;font-size:.88rem}.cbc-table th{padding:11px 13px;background:#eef2f3;color:#4c5960;text-align:left;font-size:.72rem;text-transform:uppercase;letter-spacing:.06em}.cbc-table td{padding:12px 13px;border-top:1px solid var(--line);vertical-align:middle}.cbc-table tr:nth-child(even) td{background:#fbfcfc}.cbc-table .cbc-cell-icon{display:flex;align-items:center;gap:10px;font-weight:800}.cbc-table img{width:31px;height:31px;object-fit:contain;image-rendering:pixelated}.cbc-danger{color:#a1392e;font-weight:850}.cbc-safe{color:#177955;font-weight:850}
    .cbc-flow{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:8px;margin-top:20px}.cbc-flow article{position:relative;padding:16px 12px;border:1px solid var(--line);border-radius:13px;background:#fff;text-align:center}.cbc-flow article:not(:last-child)::after{content:"›";position:absolute;right:-9px;top:50%;z-index:2;display:grid;place-items:center;width:18px;height:18px;border-radius:50%;background:var(--orange);color:#fff;font-weight:900;transform:translateY(-50%)}.cbc-flow img{display:block;width:43px;height:43px;object-fit:contain;image-rendering:pixelated;margin:0 auto 8px}.cbc-flow b,.cbc-flow span{display:block}.cbc-flow span{margin-top:4px;color:var(--muted);font-size:.78rem}
    .cbc-ammo-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin-top:20px}.cbc-ammo{display:grid;grid-template-columns:54px 1fr;gap:12px;align-items:start;padding:16px;border:1px solid var(--line);border-radius:14px;background:#fff}.cbc-ammo img{width:50px;height:50px;object-fit:contain;image-rendering:pixelated;filter:drop-shadow(0 4px 3px rgba(26,40,46,.18))}.cbc-ammo h3{margin:2px 0 5px;font-size:.95rem}.cbc-ammo p{margin:0;color:var(--muted);font-size:.82rem}.cbc-ammo strong{color:var(--ink)}
    .cbc-details{margin-top:18px;border:1px solid var(--line);border-radius:14px;background:#fff;overflow:hidden}.cbc-details summary{padding:17px 19px;font-weight:850;cursor:pointer}.cbc-details[open] summary{border-bottom:1px solid var(--line);background:#f7f9fa}.cbc-details-body{padding:2px 19px 19px}.cbc-details-body ul,.cbc-list{padding-left:21px}.cbc-details-body li,.cbc-list li{padding:5px 0}.cbc-details-body p{color:var(--muted)}
    .cbc-checks{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin-top:20px}.cbc-check{padding:18px;border:1px solid var(--line);border-radius:14px;background:#fff}.cbc-check h3{margin:0 0 8px;font-size:1rem;color:#9d4214}.cbc-check ul{margin:0;padding-left:19px;color:var(--muted);font-size:.89rem}.cbc-check li{padding:3px 0}
    .cbc-source{margin-top:34px;padding:18px;border:1px dashed #b9c5ca;border-radius:13px;color:var(--muted);font-size:.84rem}.cbc-source strong{color:var(--ink)}
    @media(max-width:900px){.cbc-roadmap{grid-template-columns:repeat(3,1fr)}.cbc-ammo-grid{grid-template-columns:repeat(2,1fr)}.cbc-flow{grid-template-columns:repeat(3,1fr)}.cbc-flow article::after{display:none}}
    @media(max-width:700px){.cbc-intro{grid-template-columns:1fr;padding:28px}.cbc-hero-icons{justify-content:start}.cbc-step{grid-template-columns:1fr;gap:13px}.cbc-marker{width:52px;height:52px;border-radius:15px}.cbc-cards,.cbc-cards.three,.cbc-checks{grid-template-columns:1fr}.cbc-ammo-grid{grid-template-columns:1fr}.cbc-first-cannon{grid-template-columns:1fr}.cbc-first-cannon article{border-radius:12px!important}.cbc-first-cannon article::after{display:none}}
    @media(max-width:480px){.cbc-roadmap{grid-template-columns:repeat(2,1fr)}.cbc-hero-icons{grid-template-columns:repeat(3,52px)}.cbc-hero-icons span{width:52px;height:52px}.cbc-hero-icons img{width:38px;height:38px}.cbc-flow{grid-template-columns:1fr}}
  `;
  document.head.append(style);

  const tab = document.createElement('button');
  tab.className = 'tutorial-tab';
  tab.id = 'tutorial-big-cannons-tab';
  tab.type = 'button';
  tab.setAttribute('role', 'tab');
  tab.setAttribute('aria-selected', 'false');
  tab.setAttribute('aria-controls', 'tutorial-big-cannons');
  tab.textContent = 'Big Cannons';
  tabList.append(tab);

  const panel = document.createElement('div');
  panel.className = 'tutorial-panel';
  panel.id = 'tutorial-big-cannons';
  panel.setAttribute('role', 'tabpanel');
  panel.setAttribute('aria-labelledby', tab.id);
  panel.hidden = true;
  panel.innerHTML = `
    <article class="cbc-intro">
      <div class="cbc-intro-copy">
        <p class="cbc-kicker">Create Big Cannons · version 5.11.7</p>
        <h1>Construire, charger et tirer sans faire exploser l’atelier.</h1>
        <p>Ce guide suit le fonctionnement réel du mod installé sur le serveur. Il couvre les <strong>gros canons</strong>, les <strong>autocanons</strong>, la métallurgie, les munitions et les causes de panne. Dans le jeu, maintiens aussi <strong>W</strong> sur un objet du mod pour ouvrir sa scène Ponder.</p>
      </div>
      <div class="cbc-hero-icons" aria-hidden="true">
        <span><img src="${icon('steel-cannon-barrel')}" alt=""></span>
        <span><img src="${icon('powder-charge')}" alt=""></span>
        <span><img src="${icon('solid-shot')}" alt=""></span>
        <span><img src="${icon('cannon-welder')}" alt=""></span>
        <span><img src="${icon('autocannon-cartridge')}" alt=""></span>
        <span><img src="${icon('impact-fuze')}" alt=""></span>
      </div>
    </article>

    <nav class="cbc-roadmap" aria-label="Sommaire du tutoriel Big Cannons">
      <a href="#cbc-premier"><span>01</span>Premier canon</a>
      <a href="#cbc-metaux"><span>02</span>Métaux</a>
      <a href="#cbc-fonderie"><span>03</span>Fonderie</a>
      <a href="#cbc-finition"><span>04</span>Finition</a>
      <a href="#cbc-resistance"><span>05</span>Pression</a>
      <a href="#cbc-chargement"><span>06</span>Chargement</a>
      <a href="#cbc-affuts"><span>07</span>Affûts</a>
      <a href="#cbc-autocanons"><span>08</span>Autocanons</a>
      <a href="#cbc-munitions"><span>09</span>Munitions</a>
      <a href="#cbc-fusees"><span>10</span>Fusées</a>
      <a href="#cbc-automation"><span>11</span>Automatisation</a>
      <a href="#cbc-diagnostic"><span>12</span>Diagnostic</a>
    </nav>

    <section class="cbc-step" id="cbc-premier">
      <div class="cbc-marker">01</div>
      <div>
        <div class="cbc-heading"><h2>Commencer par un petit canon en fonte</h2><p>Le montage d’apprentissage le plus simple possède une culasse, une chambre et un canon. La bouche reste ouverte vers la cible.</p></div>
        <div class="cbc-first-cannon" aria-label="Montage d’un premier canon">
          <article><img src="${icon('quickfiring-mechanism')}" alt="Mécanisme de culasse rapide"><b>Culasse rapide</b><span>arrière fermé</span></article>
          <article><img src="${icon('cast-iron-ingot')}" alt="Lingot de fonte"><b>Chambre en fonte</b><span>zone des charges</span></article>
          <article><img src="${icon('steel-cannon-barrel')}" alt="Texture de canon"><b>Canon alésé</b><span>bouche ouverte → cible</span></article>
        </div>
        <ol class="cbc-list">
          <li>Coule puis alèse les trois pièces.</li>
          <li>Termine la culasse avec un axe et son bloc de culasse, puis ajoute le <em>Quick-Firing Mechanism</em>.</li>
          <li>Aligne les pièces et soude les jonctions avec le <em>Cannon Welder</em>.</li>
          <li>Place le tube sur un <em>Cannon Mount</em> ou une <em>Cannon Carriage</em>.</li>
          <li>Charge <strong>un projectile puis une Powder Charge</strong> depuis la culasse, referme, assemble et tire.</li>
        </ol>
        <div class="cbc-warning"><p><strong>Pour ce premier essai, reste à une seule Powder Charge.</strong> La fonte soudée ne tolère qu’un point de contrainte : une charge atteint déjà cette limite.</p></div>
      </div>
    </section>

    <section class="cbc-step" id="cbc-metaux">
      <div class="cbc-marker">02</div>
      <div>
        <div class="cbc-heading"><h2>Choisir le métal selon le canon visé</h2><p>Les matériaux ne sont pas de simples variantes esthétiques : ils fixent la pression supportée, la vitesse minimale par longueur de tube et parfois le type de rupture.</p></div>
        <div class="cbc-cards">
          <article class="cbc-card with-icon"><img class="cbc-icon" src="${icon('cast-iron-ingot')}" alt="Lingot de fonte"><h3>Fonte · Cast Iron</h3><p>Entrée de gamme. Faible tolérance, mais suffisante pour apprendre le système et tirer avec une seule charge.</p></article>
          <article class="cbc-card with-icon"><img class="cbc-icon" src="${icon('bronze-ingot')}" alt="Lingot de bronze"><h3>Bronze</h3><p>Bon matériau intermédiaire : résistant, soudable sans malus et compatible avec les culasses coulissantes.</p></article>
          <article class="cbc-card with-icon"><img class="cbc-icon" src="${icon('steel-ingot')}" alt="Lingot d’acier"><h3>Acier · Steel</h3><p>Très résistant et indispensable aux canons avancés, mais les soudures lui infligent un malus de contrainte important.</p></article>
          <article class="cbc-card with-icon"><img class="cbc-icon" src="${icon('nethersteel-ingot')}" alt="Lingot de Nethersteel"><h3>Nethersteel</h3><p>Le matériau le plus solide. Il ne se soude pas : ses pièces doivent être produites connectées dans une même structure.</p></article>
        </div>
        <div class="cbc-table-wrap"><table class="cbc-table"><thead><tr><th>Matériau</th><th>Résistance</th><th>Vitesse minimale / tube</th><th>Rupture</th><th>Malus si soudé</th></tr></thead><tbody>
          <tr><td>Fer forgé</td><td>1</td><td>2,00</td><td>Rupture locale</td><td>0</td></tr>
          <tr><td>Fonte</td><td>2</td><td>2,00</td><td>Fragmentation</td><td>1</td></tr>
          <tr><td>Bronze</td><td>4</td><td>1,33</td><td>Rupture locale</td><td>0</td></tr>
          <tr><td>Acier</td><td>8</td><td>1,00</td><td>Fragmentation</td><td>2</td></tr>
          <tr><td>Nethersteel</td><td>10</td><td>0,67</td><td>Fragmentation</td><td>Non soudable</td></tr>
        </tbody></table></div>
        <details class="cbc-details"><summary>Comment fabriquer chaque métal ?</summary><div class="cbc-details-body"><ul>
          <li><strong>Fonte :</strong> fais fondre du fer dans un bassin fermé par un <em>Basin Foundry Lid</em>.</li>
          <li><strong>Bronze :</strong> alliage de cuivre et d’étain fondu.</li>
          <li><strong>Acier :</strong> chaîne de traitement du mod, puis fusion avant coulée.</li>
          <li><strong>Nethersteel :</strong> matériau de fin de progression à produire puis fondre pour les pièces les plus solides.</li>
        </ul><p>Utilise JEI/EMI pour les quantités exactes de ta recette serveur : le tutoriel décrit ici la chaîne et les contraintes du mod.</p></div></details>
      </div>
    </section>

    <section class="cbc-step" id="cbc-fonderie">
      <div class="cbc-marker">03</div>
      <div>
        <div class="cbc-heading"><h2>Couler les pièces dans un moule en sable</h2><p>Le métal est d’abord liquéfié, puis pompé dans une structure de <em>Cannon Cast</em> entourée de sable de moulage.</p></div>
        <div class="cbc-flow" aria-label="Étapes de coulée d’une pièce de canon">
          <article><img src="${icon('cast-iron-ingot')}" alt="Lingot de métal"><b>Faire fondre</b><span>Bassin + Foundry Lid</span></article>
          <article><img src="${icon('cannon-cast')}" alt="Cannon Cast"><b>Former le moule</b><span>Empiler les formes</span></article>
          <article><img src="${icon('casting-sand')}" alt="Sable de moulage"><b>Enrober</b><span>Casting Sand</span></article>
          <article><img src="${icon('cannon-cast')}" alt="Moule rempli"><b>Pomper</b><span>Remplir de métal</span></article>
          <article><img src="${icon('cannon-drill')}" alt="Pièce à aléser"><b>Refroidir</b><span>Puis retirer le sable</span></article>
        </div>
        <div class="cbc-note"><p><strong>Comparateur :</strong> un signal de 0 à 14 indique le remplissage ; 15 indique que la coulée est complète.</p><p>Contrairement au texte générique de Ponder, la version 5.11.7 utilise un temps de refroidissement lié au métal, pas à la taille de la pièce.</p></div>
        <div class="cbc-cards three">
          <article class="cbc-card"><h3>Fonte et bronze</h3><p><strong>2 minutes</strong> · 2 400 ticks</p></article>
          <article class="cbc-card"><h3>Acier</h3><p><strong>3 minutes</strong> · 3 600 ticks</p></article>
          <article class="cbc-card"><h3>Nethersteel</h3><p><strong>5 minutes</strong> · 6 000 ticks</p></article>
        </div>
        <details class="cbc-details"><summary>Quantités de métal demandées par forme</summary><div class="cbc-details-body"><div class="cbc-table-wrap"><table class="cbc-table"><thead><tr><th>Forme</th><th>Fluide</th><th>Équivalent lingots</th></tr></thead><tbody>
          <tr><td>Très petite</td><td>630 mB</td><td>7</td></tr><tr><td>Petite</td><td>810 mB</td><td>9</td></tr><tr><td>Moyenne</td><td>1 080 mB</td><td>12</td></tr><tr><td>Grande</td><td>1 260 mB</td><td>14</td></tr><tr><td>Très grande</td><td>1 800 mB</td><td>20</td></tr><tr><td>Extrémité / culasse coulissante / culasse à vis</td><td>810 mB</td><td>9</td></tr><tr><td>Canon d’autocanon</td><td>270 mB</td><td>3</td></tr><tr><td>Culasse ou ressort d’autocanon</td><td>360 mB</td><td>4</td></tr>
        </tbody></table></div></div></details>
      </div>
    </section>

    <section class="cbc-step" id="cbc-finition">
      <div class="cbc-marker">04</div>
      <div>
        <div class="cbc-heading"><h2>Aléser, compléter et relier les pièces</h2><p>Une pièce sortie du moule n’est pas encore un canon. Elle doit être percée, complétée si nécessaire et connectée au reste du tube.</p></div>
        <div class="cbc-cards">
          <article class="cbc-card with-icon"><img class="cbc-icon" src="${icon('cannon-drill')}" alt="Foret de canon"><h3>Cannon Drill</h3><p>Monte la pièce sur un <em>Mechanical Bearing</em> comme un tour, aligne le foret, fournis de l’eau et synchronise correctement les vitesses. Longueur maximale : <strong>32 blocs</strong>.</p></article>
          <article class="cbc-card with-icon"><img class="cbc-icon" src="${icon('quickfiring-mechanism')}" alt="Mécanisme de culasse"><h3>Pièces incomplètes</h3><p>Culasse coulissante : axe + bloc de culasse du même métal. Culasse à vis : axe + verrou à vis. Culasse d’autocanon : extracteur de matériau. Ressort : <em>Recoil Spring</em>.</p></article>
          <article class="cbc-card with-icon"><img class="cbc-icon" src="${icon('cannon-welder')}" alt="Cannon Welder"><h3>Soudure</h3><p>Deux pièces séparées ne deviennent pas automatiquement un seul canon. Aligne le même matériau et le même type, puis soude chaque jonction avec le <em>Cannon Welder</em>.</p></article>
          <article class="cbc-card with-icon"><img class="cbc-icon" src="${icon('steel-cannon-barrel')}" alt="Canon en acier"><h3>Pièces built-up</h3><p>Les canons renforcés en acier et Nethersteel sont assemblés par couches concentriques, puis chauffés <strong>5 minutes</strong> par défaut pour les solidariser.</p></article>
        </div>
        <div class="cbc-table-wrap"><table class="cbc-table"><thead><tr><th>Pièce built-up</th><th>Couches nécessaires</th></tr></thead><tbody>
          <tr><td>Canon simple</td><td>Très petite</td></tr><tr><td>Canon renforcé</td><td>Très petite + petite</td></tr><tr><td>Chambre</td><td>Très petite + petite + moyenne</td></tr><tr><td>Chambre renforcée</td><td>+ grande</td></tr><tr><td>Chambre épaisse</td><td>Les cinq tailles, jusqu’à très grande</td></tr>
        </tbody></table></div>
        <div class="cbc-warning"><p><strong>Le nombre affiché sur le Cannon Welder est son usure, pas la solidité du canon.</strong> La pénalité réelle de soudure est une propriété séparée du matériau.</p></div>
      </div>
    </section>

    <section class="cbc-step" id="cbc-resistance">
      <div class="cbc-marker">05</div>
      <div>
        <div class="cbc-heading"><h2>Comprendre la pression avant de charger</h2><p>La puissance du tir vient des propulseurs ; la sécurité dépend de la pièce la plus faible, de la culasse et d’un éventuel malus de soudure.</p></div>
        <div class="cbc-formula">Contrainte sûre = min(résistance du matériau, limite de la culasse) − malus de soudure</div>
        <div class="cbc-table-wrap"><table class="cbc-table"><thead><tr><th>Culasse</th><th>Fonte</th><th>Bronze</th><th>Acier</th><th>Nethersteel</th></tr></thead><tbody>
          <tr><td>Coulissante</td><td>2</td><td>4</td><td>4</td><td>—</td></tr><tr><td>Rapide</td><td>2</td><td>2</td><td>2</td><td>—</td></tr><tr><td>À vis</td><td>—</td><td>—</td><td>8</td><td>10</td></tr>
        </tbody></table></div>
        <div class="cbc-cards">
          <article class="cbc-card with-icon"><img class="cbc-icon" src="${icon('powder-charge')}" alt="Powder Charge"><h3>Powder Charge</h3><p><strong>Puissance 2</strong> et <strong>contrainte 1</strong>. Plusieurs charges peuvent être alignées tant que le canon les supporte.</p></article>
          <article class="cbc-card with-icon"><img class="cbc-icon" src="${icon('big-cartridge')}" alt="Big Cartridge"><h3>Big Cartridge</h3><p>Jusqu’à <strong>4 niveaux</strong>. Chaque niveau ajoute puissance 2 et contrainte 0,5. Une seule grosse cartouche par tir, mais elle peut coexister avec des Powder Charges.</p></article>
        </div>
        <div class="cbc-warning"><p><strong>Piège majeur :</strong> une culasse rapide en acier soudée obtient 2 de limite, moins 2 de malus, donc <strong>0 de contrainte sûre</strong>. Ce n’est pas une bonne combinaison pour un canon fonctionnel.</p></div>
        <details class="cbc-details"><summary>Risques par défaut en cas de mauvais chargement</summary><div class="cbc-details-body"><ul>
          <li><strong>Projectile coincé / squib :</strong> 25 % de risque.</li>
          <li><strong>Charge engagée dans le tube :</strong> 20 % de risque de rupture.</li>
          <li><strong>Surcharge :</strong> 50 % de risque.</li>
          <li><strong>Vide interrompant l’allumage :</strong> 33 % de risque.</li>
          <li><strong>Charge humide :</strong> puissance divisée par deux ; une charge humide en première position ne s’allume pas.</li>
        </ul></div></details>
      </div>
    </section>

    <section class="cbc-step" id="cbc-chargement">
      <div class="cbc-marker">06</div>
      <div>
        <div class="cbc-heading"><h2>Charger dans le bon ordre</h2><p>À l’intérieur du canon, l’ordre va toujours de la culasse vers la bouche : propulseur, puis projectile. Depuis la culasse ouverte, le projectile entre donc généralement en premier.</p></div>
        <div class="cbc-first-cannon">
          <article><img src="${icon('powder-charge')}" alt="Charge propulsive"><b>Arrière</b><span>charge côté culasse</span></article>
          <article><img src="${icon('solid-shot')}" alt="Projectile"><b>Projectile</b><span>devant la charge</span></article>
          <article><img src="${icon('steel-cannon-barrel')}" alt="Bouche du canon"><b>Bouche</b><span>sortie libre →</span></article>
        </div>
        <div class="cbc-cards">
          <article class="cbc-card with-icon"><img class="cbc-icon" src="${icon('ram-head')}" alt="Tête de refouloir"><h3>Ram Rod</h3><p>Portée manuelle : <strong>5 blocs</strong>, force 3. Il pousse les munitions dans le tube. Son utilisation coûte de la faim selon la distance déplacée.</p></article>
          <article class="cbc-card with-icon"><img class="cbc-icon" src="${icon('worm-head')}" alt="Tête de tire-bourre"><h3>Worm</h3><p>Portée manuelle : <strong>5 blocs</strong>. Il retire une munition ou une charge mal placée sans devoir reconstruire le canon.</p></article>
          <article class="cbc-card"><h3>Cannon Loader</h3><p>Version mécanisée du refouloir. Longueur maximale par défaut : <strong>64 blocs</strong>. Le canon normal doit être désassemblé pendant cette opération.</p></article>
          <article class="cbc-card"><h3>Culasse rapide</h3><p>Elle permet le rechargement alors que le canon reste assemblé. Ouverture : 5 ticks ; délai de tir : 40 ticks.</p></article>
        </div>
        <div class="cbc-note"><p>Un gros canon valide doit avoir <strong>exactement une ouverture</strong> — la bouche — et <strong>une extrémité fermée</strong> — la culasse.</p></div>
      </div>
    </section>

    <section class="cbc-step" id="cbc-affuts">
      <div class="cbc-marker">07</div>
      <div>
        <div class="cbc-heading"><h2>Assembler, pointer et tirer</h2><p>Le tube ne tire pas seul : il doit être monté sur un affût capable de l’assembler et de recevoir les commandes.</p></div>
        <div class="cbc-cards three">
          <article class="cbc-card with-icon"><img class="cbc-icon" src="${icon('cannon-mount')}" alt="Cannon Mount"><h3>Cannon Mount</h3><p>L’entrée latérale gère le tangage ; l’entrée inférieure gère la rotation. La face avant reçoit le signal de tir, la face arrière assemble ou désassemble.</p></article>
          <article class="cbc-card"><h3>Fixed Cannon Mount</h3><p>Affût fixe et plus simple quand aucune rotation complexe n’est nécessaire.</p></article>
          <article class="cbc-card"><h3>Cannon Carriage</h3><p>Affût mobile pilotable. Par défaut : clic gauche pour tirer, touche <strong>C</strong> pour le mode de pointage. La molette règle la cadence des autocanons.</p></article>
        </div>
        <div class="cbc-note"><p>La longueur maximale d’un canon assemblé est de <strong>64 blocs</strong>. Le bloc <em>Yaw Controller</em> existe dans les données, mais n’a pas de recette : le <em>Cannon Mount</em> actuel intègre déjà ses interfaces de rotation.</p></div>
      </div>
    </section>

    <section class="cbc-step" id="cbc-autocanons">
      <div class="cbc-marker">08</div>
      <div>
        <div class="cbc-heading"><h2>Les autocanons : cartouches, chargeurs et cadence</h2><p>Un autocanon est plus compact qu’un gros canon. Il demande une culasse complétée, un ressort de recul, un tube et éventuellement une bouche.</p></div>
        <div class="cbc-cards">
          <article class="cbc-card with-icon"><img class="cbc-icon" src="${icon('steel-autocannon')}" alt="Texture d’autocanon en acier"><h3>Longueur maximale</h3><p>Fonte : <strong>3</strong> blocs · Bronze : <strong>5</strong> · Acier : <strong>7</strong>. Dépasser cette longueur rend l’arme invalide.</p></article>
          <article class="cbc-card with-icon"><img class="cbc-icon" src="${icon('ammo-container')}" alt="Conteneur de munitions"><h3>Autocannon Ammo Container</h3><p>Capacité par défaut : <strong>64 cartouches d’autocanon</strong> ou <strong>128 cartouches de mitrailleuse</strong>.</p></article>
          <article class="cbc-card with-icon"><img class="cbc-icon" src="${icon('autocannon-cartridge')}" alt="Cartouche d’autocanon"><h3>Cartouches</h3><p>Assemble une douille avec un projectile compatible. L’arme extrait les cartouches depuis son conteneur et rejette les étuis.</p></article>
          <article class="cbc-card"><h3>Cadence par redstone</h3><p>Un signal de 1 à 15 règle respectivement : <strong>10, 15, 20, 25, 30, 40, 50, 60, 80, 100, 120, 150, 200, 240 ou 300 coups/minute</strong>.</p></article>
        </div>
      </div>
    </section>

    <section class="cbc-step" id="cbc-munitions">
      <div class="cbc-marker">09</div>
      <div>
        <div class="cbc-heading"><h2>Choisir le projectile adapté</h2><p>Les obus ne remplissent pas tous le même rôle. Certains font des dégâts directs, d’autres explosent, dispersent des sous-projectiles ou transportent un fluide.</p></div>
        <div class="cbc-ammo-grid">
          <article class="cbc-ammo"><img src="${icon('solid-shot')}" alt="Solid Shot"><div><h3>Solid Shot</h3><p>Projectile plein, simple et robuste pour l’impact direct.</p></div></article>
          <article class="cbc-ammo"><img src="${icon('ap-shot')}" alt="AP Shot"><div><h3>AP Shot</h3><p>Conçu pour mieux traverser les blocs et blindages.</p></div></article>
          <article class="cbc-ammo"><img src="${icon('he-shell')}" alt="HE Shell"><div><h3>HE Shell</h3><p>Explosion : <strong>8</strong> contre les blocs et <strong>12</strong> contre les entités.</p></div></article>
          <article class="cbc-ammo"><img src="${icon('ap-shell')}" alt="AP Shell"><div><h3>AP Shell</h3><p>Combine pénétration et charge explosive ; accepte une fusée de base.</p></div></article>
          <article class="cbc-ammo"><img src="${icon('shrapnel-shell')}" alt="Shrapnel Shell"><div><h3>Shrapnel Shell</h3><p>Libère <strong>50 fragments</strong> à la détonation.</p></div></article>
          <article class="cbc-ammo"><img src="${icon('grapeshot')}" alt="Grapeshot"><div><h3>Grapeshot</h3><p>Projette <strong>25 éléments</strong> pour arroser une zone proche.</p></div></article>
          <article class="cbc-ammo"><img src="${icon('fluid-shell')}" alt="Fluid Shell"><div><h3>Fluid Shell</h3><p>Transporte <strong>2 000 mB</strong> et forme des paquets de 500 mB.</p></div></article>
          <article class="cbc-ammo"><img src="${icon('smoke-shell')}" alt="Smoke Shell"><div><h3>Smoke Shell</h3><p>Crée un écran de fumée pendant <strong>15 secondes</strong>.</p></div></article>
          <article class="cbc-ammo"><img src="${icon('mortar-stone')}" alt="Mortar Stone"><div><h3>Mortar Stone</h3><p>Munition rudimentaire supportant jusqu’à <strong>6 charges</strong>.</p></div></article>
          <article class="cbc-ammo"><img src="${icon('ap-autocannon-round')}" alt="Munition AP d’autocanon"><div><h3>AP Autocannon</h3><p><strong>14 dégâts</strong> de base, orientés pénétration.</p></div></article>
          <article class="cbc-ammo"><img src="${icon('flak-autocannon-round')}" alt="Munition Flak"><div><h3>Flak Autocannon</h3><p><strong>10 dégâts</strong> et <strong>15 fragments</strong> ; ajoute une fusée pour une détonation utile.</p></div></article>
          <article class="cbc-ammo"><img src="${icon('machine-gun-round')}" alt="Munition de mitrailleuse"><div><h3>Machine Gun Round</h3><p><strong>8 dégâts</strong> de base et stockage deux fois plus dense.</p></div></article>
        </div>
      </div>
    </section>

    <section class="cbc-step" id="cbc-fusees">
      <div class="cbc-marker">10</div>
      <div>
        <div class="cbc-heading"><h2>Régler la manière dont l’obus détonne</h2><p>Les fusées sont des composants de déclenchement. Monte la fusée compatible sur l’obus avant le chargement.</p></div>
        <div class="cbc-ammo-grid">
          <article class="cbc-ammo"><img src="${icon('impact-fuze')}" alt="Impact Fuze"><div><h3>Impact Fuze</h3><p>Détonation à l’impact. Chance de déclenchement par défaut : <strong>67 %</strong>.</p></div></article>
          <article class="cbc-ammo"><img src="${icon('inertia-fuze')}" alt="Inertia Fuze"><div><h3>Inertia Fuze</h3><p>Réagit à la décélération. Chance : <strong>90 %</strong>, durabilité 3.</p></div></article>
          <article class="cbc-ammo"><img src="${icon('timed-fuze')}" alt="Timed Fuze"><div><h3>Timed Fuze</h3><p>Explose après le délai programmé ; utile pour les tirs en cloche.</p></div></article>
          <article class="cbc-ammo"><img src="${icon('proximity-fuze')}" alt="Proximity Fuze"><div><h3>Proximity Fuze</h3><p>Détecte une cible proche après <strong>5 ticks</strong> d’armement.</p></div></article>
        </div>
        <div class="cbc-note"><p>Il existe aussi des variantes retardées et câblées. JEI/EMI indique quels obus acceptent une fusée de nez ou de base.</p></div>
      </div>
    </section>

    <section class="cbc-step" id="cbc-automation">
      <div class="cbc-marker">11</div>
      <div>
        <div class="cbc-heading"><h2>Automatiser sans perdre de vue la sécurité</h2><p>Le mod est conçu pour fonctionner avec les bras mécaniques, convoyeurs, chargeurs et signaux redstone de Create.</p></div>
        <div class="cbc-cards three">
          <article class="cbc-card"><h3>Batterie de culasse rapide</h3><p>Prépare projectile et charge sur un convoyeur, ouvre la culasse, introduis les éléments, referme puis autorise le tir. La culasse rapide évite de désassembler le canon.</p></article>
          <article class="cbc-card"><h3>Autocanon à chargeurs</h3><p>Alimente un <em>Ammo Container</em> rempli de cartouches, puis utilise la redstone pour choisir la cadence. Prévois l’évacuation des étuis.</p></article>
          <article class="cbc-card"><h3>Ligne de fonderie</h3><p>Fais fondre le métal, remplis les moules par pompes, lis les comparateurs et ne libère les pièces que lorsque le signal atteint 15.</p></article>
        </div>
        <div class="cbc-warning"><p>Une automatisation fiable doit empêcher mécaniquement le tir si la culasse est ouverte, si le canon est en cours de chargement ou si la séquence n’a pas confirmé la présence du projectile.</p></div>
      </div>
    </section>

    <section class="cbc-step" id="cbc-diagnostic">
      <div class="cbc-marker">12</div>
      <div>
        <div class="cbc-heading"><h2>Pourquoi mon canon ne fonctionne pas ?</h2><p>Avant de reconstruire toute l’arme, passe cette liste dans l’ordre.</p></div>
        <div class="cbc-checks">
          <article class="cbc-check"><h3>Il refuse de s’assembler</h3><ul><li>Une seule bouche ouverte et une culasse fermée.</li><li>Pièces alignées et réellement connectées.</li><li>Jonctions séparées correctement soudées.</li><li>Pas plus de 64 blocs.</li><li>Culasse incomplète réellement terminée.</li></ul></article>
          <article class="cbc-check"><h3>Il s’assemble, mais ne tire pas</h3><ul><li>Signal envoyé sur la bonne face de l’affût.</li><li>Culasse fermée.</li><li>Charge sèche et au contact de la chaîne d’allumage.</li><li>Projectile devant les propulseurs.</li><li>Aucun vide au milieu du chargement.</li></ul></article>
          <article class="cbc-check"><h3>Le projectile reste dans le tube</h3><ul><li>Ajoute de la puissance sans dépasser la résistance.</li><li>Réduis la longueur ou les frottements du tube.</li><li>Retire le projectile avec le Worm avant un nouvel essai.</li><li>Ne tire jamais une seconde munition derrière un squib.</li></ul></article>
          <article class="cbc-check"><h3>Le canon explose</h3><ul><li>Recalcule la contrainte totale des charges.</li><li>Vérifie la limite propre à la culasse.</li><li>Applique le malus de soudure.</li><li>Ne place aucune charge dans une section de tube non prévue.</li><li>Évite l’acier soudé avec culasse rapide.</li></ul></article>
        </div>
        <details class="cbc-details"><summary>Réglages serveur importants</summary><div class="cbc-details-body"><ul>
          <li><strong>ALL_DAMAGE :</strong> dégâts complets aux blocs et entités.</li>
          <li><strong>NO_EXPLOSIVE_DAMAGE :</strong> conserve les impacts et la pénétration, mais empêche les explosions de détruire les blocs.</li>
          <li><strong>NO_DAMAGE :</strong> neutralise les dégâts aux blocs.</li>
        </ul><p>Ces options permettent de garder l’artillerie pour le jeu et les événements sans transformer chaque tir d’essai en chantier de reconstruction.</p></div></details>
        <p class="cbc-source"><strong>Référence :</strong> guide établi à partir de <code>createbigcannons-5.11.7+mc.1.21.1.jar</code>, de ses recettes, configurations, propriétés de munitions et scènes Ponder. Les icônes visibles ici proviennent du même fichier de mod.</p>
      </div>
    </section>
  `;
  tutorialContent.append(panel);
  panel.querySelectorAll('.cbc-roadmap a').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const target = panel.querySelector(link.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();
