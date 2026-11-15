# Big Cannons

> Copie éditoriale locale du contenu actuellement présent sur le site.
> Tu peux modifier les titres et paragraphes directement dans ce fichier, puis demander à Codex de synchroniser ces changements avec le site.
> Ne relance pas le script d’export après avoir commencé tes corrections : il remplacerait cette copie par le texte du site.

## Source actuelle : big-cannons.js

Create Big Cannons · les bases

# Comprendre un canon avant de le construire.

Un gros canon n’est pas une recette unique : c’est une ligne de pièces compatibles. Voici les règles à comprendre avant de choisir un matériau ou de fabriquer le moindre bloc.

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

**La bouche n’est pas une pièce.** C’est la face ouverte du dernier bloc de tube. Si tu poses un bouchon devant, le canon n’a plus de sortie.

02

## La longueur : autocanon et gros canon ne suivent pas la même règle

C’est la confusion la plus importante à éviter.

[Autocannon / Autocanon]

### Une longueur utile fixée par le matériau

**3** Fonte**5** Bronze**7** Acier

Ces limites comptent les sections parcourues après la culasse. Un éventuel ressort de recul compte donc comme une section. Au-delà, le projectile risque de rester coincé.

[Big Cannon / Gros canon]

### 64 blocs structurels, quel que soit le matériau

**1** **64**

Le matériau ne change pas cette limite générale. Il détermine plutôt la quantité de poudre supportée et la puissance nécessaire pour parcourir le tube sans incident.

**Tube plus long** le tir devient plus précis
→
**Charge suffisante obligatoire** sinon le projectile se coince
→
**Canon assez résistant** sinon la charge le fait rompre

**En résumé :** la longueur maximale d’un gros canon n’est pas donnée directement par son matériau. Le matériau décide surtout si la charge nécessaire à cette longueur peut être utilisée sans danger.

[Big Cannon / Gros canon]

### Quelle modification change quelle statistique ?

**Ajouter de la poudre** **Vitesse et portée ↑** Le recul, la dispersion initiale et la contrainte imposée au canon augmentent également.

**Allonger le tube** **Précision ↑** Chaque bloc parcouru réduit la dispersion. Le tube n’ajoute pas directement de vitesse.

**Choisir un meilleur matériau** **Charge supportée ↑** Le matériau fixe surtout la résistance, le risque de projectile coincé et l’efficacité du tube sur la précision.

**Modifier l’angle** **Trajectoire modifiée** Un tir plus haut décrit une courbe différente ; l’angle participe donc à la distance réellement atteinte.

**Changer de projectile** **Effet et comportement modifiés** Dégâts, explosion, pénétration et comportement en vol dépendent de la munition choisie.

**Épaissir le profil extérieur** **Portée inchangée** Les tailles extérieures organisent la chambre et la forme du canon ; elles ne créent pas un nouveau calibre.

**Exception — [Autocannon / Autocanon]** Sur un autocanon, chaque bloc de tube augmente réellement la vitesse et réduit la dispersion, jusqu’aux limites propres à son matériau.

03

## Le diamètre extérieur change, pas le calibre

Les cinq tailles décrivent l’épaisseur de la pièce, pas une nouvelle famille de munitions.

**[Very Small / Très petit]** canon

**[Small / Petit]** canon renforcé

**[Medium / Moyen]** chambre

**[Large / Grand]** chambre renforcée

**[Very Large / Très grand]** chambre épaisse

### Même passage intérieur

Les projectiles de gros canon utilisent le même calibre. Une pièce plus épaisse ne demande pas une munition plus grosse.

### Deux fonctions différentes

Une **[Chamber / Chambre]** peut recevoir la poudre. Un **[Barrel / Canon]** guide le projectile ; placer de la poudre dedans peut provoquer une rupture.

### Plusieurs profils possibles

L’acier et le Nethersteel permettent de construire un canon qui s’amincit progressivement de la culasse vers la bouche.

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

Un gros canon suit toujours le même ordre : **fermeture arrière → chambre(s) pour la poudre → canon(s) → bouche ouverte** . La poudre augmente surtout la vitesse et la portée ; le matériau limite la charge et la longueur utilisables sans casse.

La suite se trouve dans **Premier autocanon** , un parcours complet pensé pour une partie en survie.

**Manuel technique** Create Big Cannons 5.11.7 · MC 1.21.1

A · ArchitectureB · ComposantsC · MatériauxD · ProductionE · PressionF · ChargementG · AffûtsH · MunitionsI · FuséesJ · AutocanonsK · InterfacesL · DiagnosticM · Serveur

Documentation de référence

# Create Big Cannons

Catalogue des composants, caractéristiques, interfaces, formules et limites. Pour comprendre l’architecture d’un canon, consulte **Fonctionnement général** .

A

## Architecture et validité

Règles structurelles communes aux gros canons.

**Extrémité ferméeBreech / Cannon End** ›**Chamber(s)zone des propulseurs** ›**Barrel(s)trajet du projectile** ›**Bouche uniqueouverte vers la cible**

**Axe unique** Tous les alésages sont colinéaires.

**Connexions** Coulée commune ou soudure valide.

**Pièces finies** Aucun bloc Unbored ou Incomplete.

**Longueur** 64 blocs maximum par défaut.

B

## Catalogue des composants

