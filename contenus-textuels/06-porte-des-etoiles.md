# Porte des étoiles

> Copie éditoriale locale du contenu actuellement présent sur le site.
> Tu peux modifier les titres et paragraphes directement dans ce fichier, puis demander à Codex de synchroniser ces changements avec le site.
> Ne relance pas le script d’export après avoir commencé tes corrections : il remplacerait cette copie par le texte du site.

## Source actuelle : src/content/tutorials/stargates.html

Fonctionnement général

Première porte

Référence technique

Fonctionnement général

# Comprendre une porte avant de construire l’usine

Une installation complète repose sur quatre éléments : la porte, son clavier de composition, une interface
énergétique et un stock d’électricité externe.

Stargate Journey 0.6.54 · règles énergétiques Régalade

A

Les quatre éléments

## Qui fait quoi ?

[Illustration : Classic Stargate Base Block]

**Stargate** Crée le passage. Sa structure formée contient l’adresse et son tampon de 1,36 MFE.

[Illustration : Classic DHD]

**DHDPermet de saisir une adresse, d’ouvrir la connexion et de la fermer. Il doit lui aussi recevoir de
l’énergie.

[Illustration : Basic Interface]

**Basic InterfaceTransfère le FE du réseau externe vers la porte. Elle n’est pas la batterie principale.

FE

**Production et accumulateursFournissent le million de FE initial et les 4 500 FE/t nécessaires au maintien.

**Adresse** →**DHD** →**Porte** ←**Interface** ←**Stock FE**

B

Énergie

## Une ouverture est un événement coûteux

**1 MFE** au moment de l’ouverture

**4 500 FE/t** pendant le maintien

**6,4 MFE** pour 60 secondes

**1,36 MFE** dans la porte elle-même

**Deux stratégies restent valables :** une petite production avec de gros accumulateurs pour voyager rarement,
ou une centrale assez puissante pour soutenir la porte presque en continu.

C

Adresses

## Chaque porte possède sa propre destination

**1 · Lire** Clic droit sur une porte avec la Create Wrench : son adresse apparaît dans le chat.

→

**2 · Noter** Conserve l’ordre exact des symboles ou des nombres.

→

**3 · ComposerMaintiens Maj pour voir les numéros, saisis l’adresse puis presse le bouton central : il ajoute le Point
d’origine et lance l’appel.

Construire une porte ne suffit pas à créer une destination connue : il faut également obtenir l’adresse d’une
porte sauvage, du spawn ou d’un autre joueur.

D

Voyage

## Attendre la stabilisation, traverser, puis fermer

-
**Reste hors du plan de la porte pendant l’ouverture.Conserve au moins sept blocs libres devant elle : le vortex initial détruit les blocs, objets et entités
placés dans cet axe.

-
**Traverse depuis la face avant.Le passage est bidirectionnel après stabilisation, mais entrer par l’arrière reste mortel.

-
**Ferme depuis le DHD d’arrivée.Sur Régalade, les deux côtés peuvent couper la connexion afin d’économiser l’énergie.

De l’atelier expérimental au premier voyage

# Construire sa première porte

Ce parcours va des matières premières au premier voyage : prototype, production en série, composants, montage et
alimentation.

Première installation : 21 fournées · 168 Cryostabilized Naquadah Crystals · 64 Naquadah Plates

**Prototype** →**Raffinerie** →**Naquadah Plates et Crystals** →**24 blocs** →**Énergie** →**Premier voyage**

01

Le résultat final

## Préparer l’installation complète

L’installation comprend une **Classic Stargate formée** , un **DHD** , une
**Basic Interface** et une alimentation FE externe.

**Structure1 Classic Stargate Base Block + 14 Classic Stargate Ring Blocks + 9 Classic Stargate Chevron Blocks.

**Commande** 1 DHD placé à portée de la porte.

**Énergie** 1 Basic Interface reliée aux accumulateurs ou à la centrale.

**Destination** Une adresse valide appartenant à une autre porte.

### Prérequis

NetherBlaze Burner, Blaze Powder, quartz et Cinder Flour

EndUne tête de dragon pour l’activation finale du Naquadah

CreateBrass, Precision Mechanisms, Mechanical Crafters et assemblage séquencé

ÉlectricitéRéseau FE pour les machines et au moins 6,4 MFE disponibles pour un appel complet

02

Carte de l’usine

## Comprendre la chaîne complète

1

**Produire les trois précurseurs** Quantités pour une fournée

16 Amethyst Powder4 Gold Ingots4 Zinc Ingots1 000 mB Awkward Potion

