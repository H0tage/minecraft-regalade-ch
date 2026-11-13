(() => {
  const panel = document.getElementById('tutorial-install');
  if (!panel) return;

  const packName = 'Régalade Minecraft';
  const packVersion = '0.1.4-preparation';
  const packFile = 'assets/downloads/Regalade-Minecraft-Client-CurseForge-0.1.4-preparation.zip';

  panel.innerHTML = `
    <section class="install-overview" aria-label="Étapes de l’installation">
      <span class="eyebrow">En quatre étapes</span>
      <ol>
        <li><strong>1</strong><span>Installer<br>CurseForge</span></li>
        <li><strong>2</strong><span>Télécharger<br>le modpack</span></li>
        <li><strong>3</strong><span>Importer<br>le fichier ZIP</span></li>
        <li><strong>4</strong><span>Lancer<br>le jeu</span></li>
      </ol>
    </section>

    <aside class="install-start">
      <div><h2>Le fichier à utiliser</h2><p>Télécharge le ZIP CurseForge et garde-le tel quel. Ne l’ouvre pas et ne le décompresse pas.</p></div>
      <a class="button" href="${packFile}" download>Télécharger le modpack</a>
    </aside>

    <div class="install-steps">
      <article class="install-step">
        <div>
          <h2>Vérifie que tu possèdes Minecraft Java</h2>
          <p>Le serveur fonctionne avec <strong>Minecraft: Java Edition sur ordinateur</strong>. Les versions Bedrock pour téléphone, console et Windows ne peuvent pas rejoindre ce serveur.</p>
          <div class="install-actions"><a class="button ghost" href="https://www.minecraft.net/download/" target="_blank" rel="noopener">Télécharger le launcher officiel</a></div>
        </div>
      </article>

      <article class="install-step">
        <div>
          <h2>Installe l’application CurseForge</h2>
          <p>Télécharge CurseForge depuis son site officiel. Sur Windows, la version <strong>Standalone</strong> suffit : Overwolf n’est pas obligatoire.</p>
          <p>Au premier démarrage, choisis <strong>Minecraft</strong>, puis l’installation standard recommandée.</p>
          <div class="install-actions"><a class="button primary" href="https://www.curseforge.com/download/app" target="_blank" rel="noopener">Télécharger CurseForge</a></div>
        </div>
      </article>

      <article class="install-step">
        <div>
          <h2>Importe le ZIP du serveur</h2>
          <p>Dans CurseForge, ouvre la section Minecraft et clique sur <strong>Importer</strong> ou <strong>Import</strong>. Choisis ensuite le fichier <strong>Regalade-Minecraft-Client-CurseForge-0.1.4-preparation.zip</strong>.</p>
          <div class="install-path" aria-label="Chemin d’importation"><span>CurseForge</span><span>Minecraft</span><span>Importer</span><span>Choisir le ZIP</span></div>
          <div class="install-callout"><strong>Important :</strong> ne crée pas toi-même un profil Minecraft 1.21.1 et ne copie pas les mods à la main. L’importation configure la bonne version de NeoForge et télécharge les dépendances.</div>
        </div>
      </article>

      <article class="install-step">
        <div>
          <h2>Laisse CurseForge terminer l’installation</h2>
          <p>Le profil <strong>${packName}</strong> apparaît dans « Mes modpacks ». CurseForge télécharge alors les mods ; la durée dépend de ta connexion.</p>
          <p>Attends que l’activité soit terminée avant de cliquer sur <strong>Jouer</strong>.</p>
        </div>
      </article>

      <article class="install-step">
        <div>
          <h2>Alloue suffisamment de mémoire</h2>
          <p>Dans les paramètres Minecraft de CurseForge, règle la mémoire allouée à <strong>8&nbsp;192 Mo</strong> si ton ordinateur possède au moins 16 Go de RAM. Avec 8 Go de RAM au total, commence à 6&nbsp;144 Mo et ferme les autres programmes.</p>
          <div class="install-callout">N’alloue pas toute la mémoire de l’ordinateur à Minecraft : Windows doit aussi pouvoir fonctionner.</div>
        </div>
      </article>

      <article class="install-step">
        <div>
          <h2>Lance le profil</h2>
          <p>Dans CurseForge, ouvre <strong>${packName}</strong> puis clique sur <strong>Jouer</strong>. Connecte-toi au launcher Minecraft avec le compte Microsoft qui possède Java Edition.</p>
          <p>Le premier démarrage est le plus long. Une fenêtre qui semble immobile pendant quelques minutes n’est pas forcément bloquée.</p>
        </div>
      </article>
    </div>

    <section class="install-success">
      <h2>Tu vois le menu principal ? C’est installé.</h2>
      <p>N’ajoute, ne retire et ne mets à jour aucun mod individuellement. Utilise ensuite l’onglet « Informations de connexion » pour rejoindre le serveur.</p>
    </section>

    <div class="install-aftercare">
      <article class="card">
        <h2>Installer une mise à jour</h2>
        <ol>
          <li>Télécharge le nouveau ZIP indiqué sur cette page.</li>
          <li>Importe-le comme un nouveau profil CurseForge.</li>
          <li>Lance-le une fois et vérifie qu’il fonctionne.</li>
          <li>Supprime l’ancien profil seulement après vérification.</li>
        </ol>
      </article>
      <article class="card">
        <h2>Ce qu’il ne faut pas faire</h2>
        <ul>
          <li>Décompresser le ZIP dans le dossier Minecraft.</li>
          <li>Installer NeoForge ou Java à la main sans nécessité.</li>
          <li>Mettre à jour un mod isolé depuis CurseForge.</li>
          <li>Réutiliser un vieux profil après une mise à jour du serveur.</li>
        </ul>
      </article>
    </div>

    <div class="install-faq">
      <details><summary>CurseForge affiche « fichier invalide »</summary><p>Vérifie que tu as choisi le ZIP complet du modpack sans le décompresser. Un dossier ou un ZIP recréé manuellement ne peut pas être importé.</p></details>
      <details><summary>Le jeu ferme avec une erreur de mémoire</summary><p>Vérifie la mémoire allouée dans CurseForge. Essaie 8&nbsp;192 Mo sur une machine de 16 Go ou plus, puis ferme les applications lourdes avant de relancer.</p></details>
      <details><summary>Le serveur annonce des mods incompatibles</summary><p>Tu utilises probablement un ancien profil ou un profil modifié. Réimporte la dernière archive indiquée en haut de cette page sans ajouter ni mettre à jour de mod.</p></details>
      <details><summary>Ça plante encore</summary><p>Ne réinstalle pas tout au hasard. Envoie à un administrateur le fichier <strong>latest.log</strong> du profil CurseForge ainsi qu’une capture du message d’erreur.</p></details>
    </div>
  `;
})();
