# Argent et échanges

> Copie éditoriale locale du contenu actuellement présent sur le site.
> Tu peux modifier les titres et paragraphes directement dans ce fichier, puis demander à Codex de synchroniser ces changements avec le site.
> Ne relance pas le script d’export après avoir commencé tes corrections : il remplacerait cette copie par le texte du site.

## Source actuelle : src/content/tutorials/economy.html

Premières pièces

Banque et carte

Commercer

De la première ressource à la première pièce

# Faire entrer de l’argent dans le monde

Une récolte, une prise de pêche ou un petit boulot peut devenir de la monnaie. Ce premier parcours montre d’où
viennent les pièces, comment réaliser une vente volontaire et comment vérifier les prix sans apprendre un
catalogue par cœur.

[Illustration : Sprocket]

[Illustration : Cog]

[Illustration : Crown]

01

La règle essentielle

## Création et circulation de l’argent

Le serveur peut créer des pièces pour certaines actions. Une Boutique, elle, ne crée rien : elle transmet
simplement l’argent d’un joueur à un autre.

**Progrès** Vanilla et Create

+

**Missions** Petits boulots hebdomadaires

+

**Selling Bin** Vente de ressources compatibles

→

**PiècesÀ garder ou à échanger

### Créer de la monnaie

Les progrès, les missions, le temps de jeu et le Selling Bin injectent de nouvelles pièces dans le monde.

### Faire circuler la monnaie

Un paiement direct ou une Boutique déplace des pièces déjà existantes entre les joueurs.

02

L’outil de départ

## Fabriquer un Selling Bin

Le Selling Bin rachète certains objets et crée les pièces correspondantes. Ce n’est pas une boutique destinée
aux autres joueurs.

[Illustration : Selling Bin]

### Selling Bin

3 Carpets · 1 Barrel · 5 Wooden Slabs

CarpetCarpetCarpet
SlabBarrelSlab SlabSlabSlab

### Consulter les ventes disponibles

- Cherche le **Selling Bin** dans JEI

- Place le curseur sur son icône

- Appuie sur `U` pour afficher ses utilisations

- JEI montre les objets rachetés et les monnaies proposées

La liste vient directement du pack : elle reste correcte même si un prix est modifié plus tard.

03

Première action

## Vendre un seul objet

**1**

### Ouvre le bac

Pose le Selling Bin dans un endroit sûr puis fais un clic droit.

**2**

### Dépose une unité

Commence volontairement petit. Tout objet n’est pas nécessairement vendable.

**3**

### Lis le prix

Maintiens `Maj` en survolant l’objet pour afficher sa valeur.

**4**

### Choisis la monnaie

Sélectionne une pièce ou **Highest Possible** pour obtenir la meilleure dénomination
possible.

**5**

### Confirme avec Sell

L’objet est consommé et sa valeur est convertie en pièces.

**6**

### Vérifie le résultat

Récupère le paiement. Un éventuel reste de valeur demeure dans le bac et n’est pas perdu.

**Plus tard seulement**Sell All** vend tout le contenu compatible. **Auto-Sell** vend automatiquement ce qui entre dans le
bac : ne l’active qu’après avoir vérifié ton installation.

04

Six dénominations

## Lire la valeur des pièces

Toutes les pièces représentent la même monnaie. Une grosse pièce évite simplement de transporter une pile
entière de petites pièces.

[Illustration : Spur]
**Spur** 1

× 8

[Illustration : Bevel]
**Bevel** 8

× 2

[Illustration : Sprocket]
**Sprocket** 16

× 4

[Illustration : Cog]
**Cog** 64

× 8

[Illustration : Crown]
**Crown** 512

× 8

[Illustration : Sun]
**Sun** 4 096

**À ce stadeTu sais faire apparaître tes premières pièces, vérifier les objets vendables et comprendre la valeur reçue.
La banque n’est pas nécessaire pour commencer.

05

Sans obligation

## Progrès et missions hebdomadaires

### En avançant normalement

Certains progrès Vanilla et Create donnent automatiquement des pièces : **1 Sprocket** pour un
progrès ordinaire, **1 Cog** pour un objectif important et **1 Crown** pour un
défi.

### En consultant les missions

Tape `/missions`, parcours les six propositions personnelles et choisis seulement celles qui
correspondent à ce que tu voulais déjà faire.

**Dimanche · 00:00** Six missions disponibles pendant la semaine**Dimanche suivant · 00:00**

Les missions sont renouvelées à minuit, heure suisse. Si tu es absent, le renouvellement est appliqué à ta
prochaine connexion.

Des pièces physiques au compte bancaire

# Déposer, retirer et payer par carte

Quelques pièces dans un coffre suffisent au début. Lorsque ton atelier sait produire des Precision Mechanisms,
tu peux construire une véritable infrastructure bancaire.

[Illustration : Terminal bancaire]

[Illustration : Carte bancaire]

01

Trois éléments

## Ce que conserve réellement la banque

**Pièces physiquesDes objets transportables

→ dépôt →

**Compte bancaireUne valeur enregistrée

← liée à ←

**Carte bancaireUne clé vers le compte

**À retenirLa carte ne contient pas l’argent. Le solde reste sur le compte même si la carte est perdue ou
détruite.

02

L’infrastructure

## Fabriquer le Terminal bancaire

[Illustration : Terminal bancaire]
1 Precision Mechanism+1 Industrial Iron Block+1 Electron Tube→**1 Terminal bancaire**

**1**

### Fabrique et pose le Terminal

