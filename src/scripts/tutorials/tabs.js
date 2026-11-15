(() => {
  const tabs = [...document.querySelectorAll('#tutoriels > .tutorial-tabs [role="tab"]')];
  const panels = [...document.querySelectorAll('#tutoriels > .tutorial-content > .tutorial-panel[role="tabpanel"]')];
  const storageKey = 'regalade.tutorial.active';

  function selectTutorial(tab, remember = true) {
    tabs.forEach(item => {
      const selected = item === tab;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-selected', String(selected));
      item.tabIndex = selected ? 0 : -1;
    });
    panels.forEach(panel => {
      const selected = panel.id === tab.getAttribute('aria-controls');
      panel.classList.toggle('active', selected);
      panel.hidden = !selected;
    });
    if (remember) {
      try { localStorage.setItem(storageKey, tab.id); } catch (_) { /* Storage is optional. */ }
    }
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectTutorial(tab));
    tab.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const nextIndex = event.key === 'Home'
        ? 0
        : event.key === 'End'
          ? tabs.length - 1
          : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
      tabs[nextIndex].focus();
      selectTutorial(tabs[nextIndex]);
    });
  });

  let initialTab = tabs[0];
  try {
    const savedId = localStorage.getItem(storageKey);
    initialTab = tabs.find(tab => tab.id === savedId) || initialTab;
  } catch (_) { /* Storage is optional. */ }
  if (initialTab) selectTutorial(initialTab, false);
})();
