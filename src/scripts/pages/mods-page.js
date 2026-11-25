(async () => {
  const grid = document.querySelector('#mods-grid');
  const count = document.querySelector('#mod-count');
  const tabs = document.querySelector('#mod-tabs');
  const search = document.querySelector('#mod-search');
  const title = document.querySelector('#mods-title');
  if (!grid || !count || !tabs || !search || !title) return;

  const response = await fetch('data/mods.json');
  if (!response.ok) throw new Error(`Impossible de charger la liste des mods (${response.status}).`);
  const mods = await response.json();
  const categories = [...new Set(mods.map((mod) => mod.category))];
  let category = 'tous';

  function createCategoryButton(value) {
    const button = document.createElement('button');
    button.className = `mod-tab${value === 'tous' ? ' active' : ''}`;
    button.dataset.category = value;
    button.textContent = value === 'tous' ? 'Tous les mods' : value;
    return button;
  }

  function createModCard(mod) {
    const card = document.createElement('a');
    card.className = 'card mod mod-link';
    card.target = '_blank';
    card.rel = 'noreferrer';
    card.href = mod.url;

    const tag = document.createElement('span');
    tag.className = 'tag';
    tag.textContent = mod.category;

    const heading = document.createElement('div');
    heading.className = 'mod-heading';
    const icon = document.createElement('img');
    icon.className = 'mod-icon';
    icon.loading = 'lazy';
    icon.src = mod.icon;
    icon.alt = '';
    icon.width = 38;
    icon.height = 38;
    const name = document.createElement('h3');
    name.textContent = mod.name;
    heading.append(icon, name);

    const version = document.createElement('p');
    version.className = 'mod-version';
    version.textContent = `Version ${mod.version}`;
    const description = document.createElement('p');
    description.className = 'mod-description';
    description.textContent = mod.description;
    card.append(tag, heading, version, description);
    return card;
  }

  function render() {
    const query = search.value.trim().toLocaleLowerCase('fr');
    const matches = mods.filter((mod) => {
      const inCategory = category === 'tous' || mod.category === category;
      const searchable = `${mod.name} ${mod.category} ${mod.version} ${mod.description}`.toLocaleLowerCase('fr');
      return inCategory && searchable.includes(query);
    });

    count.textContent = `${matches.length} mod${matches.length > 1 ? 's' : ''} affiché${matches.length > 1 ? 's' : ''} · ${mods.length} mods principaux, sans les librairies ni dépendances.`;
    grid.replaceChildren();

    let previousCategory = '';
    for (const mod of matches) {
      if (category === 'tous' && mod.category !== previousCategory) {
        const groupTitle = document.createElement('h2');
        groupTitle.className = 'mod-group-title';
        groupTitle.textContent = mod.category;
        grid.append(groupTitle);
        previousCategory = mod.category;
      }
      grid.append(createModCard(mod));
    }

    if (!matches.length) {
      const empty = document.createElement('p');
      empty.textContent = 'Aucun mod ne correspond à cette recherche.';
      grid.append(empty);
    }
  }

  title.textContent = `Les ${mods.length} mods principaux du serveur`;
  tabs.replaceChildren(...['tous', ...categories].map(createCategoryButton));
  tabs.addEventListener('click', (event) => {
    const button = event.target.closest('.mod-tab');
    if (!button) return;
    category = button.dataset.category;
    tabs.querySelectorAll('.mod-tab').forEach((tab) => tab.classList.toggle('active', tab === button));
    render();
  });
  search.addEventListener('input', render);
  render();
})().catch((error) => {
  console.error(error);
  const grid = document.querySelector('#mods-grid');
  if (grid) grid.textContent = 'La liste des mods ne peut pas être chargée pour le moment.';
});
