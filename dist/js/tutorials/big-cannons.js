(() => {
  const tabList = document.querySelector('#tutoriels > .tutorial-tabs');
  const content = document.querySelector('#tutoriels > .tutorial-content');
  if (!tabList || !content || document.getElementById('tutorial-big-cannons-tab')) return;

  const guided = `
    <div class="cbc-guide cbc-overview" id="cbc-guide-panel" role="tabpanel" aria-labelledby="cbc-guide-tab">
      <header class="cbc-hero cbc-overview-hero">
        <p class="cbc-eyebrow">Create Big Cannons · les bases</p>
        <h1>Comprendre un canon avant de le construire.</h1>
        <p>Un gros canon n’est pas une recette unique : c’est une ligne de pièces compatibles. Voici les règles à comprendre avant de choisir un matériau ou de fabriquer le moindre bloc.</p>
      </header>

      <section class="cbc-overview-section" id="cbc-overview-shape">
        <div class="cbc-section-heading"><span>01</span><div><h2>La forme générale</h2><p>Un arrière fermé, un tube continu et une extrémité ouverte.</p></div></div>
        <div class="cbc-structure-diagram" role="img" aria-label="Culasse, chambres, canons puis bouche ouverte">
          <div class="cbc-structure-block rear"><b>[Breech / Culasse]</b><small>ou extrémité fermée</small></div>
          <i aria-hidden="true">→</i>
          <div class="cbc-structure-block chamber"><b>[Chamber / Chambre]</b><small>× 1 ou davantage · poudre</small></div>
          <i aria-hidden="true">→</i>
          <div class="cbc-structure-block barrel"><b>[Barrel / Canon]</b><small>× 0 ou davantage · trajet</small></div>
          <i aria-hidden="true">→</i>
          <div class="cbc-structure-block muzzle"><b>Bouche ouverte</b><small>c’est simplement de l’air</small></div>
        </div>
        <div class="cbc-overview-callout"><strong>La bouche n’est pas une pièce.</strong><span>C’est la face ouverte du dernier bloc de tube. Si tu poses un bouchon devant, le canon n’a plus de sortie.</span></div>
      </section>

      <section class="cbc-overview-section" id="cbc-overview-length">
        <div class="cbc-section-heading"><span>02</span><div><h2>La longueur : autocanon et gros canon ne suivent pas la même règle</h2><p>C’est la confusion la plus importante à éviter.</p></div></div>
        <div class="cbc-compare-grid">
          <article><p class="cbc-overview-label">[Autocannon / Autocanon]</p><h3>Une longueur utile fixée par le matériau</h3><div class="cbc-length-scale"><span><b>3</b>Fonte</span><span><b>5</b>Bronze</span><span><b>7</b>Acier</span></div><p>Ces limites comptent les sections parcourues après la culasse. Un éventuel ressort de recul compte donc comme une section. Au-delà, le projectile risque de rester coincé.</p></article>
          <article><p class="cbc-overview-label">[Big Cannon / Gros canon]</p><h3>64 blocs structurels, quel que soit le matériau</h3><div class="cbc-limit-line"><b>1</b><span></span><b>64</b></div><p>Le matériau ne change pas cette limite générale. Il détermine plutôt la quantité de poudre supportée et la puissance nécessaire pour parcourir le tube sans incident.</p></article>
        </div>
        <div class="cbc-cause-chain"><div><b>Tube plus long</b><span>le tir devient plus précis</span></div><i>→</i><div><b>Charge suffisante obligatoire</b><span>sinon le projectile se coince</span></div><i>→</i><div><b>Canon assez résistant</b><span>sinon la charge le fait rompre</span></div></div>
        <div class="cbc-note"><strong>En résumé :</strong> la longueur maximale d’un gros canon n’est pas donnée directement par son matériau. Le matériau décide surtout si la charge nécessaire à cette longueur peut être utilisée sans danger.</div>
        <div class="cbc-stat-guide">
          <div class="cbc-stat-guide-heading"><p class="cbc-overview-label">[Big Cannon / Gros canon]</p><h3>Quelle modification change quelle statistique ?</h3></div>
          <div class="cbc-stat-grid">
            <article><b>Ajouter de la poudre</b><strong>Vitesse et portée ↑</strong><span>Le recul, la dispersion initiale et la contrainte imposée au canon augmentent également.</span></article>
            <article><b>Allonger le tube</b><strong>Précision ↑</strong><span>Chaque bloc parcouru réduit la dispersion. Le tube n’ajoute pas directement de vitesse.</span></article>
            <article><b>Choisir un meilleur matériau</b><strong>Charge supportée ↑</strong><span>Le matériau fixe surtout la résistance, le risque de projectile coincé et l’efficacité du tube sur la précision.</span></article>
            <article><b>Modifier l’angle</b><strong>Trajectoire modifiée</strong><span>Un tir plus haut décrit une courbe différente ; l’angle participe donc à la distance réellement atteinte.</span></article>
            <article><b>Changer de projectile</b><strong>Effet et comportement modifiés</strong><span>Dégâts, explosion, pénétration et comportement en vol dépendent de la munition choisie.</span></article>
            <article><b>Épaissir le profil extérieur</b><strong>Portée inchangée</strong><span>Les tailles extérieures organisent la chambre et la forme du canon ; elles ne créent pas un nouveau calibre.</span></article>
          </div>
          <div class="cbc-autocannon-exception"><b>Exception ([Autocannon / Autocanon])</b><span>Sur un autocanon, chaque bloc de tube augmente réellement la vitesse et réduit la dispersion, jusqu’aux limites propres à son matériau.</span></div>
        </div>
      </section>

      <section class="cbc-overview-section" id="cbc-overview-diameter">
        <div class="cbc-section-heading"><span>03</span><div><h2>Le diamètre extérieur change, pas le calibre</h2><p>Les cinq tailles décrivent l’épaisseur de la pièce, pas une nouvelle famille de munitions.</p></div></div>
        <div class="cbc-diameter-row" aria-label="Cinq épaisseurs extérieures avec le même passage intérieur">
          <div><span class="cbc-ring size-1"><i></i></span><b>[Very Small / Très petit]</b><small>canon</small></div>
          <div><span class="cbc-ring size-2"><i></i></span><b>[Small / Petit]</b><small>canon renforcé</small></div>
          <div><span class="cbc-ring size-3"><i></i></span><b>[Medium / Moyen]</b><small>chambre</small></div>
          <div><span class="cbc-ring size-4"><i></i></span><b>[Large / Grand]</b><small>chambre renforcée</small></div>
          <div><span class="cbc-ring size-5"><i></i></span><b>[Very Large / Très grand]</b><small>chambre épaisse</small></div>
        </div>
        <div class="cbc-diameter-explain"><article><h3>Même passage intérieur</h3><p>Les projectiles de gros canon utilisent le même calibre. Une pièce plus épaisse ne demande pas une munition plus grosse.</p></article><article><h3>Deux fonctions différentes</h3><p>Une <b>[Chamber / Chambre]</b> peut recevoir la poudre. Un <b>[Barrel / Canon]</b> guide le projectile ; placer de la poudre dedans peut provoquer une rupture.</p></article><article><h3>Plusieurs profils possibles</h3><p>L’acier et le Nethersteel permettent de construire un canon qui s’amincit progressivement de la culasse vers la bouche.</p></article></div>
      </section>

      <section class="cbc-overview-section" id="cbc-overview-combinations">
        <div class="cbc-section-heading"><span>04</span><div><h2>Les combinaisons possibles</h2><p>Le jeu accepte beaucoup de variantes tant que les règles structurelles sont respectées.</p></div></div>
        <div class="cbc-build-examples">
          <article><h3>Canon simple</h3><div class="cbc-mini-build"><span class="rear">Culasse</span><span class="chamber">Chambre</span><span class="barrel">Canon</span><span class="air">Air</span></div><p>La formule minimale facile à comprendre.</p></article>
          <article><h3>Canon allongé</h3><div class="cbc-mini-build"><span class="rear">Culasse</span><span class="chamber">Chambre</span><span class="chamber">Chambre</span><span class="barrel">Canon</span><span class="barrel">Canon</span><span class="air">Air</span></div><p>Plus de place pour la charge et davantage de guidage.</p></article>
          <article><h3>Canon progressif en acier</h3><div class="cbc-mini-build tapered"><span class="rear">Culasse à vis</span><span class="chamber thick">Chambre épaisse</span><span class="chamber built">Chambre renforcée</span><span class="chamber">Chambre</span><span class="barrel built">Canon renforcé</span><span class="barrel">Canon</span><span class="air">Air</span></div><p>Un profil qui s’amincit vers la bouche, sans changer de calibre.</p></article>
        </div>
        <div class="cbc-overview-rules"><div><b>1</b><span><strong>Un seul matériau</strong> sur toute la longueur.</span></div><div><b>2</b><span><strong>Une seule fermeture</strong> à l’arrière.</span></div><div><b>3</b><span><strong>Toutes les jonctions</strong> connectées ou soudées.</span></div><div><b>4</b><span><strong>Uniquement des pièces terminées</strong>, jamais non alésées ou incomplètes.</span></div><div><b>5</b><span><strong>La face avant reste libre</strong> pour former la bouche.</span></div></div>
      </section>

      <section class="cbc-overview-section" id="cbc-overview-summary">
        <div class="cbc-summary-heading"><span>05</span><div><p class="cbc-eyebrow">En bref</p><h2>Ce qu’il faut retenir</h2></div></div>
        <p class="cbc-summary-text">Un gros canon suit toujours le même ordre : <strong>fermeture arrière → chambre(s) pour la poudre → canon(s) → bouche ouverte</strong>. La poudre augmente surtout la vitesse et la portée ; le matériau limite la charge et la longueur utilisables sans casse.</p>
        <p class="cbc-summary-next">La suite se trouve dans <strong>Premier autocanon</strong>, un parcours complet pensé pour une partie en survie.</p>
      </section>
    </div>`;

  const tab = document.createElement('button');
  tab.className = 'tutorial-tab';
  tab.id = 'tutorial-big-cannons-tab';
  tab.type = 'button';
  tab.setAttribute('role', 'tab');
  tab.setAttribute('aria-selected', 'false');
  tab.setAttribute('aria-controls', 'tutorial-big-cannons');
  tab.textContent = 'Big Cannons';
  tabList.append(tab);

  const panel = document.createElement('section');
  panel.className = 'tutorial-panel';
  panel.id = 'tutorial-big-cannons';
  panel.hidden = true;
  panel.setAttribute('role', 'tabpanel');
  panel.setAttribute('aria-labelledby', tab.id);
  panel.innerHTML = `<section class="cbc"><div class="cbc-switcher" role="tablist" aria-label="Choisir le contenu Big Cannons"><button id="cbc-guide-tab" type="button" role="tab" aria-selected="true" aria-controls="cbc-guide-panel">Fonctionnement général</button></div>${guided}</section>`;
  content.append(panel);

})();
