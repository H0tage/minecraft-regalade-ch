# Sources du site

Ce dossier est la source canonique du site.

- `index.html` définit le document général et inclut les pages.
- `pages` contient les pages principales et les enveloppes de navigation.
- `content` contient le HTML détaillé des tutoriels et guides. Chaque gros tutoriel possède un petit fichier
  d’assemblage et un fichier autonome par sous-onglet.
- `data` contient les données structurées, dont l’unique catalogue des mods.
- `styles` sépare le socle, les composants, les pages et les tutoriels. Les feuilles longues sont découpées par
  fonctionnalité, dans l’ordre exact de leur cascade.
- `scripts` contient uniquement les comportements et le rendu des données.

Le build produit un seul fichier CSS et un seul fichier JavaScript dans `dist`. Toute correction faite directement dans `dist` sera remplacée au build suivant.
