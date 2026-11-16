(() => {
  const apiUrl = 'https://fvuvfdwdmwjpkrxxslgp.supabase.co/functions/v1/registrations';
  const list = document.querySelector('#member-list');
  const form = document.querySelector('#signup-form');
  const submitButton = document.querySelector('#signup-submit');
  const feedback = document.querySelector('#signup-feedback');
  const toast = document.querySelector('#toast');
  const dateFormatter = new Intl.DateTimeFormat('fr-CH', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  function makeCell(value, className) {
    const cell = document.createElement('td');
    cell.textContent = value;
    if (className) cell.className = className;
    return cell;
  }

  function showTableMessage(message, className = 'empty') {
    const row = document.createElement('tr');
    const cell = makeCell(message, className);
    cell.colSpan = 3;
    row.append(cell);
    list.replaceChildren(row);
  }

  function renderMembers(members) {
    if (!members.length) {
      showTableMessage('La liste attend son premier nom.');
      return;
    }

    const fragment = document.createDocumentFragment();
    members.forEach((member) => {
      const row = document.createElement('tr');
      const date = new Date(member.created_at);
      row.append(
        makeCell(member.minecraft_username),
        makeCell(member.discovery_source),
        makeCell(Number.isNaN(date.getTime()) ? '' : dateFormatter.format(date)),
      );
      fragment.append(row);
    });
    list.replaceChildren(fragment);
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    window.setTimeout(() => toast.classList.remove('show'), 3200);
  }

  function setFeedback(message, state = '') {
    feedback.textContent = message;
    feedback.dataset.state = state;
  }

  async function readJson(response) {
    try {
      return await response.json();
    } catch (_) {
      return {};
    }
  }

  async function loadMembers() {
    try {
      const response = await fetch(apiUrl, { headers: { Accept: 'application/json' } });
      const body = await readJson(response);
      if (!response.ok) throw new Error(body.message || 'La liste est momentanément indisponible.');
      renderMembers(Array.isArray(body.registrations) ? body.registrations : []);
    } catch (_) {
      showTableMessage('Impossible de charger la liste pour le moment.', 'empty registration-error');
    }
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const minecraftUsername = document.querySelector('#pseudo').value.trim();
    const discoverySource = document.querySelector('#source').value.trim();
    const website = document.querySelector('#website').value;

    submitButton.disabled = true;
    submitButton.textContent = 'Enregistrement…';
    setFeedback('Enregistrement en cours…');

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ minecraftUsername, discoverySource, website }),
      });
      const body = await readJson(response);
      if (!response.ok) throw new Error(body.message || 'L’inscription n’a pas pu être enregistrée.');

      form.reset();
      setFeedback('Ton pseudo a bien été ajouté.', 'success');
      showToast('Ton pseudo a été ajouté à la liste.');
      await loadMembers();
    } catch (error) {
      setFeedback(error.message, 'error');
      showToast(error.message);
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = 'Ajouter mon nom à la liste';
    }
  });

  loadMembers();
})();