Mechanical Mixer · Basin · Heated Blaze Burner

↓

[Illustration : Crystalline Matrix]
**4 Crystalline Matrices

8 Powdered Obsidian8 Cinder Flour250 mB Lava

Mechanical Press · Basin · Heated Blaze Burner

↓

[Illustration : Refractory Briquette]
**4 Refractory Briquettes

8 Blaze Powder8 Redstone Dust4 Glowstone Dust

Mechanical Mixer · Basin · sans chaleur

↓

[Illustration : Catalytic Flux]
**8 Catalytic Flux4 pour la synthèse · 4 réservés

↓Les trois branches convergent↓

2

**Synthétiser le Naquadah brut** Mechanical Mixer surchauffé

4 Crystalline Matrices+4 Refractory Briquettes+4 Catalytic Flux+250 mB Lava→**Mechanical Mixer
Superheated Blaze Burner** →
[Illustration : Unstable Naquadah Slag]
4 Unstable
Naquadah Slag

↓Raffinage↓

3

**Raffiner les matériaux intermédiairesChaque machine reçoit la matière produite par la précédente

[Illustration : Unstable Naquadah Slag]
**4 Unstable Naquadah Slag→Mechanical Press→
[Illustration : Raw Naquadah Briquette]
**4 Raw Naquadah Briquettes→Bulk Blasting→
[Illustration : Calcined Naquadah]
**4 Calcined Naquadah

[Illustration : Calcined Naquadah]
**4 Calcined NaquadahSortie précédente→Crushing Wheels→
[Illustration : Impure Naquadah Dust]
**8 Impure Naquadah DustLa quantité double ici→Bulk Washing→
[Illustration : Purified Naquadah Granule]
**8 Purified Naquadah Granules

[Illustration : Purified Naquadah Granule]
**8 Purified Naquadah GranulesSortie précédente→Bulk Freezing→
[Illustration : Cryostabilized Naquadah Crystal]
**8 Cryostabilized Naquadah Crystals**

1 fournée→**8 Cryostabilized Naquadah Crystals** × 21**168 Cryostabilized Naquadah Crystals**

4

**Répartir la production** Trois stocks distincts avant toute transformation

**128 Crystals** ↓Métallurgie↓**64 Naquadah PlatesStructure et machines

**33 Crystals** ↓Crystal Bases↓**33 cristaux technologiquesCommande et fonctionnement

**7 Crystals** ↓Naquadah Liquidizer↓**3 500 mB de Liquid NaquadahAlimente le Crystallizer

Voir les principales ressources consommées

**Raffinerie, 21 fournées :** 336 améthystes, 84 or, 84 zinc, 168 obsidiennes, 168 Netherracks, 168 Blaze
Powder, 168 redstones, 84 glowstones, 21 000 mB de potion étrange et environ 21 seaux de lave avec marge.

**Électronique :** 33 améthystes, 75 quartz, 39 diamants, 27 Ender Pearls, 129 redstones et 30 glowstones, en
plus des cristaux réservés.

**Composants Create principaux :** 14 Andesite Casings, 28 Iron Sheets, 40 Sturdy Sheets, 24 Brass Sheets, 26
Electron Tubes, 16 Precision Mechanisms, 11 Redstone Links et 4 Brass Casings.

**Commence par une seule fournée** Produis les vingt suivantes après validation du prototype.

03

Atelier minimal

## Préparer les postes de la première fournée

### Préparation

- Millstone ou Crushing Wheels

- cuve d’eau pour produire la potion

- Mechanical Mixer + Basin

- Blaze Burner chauffé puis surchauffé

### Traitement

- Mechanical Press et Mechanical Saw

- 3 Encased Fans minimum

- eau, feu ou lave, neige poudreuse

- tête de dragon conservée pour plus tard

### Fluides

- 1 petite cuve pour la potion

- 1 cuve séparée pour la lave

- tuyaux et Mechanical Pumps

- Spout pour les recettes de remplissage

### Logistique

- tapis ou Depots entre les postes

- 6 stockages étiquetés

- filtres pour les sorties finales

- lunettes Create pour contrôler les recettes

**Disposition du prototype** Place un stockage à la sortie de chaque branche

Potion + Amethyst Powder + or + zinc→Mixer / Basin / Heated Blaze Burner→Crystalline Matrices

Powdered Obsidian + Cinder Flour + lave→Press / Basin / Heated Blaze Burner→Refractory Briquettes

Blaze Powder + Redstone Dust + Glowstone Dust→Mixer / Basin / sans chaleur→Catalytic Flux

