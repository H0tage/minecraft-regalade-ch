# Workflow du site Régalade

## Règle fondamentale

Le dossier `src` est la seule source applicative. `dist` est une sortie temporaire entièrement reconstruite par `npm run build` et ne doit jamais être modifiée manuellement.

## Où modifier quoi

```text
src/pages/       structure des pages principales
src/content/     textes et structure détaillée des guides et tutoriels
src/data/        données structurées, notamment mods.json
src/styles/      apparence, rangée par composants, pages et tutoriels
src/scripts/     interactions, navigation et rendu des données
assets/          images et fichiers à télécharger
```

Pour trouver une phrase :

```powershell
npm run locate -- "fragment reconnaissable du texte"
```

La commande indique le fichier, la ligne et un extrait.

Les gros tutoriels sont découpés par sous-onglet. Leur fichier principal ne contient que la navigation et des
inclusions, tandis que le contenu se trouve dans le dossier du même nom. Exemple :

```text
src/content/tutorials/stargates.html
src/content/tutorials/stargates/general.html
src/content/tutorials/stargates/first-gate.html
src/content/tutorials/stargates/reference.html
```

## 1. Contenu express

Utiliser ce parcours pour corriger un texte, un titre, un lien, un chiffre ou une information déjà présente, sans modifier sa structure ni son apparence.

1. Localiser la source dans `src/pages` ou `src/content`.
2. Modifier uniquement le fichier concerné.
3. Lancer `node scripts/site-workflow.mjs express`.
4. Examiner le diff.
5. Faire un seul commit et un seul push.

Ce parcours ne nécessite ni navigateur ni inspection générale du site.

## 2. Modification structurelle

Utiliser ce parcours pour créer, déplacer ou retirer une section, modifier le CSS ou le responsive, ajouter une interaction, changer une navigation, ajouter un asset ou refondre un tutoriel.

1. Identifier les fichiers source et leurs dépendances.
2. Modifier les sources.
3. Lancer `npm run qa`.
4. Démarrer `npm run serve`.
5. Lancer `npm run audit:runtime`.
6. Inspecter visuellement uniquement les pages touchées si la modification a un impact graphique.
7. Examiner le diff, puis faire un seul commit et un seul push.

## Build et contrôles

`npm run qa` vérifie le formatage, le CSS, la syntaxe JavaScript, les références locales, les identifiants HTML, les règles éditoriales et la cohérence de la sortie. Il produit :

```text
dist/
  index.html
  styles/site.css
  js/site.js
  data/
  assets/
```

`npm run audit:runtime` ouvre le site local dans un navigateur sans interface et contrôle les sept pages aux largeurs 390, 800 et 1366 pixels.
Le déploiement GitHub exécute également cet audit dans Chromium avant toute publication.

## Contenus textuels

`contenus-textuels` est une copie éditoriale lisible. Elle peut servir à préparer une réécriture et à la transmettre à Codex. La source technique reste dans `src`. La commande `npm run export-content` régénère ces copies depuis le site et remplace donc leur contenu actuel.

## Garde-fous permanents

Les contrôles refusent notamment :

- du CSS incorporé dans le HTML ;
- une feuille de style créée dynamiquement en JavaScript ;
- une inclusion HTML non résolue ;
- une référence locale absente ;
- un identifiant HTML dupliqué ;
- un script invalide ;
- un fichier CSS ou JavaScript oublié dans le manifest du build ;
- une entrée de mod incomplète, dupliquée ou dotée d’une URL invalide ;
- un sélecteur CSS dupliqué dans une même feuille ;
- le caractère éditorial interdit par le projet.

Le catalogue des mods possède une seule source, `src/data/mods.json`. Les contenus longs sont du HTML statique dans `src/content`, pas des gabarits cachés dans du JavaScript.