Fonction de chaque famille de blocs.

C

## Profils des matériaux

Résistance, exigence balistique et comportement à la rupture.

La pénalité de soudure est appliquée une fois au canon, et non une fois par jonction. L’usure du Cannon Welder est distincte.

D

## Production et usinage

Stations, volumes et temporisations.

**Fonte** 2 400 ticks · 2 min

**Bronze** 2 400 ticks · 2 min

**Acier** 3 600 ticks · 3 min

**Nethersteel** 6 000 ticks · 5 min

E

## Pression et sécurité

Calcul de la charge maximale sûre.

résistance effective = min(résistance du matériau, limite de culasse) − pénalité de soudure

**Steel Quick-Firing soudé :** sa résistance sûre tombe à zéro. Ce couple n’est pas viable pour un chargement normal.

F

## Chargement et extraction

Ordre interne et capacités des équipements.

**Culasse fermée** ›**Propulseur(s)sans espace** ›**Projectileorienté bouche** ›**Tube libre**

G

## Affûts et commandes

Interfaces cinétiques et redstone.

Le Yaw Controller existe dans le registre mais n’a pas de recette autonome dans ce JAR : le contrôle utile est intégré au Cannon Mount.

H

## Projectiles de gros canon

Fonctions et données distinctives.

I

## Fusées et traceurs

Déclencheurs compatibles avec les obus.

J

## Système autocanon

Architecture, longueur, alimentation et cadence.

**Autocannon Breech** ›**Recoil Springfacultatif** ›**Barrel(s)** ›**Muzzle**

K

## Interfaces d’automatisation

Entrées, sorties et signaux exposés.

L

## Matrice de diagnostic

Causes compatibles classées par symptôme.

M

## Configuration serveur

Groupes de paramètres à surveiller.

**NO_EXPLOSIVE_DAMAGE** conserve la pénétration directe et neutralise les dégâts d’explosion aux blocs. **NO_DAMAGE** empêche toute destruction du décor tout en conservant les dégâts aux entités.

Référence établie à partir du JAR 5.11.7 : recettes JSON, propriétés de matériaux et munitions, scènes Ponder et classes de montage, chargement, tir et configuration. JEI/EMI reste prioritaire si le modpack applique des recettes KubeJS ou datapack.

Fonctionnement général

---

## Source actuelle : big-cannons-survival.js

De zéro au premier tir

# Construire un autocanon simple.

De la boue à la bombe nucléaire… Bon, peut-être pas, mais pas loin ! Grâce à ce guide, tu vas pouvoir créer ta première tourelle ou ton premier canon mobile, de A à Z : de la matière première au premier assas… hum, au « premier tir de test en conditions sécurisées ».

Validé pour Create Big Cannons 5.11.7 · Modpack Régalade

**[Breech / Culasse]** →**[Recoil Spring / Ressort de recul]** →**[Barrel / Canon]** →**[Barrel / Canon]** →**Air**

01

Le projet

## Préparation du projet

Pour un premier essai, construis un autocanon en **fonte** composé d’une **[Breech / Culasse]** , d’un **[Recoil Spring / Ressort de recul]** et de deux **[Barrels / Canons]** .

**Pourquoi la fonte ?** Elle se fabrique tôt avec du fer et du charbon.

**Pourquoi deux canons ?** Avec le ressort, ils remplissent les trois sections disponibles après la culasse en fonte.

**A · Tourelle sur affût** Reste au sol et se pilote depuis la culasse. Choisis cette route pour une installation permanente.

**B · Chariot mobile** Devient un véhicule d’artillerie. Choisis cette route pour rouler, viser et tirer depuis le chariot.

**Choisis maintenant :** le tube de l’autocanon reste identique, mais la liste de courses du support change.

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

**Pourquoi 7 plaques communes ?** Une devient le mécanisme du ressort, une produit les feuilles des douilles et cinq servent au conteneur de munitions.

**Le soudeur n’est pas requis :** sa recette et son usage restent disponibles plus bas uniquement si tu démontes accidentellement le canon.

03

Métallurgie

## Produire 15 lingots de fonte.

**1 lingot de fer** +**1 charbon** →**[Mechanical Press / Presse mécanique]** →**1 lingot de fonte**

**1.** Place un [Basin / Bassin] sous une presse.

**2.** Chauffe le bassin avec un [Blaze Burner / Brûleur à Blaze]. Le niveau chauffé ordinaire suffit.

**3.** Compacte 15 lingots de fer avec 15 charbons.

**Tu dois repartir avec :** 15 lingots de fonte solides.

04

Fonderie

## Faire fondre 14 lingots.

Pose le **[Basin Foundry Lid / Couvercle de fonderie]** sur un bassin chauffé. Il transforme les lingots de fonte en métal liquide, que tu peux transporter avec les tuyaux et pompes de Create.

14 lingots×90 mB=**1 260 mB de fonte liquide**

Garde le quinzième lingot sous forme solide : il sert à fabriquer le [Breech Extractor / Extracteur de culasse].

05

Moules

## Préparer les quatre couches de coulée.

### Moules en bois

Découpe trois bûches pour obtenir les moules de **culasse** , de **ressort de recul** et de **canon** . Le moule de canon est réutilisé pour les deux canons.

### Sable de moulage

