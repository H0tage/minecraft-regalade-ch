(() => {
  const installationView = document.getElementById('installation');
  const installationContent = installationView?.querySelector('.installation-page-content');
  const installationTabs = [...(installationView?.querySelectorAll('.installation-page-tabs [role="tab"]') || [])];
  const installPanel = document.getElementById('tutorial-install');
  const connectionPanel = document.getElementById('tutorial-connection');
  const tutorialTabs = document.querySelector('#tutoriels > .tutorial-tabs');
  const tutorialContent = document.querySelector('#tutoriels > .tutorial-content');

  if (!installationView || !installationContent || !installPanel || !connectionPanel || !tutorialTabs || !tutorialContent) return;

  document.getElementById('tutorial-install-tab')?.remove();
  document.getElementById('tutorial-connection-tab')?.remove();

  installPanel.classList.remove('active');
  connectionPanel.classList.remove('active');
  installPanel.setAttribute('aria-labelledby', 'installation-guide-tab');
  connectionPanel.setAttribute('aria-labelledby', 'installation-connection-tab');
  installationContent.append(installPanel, connectionPanel);

  const tutorialOrder = [
    ['tutorial-economy-tab', 'tutorial-economy'],
    ['tutorial-create-first-factory-tab', 'tutorial-create-first-factory'],
    ['tutorial-big-cannons-tab', 'tutorial-big-cannons'],
    ['tutorial-stargates-tab', 'tutorial-stargates']
  ];

  tutorialOrder.forEach(([tabId, panelId]) => {
    const tab = document.getElementById(tabId);
    const panel = document.getElementById(panelId);
    if (tab) tutorialTabs.append(tab);
    if (panel) tutorialContent.append(panel);
  });

  const storageKey = 'regalade.installation.active';

  function select(selectedTab, remember = true) {
    installationTabs.forEach(tab => {
      const selected = tab === selectedTab;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
    });

    [installPanel, connectionPanel].forEach(panel => {
      const selected = panel.id === selectedTab.getAttribute('aria-controls');
      panel.hidden = !selected;
      panel.classList.toggle('active', selected);
    });

    if (remember) {
      try { localStorage.setItem(storageKey, selectedTab.id); } catch (_) { /* Storage is optional. */ }
    }
  }

  installationTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => select(tab));
    tab.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const nextIndex = event.key === 'Home'
        ? 0
        : event.key === 'End'
          ? installationTabs.length - 1
          : (index + (event.key === 'ArrowRight' ? 1 : -1) + installationTabs.length) % installationTabs.length;
      installationTabs[nextIndex].focus();
      select(installationTabs[nextIndex]);
    });
  });

  let initialTab = installationTabs[0];
  try {
    const savedId = localStorage.getItem(storageKey);
    initialTab = installationTabs.find(tab => tab.id === savedId) || initialTab;
  } catch (_) { /* Storage is optional. */ }

  if (initialTab) select(initialTab, false);
})();
