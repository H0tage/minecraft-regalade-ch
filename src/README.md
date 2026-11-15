# Sources du site

Ce dossier est la source canonique du site.

- `index.html` définit le document général, les feuilles de style et l’ordre des scripts.
- `pages` contient une page principale par fichier, assemblée avec la syntaxe `<!-- @include ... -->`.
- `styles` sépare les fondations, les composants, les pages et les tutoriels.
- `scripts` sépare le cœur de l’application, les données, les pages et les tutoriels.

Les fichiers publics de la racine et de `dist` sont reconstruits par `npm run build`. Toute correction faite directement dans une sortie générée sera remplacée au build suivant.
