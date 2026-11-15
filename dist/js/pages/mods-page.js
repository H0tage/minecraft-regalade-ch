(() => {
  const detailMods = window.REGALE_MOD_DETAILS;
  const modIcons = new Map(window.REGALE_MOD_ICONS);
  const grid = document.querySelector('#mods-grid');
  const count = document.querySelector('#mod-count');
  const tabs = document.querySelector('#mod-tabs');
  const search = document.querySelector('#mod-search');
  const title = document.querySelector('#mods-title');
  const categoryOrder = ['Ingénierie, énergie et transports','Cuisine, boissons et activités paisibles','Construction, décoration et éclairage','Vie communautaire, confort et interface','Exploration et monde vivant','Économie et missions','Qualité de vie et retours visuels','Administration et performances','Automatisation Create complémentaire'];
  let category = 'tous';
  const categories = categoryOrder.filter(item => detailMods.some(mod => mod[1] === item));

  title.textContent = `Les ${detailMods.length} mods principaux du serveur`;
  tabs.innerHTML = ['tous', ...categories]
    .map(item => `<button class="mod-tab ${item === 'tous' ? 'active' : ''}" data-category="${item}">${item === 'tous' ? 'Tous les mods' : item}</button>`)
    .join('');

  function renderDetailedMods() {
    const query = search.value.toLowerCase();
    const matches = detailMods.filter(mod => (category === 'tous' || mod[1] === category) && mod.join(' ').toLowerCase().includes(query));
    count.textContent = `${matches.length} mod${matches.length > 1 ? 's' : ''} affiché${matches.length > 1 ? 's' : ''} · ${detailMods.length} mods principaux, sans les librairies ni dépendances.`;
    let previousCategory = '';
    grid.innerHTML = matches.map(mod => {
      const groupTitle = category === 'tous' && mod[1] !== previousCategory ? `<h2 class="mod-group-title">${mod[1]}</h2>` : '';
      previousCategory = mod[1];
      return `${groupTitle}<a class="card mod mod-link" target="_blank" rel="noreferrer" href="${mod[4]}"><span class="tag">${mod[1]}</span><div class="mod-heading"><img class="mod-icon" loading="lazy" src="${modIcons.get(mod[0])}" alt="" width="38" height="38"><h3>${mod[0]}</h3></div><p class="mod-version">Version ${mod[2]}</p><p class="mod-description">${mod[3]}</p></a>`;
    }).join('') || '<p>Aucun mod ne correspond à cette recherche.</p>';
  }

  tabs.addEventListener('click', event => {
    const button = event.target.closest('.mod-tab');
    if (!button) return;
    category = button.dataset.category;
    tabs.querySelectorAll('.mod-tab').forEach(tab => tab.classList.toggle('active', tab === button));
    renderDetailedMods();
  });
  search.addEventListener('input', renderDetailedMods);
  renderDetailedMods();
})();
