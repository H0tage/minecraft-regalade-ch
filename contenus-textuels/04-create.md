# Create — description générale et première usine

> Copie éditoriale locale du contenu actuellement présent sur le site.
> Tu peux modifier les titres et paragraphes directement dans ce fichier, puis demander à Codex de synchroniser ces changements avec le site.
> Ne relance pas le script d’export après avoir commencé tes corrections : il remplacerait cette copie par le texte du site.

## Source actuelle : create-first-factory.js

Description générale
Ma première usine

Des machines, des engrenages et probablement un bordel monstrueux

# Create: C'est quoi ?

En gros, Create transforme Minecraft en gigantesque atelier mécanique. Le mod te file des pièces, des machines et différentes façons de les assembler. Après, c’est à toi de construire tout et n'importe quoi avec.

01

L’idée de base

## Énormément de possibilités

Les mêmes composants peuvent servir à faire une boulangerie, une scierie, une ferme, une gare ou une giga-usine qui traverse trois bâtiments parce que, visiblement, tu avais du temps.

**Faire tourner des trucs** Avec des roues à eau, des moulins , une machine à vapeur ou même une simple manivelle

→
**Déplacer des trucs** Avec des Arbres de transmission, des roues dentées, des boites d'engrenages, des courroies, des transmissions pas chaines, des tapis roulants...

→
**Brancher une machine dessus** Presse, meule, mixeur, scie, perceuse, vnetilos... et plein d’autres joyeusetés

### Transmission mécanique

Ici, l’énergie est une rotation visible. Si ton axe ne tourne pas, ta machine ne fait rien. Un peu en mode steampunk

### Pas de bloc qui fait tout

Une usine, c’est plusieurs machines, du transport et du stockage que tu relies pour obtenir le résultat voulu.

### Tout se passe devant toi

Les objets circulent sur les tapis roulants, les engrenages tournent et les machines travaillent réellement dans le monde. Tu vois en live ce qui se passe, ce que tu produits.

02

Le truc fondamental

## Tout doit tourner, mais pas n’importe comment

### RPM : à quelle vitesse ça tourne

Plus il y a de RPM (rotation par minute), plus les machines travaillent vite. En revanche, elles demandent aussi davantage de puissance.

### SU : combien de machines ça supporte

Les unités de contrainte (SU) représentent la charge supportée par ta source. Si tu branches trop de machines, tout le réseau devient **surchargé** et décide collectivement de ne plus rien faire.

**Source de rotation** crée le mouvement et fournit la capacité (Par exemple: roue à eau)
→

**Transmission** transporte ou modifie la rotation. (Par exemple, un axe de transmission)
→

**Machine** utilise la rotation pour effectuer une tâche. (Par exemple: une découpeuse à patate)

**La version courte :** la source conditionne combien de machines tu peux alimenter ; les engrenages décident à quelle vitesse et dans quel sens elles tournent.

03

Les grandes familles

## Chaque bloc a un boulot

### Faire et transmettre la rotation

Les roues à eau produisent la rotation. Les axes de transmission, engrenages et boîtes de transmission permettent ensuite de l’emmener jusqu’aux machines.

### Transformer les matériaux

Les meules, presses mécaniques, mélangeurs, scies et ventilateurs permettent de broyer, presser, mélanger, découper ou traiter tes ressources.

### Déplacer tout ce bazar

Les tapis roulants, entonnoirs, goulottes, tunnels et coffres déplacent, filtrent, distribuent et stockent les objets sans que tu doives tout porter toi-même.

### Contrôler l’usine

La clé, les lunettes d’ingénieur, les embrayages, inverseurs, compteurs de vitesse et liaisons Redstone permettent de régler, mesurer, commander ou arrêter ton installation.

04

Les procédés

## Faire plein de trucs avec ressources

Une même matière peut être broyée, pressée, lavée, mélangée ou passer par plusieurs machines à la suite. Selon le procédé choisi, le rendement et les produits obtenus peuvent changer.

**Broyage** broyer avec une meule

**Pressage** aplatir avec une presse mécanique

**Mélange** mélanger dans un bassin

**Traitement par ventilation** souffler à travers de l’eau, du feu ou de la lave

**Récolte mécanique** casser ou récolter automatiquement

**Assemblage séquencé** enchaîner plusieurs opérations

