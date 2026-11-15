(() => {
  const root = document.querySelector('#tutorial-jei');
  const input = root?.querySelector('[data-jei-filter-search]');
  const table = root?.querySelector('.jei-filter-table');
  const empty = root?.querySelector('[data-jei-filter-empty]');
  const tableWrapper = table?.closest('.jei-table-wrap');
  if (!input || !table || !empty || !tableWrapper) return;

  const rows = [...table.querySelectorAll('tbody tr:not(.jei-category)')];
  const categories = [...table.querySelectorAll('tbody .jei-category')];

  function normalize(value) {
    return value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLocaleLowerCase('fr');
  }

  function update() {
    const query = normalize(input.value.trim());
    let visibleRows = 0;

    rows.forEach((row) => {
      const visible = !query || normalize(row.textContent).includes(query);
      row.hidden = !visible;
      if (visible) visibleRows += 1;
    });

    categories.forEach((category, index) => {
      const nextCategory = categories[index + 1];
      let row = category.nextElementSibling;
      let hasVisibleRow = false;

      while (row && row !== nextCategory) {
        if (!row.hidden) hasVisibleRow = true;
        row = row.nextElementSibling;
      }

      category.hidden = !hasVisibleRow;
    });

    empty.hidden = visibleRows > 0;
    tableWrapper.hidden = visibleRows === 0;
  }

  input.addEventListener('input', update);
})();