**2 sables + 1 terre + 1 boule d’argile** produisent 1 bloc. Fabrique-en quatre : un pour remplir le moule central de chaque couche.

Chaque étage se prépare de la même manière. Le **deuxième clic** est indispensable : sans lui, tu n’as pas encore créé une véritable couche de coulée.

**1 · Poser le moule** Place au sol le moule en bois correspondant à la pièce.
→

**2 · Ajouter le sable** Clic droit sur le moule avec 1 [Casting Sand / Sable de moulage].
→

**3 · Valider la couche** À main vide, refais un clic droit : la couche de coulée se forme réellement.
→

**4 · Continuer au-dessus** Pose le moule suivant sur la couche terminée et répète les deux clics.

**Pas de carré de 3 × 3 ici :** cette couronne de sable sert aux grands moules de gros canon, pas aux petites pièces d’autocanon.

**Haut** Moule de canon rempli

**Couche 3** Moule de canon rempli

**Couche 2** Moule de ressort de recul rempli

**Bas** Moule de culasse rempli

06

Coulée connectée

## Couler les quatre pièces en une seule colonne.

Empile les quatre formes **directement les unes sur les autres** , puis remplis-les sans les déplacer. La coulée commune crée automatiquement les connexions internes entre les pièces.

**Fonderie chauffée** Elle contient les 1 260 mB de fonte liquide.
→

**Tuyau + pompe mécanique** Relie la sortie de la fonderie à une face libre de la colonne. Vérifie la flèche de la pompe.
→

**Colonne terminée** Laisse couler les 1 260 mB, puis attends la solidification complète.

**[Barrel / Canon]** 270 mB

**[Barrel / Canon]** 270 mB

**[Recoil Spring / Ressort de recul]** 360 mB

**[Breech / Culasse]** 360 mB

**Total : 1 260 mB** Attends la solidification complète.

**Pourquoi une seule colonne ?** Parce qu’un assemblage coulé ensemble est déjà connecté. Aucun soudage n’est nécessaire tant que tu ne sépares pas les blocs.

07

Usinage

## Aléser le tube de part en part.

Les pièces sorties du moule sont pleines. Il faut créer leur passage intérieur avec la **[Cannon Drill / Foreuse à canon]** .

**Rotation Create** fait avancer la foreuse
→
**[Cannon Drill / Foreuse à canon]** alimentée en eau
→
**Tube horizontal** tourne sur le [Mechanical Bearing / Roulement mécanique]

- Couche le tube à l’horizontale et fixe son extrémité arrière sur un [Mechanical Bearing / Roulement mécanique] pour le faire tourner comme sur un tour.

- En face de la bouche, pose une [Cannon Drill / Foreuse à canon] parfaitement alignée avec l’axe du tube. Son système d’extension doit lui permettre d’avancer tout droit.

- Raccorde de l’eau à la foreuse avec un tuyau.

- Alimente le roulement et la foreuse. La foreuse doit tourner **au moins aussi vite** que le tube ; elle peut aller plus vite.

- Laisse la tête de forage avancer et traverser successivement les quatre blocs, puis retire-la complètement.

**Si rien ne se passe :** vérifie l’eau, l’alignement, le sens d’avancement et surtout que la foreuse n’est pas plus lente que le tube.

08

Terminer les mécanismes

## Installer le ressort interne et l’extracteur.

**1 plaque de fer** →**Scie** →**[Spring Wire / Fil à ressort]** →**Presse × 3 cycles** →**[Recoil Spring / Ressort de recul]**

Prends l’objet ressort en main et fais un clic droit sur le bloc de ressort de recul incomplet. Tu termines ainsi le mécanisme placé entre la culasse et les canons.

**1 lingot de fonte** →**Scie × 3 passages** →**[Breech Extractor / Extracteur de culasse]**

Prends l’extracteur en main et fais un clic droit sur la culasse incomplète. Elle devient une véritable **[Autocannon Breech / Culasse d’autocanon]** , sans perdre les connexions créées pendant la coulée.

Tu as démonté ou cassé une pièce ? Ouvre cette procédure de secours.

**Cette section ne sert que si tu as récupéré les pièces avec une pioche Silk Touch avant de les reposer séparément.** Si elles ont été cassées sans Silk Touch et transformées en ferraille, elles sont irrécupérables : recommence leur fabrication.

**Assemblage encore intact**
Ne le casse pas. Construis l’affût près de l’atelier ou déplace tout le canon d’un seul tenant avec une contraption Create.

**Pièces récupérées avec Silk Touch**
Les blocs sont sauvés, mais leurs anciennes connexions ne reviennent pas quand tu les reposes. Soude chaque jonction.

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

Les deux supports utilisent exactement le même autocanon et les mêmes munitions. Choisis ton parcours, puis reste dans la même colonne à l’étape 11.

A · Tourelle sur affût

### [Cannon Mount / Affût de canon]

Une tourelle permanente, pilotable par un joueur ou automatisable avec Create. Elle reste ancrée au sol.

#### À fabriquer

- **1 support :** 1 boîtier d’andésite + 4 arbres + 2 plaques de fer + 2 poudres à canon.
- **1 extension :** 1 boîtier d’andésite + 2 arbres + 2 poudres à canon.

#### À installer

