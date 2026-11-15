# Workflow du site Régalade

## Règle fondamentale

Le dossier `src` est la seule source applicative.

Ne jamais modifier directement :

- `index.html` à la racine ;
- `styles` à la racine ;
- `js` à la racine ;
- `dist`.

Ces sorties sont supprimées puis reconstruites par `npm run build`. La racine générée permet de conserver le déploiement GitHub Pages actuel. `dist` alimente l’hébergement déclaré dans `.openai/hosting.json`.

Les fichiers de `contenus-textuels` sont des exports de lecture. Ils ne remplacent pas la source canonique située dans `src`.

## Trouver le bon fichier

```powershell
npm run locate -- "fragment reconnaissable du texte"
```

L’outil recherche récursivement dans les pages et scripts source.

## 1. Contenu express

### À utiliser pour

- corriger ou remplacer un texte existant ;
- modifier un titre, un libellé ou une valeur ;
- changer un lien ou une adresse ;
- corriger une faute ;
- mettre à jour une version ou une information déjà affichée.

Le composant, ses classes, sa position, son apparence et son comportement doivent rester identiques.

### Procédure

1. Localiser la source dans `src`.
2. Modifier uniquement le fichier source concerné.
3. Lancer `node scripts/site-workflow.mjs express`.
4. Examiner le diff.
5. Effectuer un seul commit et un seul push.

Le workflow reconstruit les deux sorties publiques, ajoute les versions de cache et vérifie automatiquement les références, la syntaxe, les identifiants, l’absence de CSS incorporé et la synchronisation du déploiement.

## 2. Modification structurelle

### À utiliser pour

- créer, retirer ou déplacer une section ;
- modifier la mise en page ;
- changer les menus ou les onglets ;
- intervenir sur le CSS, le responsive ou la typographie ;
- ajouter une interaction JavaScript ;
- ajouter une image ou une icône ;
- refondre un tutoriel ;
- résoudre un problème visuel.

### Procédure

1. Identifier les fichiers dans `src` et leurs dépendances.
2. Modifier les sources.
3. Lancer `npm run qa`.
4. Démarrer `npm run serve` si une inspection visuelle est nécessaire.
5. Vérifier les pages touchées aux largeurs pertinentes parmi 390, 800 et 1366 pixels.
6. Corriger les problèmes observés.
7. Relancer `npm run qa`.
8. Examiner le diff, puis effectuer un seul commit et un seul push.

## Arborescence

```text
src/
  index.html
  pages/
  styles/
    core/
    components/
    pages/
    tutorials/
  scripts/
    core/
    data/
    pages/
    tutorials/
assets/
scripts/
dist/                 sortie générée
index.html            sortie générée
styles/               sortie générée
js/                   sortie générée
```

## Garde-fous

Le contrôle technique refuse :

- une balise `<style>` ou un attribut `style` dans la source HTML ;
- la création dynamique d’une feuille de style en JavaScript ;
- une inclusion HTML non résolue ;
- une référence locale absente ;
- un identifiant dupliqué ;
- un script invalide ;
- une sortie désynchronisée ;
- le caractère éditorial interdit défini par le projet.

## Cas frontière

Si un texte est difficile à modifier parce qu’il se trouve dans un grand gabarit JavaScript, une modification structurelle dédiée peut extraire ce gabarit dans un fichier de contenu séparé. Cette extraction ne doit être faite qu’une fois. Les corrections suivantes utiliseront le workflow express.
