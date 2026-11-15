(() => {
  const nav = document.querySelector('#main-navigation');
  const menuButton = document.querySelector('.menu');
  const links = [...nav.querySelectorAll('a')];
  const views = [...document.querySelectorAll('.view')];
  const description = document.querySelector('meta[name="description"]');
  const pages = {
    accueil: [
      'Régalade Minecraft',
      'Découvre Régalade, un serveur communautaire Minecraft 1.21.1 centré sur Create, la construction et le jeu en groupe.',
    ],
    installation: [
      'Installation et connexion | Régalade',
      'Installe le modpack Régalade et rejoins le serveur Minecraft pas à pas.',
    ],
    tutoriels: [
      'Tutoriels | Régalade',
      'Tutoriels détaillés pour Create, Create Big Cannons, les Stargates et l’économie du serveur Régalade.',
    ],
    mods: ['Mods | Régalade', 'Consulte la liste triée et documentée des mods du serveur Minecraft Régalade.'],
    reglement: ['Règlement | Régalade', 'Le règlement simple et bienveillant du serveur Minecraft Régalade.'],
    statut: [
      'État du serveur | Régalade',
      'Consulte l’état d’avancement et la disponibilité du serveur Minecraft Régalade.',
    ],
    inscription: ['Inscription | Régalade', 'Inscris ton intérêt pour le serveur communautaire Minecraft Régalade.'],
  };
  let initialRoute = true;

  function setMenu(open) {
    nav.classList.toggle('open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  }

  function route() {
    const requested = location.hash.slice(1) || 'accueil';
    const id = views.some((view) => view.id === requested) ? requested : 'accueil';
    const activeView = views.find((view) => view.id === id);

    views.forEach((view) => view.classList.toggle('active', view === activeView));
    links.forEach((link) => {
      const active = link.getAttribute('href') === `#${id}`;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });

    const [title, pageDescription] = pages[id];
    document.title = title;
    description.setAttribute('content', pageDescription);
    setMenu(false);
    window.scrollTo(0, 0);

    if (!initialRoute) {
      const heading = activeView.querySelector('h1');
      if (heading) {
        heading.tabIndex = -1;
        heading.focus({ preventScroll: true });
      }
    }
    initialRoute = false;
  }

  window.addEventListener('hashchange', route);
  menuButton.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('open')) {
      setMenu(false);
      menuButton.focus();
    }
  });
  document.addEventListener('click', (event) => {
    if (nav.classList.contains('open') && !nav.contains(event.target) && !menuButton.contains(event.target))
      setMenu(false);
  });
  route();

  const list = document.querySelector('#member-list');
  const form = document.querySelector('#signup-form');
  const toast = document.querySelector('#toast');
  let members = [];

  try {
    const stored = JSON.parse(localStorage.getItem('regalade-members') || '[]');
    if (Array.isArray(stored)) members = stored;
  } catch (_) {
    members = [];
  }

  function makeCell(value, className) {
    const cell = document.createElement('td');
    cell.textContent = value;
    if (className) cell.className = className;
    return cell;
  }

  function renderMembers() {
    list.replaceChildren();
    if (!members.length) {
      const row = document.createElement('tr');
      const cell = makeCell('La liste attend son premier nom.', 'empty');
      cell.colSpan = 3;
      row.append(cell);
      list.append(row);
      return;
    }

    const fragment = document.createDocumentFragment();
    members.forEach((member) => {
      const row = document.createElement('tr');
      row.append(makeCell(member.name), makeCell(member.source), makeCell(member.date));
      fragment.append(row);
    });
    list.append(fragment);
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    window.setTimeout(() => toast.classList.remove('show'), 3200);
  }

  renderMembers();
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector('#pseudo').value.trim();
    const source = document.querySelector('#source').value.trim();

    if (members.some((member) => member.name.toLowerCase() === name.toLowerCase())) {
      showToast('Ce pseudo est déjà dans cette liste locale.');
      return;
    }

    members.push({
      name,
      source,
      date: new Intl.DateTimeFormat('fr-CH', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date()),
    });
    localStorage.setItem('regalade-members', JSON.stringify(members));
    renderMembers();
    form.reset();
    showToast('Ton nom a été ajouté à la maquette.');
  });

  const rules = document.querySelector('#reglement .rules');
  const faq = document.querySelector('#statut .faq');
  const consequence = [...document.querySelectorAll('#statut .faq details')].find((item) =>
    item.querySelector('summary')?.textContent.includes('contrevi'),
  );

  if (consequence && rules) {
    const card = document.createElement('article');
    const heading = document.createElement('h2');
    card.className = 'card rule-consequences';
    heading.textContent = consequence.querySelector('summary').textContent;
    card.append(heading, ...consequence.querySelectorAll('p'));
    rules.after(card, faq);
    consequence.remove();
  }
})();