- Pose l’affût au sol.
- Place l’extension au-dessus.
- Pose l’autocanon horizontalement, culasse vers l’arrière, avec le ressort aligné au-dessus de l’extension.
- Ne l’alimente pas encore : il doit rester sous forme de blocs.

**Face marteau** Assemble ou désassemble l’affût.

**Face lumineuse** Commande la cadence de tir.

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
- Pose l’autocanon directement au-dessus, sur le même axe et dans la même direction, culasse vers l’arrière.
- Pour ce premier essai, laisse la culasse sans poignées : le chariot assurera les commandes.

**À ce stade, rien ne bouge encore :** c’est normal. Le support choisi transformera les blocs en canon utilisable à l’étape 11.

10

Munitions

## Fabriquer douze cartouches de mitrailleuse et leur chargeur.

**1 plaque de fer** Scie**3 feuilles de cartouche** Scie**12 douilles vides** + poudre + cuivre**12 [Machine Gun Rounds / Cartouches de mitrailleuse]**

**Munition de départ** Chaque douille vide reçoit 1 poudre à canon et 1 pépite de cuivre. Cette cartouche simple est acceptée par ton autocanon.

**[Autocannon Ammo Container / Conteneur de munitions]** 1 lingot de laiton + 5 plaques de fer. Il stocke jusqu’à 128 cartouches de mitrailleuse.

**Deux nombres à ne pas confondre :** les cartouches de mitrailleuse de ce guide s’empilent par 128 dans le conteneur. Les véritables [Autocannon Cartridges / Cartouches d’autocanon], plus élaborées et non utilisées ici, sont limitées à 64.

Remplis le conteneur, puis fais un clic droit sur la culasse avec celui-ci pour l’attacher.

11

Assemblage et premier tir

## Suivre la procédure de ton support.

Assembler signifie convertir la rangée de blocs en une seule contraption utilisable. Il ne faut pas de colle : le support récupère automatiquement toutes les pièces correctement connectées.

A · Tourelle sur affût

### Une tourelle pilotée depuis la culasse

#### Préparer le poste de tir

- Avec une **[Wrench / Clé]** de Create, fais un clic droit sur la **[Breech / Culasse]** : des poignées doivent apparaître.
- Option conseillée : prends un [Seat / Siège] de Create et fais un clic droit sur la culasse à poignées. Le siège est esthétique ; les poignées activent réellement le pilotage.
- Vérifie que le conteneur de munitions rempli est fixé à la culasse.

#### Assembler et tirer

- Pose un levier contre la face marteau de l’affût, puis active-le.
- Le canon entier doit devenir un seul ensemble mobile. Laisse le levier actif pendant l’utilisation.
- Fais un clic droit sur la culasse ou son siège pour monter.
- Vise avec la souris.
- Sur la face lumineuse, règle un [Analog Lever / Levier analogique] sur 1 pour choisir une cadence lente.
- Maintiens le clic gauche pour tirer ; relâche-le pour arrêter. Maj permet de descendre.

**Pour le redéposer :** coupe le levier de la face marteau. Le canon redevient immédiatement une rangée de blocs.

B · Chariot mobile

### Un canon conduit comme un véhicule

#### Assembler

- Vérifie que le conteneur de munitions rempli est fixé à la culasse.
- Fais un clic droit avec la **[Wrench / Clé]** sur le chariot encore posé comme un bloc.
- Le chariot devient un véhicule et emporte automatiquement le canon placé juste au-dessus. Aucune redstone n’est nécessaire.
- Fais un clic droit à main vide sur le chariot pour prendre les commandes.

#### Conduire et tirer

- **Z/S** font avancer ou reculer le chariot ; **Q/D** le font tourner.
- Maintiens **C** , puis utilise **Z/S** pour lever ou abaisser le canon au lieu d’avancer.
- Maintiens le clic gauche pour tirer.
- Utilise la molette pour modifier la cadence de l’autocanon.
- Appuie sur Maj pour descendre.

**Pour le redéposer :** fais un clic droit avec la clé sur le chariot assemblé. Il redevient un bloc avec le canon au-dessus.

**Le support part sans tout le canon ?** une jonction manque, ou le chariot et le canon ne regardent pas dans la même direction. Désassemble, corrige l’alignement et ouvre la procédure de secours si une soudure est nécessaire.

12

Dépannage

## Identifier le problème par son symptôme.

**Le moule reste en bois** Après le clic avec le sable de moulage, refais un clic droit à main vide pour valider la couche.

**Le métal ne remplit rien** Vérifie la chauffe, le sens de la pompe, la connexion du tuyau et les 1 260 mB disponibles.

**La foreuse refuse d’avancer** Contrôle l’eau, l’axe, l’espace devant elle et une vitesse au moins égale à celle du tube.

**Une partie reste au sol** La pièce est mal alignée, incomplète ou déconnectée. Ouvre la procédure de secours pour la ressouder.

**Le conteneur refuse la munition** Ne mélange pas plusieurs familles de cartouches dans le même conteneur et fixe-le à la culasse.

**Le canon vise mais ne tire pas** Vérifie les munitions, la cadence sur la face lumineuse et l’assemblage actif via la face marteau.

13

Après le prototype

## Améliorer :)

Ton premier autocanon valide toute la chaîne : fonte, coulée connectée, alésage, ressort interne, finition de la culasse, affût et munitions. Tu peux maintenant choisir une seule piste à la fois.

