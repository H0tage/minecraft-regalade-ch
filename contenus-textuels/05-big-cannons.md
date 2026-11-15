# Big Cannons

> Copie éditoriale locale du contenu actuellement présent sur le site.
> Tu peux modifier les titres et paragraphes directement dans ce fichier, puis demander à Codex de synchroniser ces changements avec le site.
> Ne relance pas le script d’export après avoir commencé tes corrections : il remplacerait cette copie par le texte du site.

## Source actuelle : src/content/tutorials/big-cannons.html

Fonctionnement général

Premier autocanon

Create Big Cannons · les bases

# Comprendre un canon avant de le construire.

Un gros canon n’est pas une recette unique : c’est une ligne de pièces compatibles. Voici les règles à comprendre
avant de choisir un matériau ou de fabriquer le moindre bloc.

01

## La forme générale

Un arrière fermé, un tube continu et une extrémité ouverte.

**[Breech / Culasse]** ou extrémité fermée

→

**[Chamber / Chambre]** × 1 ou davantage · poudre

→

**[Barrel / Canon]** × 0 ou davantage · trajet

→

**Bouche ouverte** c’est simplement de l’air

**La bouche n’est pas une pièce.C’est la face ouverte du dernier bloc de tube. Si tu poses un bouchon devant, le canon n’a plus de
sortie.

02

## La longueur : autocanon et gros canon ne suivent pas la même règle

C’est la confusion la plus importante à éviter.

[Autocannon / Autocanon]

### Une longueur utile fixée par le matériau

**3** Fonte**5** Bronze**7** Acier

Ces limites comptent les sections parcourues après la culasse. Un éventuel ressort de recul compte donc comme
une section. Au-delà, le projectile risque de rester coincé.

[Big Cannon / Gros canon]

### 64 blocs structurels, quel que soit le matériau

**1** **64**

Le matériau ne change pas cette limite générale. Il détermine plutôt la quantité de poudre supportée et la
puissance nécessaire pour parcourir le tube sans incident.

**Tube plus long** le tir devient plus précis

→

**Charge suffisante obligatoire** sinon le projectile se coince

→

**Canon assez résistant** sinon la charge le fait rompre

**En résumé :** la longueur maximale d’un gros canon n’est pas donnée directement par son matériau.
Le matériau décide surtout si la charge nécessaire à cette longueur peut être utilisée sans danger.

[Big Cannon / Gros canon]

### Quelle modification change quelle statistique ?

**Ajouter de la poudre** **Vitesse et portée ↑Le recul, la dispersion initiale et la contrainte imposée au canon augmentent également.

**Allonger le tube** **Précision ↑Chaque bloc parcouru réduit la dispersion. Le tube n’ajoute pas directement de vitesse.

**Choisir un meilleur matériau** **Charge supportée ↑Le matériau fixe surtout la résistance, le risque de projectile coincé et l’efficacité du tube sur la
précision.

**Modifier l’angle** **Trajectoire modifiéeUn tir plus haut décrit une courbe différente ; l’angle participe donc à la distance réellement
atteinte.

**Changer de projectile** **Effet et comportement modifiésDégâts, explosion, pénétration et comportement en vol dépendent de la munition choisie.

**Épaissir le profil extérieur** **Portée inchangéeLes tailles extérieures organisent la chambre et la forme du canon ; elles ne créent pas un nouveau
calibre.

**Exception ([Autocannon / Autocanon])Sur un autocanon, chaque bloc de tube augmente réellement la vitesse et réduit la dispersion, jusqu’aux
limites propres à son matériau.

03

## Le diamètre extérieur change, pas le calibre

Les cinq tailles décrivent l’épaisseur de la pièce, pas une nouvelle famille de munitions.

**[Very Small / Très petit]** canon

**[Small / Petit]** canon renforcé

**[Medium / Moyen]** chambre

**[Large / Grand]** chambre renforcée

**[Very Large / Très grand]** chambre épaisse

### Même passage intérieur

Les projectiles de gros canon utilisent le même calibre. Une pièce plus épaisse ne demande pas une munition
plus grosse.

### Deux fonctions différentes

Une **[Chamber / Chambre]** peut recevoir la poudre. Un **[Barrel / Canon]** guide le projectile ;
placer de la poudre dedans peut provoquer une rupture.

### Plusieurs profils possibles

L’acier et le Nethersteel permettent de construire un canon qui s’amincit progressivement de la culasse vers
la bouche.

04

## Les combinaisons possibles

