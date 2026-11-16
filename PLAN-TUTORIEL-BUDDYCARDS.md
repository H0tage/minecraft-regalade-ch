# Tutoriel Buddycards : squelette fondé sur le pack actuel

## Statut

Le tutoriel **Collectionner les Buddycards** est intégré au site.

Les sources se trouvent dans `src/content/tutorials/buddycards.html`, `src/content/tutorials/buddycards/` et `src/styles/tutorials/buddycards.css`. Ce document conserve le périmètre fonctionnel, les recettes vérifiées et les choix éditoriaux du tutoriel.

## Décision de périmètre

Sur Régalade, Buddycards est un système de collection, d'exploration, d'échange, de classement et d'exposition.

Les combats de cartes ne sont pas disponibles dans la version 1.21.1 retenue pour le serveur. Aucun addon ne sera ajouté pour les restaurer. Le manuel de combat et les Playmats encore présents dans certains assets sont des vestiges d'anciennes versions et ne feront pas partie du parcours pédagogique.

La recherche historique est conservée séparément dans le fichier local `BUDDYCARDS-COMBAT-ARCHIVE.md`, à la racine du projet Régalade.

## État réel des mods installés

| Mod | Version | Contenu vérifié |
| --- | --- | --- |
| Buddycards | 5.2.1 | Collections Base, Cave, Nether et End, packs, binders, présentoirs, grading et progression Buddysteel |
| Create Buddycards | 2.0.4 | 36 cartes Create et chaîne de recyclage des cartes et packs avec les machines Create |
| Delightful Buddycards | 2.1.0 | 18 cartes, Buddybeans, recettes Farmer's Delight et fabrication des packs Delightful |

### Nombre de cartes par collection

| Collection | Cartes numérotées |
| --- | ---: |
| Base | 36 |
| Cave | 27 |
| Nether | 27 |
| End | 27 |
| Create | 36 |
| Delightful | 18 |
| **Total** | **171** |

Ce total compte les cartes différentes. Les variantes brillantes et les différents grades ne sont pas ajoutés comme de nouvelles cartes numérotées.

## Intention pédagogique

Le joueur doit comprendre :

1. où trouver ses premiers packs ;
2. comment reconnaître la collection, le numéro, la rareté et les variantes d'une carte ;
3. comment classer les cartes dans les binders ;
4. quoi faire des doubles ;
5. comment fabriquer les packs Create et Delightful ;
6. comment exposer, échanger et compléter une collection ;
7. à quoi servent ensuite le grading, les médailles et la progression Buddysteel.

Le parcours doit commencer par une carte trouvée en exploration, puis élargir progressivement vers les deux chaînes de fabrication ajoutées par les addons.

## Proposition d'introduction

Au début, tu trouves un petit paquet dans un coffre, tu l'ouvres et quelques cartes finissent dans ton inventaire. Un peu plus tard, tu commences à comparer les numéros, à garder les brillantes de côté et à construire un mur entier pour exposer une collection que tu n'avais absolument pas prévu de commencer.

Buddycards ajoute plusieurs séries de cartes réparties dans les différents mondes de Minecraft. Certaines se découvrent en explorant, tandis que les collections Create et Delightful possèdent leurs propres chaînes de fabrication. Les doubles peuvent être échangés, exposés, classés ou transformés pour produire de nouveaux packs.

Ce guide commencera avec le premier paquet trouvé dans un coffre. Il expliquera ensuite comment ranger les cartes, repérer ce qu'il manque et utiliser Create ou Farmer's Delight pour poursuivre les collections spécialisées.

## Boucle générale à représenter

```text
Explorer, recycler ou cultiver
              ↓
         Obtenir des packs
              ↓
         Ouvrir les packs
              ↓
   Garder, classer et exposer
              ↓
 Échanger ou transformer les doubles
              ↓
      Compléter les collections
```

## Sous-onglet 1 : Comprendre la collection

### Objectif

Donner immédiatement la logique générale du mod et les informations utiles pour lire une carte.

### Contenu

1. Présenter les six collections disponibles sur le serveur.
2. Expliquer le numéro de carte, la collection et la rareté.
3. Expliquer la différence entre une carte normale et une variante brillante.
4. Présenter les packs, les Booster Boxes, les binders et les Large Binders.
5. Montrer la boucle générale du mod avec un schéma simple.
6. Signaler clairement l'état de la version actuelle : les cartes se collectionnent et s'échangent, aucun combat de cartes n'est disponible.

### Résultat attendu

Le joueur sait reconnaître ce qu'il vient d'obtenir et comprend pourquoi il doit conserver les cartes et les packs en double.

## Sous-onglet 2 : Trouver ses premières cartes

### Objectif

Guider une première collecte en exploration sans transformer la page en tableau exhaustif de probabilités.

### Sources vérifiées

| Collection | Sources principales |
| --- | --- |
| Base | Mines abandonnées, trésors enfouis, pyramides du désert, épaves, donjons, maisons de village et coffres bonus |
| Cave | Mines abandonnées et cités antiques |
| Nether | Bastions, portails en ruine, forteresses du Nether et troc avec les Piglins |
| End | Coffres des cités de l'End |
| Create | Packs fabriqués avec la chaîne de recyclage Create |
| Delightful | Packs cuisinés avec Buddybeans et Farmer's Delight |

### Déroulé

1. Trouver un pack dans un coffre d'exploration.
2. Ouvrir le pack et lire les cartes obtenues.
3. Placer les premières cartes dans le binder correspondant.
4. Conserver les doubles dans un stockage séparé.
5. Rappeler la règle Lootr : le contenu est personnel à chaque joueur, le coffre reste donc dans la structure après ouverture.

