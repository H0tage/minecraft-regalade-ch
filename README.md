# Site Régalade Minecraft

Site statique de présentation et de documentation du serveur Régalade.

## Principe architectural

Le dossier `src` est l’unique source applicative :

```text
src/
  index.html          gabarit général et ordre de chargement
  pages/              contenu HTML d’une page principale par fichier
  styles/
    core/             fondations et composants partagés
    components/       composants autonomes
    pages/            styles propres aux pages principales
    tutorials/        styles propres aux tutoriels
  scripts/
    core/             navigation et comportements communs
    data/             catalogue et métadonnées des mods
    pages/            comportements des pages principales
    tutorials/        contenu et interactions des tutoriels
```

Les répertoires `styles`, `js`, `dist` et le fichier `index.html` à la racine sont des sorties générées. Ils ne doivent jamais être modifiés directement.

`assets` contient les images et téléchargements statiques. `scripts` contient uniquement les outils de build, de contrôle et de maintenance.

## Commandes

```powershell
npm run build
npm run verify
npm run qa
npm run serve
npm run locate -- "fragment du texte"
```

Le build assemble les inclusions HTML, copie les styles et scripts, ajoute les versions de cache et produit simultanément la sortie GitHub Pages à la racine ainsi que `dist` pour l’hébergement Sites.

La vérification refuse notamment :

- le CSS incorporé dans le HTML ;
- le CSS créé dynamiquement en JavaScript ;
- les références locales absentes ;
- les identifiants HTML dupliqués ;
- les scripts invalides ;
- une sortie de déploiement désynchronisée.

## Modifier le contenu

Une page principale se trouve dans `src/pages`. Les tutoriels générés par JavaScript se trouvent dans `src/scripts/tutorials`.

Pour localiser rapidement une phrase :

```powershell
npm run locate -- "début de la phrase"
```

Après toute modification, lancer `npm run build` puis `npm run verify`. Une modification structurelle doit également être contrôlée avec `npm run qa` et une prévisualisation ciblée.