**4 Crystalline Matrices** stock branche 1
**4 Refractory Briquettes** stock branche 2
**4 Catalytic Flux** stock branche 3
**250 mB Lava** cuve de lave

↓

**Mechanical Mixer** Basin**Superheated Blaze Burner**

→

[Illustration : Unstable Naquadah Slag]
**4 Unstable Naquadah Slag

04

Branche 1

## Produire 4 Crystalline Matrices

[Illustration : Crystalline Matrix]

**Entrée d’une fournée** 16 éclats d’améthyste · 4 or · 4 zinc · 1 000 mB de potion étrange

**4 Crystalline Matrices**

1

**Fabriquer l’Awkward Potion** Une cuve séparée pour le liquide

1 000 mB Water+1 Nether Wart

↓

**Mechanical Mixer** Basin**Heated Blaze Burner**

↓

**1 000 mB Awkward Potion** Transférer vers la seconde cuve

Mechanical Pump→1 000 mB

2

**Former les Crystalline Matrices** La potion devient un ingrédient

16 Amethyst Powder+4 Gold Ingots+4 Zinc Ingots+1 000 mB Awkward Potion

↓

**Mechanical Mixer** Basin**Heated Blaze Burner**

↓

[Illustration : Crystalline Matrix]
**4 Crystalline Matrices

### Préparer la potion avec Create

- Injecte 1 000 mB d’eau dans un Basin chauffé.

- Ajoute 1 Nether Wart et mélange avec le Mechanical Mixer.

- Transfère la potion dans le Basin des Crystalline Matrices.

### Mélanger

- Broie les 16 éclats en 16 poudres d’améthyste.

- Place le Basin au-dessus d’un Blaze Burner chauffé.

- Ajoute les poudres, l’or et le zinc.

- Injecte 1 000 mB de potion puis démarre le Mixer.

05

Branches 2 et 3

## Produire 4 Refractory Briquettes et 8 Catalytic Flux

[Illustration : Refractory Briquette]

### 4 Refractory Briquettes

**Mechanical Pressau-dessus du

**Basin**

8 Powdered Obsidian8 Cinder Flour250 mB Lava

chauffé par**Heated Blaze Burner**

Produit : 4 Refractory Briquettes

- Broie 8 obsidiennes en Powdered Obsidian.

- Broie 8 Netherracks dans les Crushing Wheels pour obtenir au moins 8 Cinder Flour.

- Place les 16 poudres dans le Basin.

- Injecte 250 mB de lave et compacte.

[Illustration : Catalytic Flux]

### 8 Catalytic Flux

**Mechanical Mixerau-dessus du

**Basin**

8 Blaze Powder8 Redstone Dust4 Glowstone Dust

avec**Aucune source de chaleur**

Produit : 8 Catalytic Flux

- Place 8 Blaze Powder dans un second Basin.

- Ajoute 8 Redstone Dust et 4 Glowstone Dust.

- Mélange avec le Mechanical Mixer.

- Réserve 4 Catalytic Flux pour la métallurgie.

**4 Catalytic Flux** partent maintenant dans la synthèse

+

**4 Catalytic Flux** sont réservés au futur billet

=**8 Catalytic Flux utilisés sans perte**

06

Convergence

## Produire 4 Unstable Naquadah Slag

**4 Crystalline Matrices** +**4 Refractory Briquettes** +**4 Catalytic Flux** +**250 mB Lava** →**Mechanical Mixer surchauffé** →**4 Unstable Naquadah Slag**

Mechanical Mixerau-dessus duBasinchauffé parSuperheated Blaze Burner

-
**Place le Basin au-dessus d’un Blaze Burner surchauffé.Le niveau chauffé ordinaire ne suffit pas.

-
**Insère les quatre ingrédients et la lave.Vérifie dans les lunettes Create que la recette est reconnue.

- **Laisse travailler environ 60 secondes.**

07

Ligne de raffinage

## Construire la ligne de raffinage

[Illustration : Unstable Naquadah Slag]
**Mechanical Press4 Unstable Naquadah Slag → 4 Raw Naquadah Briquettes

→

[Illustration : Raw Naquadah Briquette]
**Bulk Blastingsouffle à travers feu ou lave → 4 Calcined Naquadah

→

[Illustration : Calcined Naquadah]
**Crushing Wheels4 unités → 8 Impure Naquadah Dust

→

[Illustration : Impure Naquadah Dust]
**Bulk Washingsouffle à travers eau → 8 Purified Naquadah Granules

→

[Illustration : Purified Naquadah Granule]
**Bulk Freezingsouffle à travers neige poudreuse → 8 Cryostabilized Naquadah Crystals

