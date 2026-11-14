(() => {
  const root = document.querySelector('#tutoriels');
  const tabList = root?.querySelector(':scope > .tutorial-tabs');
  const content = root?.querySelector(':scope > .tutorial-content');
  if (!root || !tabList || !content || root.querySelector('.tutorial-workspace')) return;

  const workspace = document.createElement('div');
  workspace.className = 'tutorial-workspace';

  const masthead = document.createElement('header');
  masthead.className = 'tutorial-masthead';
  masthead.innerHTML = `
    <div class="tutorial-masthead-cue tutorial-masthead-cue-left">
      <strong>Choix du tutoriel</strong><i aria-hidden="true">↓</i>
    </div>
    <div class="tutorial-masthead-cue tutorial-masthead-cue-content">
      <strong>Contenu du tuto</strong><i aria-hidden="true">↓</i>
    </div>
    <div class="tutorial-masthead-cue tutorial-masthead-cue-right">
      <strong>Navigation dans le tuto</strong><i aria-hidden="true">↓</i>
    </div>`;

  const library = document.createElement('aside');
  library.className = 'tutorial-library';
  library.setAttribute('aria-label', 'Choisir un tutoriel');
  library.innerHTML = `
    <div class="tutorial-library-sticky">
      <button class="tutorial-library-toggle" type="button" aria-expanded="false"></button>
    </div>`;
  library.querySelector('.tutorial-library-sticky').append(tabList);

  const reader = document.createElement('div');
  reader.className = 'tutorial-reader';
  reader.append(content);

  const chapters = document.createElement('aside');
  chapters.className = 'tutorial-chapters';
  chapters.setAttribute('aria-label', 'Chapitres du tutoriel');
  chapters.innerHTML = `
    <div class="tutorial-chapters-sticky">
      <button class="tutorial-chapter-toggle" type="button" aria-expanded="false">Afficher les chapitres</button>
      <nav class="tutorial-chapter-list" aria-label="Dans ce tutoriel"></nav>
    </div>`;

  workspace.append(library, reader, chapters);
  root.append(masthead, workspace);

  const libraryToggle = library.querySelector('.tutorial-library-toggle');
  const chapterToggle = chapters.querySelector('.tutorial-chapter-toggle');
  const chapterList = chapters.querySelector('.tutorial-chapter-list');
  let observedSections = [];
  let sectionObserver = null;

  function activeTab() {
    return tabList.querySelector('[role="tab"][aria-selected="true"]') || tabList.querySelector('[role="tab"].active');
  }

  function activePanel() {
    const tab = activeTab();
    return tab ? content.querySelector(`#${CSS.escape(tab.getAttribute('aria-controls'))}`) : null;
  }

  function isVisible(element) {
    if (!element || element.hidden) return false;
    return !element.closest('[hidden]');
  }

  function chapterSections(panel) {
    if (!panel) return [];
    const preferred = [
      ...panel.querySelectorAll('.install-step, .sg-step[id], .cbc-mission[id], .cbc-manual-section[id], .eco-section[id]')
    ].filter(isVisible);
    if (preferred.length) return preferred;
    return [...panel.querySelectorAll('section[id], article[id]')].filter(isVisible);
  }

  function chapterTitle(section, index) {
    const heading = section.querySelector('h2, h3');
    return heading?.textContent.trim() || `Chapitre ${index + 1}`;
  }

  function updateActiveChapter(id) {
    chapterList.querySelectorAll('a').forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
    });
  }

  function observeSections() {
    sectionObserver?.disconnect();
    if (!observedSections.length || !('IntersectionObserver' in window)) return;
    sectionObserver = new IntersectionObserver(entries => {
      const visible = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]) updateActiveChapter(visible[0].target.id);
    }, { rootMargin: '-12% 0px -72% 0px', threshold: 0 });
    observedSections.forEach(section => sectionObserver.observe(section));
  }

  function refresh() {
    const tab = activeTab();
    const panel = activePanel();
    libraryToggle.textContent = tab ? `Tutoriel · ${tab.textContent.trim()}` : 'Choisir un tutoriel';

    observedSections = chapterSections(panel);
    observedSections.forEach((section, index) => {
      if (!section.id) section.id = `${panel.id}-chapitre-${index + 1}`;
    });

    if (!observedSections.length) {
      chapterList.innerHTML = '<p class="tutorial-chapter-empty">Ce tutoriel tient sur une seule page.</p>';
      observeSections();
      return;
    }

    chapterList.innerHTML = observedSections.map((section, index) =>
      `<a href="#${section.id}">${chapterTitle(section, index)}</a>`
    ).join('');
    chapterList.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', event => {
        const target = document.getElementById(link.hash.slice(1));
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        updateActiveChapter(target.id);
        chapters.classList.remove('open');
        chapterToggle.setAttribute('aria-expanded', 'false');
      });
    });
    updateActiveChapter(observedSections[0].id);
    observeSections();
  }

  libraryToggle.addEventListener('click', () => {
    const open = library.classList.toggle('open');
    libraryToggle.setAttribute('aria-expanded', String(open));
  });
  chapterToggle.addEventListener('click', () => {
    const open = chapters.classList.toggle('open');
    chapterToggle.setAttribute('aria-expanded', String(open));
  });

  tabList.addEventListener('click', event => {
    if (!event.target.closest('[role="tab"]')) return;
    library.classList.remove('open');
    libraryToggle.setAttribute('aria-expanded', 'false');
    requestAnimationFrame(refresh);
  });
  tabList.addEventListener('keydown', () => requestAnimationFrame(refresh));
  content.addEventListener('click', event => {
    if (event.target.closest('.cbc-switcher [role="tab"]')) requestAnimationFrame(refresh);
  });

  const changes = new MutationObserver(() => requestAnimationFrame(refresh));
  changes.observe(content, { subtree: true, attributes: true, attributeFilter: ['hidden', 'class'] });
  refresh();
})();
