(() => {
  const nav = document.querySelector('#main-navigation');
  const menuButton = document.querySelector('.site-menu');
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
})();