### Vue latérale d’un procédé Bulk

Encased Fan»»Feu, eau ou neige»»Objet sur Mechanical Belt ou Depot

Le souffle traverse le catalyseur puis atteint l’objet. L’objet n’est jamais jeté dans le fluide.

08

Premier cycle complet

## Valider une première fournée

Exécute maintenant la chaîne entière avec les quantités d’une seule fournée. Déplace les objets manuellement entre
les stocks : le but est de valider la recette, pas encore la vitesse.

**Entrée16 améthystes · 4 or · 4 zinc · 8 obsidiennes · 8 Netherracks · 8 Blaze Powder · 8 redstones · 4 glowstones · 1
000 mB potion · 500 mB lave

→

**Sortie immédiate** 8 Cryostabilized Naquadah Crystals

+

**Réserve** 4 Catalytic Flux pour la métallurgie

**Prototype validé :8 Cryostabilized Naquadah Crystals et 4 Catalytic Flux sont stockés, sans objet intermédiaire bloqué dans une
machine.

09

Passage à l’échelle

## Passer à une production reproductible

1

**Dose une fournée**

Prépare les trois groupes d’ingrédients dans des stockages séparés.

2

**Ajoute les tampons**

Place un stockage entre les précurseurs, la synthèse et le raffinage.

3

**Cadence la synthèse**

Un cycle surchauffé dure environ 60 secondes.

3 postes de précurseurs→stocks tampons→**1 synthèse surchauffée** →5 postes de raffinage→coffre de comptage

10

Production de masse

## Produire et répartir 168 Cryostabilized Naquadah Crystals

Réalise vingt et une fournées au total, prototype compris. Chaque sortie rejoint d’abord le coffre de comptage, puis
trois stockages séparés.

Coffre : 168 Cryostabilized Naquadah Crystals

↙
[Illustration : Naquadah Plate]
**128 Crystals affectés**→ 64 Naquadah Plates** Étapes 11–12 · métallurgie détaillée

↓
[Illustration : Crystal Base]
**33 Crystals affectés**→ 33 Crystal Bases** Étapes 13–15 · cristallisation détaillée

↘
[Illustration : Liquid Naquadah]
**7 Crystals affectés**→ 3 500 mB Liquid Naquadah** Étapes 13–15 · circuit liquide détaillé

11

Atelier de métallurgie

## Construire la boucle du Stabilized Naquadah Billet

**8 Cryostabilized Naquadah Crystals** →**Compacting chauffé** →**1 Incomplete Naquadah Billet**

L’Incomplete Naquadah Billet doit parcourir quatre fois la même séquence. Construis une boucle fermée et place une
sortie filtrée sur le Stabilized Naquadah Billet : les objets incomplets continuent de tourner, le produit fini
quitte la boucle.

Deployer
1 flux→Spout
125 mB lave→Press→Saw

↑retour des Incomplete Naquadah Billets · 4 passages↵

**Sortie avec filtre : Stabilized Naquadah Billet uniquement** →Stock final

-
**Alimente le Deployer en Catalytic Flux.Chaque passage consomme un Catalytic Flux ; un billet complet en demande donc quatre.

-
**Relie le Spout à la lave.** Chaque passage consomme 125 mB, soit 500 mB par billet.

-
**Place la Mechanical Press puis la Mechanical Saw dans cet ordre.Inverser les deux machines empêche la recette de progresser.

-
**Filtre la sortie sur le Stabilized Naquadah Billet.Teste avec le billet du prototype avant d’envoyer les 120 Cryostabilized Naquadah Crystals restants.

12

Activation finale

## Produire 64 Naquadah Plates

[Illustration : Stabilized Naquadah Billet]
**Stabilized Naquadah Billet→ Mechanical Saw →
[Illustration : Dormant Naquadah Ingot]
**4 Dormant Naquadah Ingots→ Bulk Ending →**4 Naquadah Ingots** → Mechanical Press →
[Illustration : Naquadah Plate]
**4 Naquadah Plates

### Poste de Bulk Ending

Encased Fan»»Dragon Head»»Dormant Naquadah Ingots

La Dragon Head reste en place et n’est pas consommée. Le souffle doit la traverser avant d’atteindre les Dormant
Naquadah Ingots.

-
**Produis seize Stabilized Naquadah Billets.Chaque billet consomme 8 Cryostabilized Naquadah Crystals, 4 Catalytic Flux et 500 mB de lave.

-
**Découpe chaque Stabilized Naquadah Billet en quatre Dormant Naquadah Ingots.Tu dois obtenir 64 Dormant Naquadah Ingots.