Le jeu accepte beaucoup de variantes tant que les règles structurelles sont respectées.

### Canon simple

CulasseChambreCanonAir

La formule minimale facile à comprendre.

### Canon allongé

CulasseChambreChambreCanonCanonAir

Plus de place pour la charge et davantage de guidage.

### Canon progressif en acier

Culasse à visChambre épaisseChambre renforcéeChambreCanon renforcéCanonAir

Un profil qui s’amincit vers la bouche, sans changer de calibre.

**1** **Un seul matériau** sur toute la longueur.

**2** **Une seule fermeture** à l’arrière.

**3** **Toutes les jonctions** connectées ou soudées.

**4** **Uniquement des pièces terminées** , jamais non alésées ou incomplètes.

**5** **La face avant reste libre** pour former la bouche.

05

En bref

## Ce qu’il faut retenir

Un gros canon suit toujours le même ordre :
**fermeture arrière → chambre(s) pour la poudre → canon(s) → bouche ouverte** . La poudre augmente
surtout la vitesse et la portée ; le matériau limite la charge et la longueur utilisables sans casse.

La suite se trouve dans **Premier autocanon** , un parcours complet pensé pour une partie en survie.

De zéro au premier tir

# Construire un autocanon simple.

De la boue à la bombe nucléaire… Bon, peut-être pas, mais pas loin ! Grâce à ce guide, tu vas pouvoir créer ta
première tourelle ou ton premier canon mobile, de A à Z : de la matière première au premier assas… hum, au «
premier tir de test en conditions sécurisées ».

Validé pour Create Big Cannons 5.11.7 · Modpack Régalade

**[Breech / Culasse]** →**[Recoil Spring / Ressort de recul]** →**[Barrel / Canon]** →**[Barrel / Canon]** →**Air**

01

Le projet

## Préparation du projet

Pour un premier essai, construis un autocanon en **fonte** composé d’une
**[Breech / Culasse]** , d’un **[Recoil Spring / Ressort de recul]** et de deux
**[Barrels / Canons]** .

**Pourquoi la fonte ?** Elle se fabrique tôt avec du fer et du charbon.

**Pourquoi deux canons ?Avec le ressort, ils remplissent les trois sections disponibles après la culasse en fonte.

**A · Tourelle sur affûtReste au sol et se pilote depuis la culasse. Choisis cette route pour une installation permanente.

**B · Chariot mobileDevient un véhicule d’artillerie. Choisis cette route pour rouler, viser et tirer depuis le chariot.

**Choisis maintenant :** le tube de l’autocanon reste identique, mais la liste de courses du support
change.

02

Avant de commencer

## Réunir l’atelier et les consommables.

### Atelier commun aux deux routes

- 1 [Mechanical Press / Presse mécanique] et 1 [Mechanical Saw / Scie mécanique]

- 1 [Basin Foundry Lid / Couvercle de fonderie] et 1 [Blaze Burner / Brûleur à Blaze]

- 1 [Cannon Drill / Foreuse à canon] et 1 [Mechanical Bearing / Roulement mécanique]

- Des tuyaux, 1 [Mechanical Pump / Pompe mécanique] et une source de rotation Create

- Des arbres et engrenages pour relier les machines selon la forme de ton atelier

Tronc commun

### Le tube et ses munitions

- 15 lingots de fer + 15 charbons

- 8 sables + 4 terres + 4 boules d’argile

- 3 bûches pour les moules

- 7 plaques de fer

- 1 lingot de laiton

- 12 poudres à canon + 12 pépites de cuivre

A · Tourelle sur affût

### Supplément fixe

- 6 arbres

- 2 boîtiers d’andésite

- 2 plaques de fer

- 4 poudres à canon

**Total : 9 plaques de fer**

B · Chariot mobile

### Supplément mobile

- 1 bûche + 4 planches

- 1 arbre

- 4 plaques de fer

- 1 selle facultative

**Total : 11 plaques de fer**

**Pourquoi 7 plaques communes ?** Une devient le mécanisme du ressort, une produit les feuilles des
douilles et cinq servent au conteneur de munitions.

**Le soudeur n’est pas requis :** sa recette et son usage restent disponibles plus bas uniquement si
tu démontes accidentellement le canon.

03

Métallurgie

## Produire 15 lingots de fonte.

**1 lingot de fer** +**1 charbon** →**[Mechanical Press / Presse mécanique]** →**1 lingot de fonte**

**1.** Place un [Basin / Bassin] sous une presse.

**2.Chauffe le bassin avec un [Blaze Burner / Brûleur à Blaze]. Le niveau chauffé ordinaire suffit.

