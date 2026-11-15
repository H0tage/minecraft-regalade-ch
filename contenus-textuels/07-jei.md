# JEI (fonctionnement et filtres par mod)

> Copie éditoriale locale du contenu actuellement présent sur le site.
> Tu peux modifier les titres et paragraphes directement dans ce fichier, puis demander à Codex de synchroniser ces changements avec le site.
> Ne relance pas le script d’export après avoir commencé tes corrections : il remplacerait cette copie par le texte du site.

## Source actuelle : src/content/tutorials/jei.html

Comprendre JEI

Filtres par mod

Le moteur de recherche qui t’évite de fabriquer au hasard

# JEI : trouver n’importe quelle recette

Le pack contient une quantité parfaitement raisonnable de machines, de poissons, de meubles, de canons et de trucs
dont personne ne connaît le nom. JEI range tout ça à droite de ton inventaire et t’explique comment le fabriquer.
Heureusement, parce qu’essayer de retenir toutes les recettes serait une idée catastrophique.

01

Le principe

## Trouver un objet, sa recette et son utilité

Ouvre ton inventaire. La grande liste à droite, c’est JEI. La barre tout en bas permet de chercher un objet sans
fouiller neuf pages de blocs presque identiques.

**1. Cherche l’objet**
Tape une partie de son nom dans la barre de recherche

→

**2. Survole-le et appuie sur `R`**
JEI affiche les recettes qui permettent de le fabriquer

→

**3. Appuie sur `U`**
JEI montre toutes les recettes dans lesquelles cet objet est utilisé

### `R` comme recette

Tu veux une Mechanical Press ? Survole-la, appuie sur `R` et JEI te montre ce qu’il faut mettre dans
la grille ou dans la machine appropriée.

### `U` comme utilisation

Tu viens de récupérer un matériau bizarre ? Appuie sur `U` pour savoir à quoi il sert avant de le
jeter dans le premier coffre venu.

**Si les touches ne répondent pas :** elles ont peut-être été modifiées. Cherche JEI dans le menu des
raccourcis du jeu pour retrouver ou changer les commandes.

02

La barre de recherche

## Passer de « le machin avec un engrenage » à trois résultats utiles

`presse`

### Chercher par nom

Quelques lettres suffisent. Tu n’as pas besoin de connaître le nom complet de l’objet.

`@create`

### Afficher un seul mod

Le préfixe `@` limite la liste aux objets du mod indiqué.

`@create presse`

### Combiner les deux

Tu peux filtrer un mod puis chercher un objet précis à l’intérieur.

Le second sous-onglet contient les codes `@...` utiles pour le pack. Certains identifiants n’ont pas le
même nom que le mod affiché en jeu, donc autant éviter de les deviner.

03

Les écrans de recette

## Comprendre ce que le jeu te demande réellement

JEI ne montre pas seulement l’établi. Il affiche aussi les recettes des fours, des machines Create, des bassins,
des presses, des ventilateurs et de tout ce que les autres mods ont décidé d’inventer.

**Entrées**
les objets et liquides à fournir

→

**Procédé**
la grille, la machine ou le traitement nécessaire

→

**Sortie**
ce que tu obtiens et en quelle quantité

### Regarde les onglets

Un objet peut avoir plusieurs méthodes de fabrication. Les onglets en haut changent de machine ou de procédé.

### Regarde les quantités

Une recette peut demander plusieurs exemplaires, un volume de liquide précis ou produire plusieurs sorties.

### Remonte la chaîne

Si un ingrédient est lui-même fabriqué, appuie sur `R` dessus et continue jusqu’aux matières de base.

04

Le truc vraiment pratique

## Voir les machines Create fonctionner avant de les construire

Create ajoute ses propres démonstrations animées. Tu peux donc passer d’une recette à une petite scène qui montre
comment placer la machine, par où arrivent les objets et ce qui doit tourner.

**1** Trouve un composant Create dans JEI

→

**2** Laisse la souris dessus

→

**3** Maintiens `W`

→

**4** Regarde la démonstration et change de scène si plusieurs sont proposées

**Si `W` ne fait rien :** l’objet n’a probablement pas de démonstration. JEI continuera
quand même d’afficher ses recettes et ses utilisations normalement.

05

Les bons réflexes

## Ne plus apprendre une recette par cœur

### Pars toujours de l’objet final

Cherche ce que tu veux construire, ouvre sa recette, puis remonte les ingrédients un par un. C’est beaucoup
plus simple que de fabriquer des machines au hasard en espérant qu’elles servent plus tard.

### Utilise `U` sur les matériaux inconnus

C’est le moyen le plus rapide de comprendre pourquoi un mod ajoute encore une nouvelle plaque de métal, une
poudre étrange ou un poisson dont personne n’avait besoin.

### Filtre quand la liste devient absurde

