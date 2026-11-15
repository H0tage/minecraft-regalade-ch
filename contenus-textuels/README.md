# Contenus textuels du site Régalade

Ce dossier est la **copie éditoriale lisible** du site. Il sépare les textes du code JavaScript, du HTML technique et du CSS.

## Comment l’utiliser

1. Ouvre le fichier correspondant à la page que tu veux modifier.
2. Change librement un titre, un paragraphe ou une section entière.
3. Enregistre le fichier.
4. Dis simplement à Codex : **« Synchronise mes modifications textuelles avec le site »**.

Codex comparera alors ta version au contenu actuellement affiché, intégrera les changements dans les fichiers techniques, vérifiera le rendu et publiera le site.

## Organisation

- `01-pages-principales.md` — accueil, règlement, état du serveur, inscription et autres textes présents directement dans la page principale.
- `02-installation-et-connexion.md` — installation du modpack et informations de connexion.
- `03-argent-et-echanges.md` — monnaie, banque, carte bancaire, ventes et boutiques.
- `04-create.md` — description générale de Create et tutoriel de la première usine.
- `05-big-cannons.md` — fonctionnement général, premier autocanon, manuel et recettes.
- `06-porte-des-etoiles.md` — présentation, première porte et chaîne industrielle.

## Important

- Ces fichiers ne sont **pas lus directement par le navigateur**. Tu peux donc les modifier sans risquer de casser la mise en page du site.
- Ils servent de référence éditoriale. Le site continue de fonctionner avec ses fichiers HTML et JavaScript actuels.
- Les noms d’objets, valeurs techniques, recettes et quantités doivent rester exacts. Si tu modifies seulement le ton ou la formulation, Codex peut synchroniser directement.
- Le script `scripts/export-editorial-texts.mjs` a servi à créer la première copie. Ne le relance pas après tes corrections, sauf si tu souhaites volontairement repartir du contenu actuellement publié.
