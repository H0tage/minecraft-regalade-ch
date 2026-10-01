(() => {
  const officialDetails = {
    "Small Ships": [
      "Navires pilotables pour le transport et l’exploration maritime en survie.",
      "https://modrinth.com/mod/small-ships"
    ],
    "Let's Do: Candlelight — Farm & Charm Compat": [
      "Compatibilité entre Candlelight et Farm & Charm pour les recettes et contenus culinaires.",
      "https://modrinth.com/mod/lets-do-candlelight-farm-charm-compat"
    ],
    "Amendments": [
      "Améliore de nombreux blocs vanilla avec des variantes décoratives et de nouvelles interactions.",
      "https://modrinth.com/mod/amendments"
    ],
    "Trading Post": [
      "Ajoute un comptoir regroupant les échanges des villageois proches dans une interface unique.",
      "https://modrinth.com/mod/trading-post"
    ],
    "AmbientSounds": [
      "Enrichit l’ambiance sonore des biomes et environnements. Mod client.",
      "https://modrinth.com/mod/ambientsounds"
    ],
    "Collector's Album": [
      "Ajoute 900 cartes à collectionner dans des paquets obtenus sur les monstres. Configuration retenue : +1 cœur par palier (maximum +6), aucun bonus pour 30 cartes quelconques et bonus de base réservé aux 30 mythiques uniques de chaque catégorie ; datapack requis.",
      "https://modrinth.com/mod/collectors-album"
    ],
    "Villager Names": [
      "Attribue automatiquement des noms aux villageois et affiche leur profession dans l’interface d’échange.",
      "https://modrinth.com/mod/villager-names-serilum/version/1.21.1-8.5-fabric%2Bforge%2Bneo"
    ],
    "Doggy Talents Next": [
      "Développe les loups apprivoisés avec talents, commandes, animations, accessoires et mécanismes évitant de perdre définitivement son compagnon.",
      "https://modrinth.com/mod/doggy-talents-next/version/1.19.1"
    ],
    "FTB Backups 3": [
      "Effectue automatiquement des sauvegardes compressées du monde avec rotation configurable.",
      "https://www.curseforge.com/minecraft/mc-mods/ftb-backups-3"
    ],
    "spark": [
      "Outil de profilage pour diagnostiquer les ralentissements, les ticks et l’usage mémoire du serveur.",
      "https://modrinth.com/mod/spark"
    ],
    "ImmediatelyFast": [
      "Optimise plusieurs chemins de rendu afin d’améliorer les FPS. Mod client.",
      "https://modrinth.com/mod/immediatelyfast"
    ],
    "Subtle Effects": [
      "Ajoute de petits effets visuels et particules pour rendre le monde plus vivant. Principalement client.",
      "https://modrinth.com/mod/subtle-effects"
    ]
  };

  window.REGALE_MOD_DETAILS = window.REGALE_MOD_DETAILS.map(([name, category, version, description, link]) => {
    const override = officialDetails[name];
    return override ? [name, category, version, override[0], override[1]] : [name, category, version, description, link];
  });
})();
