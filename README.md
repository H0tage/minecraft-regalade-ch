# Site Régalade Minecraft

Site statique de présentation et de documentation du serveur Régalade.

## Architecture

`src` est l’unique source du site :

```text
src/
  index.html          document général et ordre des pages
  pages/              pages principales et enveloppes de navigation
  content/            contenu HTML détaillé, découpé par tutoriel et sous-onglet
  data/               données structurées, dont le catalogue des mods
  styles/             styles rangés par rôle et par fonctionnalité
  scripts/            comportements rangés par rôle et par fonctionnalité
```

Le build assemble les inclusions HTML, réunit les feuilles de style dans un seul fichier, réunit les scripts dans un seul fichier et produit exclusivement `dist`. Le navigateur reçoit donc un document HTML, un bundle CSS, un bundle JavaScript, les données et les assets.

`assets` contient les images et téléchargements statiques. `scripts` contient les outils de build, de contrôle et de maintenance. `contenus-textuels` fournit une copie éditoriale lisible, utile pour relire ou préparer des changements de texte.

## Commandes

```powershell
npm ci
npm run build
npm run verify
npm run qa
npm run serve
npm run audit:runtime
npm run locate -- "fragment du texte"
```

## Modifier un contenu

Les pages principales se trouvent dans `src/pages`. Les textes longs des tutoriels et guides se trouvent dans
`src/content`. Les fichiers `src/content/tutorials/*.html` assemblent les sous-onglets rangés dans les dossiers du même
nom. Le catalogue des mods se trouve dans `src/data/mods.json`.

Pour localiser une phrase :

```powershell
npm run locate -- "début de la phrase"
```

Une correction purement textuelle utilise le workflow express. Une modification de structure, de style ou de comportement utilise le workflow structurel décrit dans `WORKFLOW-SITE.md`.

## Déploiement

GitHub Actions lance les contrôles, construit `dist` et publie ce répertoire sur GitHub Pages. Aucun fichier généré n’est versionné. `.openai/hosting.json` utilise également `dist`.