-
**Active-les avec la Dragon Head.Ne presse pas les Naquadah Ingots avant cette dernière transformation.

- **Presse les 64 Naquadah Ingots.** Chaque lingot donne une Naquadah Plate.

**Métallurgie terminée :64 Naquadah Plates dans leur stock ; 20 Catalytic Flux de réserve doivent encore rester.

13

Machines spécialisées

## Installer le Naquadah Liquidizer et le Crystallizer

Les deux Reaction Chambers sont des composants de recette : elles seront absorbées par les deux machines finales.

[Illustration : Reaction Chamber]

### 2 Reaction Chambers

SES
BMB
SDS
S : Sturdy Sheet · E : Electron Tube · B : Brass Sheet · M : Precision Mechanism · D : Diamond

[Illustration : Naquadah Liquidizer]

### 1 Naquadah Liquidizer

PFP
BRB
PMP
P : Naquadah Plate · F : Fluid Tank · B : Brass Sheet · R : Reaction Chamber · M : Mechanical Pump

[Illustration : Crystallizer]

### 1 Crystallizer

PDP
ERE
PMP
P : Naquadah Plate · D : Diamond · E : Electron Tube · R : Reaction Chamber · M : Precision Mechanism

**Réseau FE commun** 1 000 FE/t pour le Naquadah Liquidizer1 000 FE/t pour le Crystallizer

[Illustration : Cryostabilized Naquadah Crystal]
**Crystals + Lavaentrées du Liquidizer

→

[Illustration : Naquadah Liquidizer]
**Naquadah Liquidizerproduit le liquide

→Fluid Pipe
+ Mechanical Pump

**Fluid Tank** stock tampon de
Liquid Naquadah

→Fluid Pipe
+ Mechanical Pump

[Illustration : Crystallizer]
**Crystallizerconsomme 100 mB

→

**5 stockages triés** un par famille de cristal

33 Crystal Bases+Réactif A+Réactif B↑**Entrées solides du Crystallizer**

-
**Pose un Fluid Tank entre les deux machines.Le Naquadah Liquidizer le remplit ; le Crystallizer y prélève ensuite son Liquid Naquadah.

-
**Relie les fluides avec des Fluid Pipes et des Mechanical Pumps.Contrôle le sens des Mechanical Pumps avec la Create Wrench.

-
**Relie chaque machine au réseau FE.Chacune consomme 1 000 FE/t pendant le traitement et possède un tampon de 1 MFE.

14

Liquid Naquadah et Crystal Bases

## Préparer les entrées du Crystallizer

[Illustration : Liquid Naquadah]

**Produire 3 500 mB de Liquid Naquadah** 7 cycles dans le Naquadah Liquidizer

7 Cryostabilized Naquadah Crystals+700 mB Lava

↓

[Illustration : Naquadah Liquidizer]
**Naquadah Liquidizer1 Crystal + 100 mB Lava → 500 mB

↓

**3 500 mB Liquid Naquadah** dans le Fluid Tank

[Illustration : Crystal Base]

**Fabriquer 33 Crystal Bases** 33 recettes à la Crafting Table

33 Cryostabilized Crystals+33 Amethyst Shards+66 Quartz+33 Diamonds

↓

**Crafting Table** 1 Crystal + 1 Amethyst Shard + 2 Quartz + 1 Diamond

↓

[Illustration : Crystal Base]
**33 Crystal Bases**

**3 500 mB produits** −3 300 mB pour 33 cristaux=**200 mB de réserve**

**33 Crystal Bases** −33 utilisées=**0 restante**

15

Cristallisation

## Produire les 33 cristaux technologiques

Chaque opération du Crystallizer consomme 1 Crystal Base, 100 mB de Liquid Naquadah et les deux réactifs indiqués.

1 Crystal Base+100 mB Liquid Naquadah+Réactif A+Réactif B

↓

[Illustration : Crystallizer]

**Crystallizer** Une opération produit un cristal

↓

[Illustration : Energy Crystal]

**10 × Energy Crystal** 3 Redstone Dust + 3 Redstone Dust

[Illustration : Transfer Crystal]

**10 × Transfer Crystal** 3 Redstone Dust + 3 Glowstone Dust

[Illustration : Materialization Crystal]

**9 × Materialization Crystal** 3 Ender Pearls + 3 Redstone Dust

[Illustration : Communication Crystal]

**3 × Communication Crystal** 3 Quartz + 3 Redstone Dust

[Illustration : Control Crystal]

**1 × Control Crystal** 3 Diamonds + 3 Redstone Dust

