(() => {
  const card = document.querySelector('#reglement + .rule-consequences, #reglement .rule-consequences, .rule-consequences');
  if (!card) return;

  card.innerHTML = `
    <h2>Que se passe-t-il en cas de non-respect des règles ?</h2>
    <p>Ce projet a été créé pour offrir un espace agréable et apaisé à tout le monde, moi compris. L’idée est de pouvoir jouer, construire et échanger dans une ambiance saine, sans transformer le serveur en terrain de médiation permanent.</p>
    <p>Les désaccords, malentendus ou tensions peuvent arriver. Dans ces situations, je prendrai le temps d’écouter les personnes concernées et de chercher une solution raisonnable.</p>
    <p>En revanche, une violation évidente du règlement, une volonté claire de nuire ou un comportement abusif pourra entraîner une exclusion du serveur. Les constructions ou installations réalisées dans le cadre de ces abus pourront également être supprimées.</p>
    <p>Ce texte n’a pas vocation à mettre la pression sur qui que ce soit. Il sert simplement à poser un cadre clair au cas où un problème sérieux surviendrait. Les erreurs de bonne foi seront traitées comme telles, mais les abus manifestes ne donneront pas lieu à des négociations interminables.</p>
    <p>Les règles sont simples et s’appliquent à tout le monde. Leur objectif est de protéger les joueurs, l’ambiance du serveur et le plaisir que nous avons tous à faire vivre ce projet.</p>
  `;
})();
