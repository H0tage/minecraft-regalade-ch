(() => {
  const rows = entries => entries.map(entry => `<tr>${entry.map(value => `<td>${value}</td>`).join('')}</tr>`).join('');
  const recipeTable = (headers, entries, label) => `
    <div class="cbc-recipe-table" tabindex="0" role="region" aria-label="${label}">
      <table><thead><tr>${headers.map(value => `<th scope="col">${value}</th>`).join('')}</tr></thead><tbody>${rows(entries)}</tbody></table>
    </div>`;
  const flow = parts => `<div class="cbc-recipe-flow">${parts.map((part, index) => `${index ? '<i aria-hidden="true">→</i>' : ''}<span>${part}</span>`).join('')}</div>`;
  const bi = (english, french) => `<b>${english}</b><small>${french}</small>`;

  window.REGALE_CBC_RECIPES_HTML = `
    <div class="cbc-recipes" id="cbc-recipes-panel" role="tabpanel" aria-labelledby="cbc-recipes-tab" hidden>
      <header class="cbc-recipes-head">
        <p class="cbc-eyebrow">Create Big Cannons 5.11.7 · recettes vérifiées</p>
        <h1>Toutes les recettes</h1>
        <p>Les formules de structure et les chaînes de fabrication de chaque famille de canon. Les noms anglais du jeu sont toujours accompagnés de leur traduction française.</p>
      </header>

      <section class="cbc-recipe-section" id="cbc-recipes-dimensions">
        <div class="cbc-section-heading"><span>A</span><div><h2>Tailles et encombrement</h2><p>La taille du moule n’est pas celle du canon terminé.</p></div></div>
        <div class="cbc-size-grid">
          <article><strong>3 × 3 × hauteur</strong><h3>Gros moulage</h3><p>Chaque couche d’un <b>Big Cannon Cast / Moule de gros canon</b> occupe un carré de 3 × 3 blocs : huit <b>Casting Sand / Sable de moulage</b> autour du moule central.</p></article>
          <article><strong>1 × 1 × hauteur</strong><h3>Moulage d’autocanon</h3><p>Les formes d’autocanon sont compactes. Une colonne de moulage suffit pour le <b>Barrel / Canon</b>, la <b>Breech / Culasse</b> ou le <b>Recoil Spring / Ressort de recul</b>.</p></article>
          <article><strong>1 × 1 × 1</strong><h3>Pièce terminée</h3><p>Une pièce finie occupe toujours une case de bloc. Même <b>Large / Grand</b> et <b>Very Large / Très grand</b> désignent l’épaisseur du modèle, pas une pièce 2 × 2.</p></article>
          <article><strong>1 × 1 × longueur</strong><h3>Canon assemblé</h3><p>Le tube final suit un seul axe. La limite structurelle est 64 blocs par défaut ; les longueurs utiles d’autocanon indiquées par leur matériau incluent la culasse.</p></article>
        </div>
        <div class="cbc-note"><strong>Donc non :</strong> une culasse de gros canon ne mesure pas 2 × 2. C’est son atelier de coulée qui demande un carré de 3 × 3.</div>
      </section>

      <section class="cbc-recipe-section" id="cbc-recipes-formulas">
        <div class="cbc-section-heading"><span>B</span><div><h2>Formules de structure</h2><p>Ce que le jeu accepte comme canon complet.</p></div></div>
        <h3>Big Cannon / Gros canon</h3>
        ${flow([
          `${bi('Breech ou Cannon End', 'Culasse ou extrémité fermée')}<em>exactement 1 à l’arrière</em>`,
          `${bi('Chamber et/ou Barrel', 'Chambre et/ou canon')}<em>au moins 1 bloc de tube au total</em>`,
          `${bi('Open Muzzle', 'Bouche ouverte')}<em>aucun bouchon devant</em>`
        ])}
        <ul class="cbc-recipe-rules"><li>Un seul axe, un seul matériau et toutes les jonctions connectées.</li><li>L’arrière doit être fermé et l’avant ouvert ; aucun bloc <b>Unbored / Non alésé</b> ou <b>Incomplete / Incomplet</b>.</li><li>Le jeu accepte n’importe quel mélange de Chambers et Barrels compatible. En pratique, place les chambres à l’arrière pour les propulseurs et les canons devant. La longueur maximale par défaut est 64 blocs.</li></ul>
        <h3>Autocannon / Autocanon</h3>
        ${flow([
          `${bi('Autocannon Breech', 'Culasse d’autocanon')}<em>exactement 1</em>`,
          `${bi('Autocannon Recoil Spring', 'Ressort de recul d’autocanon')}<em>0 ou 1</em>`,
          `${bi('Autocannon Barrel', 'Canon d’autocanon')}<em>au moins 1</em>`,
          `${bi('Open Muzzle', 'Bouche ouverte')}<em>fin du tube</em>`
        ])}
        ${recipeTable(['Matériau', 'Longueur utile maximale', 'Exemples sans risque de blocage'], [
          ['Cast Iron / Fonte', '<strong>3 blocs</strong>, culasse comprise', 'Culasse + 1–2 canons ; ou culasse + ressort + 1 canon'],
          ['Bronze / Bronze', '<strong>5 blocs</strong>, culasse comprise', 'Culasse + 1–4 canons ; le ressort utilise une place'],
          ['Steel / Acier', '<strong>7 blocs</strong>, culasse comprise', 'Culasse + 1–6 canons ; le ressort utilise une place']
        ], 'Formules et longueurs des autocanons')}
        <p class="cbc-recipe-caption">Il est possible d’assembler un autocanon plus long jusqu’à la limite globale de 64 blocs, mais avec les défaillances actives un projectile dépassant la longueur utile du matériau peut rester coincé dans le tube.</p>
      </section>

      <section class="cbc-recipe-section" id="cbc-recipes-moulds">
        <div class="cbc-section-heading"><span>C</span><div><h2>Volumes des moules</h2><p>Quantité consommée par une pièce ou une couche haute d’un bloc.</p></div></div>
        ${recipeTable(['Cast Shape / Forme', 'Empreinte', 'Métal liquide', 'Équivalent'], [
          [bi('Very Small', 'Très petit'), '3 × 3', '630 mB', '7 lingots'],
          [bi('Small', 'Petit'), '3 × 3', '810 mB', '9 lingots'],
          [bi('Medium', 'Moyen'), '3 × 3', '1 080 mB', '12 lingots'],
          [bi('Large', 'Grand'), '3 × 3', '1 260 mB', '14 lingots'],
          [bi('Very Large', 'Très grand'), '3 × 3', '1 800 mB', '20 lingots'],
          [bi('Cannon End', 'Extrémité de canon'), '3 × 3', '810 mB', '9 lingots'],
          [bi('Sliding Breech', 'Culasse coulissante'), '3 × 3', '810 mB', '9 lingots'],
          [bi('Screw Breech', 'Culasse à vis'), '3 × 3', '810 mB', '9 lingots'],
          [bi('Autocannon Barrel', 'Canon d’autocanon'), '1 × 1', '270 mB', '3 lingots'],
          [bi('Autocannon Breech', 'Culasse d’autocanon'), '1 × 1', '360 mB', '4 lingots'],
          [bi('Autocannon Recoil Spring', 'Ressort de recul d’autocanon'), '1 × 1', '360 mB', '4 lingots']
        ], 'Volumes et dimensions de tous les moules de canon')}
        <div class="cbc-note"><strong>Recette des moules :</strong> chaque Cast Mould / Moule de coulée s’obtient en passant 1 Log / Rondin dans une Mechanical Saw / Scie mécanique. Choisis ensuite la recette de découpe correspondant à la forme voulue.</div>
        <p class="cbc-recipe-caption">Empile plusieurs couches verticalement pour couler plusieurs pièces en une opération : le volume est multiplié par le nombre de couches.</p>
      </section>

      <section class="cbc-recipe-section" id="cbc-recipes-primitive">
        <div class="cbc-section-heading"><span>D</span><div><h2>Canons primitifs</h2><p>Les deux familles fabriquées directement à l’établi.</p></div></div>
        ${recipeTable(['Résultat', 'Recette', 'Formule de canon'], [
          [bi('Log Cannon End', 'Extrémité de canon en rondins'), 'Bouton en bois au-dessus + 3 rondins en ligne + poudre à canon en dessous', 'End / Extrémité + 1 à N Log Cannon Chambers / Chambres en rondins'],
          [bi('Log Cannon Chamber', 'Chambre de canon en rondins'), '4 rondins autour de 1 poudre à canon', 'Répéter la chambre pour allonger le tube'],
          [bi('Wrought Iron Cannon End', 'Extrémité de canon en fer forgé'), 'Lingot de fer au-dessus + 3 plaques de fer en ligne + poudre à canon en dessous', 'End / Extrémité + 1 à N Wrought Iron Cannon Chambers / Chambres en fer forgé'],
          [bi('Wrought Iron Cannon Chamber', 'Chambre de canon en fer forgé'), '4 plaques de fer autour de 1 poudre à canon', 'Répéter la chambre pour allonger le tube'],
          [bi('Wrought Iron Drop Mortar End', 'Extrémité de mortier en fer forgé'), '1 Wrought Iron Cannon End / Extrémité en fer forgé + 1 Iron Bars / Barreaux de fer, verticalement', 'Drop Mortar End / Extrémité de mortier + chambres en fer forgé ; bouche orientée vers le haut']
        ], 'Recettes des canons primitifs')}
      </section>

      <section class="cbc-recipe-section" id="cbc-recipes-cast">
        <div class="cbc-section-heading"><span>E</span><div><h2>Fonte et bronze</h2><p>Deux familles coulées en une seule masse, puis alésées.</p></div></div>
        ${recipeTable(['Pièce finale', 'Coulée', 'Finition'], [
          [bi('Cannon Barrel', 'Canon'), 'Very Small / Très petit · 630 mB · 7 lingots', 'Passer la pièce Unbored / Non alésée au Cannon Drill / Foret à canon'],
          [bi('Cannon Chamber', 'Chambre de canon'), 'Medium / Moyen · 1 080 mB · 12 lingots', 'Passer la pièce Unbored / Non alésée au Cannon Drill / Foret à canon'],
          [bi('Cannon End', 'Extrémité de canon'), 'Cannon End / Extrémité · 810 mB · 9 lingots', 'La coulée donne directement la pièce terminée ; aucun alésage'],
          [bi('Sliding Breech', 'Culasse coulissante'), 'Sliding Breech / Culasse coulissante · 810 mB · 9 lingots', 'Aléser → ajouter 1 Shaft / Arbre → ajouter le Sliding Breechblock / Bloc coulissant correspondant'],
          [bi('Quick-Firing Breech', 'Culasse à tir rapide'), 'Commencer par une Sliding Breech / Culasse coulissante terminée', 'Clic droit avec 1 Quickfiring Mechanism / Mécanisme de tir rapide']
        ], 'Pièces des canons en fonte et en bronze')}
        <div class="cbc-subrecipes">
          <article><h3>Sliding Breechblock / Bloc coulissant</h3><p><strong>3 lingots du matériau + 2 Cogwheels / Roues dentées.</strong></p><code>· I ·<br>C I C<br>· I ·</code></article>
          <article><h3>Quickfiring Mechanism / Mécanisme de tir rapide</h3><p><strong>1 Lever / Levier + 1 Cogwheel / Roue dentée + 1 Large Cogwheel / Grande roue dentée.</strong></p><code>· · L<br>c C ·</code></article>
        </div>
        <div class="cbc-note"><strong>Formule finale :</strong> Cannon End, Sliding Breech ou Quick-Firing Breech à l’arrière + au moins un bloc Chamber ou Barrel. Toutes les pièces doivent être du même matériau ; l’ordre conseillé est Chambers puis Barrels.</div>
      </section>

      <section class="cbc-recipe-section" id="cbc-recipes-built-up">
        <div class="cbc-section-heading"><span>F</span><div><h2>Acier et Nethersteel</h2><p>Chaque couche est coulée, alésée, emboîtée puis chauffée.</p></div></div>
        ${flow([
          `${bi('Cast each layer', 'Couler chaque couche')}<em>métal liquide</em>`,
          `${bi('Cannon Drill', 'Foret à canon')}<em>aléser chaque couche</em>`,
          `${bi('Cannon Builder', 'Assembleur de canon')}<em>emboîter du centre vers l’extérieur</em>`,
          `${bi('Bulk Blasting', 'Soufflage chauffant')}<em>ventilateur à travers la lave</em>`,
          `${bi('Finished block', 'Bloc terminé')}<em>prêt à assembler</em>`
        ])}
        ${recipeTable(['Pièce finale', 'Couches requises', 'Total de métal'], [
          [bi('Cannon Barrel', 'Canon'), 'Very Small / Très petit', '630 mB · 7 lingots'],
          [bi('Built-Up Cannon Barrel', 'Canon renforcé'), 'Very Small + Small / Très petit + Petit', '1 440 mB · 16 lingots'],
          [bi('Cannon Chamber', 'Chambre de canon'), 'Very Small + Small + Medium / Très petit + Petit + Moyen', '2 520 mB · 28 lingots'],
          [bi('Built-Up Cannon Chamber', 'Chambre renforcée'), 'Very Small + Small + Medium + Large / Très petit + Petit + Moyen + Grand', '3 780 mB · 42 lingots'],
          [bi('Thick Cannon Chamber', 'Chambre épaisse'), 'Very Small + Small + Medium + Large + Very Large / Très petit + Petit + Moyen + Grand + Très grand', '5 580 mB · 62 lingots']
        ], 'Couches des pièces en acier et Nethersteel')}
        ${recipeTable(['Culasse', 'Coulée et alésage', 'Éléments de finition'], [
          [bi('Steel Sliding Breech', 'Culasse coulissante en acier'), 'Sliding Breech · 810 mB · 9 lingots', '1 Shaft / Arbre, puis 1 Steel Sliding Breechblock / Bloc coulissant en acier'],
          [bi('Steel Screw Breech', 'Culasse à vis en acier'), 'Screw Breech · 810 mB · 9 lingots', '1 Shaft / Arbre, puis 1 Steel Screw Lock / Verrou à vis en acier'],
          [bi('Nethersteel Screw Breech', 'Culasse à vis en Nethersteel'), 'Screw Breech · 810 mB · 9 lingots', '1 Shaft / Arbre, puis 1 Nethersteel Screw Lock / Verrou à vis en Nethersteel']
        ], 'Culasses en acier et Nethersteel')}
        <div class="cbc-subrecipes">
          <article><h3>Steel Sliding Breechblock / Bloc coulissant en acier</h3><p>3 Steel Ingots / Lingots d’acier + 2 Cogwheels / Roues dentées.</p></article>
          <article><h3>Screw Lock / Verrou à vis</h3><p>3 lingots d’acier ou de Nethersteel en ligne + 1 Shaft / Arbre centré au-dessus.</p></article>
        </div>
        <div class="cbc-note"><strong>Disponibilités :</strong> l’acier propose Sliding, Quick-Firing et Screw Breech. Le Nethersteel ne propose que la Screw Breech. Une Quick-Firing en acier se fabrique en appliquant le mécanisme rapide à une Sliding Breech en acier terminée.</div>
      </section>

      <section class="cbc-recipe-section" id="cbc-recipes-autocannons">
        <div class="cbc-section-heading"><span>G</span><div><h2>Autocanons</h2><p>La même chaîne existe en fonte, bronze et acier.</p></div></div>
        ${recipeTable(['Pièce finale', 'Coulée', 'Après alésage'], [
          [bi('Autocannon Barrel', 'Canon d’autocanon'), 'Autocannon Barrel · 270 mB · 3 lingots', 'La pièce alésée est terminée'],
          [bi('Autocannon Breech', 'Culasse d’autocanon'), 'Autocannon Breech · 360 mB · 4 lingots', 'Ajouter le Breech Extractor / Extracteur de culasse du même matériau'],
          [bi('Autocannon Recoil Spring', 'Ressort de recul d’autocanon'), 'Autocannon Recoil Spring · 360 mB · 4 lingots', 'Ajouter 1 Recoil Spring / Ressort de recul']
        ], 'Chaîne de fabrication des autocanons')}
        <div class="cbc-subrecipes">
          <article><h3>Breech Extractor / Extracteur de culasse</h3><p>1 lingot du matériau → <b>Sequenced Assembly / Assemblage séquencé</b> : 3 passages de <b>Cutting / Découpe</b>.</p></article>
          <article><h3>Recoil Spring / Ressort de recul</h3><p>1 Iron Plate / Plaque de fer découpée donne 1 Spring Wire / Fil de ressort ; 1 Steel Plate / Plaque d’acier en donne 3. Puis : 1 fil → <b>Sequenced Assembly / Assemblage séquencé</b> avec 3 passages de <b>Pressing / Pressage</b>.</p></article>
        </div>
        <div class="cbc-warning"><strong>Ne mélange pas les matériaux :</strong> une culasse en bronze n’accepte pas une suite de canons en acier. Les longueurs utiles 3 / 5 / 7 comptent la culasse et le ressort éventuel.</div>
      </section>

      <section class="cbc-recipe-section" id="cbc-recipes-checklist">
        <div class="cbc-section-heading"><span>H</span><div><h2>Contrôle avant montage</h2><p>La formule est correcte si ces cinq conditions sont vraies.</p></div></div>
        <ol class="cbc-checklist"><li>Chaque pièce est finie : aucun nom Unbored / Non alésé ou Incomplete / Incomplet.</li><li>Toutes les pièces appartiennent à la même famille de matériau.</li><li>Le tube suit un axe unique et chaque jonction est connectée ou soudée.</li><li>Il n’existe qu’une extrémité arrière fermée et la bouche avant reste ouverte.</li><li>La structure ne dépasse pas 64 blocs ; pour éviter les projectiles coincés, l’autocanon reste dans sa longueur utile de 3 / 5 / 7 blocs.</li></ol>
      </section>
    </div>`;
})();