**Changer de matériau** Passe au bronze ou à l’acier pour construire un canon plus performant.

**Automatiser les munitions** Relie la production, le stockage et l’approvisionnement à ton usine Create.

**Passer aux gros canons** Réutilise les principes appris ici avec des chambres, des charges propulsives et de plus gros projectiles.

**La règle utile :** ne change qu’un élément à la fois. Tu sauras ainsi immédiatement quelle modification améliore — ou casse — le canon.

---

## Source actuelle : big-cannons-tutorial.js

Create Big Cannons · version 5.11.7

# Construire, charger et tirer sans faire exploser l’atelier.

Ce guide suit le fonctionnement réel du mod installé sur le serveur. Il couvre les **gros canons** , les **autocanons** , la métallurgie, les munitions et les causes de panne. Dans le jeu, maintiens aussi **W** sur un objet du mod pour ouvrir sa scène Ponder.

01Premier canon
02Métaux
03Fonderie
04Finition
05Pression
06Chargement
07Affûts
08Autocanons
09Munitions
10Fusées
11Automatisation
12Diagnostic

01

## Commencer par un petit canon en fonte

Le montage d’apprentissage le plus simple possède une culasse, une chambre et un canon. La bouche reste ouverte vers la cible.

[Illustration : Mécanisme de culasse rapide]
**Culasse rapide** arrière fermé

[Illustration : Lingot de fonte]
**Chambre en fonte** zone des charges

[Illustration : Texture de canon]
**Canon alésé** bouche ouverte → cible

- Coule puis alèse les trois pièces.

- Termine la culasse avec un axe et son bloc de culasse, puis ajoute le *Quick-Firing Mechanism*.

- Aligne les pièces et soude les jonctions avec le *Cannon Welder*.

- Place le tube sur un *Cannon Mount* ou une *Cannon Carriage*.

- Charge **un projectile puis une Powder Charge** depuis la culasse, referme, assemble et tire.

**Pour ce premier essai, reste à une seule Powder Charge.** La fonte soudée ne tolère qu’un point de contrainte : une charge atteint déjà cette limite.

02

## Choisir le métal selon le canon visé

Les matériaux ne sont pas de simples variantes esthétiques : ils fixent la pression supportée, la vitesse minimale par longueur de tube et parfois le type de rupture.

[Illustration : Lingot de fonte]

### Fonte · Cast Iron

Entrée de gamme. Faible tolérance, mais suffisante pour apprendre le système et tirer avec une seule charge.

[Illustration : Lingot de bronze]

### Bronze

Bon matériau intermédiaire : résistant, soudable sans malus et compatible avec les culasses coulissantes.

[Illustration : Lingot d’acier]

### Acier · Steel

Très résistant et indispensable aux canons avancés, mais les soudures lui infligent un malus de contrainte important.

[Illustration : Lingot de Nethersteel]

### Nethersteel

Le matériau le plus solide. Il ne se soude pas : ses pièces doivent être produites connectées dans une même structure.

Matériau

Résistance

Vitesse minimale / tube

Rupture

Malus si soudé

Fer forgé

1

2,00

Rupture locale

0

Fonte

2

2,00

Fragmentation

1

Bronze

4

1,33

Rupture locale

0

Acier

8

1,00

Fragmentation

2

Nethersteel

10

0,67

Fragmentation

Non soudable

Comment fabriquer chaque métal ?

- **Fonte :** fais fondre du fer dans un bassin fermé par un *Basin Foundry Lid*.

- **Bronze :** alliage de cuivre et d’étain fondu.

- **Acier :** chaîne de traitement du mod, puis fusion avant coulée.

- **Nethersteel :** matériau de fin de progression à produire puis fondre pour les pièces les plus solides.

Utilise JEI/EMI pour les quantités exactes de ta recette serveur : le tutoriel décrit ici la chaîne et les contraintes du mod.

03

## Couler les pièces dans un moule en sable

Le métal est d’abord liquéfié, puis pompé dans une structure de *Cannon Cast* entourée de sable de moulage.

[Illustration : Lingot de métal]
**Faire fondre** Bassin + Foundry Lid

[Illustration : Cannon Cast]
**Former le moule** Empiler les formes

[Illustration : Sable de moulage]
**Enrober** Casting Sand

[Illustration : Moule rempli]
**Pomper** Remplir de métal

[Illustration : Pièce à aléser]
**Refroidir** Puis retirer le sable

**Comparateur :** un signal de 0 à 14 indique le remplissage ; 15 indique que la coulée est complète.

Contrairement au texte générique de Ponder, la version 5.11.7 utilise un temps de refroidissement lié au métal, pas à la taille de la pièce.

### Fonte et bronze

**2 minutes** · 2 400 ticks

### Acier

**3 minutes** · 3 600 ticks

### Nethersteel

**5 minutes** · 6 000 ticks

Quantités de métal demandées par forme

Forme

Fluide

Équivalent lingots

Très petite

630 mB

7

Petite

810 mB

9

Moyenne

1 080 mB

12

Grande

1 260 mB

14

Très grande

1 800 mB

20

Extrémité / culasse coulissante / culasse à vis

810 mB

9

Canon d’autocanon

270 mB

3