**3.** Compacte 15 lingots de fer avec 15 charbons.

**Tu dois repartir avec :** 15 lingots de fonte solides.

04

Fonderie

## Faire fondre 14 lingots.

Pose le **[Basin Foundry Lid / Couvercle de fonderie]** sur un bassin chauffé. Il transforme les
lingots de fonte en métal liquide, que tu peux transporter avec les tuyaux et pompes de Create.

14 lingots×90 mB=**1 260 mB de fonte liquide**

Garde le quinzième lingot sous forme solide : il sert à fabriquer le [Breech Extractor / Extracteur de culasse].

05

Moules

## Préparer les quatre couches de coulée.

### Moules en bois

Découpe trois bûches pour obtenir les moules de **culasse** , de
**ressort de recul** et de **canon** . Le moule de canon est réutilisé pour les deux
canons.

### Sable de moulage

**2 sables + 1 terre + 1 boule d’argile** produisent 1 bloc. Fabrique-en quatre : un pour remplir
le moule central de chaque couche.

Chaque étage se prépare de la même manière. Le **deuxième clic** est indispensable : sans lui, tu
n’as pas encore créé une véritable couche de coulée.

**1 · Poser le moulePlace au sol le moule en bois correspondant à la pièce.

→

**2 · Ajouter le sableClic droit sur le moule avec 1 [Casting Sand / Sable de moulage].

→

**3 · Valider la coucheÀ main vide, refais un clic droit : la couche de coulée se forme réellement.

→

**4 · Continuer au-dessusPose le moule suivant sur la couche terminée et répète les deux clics.

**Pas de carré de 3 × 3 ici :** cette couronne de sable sert aux grands moules de gros canon, pas aux
petites pièces d’autocanon.

**Haut** Moule de canon rempli

**Couche 3** Moule de canon rempli

**Couche 2** Moule de ressort de recul rempli

**Bas** Moule de culasse rempli

06

Coulée connectée

## Couler les quatre pièces en une seule colonne.

Empile les quatre formes **directement les unes sur les autres** , puis remplis-les sans les déplacer.
La coulée commune crée automatiquement les connexions internes entre les pièces.

**Fonderie chaufféeElle contient les 1 260 mB de fonte liquide.

→

**Tuyau + pompe mécaniqueRelie la sortie de la fonderie à une face libre de la colonne. Vérifie la flèche de la pompe.

→

**Colonne terminéeLaisse couler les 1 260 mB, puis attends la solidification complète.

**[Barrel / Canon]** 270 mB

**[Barrel / Canon]** 270 mB

**[Recoil Spring / Ressort de recul]** 360 mB

**[Breech / Culasse]** 360 mB

**Total : 1 260 mB** Attends la solidification complète.

**Pourquoi une seule colonne ?Parce qu’un assemblage coulé ensemble est déjà connecté. Aucun soudage n’est nécessaire tant que tu ne sépares
pas les blocs.

07

Usinage

## Aléser le tube de part en part.

Les pièces sorties du moule sont pleines. Il faut créer leur passage intérieur avec la
**[Cannon Drill / Foreuse à canon]** .

**Rotation Create** fait avancer la foreuse

→

**[Cannon Drill / Foreuse à canon]alimentée en eau

→

**Tube horizontal** tourne sur le [Mechanical Bearing / Roulement mécanique]

-
Couche le tube à l’horizontale et fixe son extrémité arrière sur un [Mechanical Bearing / Roulement mécanique]
pour le faire tourner comme sur un tour.

-
En face de la bouche, pose une [Cannon Drill / Foreuse à canon] parfaitement alignée avec l’axe du tube. Son
système d’extension doit lui permettre d’avancer tout droit.

- Raccorde de l’eau à la foreuse avec un tuyau.

-
Alimente le roulement et la foreuse. La foreuse doit tourner **au moins aussi vite** que le tube ;
elle peut aller plus vite.

-
Laisse la tête de forage avancer et traverser successivement les quatre blocs, puis retire-la complètement.

**Si rien ne se passe :** vérifie l’eau, l’alignement, le sens d’avancement et surtout que la foreuse
n’est pas plus lente que le tube.

08

Terminer les mécanismes

## Installer le ressort interne et l’extracteur.

**1 plaque de fer** →**Scie** →**[Spring Wire / Fil à ressort]** →**Presse × 3 cycles** →**[Recoil Spring / Ressort de recul]**

