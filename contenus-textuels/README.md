# Contenus textuels du site Régalade

Ce dossier est la **copie éditoriale lisible** du site. Il sépare les textes du code JavaScript, du HTML technique et du CSS.

## Comment l’utiliser

1. Ouvre le fichier correspondant à la page que tu veux modifier.
2. Change librement un titre, un paragraphe ou une section entière.
3. Enregistre le fichier.
4. Dis simplement à Codex : **« Synchronise mes modifications textuelles avec le site »**.

Codex comparera alors ta version au contenu actuellement affiché, localisera le fichier HTML correspondant dans `src/content` ou `src/pages`, intégrera les changements et lancera le workflow adapté.

## Organisation

- `01-pages-principales.md` (accueil, règlement, état du serveur, inscription et autres textes présents directement dans la page principale).
- `02-installation-et-connexion.md` (installation du modpack et informations de connexion).
- `03-argent-et-echanges.md` (monnaie, banque, carte bancaire, ventes et boutiques).
- `04-create.md` (description générale de Create et tutoriel de la première usine).
- `05-big-cannons.md` (fonctionnement général, premier autocanon, manuel et recettes).
- `06-porte-des-etoiles.md` (présentation, première porte et chaîne industrielle).

## Règle éditoriale permanente

Ne jamais utiliser de tiret cadratin. Lorsqu’une précision doit être isolée dans une phrase, utiliser des parenthèses.

## Important

- Ces fichiers ne sont **pas lus directement par le navigateur**. Tu peux donc les modifier sans risquer de casser la mise en page du site.
- Ils servent de référence éditoriale. Le site utilise les fichiers HTML statiques rangés dans `src/content` et `src/pages`.
- Le dossier `dist` n’est jamais modifié manuellement. Il est entièrement régénéré après chaque changement.
- Les noms d’objets, valeurs techniques, recettes et quantités doivent rester exacts. Si tu modifies seulement le ton ou la formulation, Codex peut synchroniser directement.
- Le script `scripts/export-editorial-texts.mjs` a servi à créer la première copie. Ne le relance pas après tes corrections, sauf si tu souhaites volontairement repartir du contenu actuellement publié.