**Le réflexe qui sauve la vie** Commence par l’objet final dans JEI, puis remonte ses recettes à l’envers. Tu sauras quelles machines construire et dans quel ordre les relier, au lieu de poser cinquante blocs au hasard et de pleurer après.

05

La progression générale

## Tu commences avec une roue et tu finis avec le chemin de fer

Début
### Andésite

Roues à eau, axes de transmission, tapis roulants et premières machines de transformation. Tout le nécessaire pour une petite usine.

→
Intermédiaire
### Laiton

Le laiton, produit avec du cuivre, du zinc et un brûleur à Blaze chauffé, ouvre la logistique précise, les filtres avancés et les bras mécaniques.

→
Infrastructure
### Vapeur et trains

Les moteurs à vapeur alimentent de grands réseaux. Les trains relient ensuite les usines, les villes et les joueurs.

Rien ne t’oblige à tout faire dans cet ordre ni à construire une centrale nucléaire au bout de deux jours. Tu peux très bien rester avec de petites roues à eau, ou monter une grosse centrale commune avec d’autres joueurs.

06

Avant de devenir fou

## Trois trucs à connaître, vraiment

**1**

### JEI pour savoir quoi fabriquer

JEI (à droite de ton inventaire) permet de trier les recettes. Survole un objet et regarde sa recette ou ses usages.

**2**

### W pour comprendre le machin