Prends l’objet ressort en main et fais un clic droit sur le bloc de ressort de recul incomplet. Tu termines ainsi
le mécanisme placé entre la culasse et les canons.

**1 lingot de fonte** →**Scie × 3 passages** →**[Breech Extractor / Extracteur de culasse]**

Prends l’extracteur en main et fais un clic droit sur la culasse incomplète. Elle devient une véritable
**[Autocannon Breech / Culasse d’autocanon]** , sans perdre les connexions créées pendant la coulée.

Tu as démonté ou cassé une pièce ? Ouvre cette procédure de secours.

**Cette section ne sert que si tu as récupéré les pièces avec une pioche Silk Touch avant de les reposer
séparément.Si elles ont été cassées sans Silk Touch et transformées en ferraille, elles sont irrécupérables : recommence
leur fabrication.

**Assemblage encore intact**

Ne le casse pas. Construis l’affût près de l’atelier ou déplace tout le canon d’un seul tenant avec une
contraption Create.

**Pièces récupérées avec Silk Touch**

Les blocs sont sauvés, mais leurs anciennes connexions ne reviennent pas quand tu les reposes. Soude chaque
jonction.

**Pièces devenues ferraille**

Le canon n’est plus réparable. Refais la coulée, l’alésage et les mécanismes.

### Reconnecter les pièces récupérées

**[Cannon Welder / Soudeur de canon]** 1 [Valve Handle / Poignée de vanne]1 plaque de fer3 plaques de laiton1 [Blaze Burner / Brûleur à Blaze]

**1** Prends le soudeur en main.

→

**2** Clic droit sur la première pièce.

→

**3** Clic droit sur sa voisine.

→

**4** Répète à chaque jonction.

**Pour annuler une sélection :** accroupis-toi avec Maj, puis recommence sur la bonne paire.

Même matériauMême famille de canonBlocs adjacentsOuvertures alignéesPièces terminées et aléséesUne jonction à la fois

09

Choix du support

## Tourelle sur affût ou canon mobile ?

Les deux supports utilisent exactement le même autocanon et les mêmes munitions. Choisis ton parcours, puis reste
dans la même colonne à l’étape 11.

A · Tourelle sur affût

### [Cannon Mount / Affût de canon]

Une tourelle permanente, pilotable par un joueur ou automatisable avec Create. Elle reste ancrée au sol.

#### À fabriquer

- **1 support :** 1 boîtier d’andésite + 4 arbres + 2 plaques de fer + 2 poudres à canon.

- **1 extension :** 1 boîtier d’andésite + 2 arbres + 2 poudres à canon.

#### À installer

- Pose l’affût au sol.

- Place l’extension au-dessus.

-
Pose l’autocanon horizontalement, culasse vers l’arrière, avec le ressort aligné au-dessus de l’extension.

- Ne l’alimente pas encore : il doit rester sous forme de blocs.

**Face marteauAssemble ou désassemble l’affût.

**Face lumineuseCommande la cadence de tir.

B · Installation mobile

### [Cannon Carriage / Chariot de canon]

Un véhicule d’artillerie conduit manuellement. Il roule et tire, mais ne s’automatise pas comme l’affût.

#### À fabriquer

- **2 paires de roues :** 1 bûche + 4 plaques de fer.

- **1 chariot :** 4 planches + 1 arbre + les 2 paires de roues.

- **Option confort :** 1 selle vanilla.

#### À installer

- Pose le chariot sur un terrain plat, orienté vers la future cible.

- Si tu veux un véritable siège conducteur, fais un clic droit sur le chariot avec une selle.

-
Pose l’autocanon directement au-dessus, sur le même axe et dans la même direction, culasse vers l’arrière.

- Pour ce premier essai, laisse la culasse sans poignées : le chariot assurera les commandes.

**À ce stade, rien ne bouge encore :c’est normal. Le support choisi transformera les blocs en canon utilisable à l’étape 11.

10

Munitions

## Fabriquer douze cartouches de mitrailleuse et leur chargeur.

**1 plaque de fer** Scie**3 feuilles de cartouche** Scie**12 douilles vides+ poudre + cuivre**12 [Machine Gun Rounds / Cartouches de mitrailleuse]**

**Munition de départChaque douille vide reçoit 1 poudre à canon et 1 pépite de cuivre. Cette cartouche simple est acceptée par
ton autocanon.

**[Autocannon Ammo Container / Conteneur de munitions]1 lingot de laiton + 5 plaques de fer. Il stocke jusqu’à 128 cartouches de mitrailleuse.

