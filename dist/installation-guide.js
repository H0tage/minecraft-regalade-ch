(() => {
  const panel = document.getElementById('tutorial-install');
  if (!panel) return;

  const packFile = 'assets/downloads/Regalade-Minecraft-Client-CurseForge-0.1.4-preparation.zip';

  panel.innerHTML = `
    <header class="install-heading">
      <span class="eyebrow">Guide d’installation</span>
      <h1>Installer le modpack</h1>
      <p>CurseForge s’occupe de Minecraft 1.21.1, de NeoForge et des mods. Il suffit de suivre ces quatre étapes.</p>
    </header>

    <ol class="install-steps">
      <li class="install-step">
        <h2>Installer CurseForge</h2>
        <p>Télécharge l’application officielle. Sur Windows, la version <strong>Standalone</strong> suffit.</p>
        <a href="https://www.curseforge.com/download/app" target="_blank" rel="noopener">Télécharger CurseForge</a>
      </li>
      <li class="install-step">
        <h2>Télécharger le modpack</h2>
        <p>Récupère l’archive du serveur et <strong>ne la décompresse pas</strong>.</p>
        <a href="${packFile}" download>Télécharger le pack 0.1.4</a>
      </li>
      <li class="install-step">
        <h2>Importer le fichier</h2>
        <p>Dans CurseForge : <strong>Minecraft → Importer</strong>, puis sélectionne le fichier ZIP.</p>
      </li>
      <li class="install-step">
        <h2>Lancer le jeu</h2>
        <p>Ouvre le profil créé, attends la fin des téléchargements et clique sur <strong>Jouer</strong>.</p>
      </li>
    </ol>

    <p class="install-note"><strong>En cas de mise à jour :</strong> télécharge le nouveau ZIP et importe-le comme un nouveau profil.</p>
  `;
})();