### Résultat attendu

Le joueur possède ses premières cartes rangées et sait où chercher les autres collections principales.

## Sous-onglet 3 : Ranger, noter et exposer

### Objectif

Transformer les cartes accumulées en une collection lisible.

### Contenu

1. Fabriquer le binder adapté à une collection.
2. Utiliser le Large Binder lorsque la collection et ses variantes prennent davantage de place.
3. Lire les emplacements vides pour repérer les numéros manquants.
4. Utiliser les Card Displays et Card Stands pour exposer les cartes choisies.
5. Présenter les Grading Sleeves, les Golden Grading Sleeves et le Grader.
6. Proposer une organisation simple : un binder par collection, un stockage pour les doubles et une zone d'exposition.

### Point à vérifier avant rédaction finale

Le comportement exact du grading et du Buddycard Scanner doit être validé avant de décrire chaque clic ou chaque valeur. Le squelette confirme l'existence de ces objets, mais ne leur attribue pas encore un fonctionnement détaillé.

## Sous-onglet 4 : Recycler avec Create

### Objectif

Utiliser les doubles pour fabriquer les packs de la collection Create.

### Chaîne réelle vérifiée dans le JAR

```text
Carte en double
    ↓ Crushing Wheels
1 Shredded Buddycard + 20 % de chance d'un second

Pack non ouvert
    ↓ Crushing Wheels
6 Shredded Buddycards + 50 % de chance d'un septième

2 Shredded Buddycards + 125 mB d'eau
    ↓ Mechanical Mixer et Basin
1 Recycled Buddycard

Copper Sheet
    ↓ Sequenced Assembly, 4 cycles
Deploying d'une Recycled Buddycard
Filling avec 125 mB de lave
    ↓
1 Create Buddycard Pack
```

La Sequenced Assembly consomme au total quatre Recycled Buddycards et 500 mB de lave pour un pack, puisque les deux opérations sont répétées quatre fois.

### Déroulé pédagogique

1. Choisir des doubles à recycler.
2. Tester une carte dans les Crushing Wheels.
3. Mélanger les fragments avec l'eau dans un Basin.
4. Construire la petite ligne de Sequenced Assembly.
5. Ouvrir le premier Create Buddycard Pack.
6. Ranger les cartes dans le Create Binder.

### Résultat attendu

Le joueur comprend que les doubles deviennent une ressource et sait produire les 36 cartes de la collection Create.

## Sous-onglet 5 : Cultiver les Buddybeans

### Objectif

Fabriquer les packs Delightful avec Farmer's Delight.

### Chaîne réelle vérifiée dans le JAR

```text
Wheat Seeds + 3 Buddysteel Nuggets
    ↓ Crafting
Buddybeans

Buddybeans
    ↓ Cutting Board et Knife
2 Diced Buddybeans

4 Diced Buddybeans
    ↓ Cooking Pot
1 Buddybean Paste

Carte en double
    ↓ Cutting Board et Knife
1 Diced Buddycards

3 Diced Buddycards + 1 Sugar + 2 Buddybean Paste
    ↓ Cooking Pot, avec 1 Canvas comme contenant
1 Delightful Buddycard Pack
```

### Déroulé pédagogique

1. Fabriquer les premières Buddybeans.
2. Montrer leur culture et leur récolte.
3. Les découper puis préparer la Buddybean Paste.
4. Découper trois cartes en double.
5. Cuire le premier Delightful Buddycard Pack.
6. Ranger les cartes dans le Delightful Binder.

### Résultat attendu

Le joueur sait relier agriculture, cuisine et cartes en double pour obtenir les 18 cartes Delightful.

## Sous-onglet 6 : Compléter ses collections

### Objectif

Donner une direction aux joueurs qui ont dépassé le stade des premiers packs.

### Contenu

1. Utiliser les binders pour dresser la liste des numéros manquants.
2. Échanger les doubles entre joueurs.
3. Chercher les variantes brillantes et améliorer les grades des cartes favorites.
4. Construire une salle de collection avec des Displays et des Stands.
5. Présenter les médailles propres à chaque set.
6. Introduire le Buddysteel Charger, les matériaux Luminis et Zylex, le Scanner, les outils et l'armure comme progression avancée du mod.

### Point de prudence

Les recettes de médailles et les améliorations Buddysteel existent dans le pack. Leur fonctionnement exact doit être expliqué à partir des recettes et du comportement en jeu au moment de rédiger cette page. Le tutoriel ne doit pas promettre une récompense automatique liée à la simple complétion d'un binder.

## Contenus volontairement exclus du tutoriel

- construction de decks ;
- coût, puissance et capacités de combat ;
- Playmats présentés comme matériel jouable ;
- ancien manuel de combat Patchouli ;
- addon Buddy Battles ;
- statistiques inventées pour Create Buddycards ou Delightful Buddycards.

## Contrôles à effectuer avant l'intégration au site

1. Tester l'ouverture d'un pack et le rangement automatique ou manuel dans chaque binder.
2. Vérifier le nombre de cartes obtenu par pack.
3. Vérifier le fonctionnement exact des variantes brillantes et des grades.
4. Tester le Grader et le Buddycard Scanner.
5. Confirmer la culture et le rendement des Buddybeans.
6. Tester une chaîne Create complète avec ses consommations réelles.
7. Vérifier la fabrication et l'amélioration d'une médaille.
8. Choisir uniquement des icônes immédiatement reconnaissables pour les futures pages.