**Deux nombres à ne pas confondre :** les cartouches de mitrailleuse de ce guide s’empilent par 128
dans le conteneur. Les véritables [Autocannon Cartridges / Cartouches d’autocanon], plus élaborées et non
utilisées ici, sont limitées à 64.

Remplis le conteneur, puis fais un clic droit sur la culasse avec celui-ci pour l’attacher.

11

Assemblage et premier tir

## Suivre la procédure de ton support.

Assembler signifie convertir la rangée de blocs en une seule contraption utilisable. Il ne faut pas de colle : le
support récupère automatiquement toutes les pièces correctement connectées.

A · Tourelle sur affût

### Une tourelle pilotée depuis la culasse

#### Préparer le poste de tir

-
Avec une **[Wrench / Clé]** de Create, fais un clic droit sur la **[Breech / Culasse]** : des poignées
doivent apparaître.

-
Option conseillée : prends un [Seat / Siège] de Create et fais un clic droit sur la culasse à poignées. Le
siège est esthétique ; les poignées activent réellement le pilotage.

- Vérifie que le conteneur de munitions rempli est fixé à la culasse.

#### Assembler et tirer

- Pose un levier contre la face marteau de l’affût, puis active-le.

- Le canon entier doit devenir un seul ensemble mobile. Laisse le levier actif pendant l’utilisation.

- Fais un clic droit sur la culasse ou son siège pour monter.

- Vise avec la souris.

-
Sur la face lumineuse, règle un [Analog Lever / Levier analogique] sur 1 pour choisir une cadence lente.

- Maintiens le clic gauche pour tirer ; relâche-le pour arrêter. Maj permet de descendre.

**Pour le redéposer :** coupe le levier de la face marteau. Le canon redevient immédiatement une rangée de
blocs.

B · Chariot mobile

### Un canon conduit comme un véhicule

#### Assembler

- Vérifie que le conteneur de munitions rempli est fixé à la culasse.

- Fais un clic droit avec la **[Wrench / Clé]** sur le chariot encore posé comme un bloc.

-
Le chariot devient un véhicule et emporte automatiquement le canon placé juste au-dessus. Aucune redstone
n’est nécessaire.

- Fais un clic droit à main vide sur le chariot pour prendre les commandes.

#### Conduire et tirer

- **Z/S** font avancer ou reculer le chariot ; **Q/D** le font tourner.

- Maintiens **C** , puis utilise **Z/S** pour lever ou abaisser le canon au lieu d’avancer.

- Maintiens le clic gauche pour tirer.

- Utilise la molette pour modifier la cadence de l’autocanon.

- Appuie sur Maj pour descendre.

**Pour le redéposer :** fais un clic droit avec la clé sur le chariot assemblé. Il redevient un bloc avec
le canon au-dessus.

**Le support part sans tout le canon ?une jonction manque, ou le chariot et le canon ne regardent pas dans la même direction. Désassemble, corrige
l’alignement et ouvre la procédure de secours si une soudure est nécessaire.

12

Dépannage

## Identifier le problème par son symptôme.

**Le moule reste en boisAprès le clic avec le sable de moulage, refais un clic droit à main vide pour valider la couche.

**Le métal ne remplit rienVérifie la chauffe, le sens de la pompe, la connexion du tuyau et les 1 260 mB disponibles.

**La foreuse refuse d’avancerContrôle l’eau, l’axe, l’espace devant elle et une vitesse au moins égale à celle du tube.

**Une partie reste au solLa pièce est mal alignée, incomplète ou déconnectée. Ouvre la procédure de secours pour la ressouder.

**Le conteneur refuse la munitionNe mélange pas plusieurs familles de cartouches dans le même conteneur et fixe-le à la culasse.

**Le canon vise mais ne tire pasVérifie les munitions, la cadence sur la face lumineuse et l’assemblage actif via la face marteau.

13

Après le prototype

## Améliorer :)

Ton premier autocanon valide toute la chaîne : fonte, coulée connectée, alésage, ressort interne, finition de la
culasse, affût et munitions. Tu peux maintenant choisir une seule piste à la fois.

**Changer de matériau** Passe au bronze ou à l’acier pour construire un canon plus performant.

**Automatiser les munitionsRelie la production, le stockage et l’approvisionnement à ton usine Create.

**Passer aux gros canonsRéutilise les principes appris ici avec des chambres, des charges propulsives et de plus gros
projectiles.

**La règle utile :ne change qu’un élément à la fois. Tu sauras ainsi immédiatement quelle modification améliore (ou casse) le
canon.