-
**Teste d’abord un Energy Crystal.Insère une Crystal Base, 3 Redstone Dust dans chaque entrée de réactif et laisse la machine prendre 100
mB.

-
**Vérifie la sortie et la cuve.Le cristal terminé doit apparaître et le niveau de liquide doit diminuer de 100 mB.

-
**Produis ensuite par familles.Termine les dix Energy Crystals avant de changer les réactifs, puis passe aux Transfer Crystals,
Materialization Crystals, Communication Crystals et au Control Crystal.

-
**Utilise cinq stockages étiquetés.Mélanger les cristaux rend le comptage des composants finaux inutilement difficile.

**Compte avant de continuer :10 Energy Crystals, 10 Transfer Crystals, 9 Materialization Crystals, 3 Communication Crystals et 1 Control
Crystal. Il reste 200 mB de Liquid Naquadah.

16

Deux lignes séquencées

## Produire les Ring Blocks et les Incomplete Stargate Chevrons

Ces deux recettes demandent deux passages. Elles utilisent la même logique que le billet, mais pas les mêmes
ingrédients : construis deux petites boucles ou change soigneusement les filtres entre les séries.

### 14 Classic Stargate Ring Blocks

**Objet de départ :** 1 Andesite Casing par bloc.

Deployer : Iron Sheet→Deployer : Sturdy Sheet→Deployer : Naquadah Plate→Mechanical Press

**Deux tours.** Filtre la sortie sur le Classic Stargate Ring Block terminé.

### 9 Incomplete Stargate Chevrons

**Objet de départ :** 1 Polished Rose Quartz par chevron.

Deployer : Naquadah Plate→Deployer : Brass Sheet→Deployer : Electron Tube→Mechanical Press

**Deux tours.** Filtre la sortie sur l’Incomplete Stargate Chevron terminé.

**Règle communeobjet de départ → quatre opérations → retour au début → deuxième passage → sortie filtrée

17

Mechanical Crafting

## Terminer les composants de la porte

Ces quatre recettes se réalisent avec des Mechanical Crafters orientés vers une sortie commune. La taille indiquée
correspond au rectangle réellement nécessaire.

### Classic Stargate Chevron Block · 3 × 3

T
EIM
PR
T Transfer Crystal · E Energy Crystal · I Incomplete Stargate Chevron · M Materialization Crystal · P Precision
Mechanism · R Redstone Link

### Classic Stargate Base Block · 5 × 3

SPTPS
BMCMB
SPGPS
S Sturdy Sheet · P Naquadah Plate · T Transfer Crystal · B Brass Casing · M Precision Mechanism · C Control
Crystal · G Communication Crystal

### Classic DHD · 5 × 3

BEBEB
PMAMP
ECROE
B Stone Button · E Electron Tube · P Naquadah Plate · M Precision Mechanism · A Brass Casing · C Communication
Crystal · R Redstone Link · O Ender Eye

### Basic Interface · 5 × 4

N W N
K E K
C B R
N W N
N Naquadah Plate · W Copper Spool · K Capacitor · E Energy Crystal · C Communication Crystal · B Brass Casing ·
R Redstone Link

**Inventaire final :14 Classic Stargate Ring Blocks + 9 Classic Stargate Chevron Blocks + 1 Classic Stargate Base Block + 1 Classic
DHD + 1 Basic Interface.

18

Construction

## Assembler et former la Classic Stargate

[Illustration : Structure exacte de la Classic Stargate]

Vue de face officielle : Classic Stargate Base Block au centre inférieur, intérieur entièrement vide.

-
**Pose le Classic Stargate Base Block en bas, au centre.Sa face avant doit regarder vers la zone de passage.

-
**Reproduis exactement le cercle.Place les 14 Classic Stargate Ring Blocks et les 9 Classic Stargate Chevron Blocks aux positions
illustrées.

-
**Vérifie l’ouverture.Aucun bloc ne doit occuper l’intérieur ou remplacer un élément du contour.

-
**Clique le Classic Stargate Base Block à main nue.Les vingt-quatre blocs se convertissent en une porte animée.

**Zone de sécurité :** laisse au moins sept blocs entièrement libres devant la porte. Le vortex d’ouverture peut
détruire les blocs, objets et entités présents dans cet axe.

19

Alimentation

## Relier la Basic Interface au stock FE

**Centrale ou accumulateurs** → Large Connector →**Basic Interface** → contact direct →**Stargate**

-
**Colle la Basic Interface directement à un bloc de la Stargate.Aucun vide ni bloc intermédiaire : la face de communication touche la Stargate et le côté noir regarde vers
l’extérieur.