La recette est sans forme : les trois composants peuvent être placés n’importe où dans l’établi.

**2**

### Ouvre-le

Ton compte personnel est créé automatiquement au premier accès.

**3**

### Vérifie le compte

L’interface doit afficher ton nom et ton solde actuel. Aucun formulaire ni commande n’est nécessaire.

03

Le moyen de paiement

## Fabriquer et lier une Carte bancaire

[Illustration : Carte bancaire rouge]
1 Precision Mechanism+1 Iron Sheet+1 Dye→**1 Carte bancaire**

**1**

### Choisis sa couleur

La teinture détermine seulement l’apparence de la carte.

**2**

### Prends-la en main

Fais un clic droit avec la carte vide pour la lier à ton compte personnel.

**3**

### Contrôle l’infobulle

La carte doit passer de **Vide** à **Liée** et afficher le compte associé.

**Maj + clic droit** efface l’association de la carte que tu tiens.

04

Aller-retour

## Déposer puis retirer une pièce

Déposer

- Ouvre le Terminal et note ton solde

- Place une pièce dans l’emplacement de dépôt à droite

- Vérifie que la pièce disparaît

- Contrôle l’augmentation exacte du solde

Maj + clic sur une pièce l’envoie directement vers le dépôt.

Retirer

- Choisis l’une des six dénominations

- Prends la pièce dans la sortie correspondante

- Vérifie son apparition dans ton inventaire

- Contrôle la diminution exacte du solde

Le retrait est possible tant que le compte possède la valeur nécessaire.

05

Paiement

## Utiliser sa carte dans une Boutique

**Carte liée en main**

+

**Clic droit sur la Boutique**

→

**Objet reçu** Solde débité automatiquement

### Sans carte

La Boutique prélève les pièces compatibles que tu transportes.

### Si tu perds ta carte

L’argent reste sur le compte et un joueur non autorisé ne peut pas utiliser ta carte personnelle. Tu peux
simplement en fabriquer et en lier une nouvelle.

Les Authorized Cards permettent de déléguer des accès à des sous-comptes. C’est une fonction avancée,
volontairement laissée hors de ce parcours.

Du surplus au commerce entre joueurs

# Ouvrir une première Boutique

Le Selling Bin injecte de l’argent contre des ressources configurées par le serveur. Une Boutique fait autre
chose : elle permet à un joueur de vendre ses propres produits aux autres, même lorsqu’il est absent.

[Illustration : Boutique Numismatics]

[Illustration : Sprocket]

01

Deux machines, deux rôles

## Selling Bin ou Boutique

### Selling Bin

Le serveur rachète certains objets et crée de nouvelles pièces. Il sert à faire entrer de l’argent dans
l’économie.

### Boutique

Un joueur propose un produit et reçoit l’argent d’un autre joueur. Elle fait circuler la monnaie existante.

02

Le bloc de commerce

## Fabriquer et poser la Boutique

Framed Glass↓Brass Casing↓Electron Tube→** 1 Boutique**

**Avant de la configurerChoisis un produit simple, la quantité vendue à chaque transaction, un prix lisible et prépare un petit
stock.

03

Côté vendeur

## Configurer une vente

**1**

### Ouvre les réglages

Le propriétaire fait **Maj + clic droit** sur la Boutique.

**2**

### Choisis Sell / Vente

Ce mode distribue tes produits contre le paiement défini.

**3**

### Définis le produit

Place un objet témoin dans le filtre et règle la quantité par transaction.

**4**

### Fixe le prix

Utilise les six contrôles de monnaie pour composer le montant souhaité.

**5**

### Ajoute le stock

La Boutique possède neuf emplacements internes pour les produits.

**6**

### Choisis où va l’argent

Sans carte, les pièces restent dans la Boutique. Avec une carte liée insérée, les recettes partent
directement sur ton compte.

04

Côté acheteur

## Tester la première transaction

**Produit en stock** Quantité et prix affichés

→

**Clic droit** Une transaction

→

**Objet à l’acheteur** Paiement au vendeur

**1**

### Note l’état initial

Le vendeur contrôle son stock et son argent avant le test.

**2**

### Achète une fois

L’acheteur paie avec sa carte tenue en main ou avec ses pièces.

**3**

### Vérifie les deux côtés

L’objet doit arriver chez l’acheteur, le stock baisser et le vendeur recevoir le paiement.

En étant accroupi pendant le clic droit, l’acheteur peut effectuer plusieurs transactions, jusqu’à la limite
d’une pile et des ressources disponibles.

05

Propriété et confiance

## Protéger et réapprovisionner le commerce

### Propriétaire

La Boutique appartient au joueur qui l’a posée. Les autres joueurs ne peuvent pas modifier librement ses
réglages.

### Liste de confiance

Le propriétaire peut autoriser d’autres joueurs depuis le bouton prévu dans l’interface.

### Réapprovisionnement

Remplis les neuf emplacements internes. Une rupture de stock empêche simplement les nouvelles ventes.

06

Optionnel

## Faire racheter des objets par la Boutique

Le mode **Buy / Achat** inverse la transaction : la Boutique reçoit l’objet tenu par le joueur et
lui verse le prix configuré.

**Objet tenu par le joueur**

→

**Boutique en mode BuyStockage libre + fonds disponibles

→

**Paiement au joueur**

**Les deux conditionsLa Boutique doit posséder assez d’argent pour payer et assez de place pour recevoir les objets. Commence par
maîtriser le mode Vente avant d’utiliser celui-ci.
