# Workflow du site Régalade

Le site possède une seule source technique : les fichiers situés à la racine du dépôt. Le dossier `dist` est un résultat généré. Il ne doit jamais être modifié ou synchronisé manuellement.

Les fichiers de `contenus-textuels` servent d’interface éditoriale lisible. Après une modification dans ces documents, il faut reporter le changement dans la source technique correspondante, puis lancer le workflow. La commande `node scripts/locate-content.mjs "fragment du texte"` permet de trouver immédiatement le fichier concerné.

## 1. Contenu express

### À utiliser pour

- corriger ou remplacer un texte existant ;
- modifier un titre, un libellé ou une valeur ;
- changer un lien ou une adresse ;
- corriger une faute ;
- mettre à jour une version ou une information déjà affichée.

Le composant, ses classes, sa position et son apparence doivent rester identiques.

### Procédure

1. Localiser la source avec `node scripts/locate-content.mjs "fragment reconnaissable"` si elle n’est pas déjà connue.
2. Modifier uniquement le contenu concerné avec `apply_patch`.
3. Lancer `node scripts/site-workflow.mjs express`.
4. Examiner le diff, puis effectuer un seul commit et un seul push.
5. S’arrêter après le push réussi.

Cette commande régénère entièrement `dist`, ajoute automatiquement une version de cache aux CSS et JavaScript, contrôle les références locales, la syntaxe JavaScript, les identifiants HTML, la synchronisation des assets et les règles éditoriales.

### À ne pas faire

- copier manuellement un fichier dans `dist` ;
- lancer un serveur local ;
- ouvrir le site dans un navigateur ;
- faire une capture d’écran ;
- inspecter toutes les pages ;
- attendre le déploiement GitHub Pages.

## 2. Modification structurelle

### À utiliser pour

- créer ou retirer une section ;
- déplacer du contenu ;
- changer la mise en page ;
- modifier les menus ou les onglets ;
- intervenir sur le CSS ou le responsive ;
- ajouter une interaction JavaScript ;
- ajouter des images ou des icônes ;
- refondre un tutoriel ;
- résoudre un problème visuel.

### Procédure

1. Identifier les fichiers et les dépendances concernés.
2. Modifier les sources avec `apply_patch`.
3. Lancer `node scripts/site-workflow.mjs structure`.
4. Prévisualiser uniquement les pages touchées.
5. Vérifier les largeurs pertinentes parmi 390, 800 et 1366 pixels.
6. Corriger les problèmes observés.
7. Relancer le workflow structurel.
8. Effectuer un seul commit et un seul push.
9. Confirmer le déploiement uniquement si le changement concerne l’hébergement ou si le résultat en ligne doit absolument être garanti.

## Source et publication

- `index.html`, les CSS et les JavaScript racine constituent la source canonique.
- `assets` contient les fichiers publiés.
- `contenus-textuels` contient la copie éditoriale destinée aux corrections humaines.
- `dist` est supprimé et reconstruit par `scripts/build-site.mjs`.
- seuls les CSS et JavaScript réellement référencés par `index.html` sont envoyés dans `dist`.
- `.openai/hosting.json` publie `dist`.

## Cas frontière

Si un simple texte reste difficile à modifier parce qu’il est enfoui dans un fichier monolithique, il faut extraire le bloc concerné dans un fichier JavaScript dédié. Cette refactorisation ne doit être faite qu’une fois. Les corrections suivantes pourront alors suivre le parcours express.

Le critère principal reste l’effet du changement : si la géométrie, le style ou le comportement ne changent pas, il s’agit d’une modification de contenu.
