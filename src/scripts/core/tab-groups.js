(() => {
  const groups = new Map();

  function initializeTabList(tabList) {
    const tabs = [...tabList.querySelectorAll(':scope > [role="tab"]')];
    if (!tabs.length) return;

    const panels = tabs.map((tab) => document.getElementById(tab.getAttribute('aria-controls'))).filter(Boolean);
    const storageKey = tabList.dataset.tabStorage;

    function select(selectedTab, remember = true, scrollToStart = false) {
      tabs.forEach((tab) => {
        const selected = tab === selectedTab;
        tab.classList.toggle('active', selected);
        tab.setAttribute('aria-selected', String(selected));
        tab.tabIndex = selected ? 0 : -1;
      });

      panels.forEach((panel) => {
        const selected = panel.id === selectedTab.getAttribute('aria-controls');
        panel.classList.toggle('active', selected);
        panel.hidden = !selected;
      });

      if (remember && storageKey) {
        try {
          localStorage.setItem(storageKey, selectedTab.id);
        } catch (_) {
          /* Storage is optional. */
        }
      }
      document.dispatchEvent(new CustomEvent('regalade:tutorial-content-changed'));

      if (scrollToStart) {
        const selectedPanel = document.getElementById(selectedTab.getAttribute('aria-controls'));
        const parentPanel = tabList.closest('[role="tabpanel"]');
        const scrollTarget = parentPanel || selectedPanel;
        scrollTarget?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => select(tab, true, true));
      tab.addEventListener('keydown', (event) => {
        if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();
        const nextIndex =
          event.key === 'Home'
            ? 0
            : event.key === 'End'
              ? tabs.length - 1
              : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
        tabs[nextIndex].focus();
        select(tabs[nextIndex], true, true);
      });
    });

    let initial = tabs.find((tab) => tab.getAttribute('aria-selected') === 'true') || tabs[0];
    if (storageKey) {
      try {
        const saved = localStorage.getItem(storageKey);
        initial = tabs.find((tab) => tab.id === saved || tab.id.endsWith(`-${saved}-tab`)) || initial;
      } catch (_) {
        /* Storage is optional. */
      }
    }
    select(initial, false);

    tabs.forEach((tab) =>
      groups.set(tab.id, {
        select: () => select(tab, true, true),
      }),
    );
  }

  document.querySelectorAll('[role="tablist"][data-tab-storage]').forEach(initializeTabList);

  document.querySelectorAll('[data-open-tab]').forEach((button) => {
    button.addEventListener('click', () => {
      const group = groups.get(button.dataset.openTab);
      if (!group) return;
      group.select();
    });
  });
})();