Culasse ou ressort d’autocanon

360 mB

4

04

## Aléser, compléter et relier les pièces

Une pièce sortie du moule n’est pas encore un canon. Elle doit être percée, complétée si nécessaire et connectée au reste du tube.

[Illustration : Foret de canon]

### Cannon Drill

Monte la pièce sur un *Mechanical Bearing* comme un tour, aligne le foret, fournis de l’eau et synchronise correctement les vitesses. Longueur maximale : **32 blocs** .

[Illustration : Mécanisme de culasse]

### Pièces incomplètes

Culasse coulissante : axe + bloc de culasse du même métal. Culasse à vis : axe + verrou à vis. Culasse d’autocanon : extracteur de matériau. Ressort : *Recoil Spring*.

[Illustration : Cannon Welder]

### Soudure

Deux pièces séparées ne deviennent pas automatiquement un seul canon. Aligne le même matériau et le même type, puis soude chaque jonction avec le *Cannon Welder*.

[Illustration : Canon en acier]

### Pièces built-up

Les canons renforcés en acier et Nethersteel sont assemblés par couches concentriques, puis chauffés **5 minutes** par défaut pour les solidariser.

Pièce built-up

Couches nécessaires

Canon simple

Très petite

Canon renforcé

Très petite + petite

Chambre

Très petite + petite + moyenne

Chambre renforcée

+ grande

Chambre épaisse

Les cinq tailles, jusqu’à très grande

**Le nombre affiché sur le Cannon Welder est son usure, pas la solidité du canon.** La pénalité réelle de soudure est une propriété séparée du matériau.

05

## Comprendre la pression avant de charger

La puissance du tir vient des propulseurs ; la sécurité dépend de la pièce la plus faible, de la culasse et d’un éventuel malus de soudure.

Contrainte sûre = min(résistance du matériau, limite de la culasse) − malus de soudure

Culasse

Fonte

Bronze

Acier

Nethersteel

Coulissante

2

4

4

—

Rapide

2

2

2

—

À vis

—

—

8

10

[Illustration : Powder Charge]

### Powder Charge

**Puissance 2** et **contrainte 1** . Plusieurs charges peuvent être alignées tant que le canon les supporte.

[Illustration : Big Cartridge]

### Big Cartridge

Jusqu’à **4 niveaux** . Chaque niveau ajoute puissance 2 et contrainte 0,5. Une seule grosse cartouche par tir, mais elle peut coexister avec des Powder Charges.

**Piège majeur :** une culasse rapide en acier soudée obtient 2 de limite, moins 2 de malus, donc **0 de contrainte sûre** . Ce n’est pas une bonne combinaison pour un canon fonctionnel.

Risques par défaut en cas de mauvais chargement

- **Projectile coincé / squib :** 25 % de risque.

- **Charge engagée dans le tube :** 20 % de risque de rupture.

- **Surcharge :** 50 % de risque.

- **Vide interrompant l’allumage :** 33 % de risque.

- **Charge humide :** puissance divisée par deux ; une charge humide en première position ne s’allume pas.

06

## Charger dans le bon ordre

À l’intérieur du canon, l’ordre va toujours de la culasse vers la bouche : propulseur, puis projectile. Depuis la culasse ouverte, le projectile entre donc généralement en premier.

[Illustration : Charge propulsive]
**Arrière** charge côté culasse

[Illustration : Projectile]
**Projectile** devant la charge

[Illustration : Bouche du canon]
**Bouche** sortie libre →

[Illustration : Tête de refouloir]

### Ram Rod

Portée manuelle : **5 blocs** , force 3. Il pousse les munitions dans le tube. Son utilisation coûte de la faim selon la distance déplacée.

[Illustration : Tête de tire-bourre]

### Worm

Portée manuelle : **5 blocs** . Il retire une munition ou une charge mal placée sans devoir reconstruire le canon.

### Cannon Loader

Version mécanisée du refouloir. Longueur maximale par défaut : **64 blocs** . Le canon normal doit être désassemblé pendant cette opération.

### Culasse rapide

Elle permet le rechargement alors que le canon reste assemblé. Ouverture : 5 ticks ; délai de tir : 40 ticks.

Un gros canon valide doit avoir **exactement une ouverture** — la bouche — et **une extrémité fermée** — la culasse.

07

## Assembler, pointer et tirer

Le tube ne tire pas seul : il doit être monté sur un affût capable de l’assembler et de recevoir les commandes.

[Illustration : Cannon Mount]

### Cannon Mount

L’entrée latérale gère le tangage ; l’entrée inférieure gère la rotation. La face avant reçoit le signal de tir, la face arrière assemble ou désassemble.

### Fixed Cannon Mount

Affût fixe et plus simple quand aucune rotation complexe n’est nécessaire.

### Cannon Carriage

Affût mobile pilotable. Par défaut : clic gauche pour tirer, touche **C** pour le mode de pointage. La molette règle la cadence des autocanons.

La longueur maximale d’un canon assemblé est de **64 blocs** . Le bloc *Yaw Controller* existe dans les données, mais n’a pas de recette : le *Cannon Mount* actuel intègre déjà ses interfaces de rotation.

08

## Les autocanons : cartouches, chargeurs et cadence

Un autocanon est plus compact qu’un gros canon. Il demande une culasse complétée, un ressort de recul, un tube et éventuellement une bouche.