-
**Relie le réseau FE sur une autre face.L’interface et la porte acceptent jusqu’à 50 000 FE/t dans la configuration Régalade.

-
**Utilise un Large Connector.Le Small Connector plafonne à 1 000 FE/t et ne peut pas couvrir les 4 500 FE/t de maintien ; le Large Connector
atteint 5 000 FE/t.

-
**Charge la porte et le stock externe.La porte contient 1,36 MFE, mais un appel de 60 secondes demande 6,4 MFE au total.

**1 MFE** ouverture

**4 500 FE/t** maintien

**6,4 MFE** 60 secondes

### Voyage rare

Charge complètement la porte et au moins 3 accumulateurs de 2 MFE. Quatre accumulateurs donnent une marge
confortable.

### Usage fréquent

Construis une production réelle d’au moins 4 500 FE/t et conserve un tampon pour absorber l’ouverture initiale
d’un million de FE.

**Test sans appel :Jade ou l’interface montre que l’énergie entre réellement ; la porte est pleine et le stock externe dépasse 5,04
MFE.

20

Adresse et DHD

## Lire une adresse et composer avec le DHD

-
**Lis ta propre adresse.Clic droit sur un bloc de la Stargate avec la Create Wrench ; copie l’adresse affichée dans le chat.

-
**Pose et alimente le DHD à moins de 16 blocs.Relie-le au FE ou fournis-lui un conteneur énergétique chargé, puis vérifie qu’il contrôle la porte.

-
**Choisis une destination sûre.Elle doit posséder une porte fonctionnelle, un DHD alimenté et assez d’énergie pour effectuer le retour après
fermeture.

-
**Compose les nombres dans l’ordre.Maintiens Maj pour afficher les numéros du DHD, saisis l’adresse, puis presse le bouton central : il ajoute
automatiquement le Point d’origine et lance l’appel.

-
**Recule pendant le vortex initial.** Ne traverse qu’une fois le passage stabilisé.

-
**Ferme depuis l’autre côté.Sur Régalade, le DHD d’arrivée peut couper la connexion et arrêter immédiatement la dépense.

**Sécurité :** entrer par l’arrière de la porte reste mortel. Le passage stable est bidirectionnel, mais
uniquement par les faces avant.

**Premier voyage réussi :les deux adresses sont conservées, le DHD d’arrivée est alimenté et tu peux couper puis recomposer la connexion
pour revenir.

21

Dépannage

## Identifier le problème

**La potion n’arrive pas dans le BasinVérifie la Mechanical Pump et son sens. Le Basin doit recevoir 1 000 mB d’eau et une Nether Wart.

**Le Mechanical Mixer refuse la recetteVérifie les quatre Crystalline Matrices, quatre Refractory Briquettes, quatre Catalytic Flux, 250 mB de lave et
le Blaze Burner surchauffé.

**Le Bulk Freezing ne produit rienL’Encased Fan doit souffler à travers la Powder Snow avant d’atteindre les Purified Naquadah Granules.

**L’Incomplete Naquadah Billet ne progresse plusChaque boucle demande Catalytic Flux, 125 mB de lave, Mechanical Press et Mechanical Saw, dans cet ordre,
quatre fois.

**Le Naquadah Liquidizer reste arrêtéContrôle le Cryostabilized Naquadah Crystal, les 100 mB de lave, l’entrée FE et l’espace disponible dans la
sortie liquide.

**Le Crystallizer reste arrêtéVérifie la Crystal Base, les deux réactifs, 100 mB de Liquid Naquadah et le réseau FE.

**Les blocs ne forment pas la StargateCompare les 14 Classic Stargate Ring Blocks, 9 Classic Stargate Chevron Blocks et le Classic Stargate Base
Block à l’image, puis clique ce dernier à main nue.

**Le DHD ne réagit pasContrôle son énergie, sa distance de 16 blocs et sa liaison avec la porte avant de modifier l’adresse.

**La Create Wrench n’affiche aucune adresseVise un bloc appartenant à la Stargate déjà formée et utilise bien la Create Wrench en main principale.

**La connexion coupe rapidementLe stock externe est vide ou ne fournit pas les 4 500 FE/t nécessaires au maintien.

22

Après le prototype

## Réutiliser l’usine pour la porte suivante

La première porte finance toute l’infrastructure : raffinerie, Naquadah Liquidizer, Crystallizer, circuits de
traitement et mur de Mechanical Crafters. Conserve-les comme une usine communautaire.

**Une seconde porteElle réutilise les machines existantes et demande 19 fournées selon la nomenclature actuelle.