Un simple `@create` ou `@sgjourney` transforme plusieurs centaines d’objets en une liste
lisible.

### Ajoute les objets importants aux favoris

Par défaut, survole un objet et appuie sur `A`. Il restera à gauche de l’inventaire pendant que tu
prépares ton projet.

Les vrais identifiants du pack, sans jeu de devinettes

# Filtres JEI par mod

Tape le code dans la barre de recherche de JEI pour n’afficher que les objets du mod correspondant. Tu peux
ajouter un mot après le filtre, par exemple `@create train` ou `@chipped verre`.

01

Liste du pack

## Quel code taper dans JEI ?

Le tableau contient les mods qui ajoutent des objets ou des blocs utiles à consulter. Les bibliothèques, les mods
de performances et les modifications purement visuelles ne sont pas là, puisqu’ils ne donnent rien d’intéressant à
chercher dans JEI.

Rechercher un mod

La recherche fonctionne avec le nom du mod comme avec son code JEI.

Aucun mod ne correspond à cette recherche. Essaie avec un nom plus court.

Mod

Filtre JEI

Ingénierie, énergie et transports

Create

`@create`

Create Big Cannons

`@createbigcannons`

Create Crafts & Additions

`@createaddition`

Create Deco

`@createdeco`

Create Horse Power

`@createhorsepower`

Create Railways Navigator

`@createrailwaysnavigator`

Create Slice & Dice

`@sliceanddice`

Create: Bells & Whistles

`@bellsandwhistles`

Create: Chimneys

`@create_chimneys`

Create: Connected

`@create_connected`

Create: Copycats+

`@copycats`

Create: Diesel Generators

`@createdieselgenerators`

Create: Dragons Plus

`@create_dragons_plus`

Create: Enchantment Industry

`@create_enchantment_industry`

Create: Escalated

`@escalated`

Create: Extra Gauges

`@extra_gauges`

Create: Interiors

`@interiors`

Create: Numismatics

`@numismatics`

Create: Pattern Schematics

`@create_pattern_schematics`

Create: Security Program

`@create_security`

Create: Shuffle Filter

`@createshufflefilter`

Create: Steam 'n' Rails

`@railways`

Create: Tradeworks

`@tradeworks`

Create: Transmission!

`@createtransmission`

Create: Vibrant Vaults

`@create_vibrant_vaults`

Objets personnalisés du serveur

`@kubejs`

Small Ships

`@smallships`

Stargate Journey

`@sgjourney`

Stargate Journey: MoreGates

`@moregates`

Cuisine, pêche et activités paisibles

Brewin' and Chewin'

`@brewinandchewin`

Create: Bitterballen

`@create_bic_bit`

Farmer's Delight

`@farmersdelight`

Farmer's Respite

`@farmersrespite`

Let's Do: Bakery

`@bakery`

Let's Do: Camping

`@camping`

Let's Do: Candlelight

`@candlelight`

Let's Do: Farm & Charm

`@farm_and_charm`

Let's Do: Meadow

`@meadow`

Let's Do: Vinery

`@vinery`

Starcatcher

`@starcatcher`

Starcatcher's Delight

`@starcatcher_delight`

Construction, décoration et éclairage

Additional Lanterns

`@additionallanterns`

Amendments

`@amendments`

Another Furniture

`@another_furniture`

Architect's Palette

`@architects_palette`

Chalk

`@chalk`

Chipped

`@chipped`

Create Encased

`@createcasing`

Decorative Blocks Reborn

`@decorative_blocks`

FramedBlocks

`@framedblocks`

Handcrafted

`@handcrafted`

Immersive Paintings

`@immersive_paintings`

Macaw's Lights and Lamps

`@mcwlights`

Macaw's Windows

`@mcwwindows`

Rechiseled

`@rechiseled`

Rechiseled: Create

`@rechiseledcreate`

Snow! Real Magic!

`@snowrealmagic`

Supplementaries

`@supplementaries`

Exploration et monde vivant

Artifacts

`@artifacts`

Critters and Companions

`@crittersandcompanions`

Doggy Talents Next

`@doggytalents`

Lootr

`@lootr`

Vie communautaire, collection et confort

Buddycards

`@buddycards`

Create Buddycards

`@createbuddycards`

Delightful Buddycards

`@delightfulbuddycards`

Etched

`@etched`

Exposure

`@exposure`

Simple Radio

`@simpleradio`

Sophisticated Backpacks

`@sophisticatedbackpacks`

Storage Drawers

`@storagedrawers`

Straw Statues

`@strawstatues`

Trading Post

`@tradingpost`

**Un filtre paraît vide ?** Certains petits addons ajoutent surtout des recettes ou modifient les
objets d’un autre mod. Dans ce cas, cherche l’objet par son nom ou utilise le filtre du mod principal.