[Illustration : Texture d’autocanon en acier]

### Longueur maximale

Fonte : **3** blocs · Bronze : **5** · Acier : **7** . Dépasser cette longueur rend l’arme invalide.

[Illustration : Conteneur de munitions]

### Autocannon Ammo Container

Capacité par défaut : **64 cartouches d’autocanon** ou **128 cartouches de mitrailleuse** .

[Illustration : Cartouche d’autocanon]

### Cartouches

Assemble une douille avec un projectile compatible. L’arme extrait les cartouches depuis son conteneur et rejette les étuis.

### Cadence par redstone

Un signal de 1 à 15 règle respectivement : **10, 15, 20, 25, 30, 40, 50, 60, 80, 100, 120, 150, 200, 240 ou 300 coups/minute** .

09

## Choisir le projectile adapté

Les obus ne remplissent pas tous le même rôle. Certains font des dégâts directs, d’autres explosent, dispersent des sous-projectiles ou transportent un fluide.

[Illustration : Solid Shot]

### Solid Shot

Projectile plein, simple et robuste pour l’impact direct.

[Illustration : AP Shot]

### AP Shot

Conçu pour mieux traverser les blocs et blindages.

[Illustration : HE Shell]

### HE Shell

Explosion : **8** contre les blocs et **12** contre les entités.

[Illustration : AP Shell]

### AP Shell

Combine pénétration et charge explosive ; accepte une fusée de base.

[Illustration : Shrapnel Shell]

### Shrapnel Shell

Libère **50 fragments** à la détonation.

[Illustration : Grapeshot]

### Grapeshot

Projette **25 éléments** pour arroser une zone proche.

[Illustration : Fluid Shell]

### Fluid Shell

Transporte **2 000 mB** et forme des paquets de 500 mB.

[Illustration : Smoke Shell]

### Smoke Shell

Crée un écran de fumée pendant **15 secondes** .

[Illustration : Mortar Stone]

### Mortar Stone

Munition rudimentaire supportant jusqu’à **6 charges** .

[Illustration : Munition AP d’autocanon]

### AP Autocannon

**14 dégâts** de base, orientés pénétration.

[Illustration : Munition Flak]

### Flak Autocannon

**10 dégâts** et **15 fragments** ; ajoute une fusée pour une détonation utile.

[Illustration : Munition de mitrailleuse]

### Machine Gun Round

**8 dégâts** de base et stockage deux fois plus dense.

10

## Régler la manière dont l’obus détonne

Les fusées sont des composants de déclenchement. Monte la fusée compatible sur l’obus avant le chargement.

[Illustration : Impact Fuze]

### Impact Fuze

Détonation à l’impact. Chance de déclenchement par défaut : **67 %** .

[Illustration : Inertia Fuze]

### Inertia Fuze

Réagit à la décélération. Chance : **90 %** , durabilité 3.

[Illustration : Timed Fuze]

### Timed Fuze

Explose après le délai programmé ; utile pour les tirs en cloche.

[Illustration : Proximity Fuze]

### Proximity Fuze

Détecte une cible proche après **5 ticks** d’armement.

Il existe aussi des variantes retardées et câblées. JEI/EMI indique quels obus acceptent une fusée de nez ou de base.

11

## Automatiser sans perdre de vue la sécurité

Le mod est conçu pour fonctionner avec les bras mécaniques, convoyeurs, chargeurs et signaux redstone de Create.

### Batterie de culasse rapide

Prépare projectile et charge sur un convoyeur, ouvre la culasse, introduis les éléments, referme puis autorise le tir. La culasse rapide évite de désassembler le canon.

### Autocanon à chargeurs

Alimente un *Ammo Container* rempli de cartouches, puis utilise la redstone pour choisir la cadence. Prévois l’évacuation des étuis.

### Ligne de fonderie

Fais fondre le métal, remplis les moules par pompes, lis les comparateurs et ne libère les pièces que lorsque le signal atteint 15.

Une automatisation fiable doit empêcher mécaniquement le tir si la culasse est ouverte, si le canon est en cours de chargement ou si la séquence n’a pas confirmé la présence du projectile.

12

## Pourquoi mon canon ne fonctionne pas ?

Avant de reconstruire toute l’arme, passe cette liste dans l’ordre.

### Il refuse de s’assembler

- Une seule bouche ouverte et une culasse fermée.
- Pièces alignées et réellement connectées.
- Jonctions séparées correctement soudées.
- Pas plus de 64 blocs.
- Culasse incomplète réellement terminée.

### Il s’assemble, mais ne tire pas

- Signal envoyé sur la bonne face de l’affût.
- Culasse fermée.
- Charge sèche et au contact de la chaîne d’allumage.
- Projectile devant les propulseurs.
- Aucun vide au milieu du chargement.

### Le projectile reste dans le tube

- Ajoute de la puissance sans dépasser la résistance.
- Réduis la longueur ou les frottements du tube.
- Retire le projectile avec le Worm avant un nouvel essai.
- Ne tire jamais une seconde munition derrière un squib.

### Le canon explose

- Recalcule la contrainte totale des charges.
- Vérifie la limite propre à la culasse.
- Applique le malus de soudure.
- Ne place aucune charge dans une section de tube non prévue.
- Évite l’acier soudé avec culasse rapide.

