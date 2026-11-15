# Instructions pour le site Régalade

Avant toute modification, lire `WORKFLOW-SITE.md` et classer la demande dans l’un des deux parcours.

- **Contenu express** : texte, lien, libellé, chiffre ou information dans un élément existant, sans changement de structure, de style ou de comportement.
- **Modification structurelle** : création, suppression, déplacement, HTML, CSS, JavaScript, responsive, navigation, asset ou problème visuel.

Pour le contenu express, ne pas lancer de navigateur ni attendre GitHub Pages. Modifier la source, lancer `node scripts/site-workflow.mjs express`, puis faire un seul commit et un seul push.

Pour une modification structurelle, lancer `node scripts/site-workflow.mjs structure`, puis réserver la prévisualisation aux seules pages et largeurs touchées.

Ne jamais modifier `dist` manuellement. Il est entièrement régénéré par le workflow.