**Changer d’apparenceFabrique ensuite les cristaux d’amélioration ou de variante sans reconstruire la porte classique.

**Industrialiser davantageAutomatise le dosage uniquement lorsque les stocks tampons et les contrôles de sortie sont fiables.

Référence technique

## Trouver rapidement une recette ou une valeur

Choisir une rubrique pour accéder directement aux informations utiles.

TotauxRaffinerieCristauxComposantsÉnergieRéseau

Nomenclature

## Première installation complète

**21** fournées

**168** Cryostabilized Naquadah Crystals

**64** Naquadah Plates

**33** cristaux technologiques

**24** blocs de Stargate

Élément

Quantité

Naquadah Plates

Classic Stargate Ring Blocks

14

28

Classic Stargate Chevron Blocks

9

18

Classic Stargate Base Block

1

4

Classic DHD

1

2

Basic Interface

1

4

Naquadah Liquidizer + Crystallizer

2

8

Total première installation

Sans objet

64

Raffinerie

## Une fournée standard

[Illustration : Crystalline Matrix]

**Crystalline Matrix** ×4

[Illustration : Refractory Briquette]

**Refractory Briquette** ×4

[Illustration : Catalytic Flux]

**Catalytic Flux** ×4 utilisés

[Illustration : Unstable Naquadah Slag]

**Unstable Naquadah Slag** ×4

[Illustration : Cryostabilized Naquadah Crystal]

**Cryostabilized Naquadah Crystal** ×8

Entrées par fournée : 16 améthystes, 4 or, 4 zinc, 8 obsidiennes, 8 netherracks, 8 Blaze Powder, 8 redstone, 4
glowstones, 1 000 mB de potion étrange et 1 000 mB de lave au total.

Crystallizer

## Recettes des cinq cristaux

**Base commune :** 1 Crystal Base + 100 mB de Liquid Naquadah. La Crystal Base coûte 1 Cryostabilized
Naquadah Crystal, 1 Amethyst Shard, 2 Quartz et 1 Diamond.

Crystal

Quantité

Réactif A

Réactif B

Energy Crystal

10

3 Redstone Dust

3 Redstone Dust

Transfer Crystal

10

3 Redstone Dust

3 Glowstone Dust

Materialization Crystal

9

3 Ender Pearls

3 Redstone Dust

Communication Crystal

3

3 Quartz

3 Redstone Dust

Control Crystal

1

3 Diamonds

3 Redstone Dust

Assemblage

## Composants de la porte

[Illustration : Classic Stargate Ring Block]

**Classic Stargate Ring Block** 2 Naquadah Plates chacun

[Illustration : Classic Stargate Chevron Block]

**Classic Stargate Chevron Block2 Naquadah Plates + Energy Crystal + Transfer Crystal + Materialization Crystal

[Illustration : Classic Stargate Base Block]

**Classic Stargate Base Block4 Naquadah Plates + Control Crystal + Communication Crystal + Transfer Crystal

[Illustration : Classic DHD]

**Classic DHD** 2 Naquadah Plates + Communication Crystal

[Illustration : Basic Interface]

**Basic Interface** 4 Naquadah Plates + Energy Crystal + Communication Crystal

[Illustration : Structure officielle de la Classic Stargate]

Structure officielle : 14 Classic Stargate Ring Blocks, 9 Classic Stargate Chevron Blocks et le Classic Stargate
Base Block.

Configuration Régalade

## Énergie et durée

Paramètre

Valeur

Ouverture

1 000 000 FE

Maintien

4 500 FE/t = 90 000 FE/s

Durée maximale

60 secondes

Appel complet

6,4 MFE

Stockage interne de la porte

1,36 MFE

Stockage de la Basic Interface

environ 50 000 FE

Règles de réseau

## Ce qui est autorisé sur le serveur

- La porte appelante paie l’ouverture et le maintien ; la destination peut être sans énergie.

- Le passage est bidirectionnel une fois ouvert.

- Les destinations prévues sont l’Overworld, le Nether et l’End.

- Des portes sauvages rares et protégées peuvent servir de premières destinations.

- Les dimensions supplémentaires du mod restent exclues du parcours.

- Clic droit avec la clé Create sur une porte formée : son adresse apparaît dans le chat.

- Les deux extrémités peuvent fermer la connexion ; le passage stable reste bidirectionnel.

Pour aller plus loin

## Schémas et documentation

**Arbre de dépendance complet** Recettes Régalade et branches de progression**Documentation officielle** Formation, DHD, adresses et fonctionnement du mod