Réglages serveur importants

- **ALL_DAMAGE :** dégâts complets aux blocs et entités.

- **NO_EXPLOSIVE_DAMAGE :** conserve les impacts et la pénétration, mais empêche les explosions de détruire les blocs.

- **NO_DAMAGE :** neutralise les dégâts aux blocs.

Ces options permettent de garder l’artillerie pour le jeu et les événements sans transformer chaque tir d’essai en chantier de reconstruction.

**Référence :** guide établi à partir de `createbigcannons-5.11.7+mc.1.21.1.jar`, de ses recettes, configurations, propriétés de munitions et scènes Ponder. Les icônes visibles ici proviennent du même fichier de mod.

---

## Source actuelle : big-cannons-recipes.js

- Un seul axe, un seul matériau et toutes les jonctions connectées.
- L’arrière doit être fermé et l’avant ouvert ; aucun bloc **[Unbored / Non alésé]** ou **[Incomplete / Incomplet]** .
- Le jeu accepte n’importe quel mélange compatible de **[Chambers / Chambres]** et de **[Barrels / Canons]** . En pratique, place les chambres à l’arrière pour les propulseurs et les canons devant. La longueur maximale par défaut est 64 blocs.

### [Autocannon / Autocanon]

Il est possible d’assembler un autocanon plus long jusqu’à la limite globale de 64 blocs, mais avec les défaillances actives un projectile dépassant la longueur utile du matériau peut rester coincé dans le tube.

C

## Volumes des moules

Quantité consommée par une pièce ou une couche haute d’un bloc.

**Recette des moules :** chaque **[Cast Mould / Moule de coulée]** s’obtient en passant 1 **[Log / Rondin]** dans une **[Mechanical Saw / Scie mécanique]** . Choisis ensuite la recette de découpe correspondant à la forme voulue.

Empile plusieurs couches verticalement pour couler plusieurs pièces en une opération : le volume est multiplié par le nombre de couches.

D

## Canons primitifs

Les deux familles fabriquées directement à l’établi.

E

## Fonte et bronze

Deux familles coulées en une seule masse, puis alésées.

### [Sliding Breechblock / Bloc coulissant]

**3 lingots du matériau + 2 [Cogwheels / Roues dentées].**
`· I ·
C I C
· I ·`

### [Quickfiring Mechanism / Mécanisme de tir rapide]

**1 [Lever / Levier] + 1 [Cogwheel / Roue dentée] + 1 [Large Cogwheel / Grande roue dentée].**
`· · L
c C ·`

**Formule finale :** une **[Cannon End / Extrémité de canon]** , une **[Sliding Breech / Culasse coulissante]** ou une **[Quick-Firing Breech / Culasse à tir rapide]** à l’arrière + au moins un bloc **[Chamber / Chambre]** ou **[Barrel / Canon]** . Toutes les pièces doivent être du même matériau ; l’ordre conseillé est **[Chambers / Chambres]** puis **[Barrels / Canons]** .

F

## Acier et Nethersteel

Chaque couche est coulée, alésée, emboîtée puis chauffée.

### [Steel Sliding Breechblock / Bloc coulissant en acier]

3 [Steel Ingots / Lingots d’acier] + 2 [Cogwheels / Roues dentées].

### [Screw Lock / Verrou à vis]

3 lingots d’acier ou de Nethersteel en ligne + 1 [Shaft / Arbre] centré au-dessus.

**Disponibilités :** l’acier propose les **[Sliding Breech / Culasse coulissante]** , **[Quick-Firing Breech / Culasse à tir rapide]** et **[Screw Breech / Culasse à vis]** . Le Nethersteel ne propose que la **[Screw Breech / Culasse à vis]** . Une culasse à tir rapide en acier se fabrique en appliquant le mécanisme rapide à une culasse coulissante en acier terminée.

G

## Autocanons

La même chaîne existe en fonte, bronze et acier.

### [Breech Extractor / Extracteur de culasse]

1 lingot du matériau → **[Sequenced Assembly / Assemblage séquencé]** : 3 passages de **[Cutting / Découpe]** .

### [Recoil Spring / Ressort de recul]

1 [Iron Plate / Plaque de fer] découpée donne 1 [Spring Wire / Fil de ressort] ; 1 [Steel Plate / Plaque d’acier] en donne 3. Puis : 1 fil → **[Sequenced Assembly / Assemblage séquencé]** avec 3 passages de **[Pressing / Pressage]** .

**Ne mélange pas les matériaux :** une culasse en bronze n’accepte pas une suite de canons en acier. Les longueurs utiles 3 / 5 / 7 comptent la culasse et le ressort éventuel.

H

## Contrôle avant montage

La formule est correcte si ces cinq conditions sont vraies.

- Chaque pièce est finie : aucun nom **[Unbored / Non alésé]** ou **[Incomplete / Incomplet]** .
- Toutes les pièces appartiennent à la même famille de matériau.
- Le tube suit un axe unique et chaque jonction est connectée ou soudée.
- Il n’existe qu’une extrémité arrière fermée et la bouche avant reste ouverte.
- La structure ne dépasse pas 64 blocs ; pour éviter les projectiles coincés, l’autocanon reste dans sa longueur utile de 3 / 5 / 7 blocs.