Maintiens `W` sur un composant Create : le jeu te montre directement une animation de son fonctionnement. (C'est trop bien fait ça).

**3**

### Les lunettes quand ça ne marche plus

Regarde les axes et les machines avec les lunettes d’ingénieur pour lire leur vitesse, leur capacité et leur consommation.

**Bon, maintenant on construit un truc** Le parcours suivant utilise tout ça pour fabriquer une ferme automatisée de fer et de silex, de zéro, sans te demander de deviner la moitié des étapes.
Ouvrir « Ma première usine »

De la pierre au fer

# Construire une première usine Create

Cette installation transforme automatiquement une source infinie de Cobblestone en **Iron Ingots** et en **Flint** . Chaque module sera construit et testé séparément avant de former l’usine complète.

01

Vue d’ensemble

## Comprendre la chaîne avant de poser un bloc

La Cobblestone est générée gratuitement, broyée en Gravel, lavée puis compactée. Le Flint sort sur une branche séparée.

**Cobblestone** source infinie
→

**Mechanical Drill** récolte
→

**Millstone** Gravel
→

**Bulk Washing** eau + Encased Fan
→

**Iron Nuggets** 12,5 % par Gravel
→

**Compacting** 9 nuggets
→

**Iron Ingot** stockage final

**Flint** 25 % par Gravel

**≈ 72 Cobblestones** pour obtenir statistiquement les neuf nuggets d’un lingot

**Production lente** mais passive, renouvelable et sans ferme à golems

**Une Water Wheel** suffit à faire fonctionner ce prototype à sa vitesse normale

02

Avant de construire

## Préparer les outils et la place

### Les deux objets à garder sur toi

**Wrench**
Oriente et démonte proprement les composants Create. Un clic droit modifie le bloc ; Maj + clic droit le récupère.

**Engineer's Goggles**
Affichent la vitesse, la capacité et la consommation lorsque tu regardes le réseau.

### Ponder avant de deviner

- Ouvre ton inventaire
- Survole une machine Create
- Maintiens `W`
- Regarde son animation avant de la poser

Ponder montre les connexions et les mouvements. JEI reste la référence pour les recettes exactes du pack.

**Emplacement conseillé** Prévois environ 12 × 8 blocs, avec deux blocs libres sous le sol pour faire passer les Shafts. Enferme la lave afin qu’aucun objet ne puisse tomber dedans.

03

Liste de courses

## Fabriquer les composants du prototype

Les machines fixes sont exactes. La quantité de transmission contient une petite marge afin que tu puisses espacer les modules sans devoir recompter chaque Shaft.

**1 Water Wheel** 1 Shaft + 8 Planks

**1 Mechanical Drill** 3 Andesite Alloys + 1 Iron Ingot + 1 Andesite Casing

**1 Millstone** 1 Cogwheel + 1 Andesite Casing + 1 Stone

**1 Encased Fan** 1 Shaft + 1 Andesite Casing + 1 Propeller

**1 Mechanical Press** 1 Shaft + 1 Andesite Casing + 1 Iron Block

**1 Basin** 5 Andesite Alloys

### Transmission

16 Shafts, 8 Cogwheels, 2 Gearboxes et 4 Belt Connectors forment une réserve confortable.

### Logistique

4 Andesite Funnels, 4 Chutes, 3 coffres ou Barrels et quelques blocs de construction.

### Fluides

Deux seaux d’eau et un seau de lave : un jeu pour la Cobblestone, un autre point d’eau pour le lavage.

**Cette usine demande du fer avant d’en produire.** Il faut notamment un Iron Block pour la Mechanical Press. Elle devient autonome après sa construction ; elle ne se construit pas à partir de rien.

04

Module énergie

## Obtenir une première rotation

**1**

### Place la Water Wheel

Son axe doit pointer dans la direction où partira ton réseau mécanique.

**2**

### Fais couler l’eau autour

L’eau doit pousser la roue dans un seul sens. Deux courants opposés peuvent annuler son mouvement.

**3**

### Ajoute un Shaft

Le premier Shaft doit tourner immédiatement. S’il reste immobile, ne construis pas la suite.

**4**

### Regarde avec les Goggles

À sa vitesse normale, la petite roue tourne à 8 RPM et fournit 256 SU.

**Test obligatoire** La roue et le premier Shaft tournent continuellement sans intervention du joueur.

05

Module matière première

## Générer et récolter la Cobblestone

Water→Cobblestone←Lava
Mechanical Drill→Belt ou stockage tampon

- Construis d’abord un générateur vanilla et vérifie que le bloc central devient bien de la Cobblestone.
- Enferme la lave avec des blocs non inflammables.
- Place le Mechanical Drill face au bloc central, pointe dirigée vers la Cobblestone.
- Relie son axe au réseau de la Water Wheel.
- Récupère les blocs sous ou derrière la zone de forage avec un Belt, un Funnel ou un Hopper.

**Test obligatoire** La Cobblestone se reforme après chaque forage et aucun objet ne brûle dans la lave.

06

Module broyage

## Transformer la Cobblestone en Gravel

### La Millstone possède une entrée et un inventaire interne

Les objets entrent par le dessus. La rotation arrive par un Shaft placé dessous ou par un Cogwheel contre le côté.

**1 Cobblestone** entrée par le dessus
→
**Millstone** 250 unités de traitement
→
**1 Gravel** conservée dans la machine

### Premier essai manuel

Jette quelques Cobblestones sur le dessus. Attends la fin du broyage puis fais un clic droit à main vide pour récupérer la Gravel.

### Automatiser la sortie

La Gravel ne tombe pas spontanément. Place un Andesite Funnel sur un côté ou un Hopper en dessous pour vider l’inventaire interne vers le Belt suivant.

**Test obligatoire** Une Cobblestone déposée au-dessus devient une Gravel qui peut être extraite sans casser la Millstone.

07

Module lavage

## Laver la Gravel avec un Encased Fan

Le traitement vient du souffle : l’Encased Fan doit pousser de l’air à travers une source d’eau avant que ce courant atteigne les objets.

**Encased Fan** alimenté par un Shaft
→

**Water** dans le courant d’air
→

**Gravel sur Belt ou Depot** reste exposée au souffle
→

**Iron Nuggets + Flint** après les particules de lavage

- Pose le Fan avec sa face ouverte dirigée vers la future zone de traitement.
- Relie son arrière au réseau rotatif.
- Maintiens une source d’eau entre le Fan et le Belt sans laisser l’eau envahir l’atelier.
- Dépose une Gravel à la main sur le Belt ou un Depot.
- Attends la fin des particules : le résultat est aléatoire.

**25 %** de chance de produire un Flint

**12,5 %** de chance de produire un Iron Nugget

**Indépendantes** les deux chances sont calculées séparément

**Test obligatoire** La Gravel affiche les particules de lavage puis disparaît. Plusieurs essais peuvent être nécessaires avant de voir un Iron Nugget.

08

Module compactage

## Transformer les nuggets en lingots

**Mechanical Press** rotation par le haut
↓
**Basin** un bloc sous la Press
↓
**Iron Ingot** sortie latérale filtrée

### La recette appliquée

Quand la Basin contient neuf Iron Nuggets, la Press descend et applique la recette carrée standard : **9 nuggets → 1 lingot** .

- Pose la Basin au sol.
- Place la Mechanical Press exactement un bloc au-dessus.
- Alimente l’axe supérieur de la Press.
- Verse au moins neuf Iron Nuggets dans la Basin.
- Ajoute un Funnel filtré sur Iron Ingot pour extraire le résultat.

**Test obligatoire** Neuf nuggets disparaissent et un Iron Ingot est extrait. Si huit nuggets attendent, tout fonctionne normalement : il en manque simplement un.

09

Relier les modules

## Faire circuler les objets et la rotation

Pense l’usine comme deux réseaux superposés : les objets avancent en surface ; la rotation circule sous le sol ou derrière les machines.

**Objets** Drill→Millstone→Washing→Tri→Basin

**Rotation** Water Wheel→Shaft principal↗Drill · Millstone · Fan · Press

### Pour les objets

Utilise les Belts pour les trajets horizontaux, les Chutes pour descendre et les Funnels pour entrer dans une machine ou en sortir.

### Pour la rotation

Utilise les Shafts pour une ligne droite, les Cogwheels pour décaler un axe et les Gearboxes pour répartir un même mouvement dans plusieurs directions.

### Construis de gauche à droite

Ne connecte un nouveau module qu’après son essai manuel. Une panne reste alors limitée à la dernière section ajoutée.

10

Séparer les sorties

## Envoyer chaque objet au bon endroit

**Sortie du lavage** Flint et Iron Nuggets sur le même Belt
↙↘

**Funnel : Iron Nugget** vers la Basin

**Funnel : Flint** vers son coffre

- Place un Andesite Funnel entre le Belt et l’entrée de la Basin.
- Glisse un Iron Nugget dans sa case de filtre.
- Place un deuxième Funnel sur le même Belt, dirigé vers le coffre à Flint.
- Glisse un Flint dans son filtre.
- Ajoute un coffre de débordement en bout de Belt : aucun objet ne doit rester bloqué au sol.

**Orientation :** la flèche du Funnel indique le sens de déplacement. Utilise la Wrench si le Funnel pousse dans la mauvaise direction.

11

Vitesse et capacité

## Comprendre RPM et SU sans cours d’ingénieur

### RPM : la vitesse

Plus un axe tourne vite, plus les machines terminent rapidement leur travail. Changer le rapport entre un grand et un petit Cogwheel peut modifier cette vitesse.

### SU : la charge supportée

Chaque machine consomme une partie de la capacité. Si la demande dépasse la capacité disponible, tout le réseau devient **Overstressed** et s’arrête.

**Water Wheel** + 256 SU disponibles

**Mechanical Drill** − 32 SU

**Millstone** − 32 SU

**Encased Fan** − 16 SU

**Mechanical Press** − 64 SU

**Prototype complet** 144 / 256 SU · marge de 112 SU

**N’accélère pas encore le réseau.** Une augmentation de RPM augmente aussi la consommation. Termine d’abord une usine stable à 8 RPM.

12

Diagnostic

## Réparer l’usine par symptômes

**Rien ne tourne** Vérifie le courant de la Water Wheel puis le premier Shaft.

**Tout s’arrête d’un coup** Le réseau est probablement Overstressed. Lis sa capacité avec les Goggles.

**Le Drill ne touche pas la pierre** Sa pointe doit faire face au bloc de Cobblestone régénéré.

**La Millstone ne reçoit rien** L’entrée des objets se trouve sur le dessus.

**La Gravel reste dans la Millstone** Ajoute un Funnel latéral ou un Hopper sous la machine.

**La Gravel ne se lave pas** Le souffle doit traverser l’eau avant d’atteindre les objets.

**La Press attend** La Basin doit contenir neuf Iron Nuggets et la Press doit être alimentée.

**Les sorties se mélangent** Contrôle le filtre et le sens de chaque Andesite Funnel.

13

Après le premier lingot

## Améliorer sans reconstruire toute l’usine

### Produire des Iron Sheets

Dérive une partie des Iron Ingots vers une seconde Mechanical Press posée au-dessus d’un Belt ou d’un Depot.

### Mesurer le réseau

Ajoute un Speedometer et un Stressometer avant de modifier les rapports de Cogwheels.

### Arrêt d’urgence

Place un Clutch sur le Shaft principal pour arrêter l’usine avec un signal Redstone.

### Gagner de la place

Le générateur mécanique de Create Cobblestone peut remplacer le couple eau–lave lorsque tu maîtrises déjà la chaîne.

**Usine terminée** Tu sais désormais produire de la rotation, connecter plusieurs machines, transformer une ressource et distribuer ses sorties. Tous les futurs projets Create réutilisent ces mêmes principes.
