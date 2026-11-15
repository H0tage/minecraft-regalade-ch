# Workflow du site Régalade

Ce document sépare volontairement les petites corrections éditoriales des modifications qui exigent une vérification visuelle complète.

## 1. Contenu express

### À utiliser pour

- corriger ou remplacer un texte existant ;
- modifier un titre, un libellé ou une valeur ;
- changer un lien ou une adresse ;
- corriger une faute ;
- mettre à jour une version ou une information déjà affichée.

Le composant, ses classes, sa position et son apparence doivent rester identiques.

### Procédure

1. Repérer le fichier qui constitue la source du contenu.
2. Modifier uniquement ce contenu avec `apply_patch`.
3. Copier le fichier modifié dans `dist` lorsqu’il y possède un équivalent.
4. Exécuter uniquement le contrôle directement lié au fichier :
   - `node --check` si un fichier JavaScript a été touché ;
   - contrôle éditorial si le texte du site a été modifié ;
   - `git diff --check` avant le commit.
5. Regrouper la synchronisation, le commit et le push dans une seule opération.
6. S’arrêter après le push réussi.

### À ne pas faire

- lancer un serveur local ;
- ouvrir le site dans un navigateur ;
- faire une capture d’écran ;
- inspecter toutes les pages ;
- surveiller le workflow GitHub Pages ;
- attendre le déploiement avant de répondre.

Une correction éditoriale doit normalement demander une édition et une publication, pas une séance complète de contrôle qualité visuel.

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
2. Modifier la source et synchroniser `dist`.
3. Exécuter les contrôles techniques adaptés.
4. Lancer une prévisualisation locale.
5. Vérifier visuellement les formats pertinents.
6. Corriger les problèmes observés.
7. Faire un commit et pousser.
8. Confirmer le déploiement lorsqu’il est utile de garantir le résultat en ligne.

## Cas frontière

Si un simple texte est difficile à modifier parce qu’il est enfoui dans un gros fichier monolithique, la difficulté vient de l’architecture du site. Il faut alors effectuer une seule refactorisation structurelle pour donner à ce contenu une source claire. Les modifications suivantes pourront utiliser le workflow express.

Dans le doute, le critère n’est pas la taille apparente de la demande, mais son effet : si la géométrie, le style ou le comportement ne changent pas, il s’agit normalement d’une modification de contenu.
