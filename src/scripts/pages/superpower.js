(() => {
  const projectUrl = 'https://fvuvfdwdmwjpkrxxslgp.supabase.co';
  const publishableKey = 'sb_publishable_730Nyzx5W3r3rFtaKyo13w_Qr_DCMyP';
  const adminApiUrl = `${projectUrl}/functions/v1/registrations-admin`;
  const sessionKey = 'regalade.admin.session';
  const loginCard = document.querySelector('#admin-login-card');
  const loginForm = document.querySelector('#admin-login-form');
  const loginButton = document.querySelector('#admin-login-button');
  const loginFeedback = document.querySelector('#admin-login-feedback');
  const dashboard = document.querySelector('#admin-dashboard');
  const adminFeedback = document.querySelector('#admin-feedback');
  const adminIdentity = document.querySelector('#admin-identity');
  const logoutButton = document.querySelector('#admin-logout');
  const memberList = document.querySelector('#admin-member-list');
  const toast = document.querySelector('#toast');
  const dateFormatter = new Intl.DateTimeFormat('fr-CH', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  function setFeedback(element, message, state = '') {
    element.textContent = message;
    element.dataset.state = state;
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    window.setTimeout(() => toast.classList.remove('show'), 3200);
  }

  async function readJson(response) {
    try {
      return await response.json();
    } catch (_) {
      return {};
    }
  }

  function readSession() {
    try {
      return JSON.parse(localStorage.getItem(sessionKey) || 'null');
    } catch (_) {
      return null;
    }
  }

  function saveSession(session) {
    localStorage.setItem(
      sessionKey,
      JSON.stringify({
        accessToken: session.access_token,
        refreshToken: session.refresh_token,
        expiresAt: Date.now() + session.expires_in * 1000,
        email: session.user?.email || '',
      }),
    );
  }

  function clearSession() {
    localStorage.removeItem(sessionKey);
  }

  async function refreshSession(session) {
    const response = await fetch(`${projectUrl}/auth/v1/token?grant_type=refresh_token`, {
      method: 'POST',
      headers: { apikey: publishableKey, 'Content-Type': 'application/json' },
      body: JSON.stringify({ refresh_token: session.refreshToken }),
    });
    const body = await readJson(response);
    if (!response.ok) throw new Error('La session administrateur a expiré.');
    saveSession(body);
    return readSession();
  }

  async function validSession() {
    let session = readSession();
    if (!session?.accessToken || !session?.refreshToken) return null;
    if (session.expiresAt <= Date.now() + 30000) session = await refreshSession(session);
    return session;
  }

  function makeCell(value, className) {
    const cell = document.createElement('td');
    cell.textContent = value;
    if (className) cell.className = className;
    return cell;
  }

  function showTableMessage(message, className = 'empty') {
    const row = document.createElement('tr');
    const cell = makeCell(message, className);
    cell.colSpan = 4;
    row.append(cell);
    memberList.replaceChildren(row);
  }

  async function adminRequest(method, body) {
    const session = await validSession();
    if (!session) throw new Error('La session administrateur a expiré.');
    const response = await fetch(adminApiUrl, {
      method,
      headers: {
        apikey: publishableKey,
        Authorization: `Bearer ${session.accessToken}`,
        Accept: 'application/json',
        ...(body ? { 'Content-Type': 'application/json' } : {}),
      },
      ...(body ? { body: JSON.stringify(body) } : {}),
    });
    const responseBody = await readJson(response);
    if (!response.ok) throw new Error(responseBody.message || 'L’action administrateur a échoué.');
    return responseBody;
  }

  async function deleteRegistration(registration, button) {
    if (!window.confirm(`Supprimer l’inscription de ${registration.minecraft_username} ?`)) return;
    button.disabled = true;
    try {
      await adminRequest('DELETE', { id: registration.id });
      showToast(`${registration.minecraft_username} a été supprimé de la liste.`);
      await loadRegistrations();
    } catch (error) {
      setFeedback(adminFeedback, error.message, 'error');
      button.disabled = false;
    }
  }

  function renderRegistrations(registrations) {
    if (!registrations.length) {
      showTableMessage('La liste attend son premier nom.');
      return;
    }

    const fragment = document.createDocumentFragment();
    registrations.forEach((registration) => {
      const row = document.createElement('tr');
      const date = new Date(registration.created_at);
      const actionCell = document.createElement('td');
      const deleteButton = document.createElement('button');
      deleteButton.className = 'superpower-delete';
      deleteButton.type = 'button';
      deleteButton.textContent = '×';
      deleteButton.setAttribute('aria-label', `Supprimer l’inscription de ${registration.minecraft_username}`);
      deleteButton.addEventListener('click', () => deleteRegistration(registration, deleteButton));
      actionCell.append(deleteButton);
      row.append(
        makeCell(registration.minecraft_username),
        makeCell(registration.discovery_source),
        makeCell(Number.isNaN(date.getTime()) ? '' : dateFormatter.format(date)),
        actionCell,
      );
      fragment.append(row);
    });
    memberList.replaceChildren(fragment);
  }

  async function loadRegistrations() {
    setFeedback(adminFeedback, 'Chargement…');
    try {
      const body = await adminRequest('GET');
      renderRegistrations(Array.isArray(body.registrations) ? body.registrations : []);
      setFeedback(adminFeedback, '');
    } catch (error) {
      showTableMessage('Impossible de charger la liste.', 'empty registration-error');
      setFeedback(adminFeedback, error.message, 'error');
      throw error;
    }
  }

  async function openDashboard() {
    const session = await validSession();
    if (!session) return false;
    adminIdentity.textContent = session.email;
    loginCard.hidden = true;
    dashboard.hidden = false;
    await loadRegistrations();
    return true;
  }

  function openLogin(message = '') {
    clearSession();
    dashboard.hidden = true;
    loginCard.hidden = false;
    if (message) setFeedback(loginFeedback, message, 'error');
  }

  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!loginForm.reportValidity()) return;
    loginButton.disabled = true;
    loginButton.textContent = 'Connexion…';
    setFeedback(loginFeedback, 'Connexion en cours…');

    try {
      const response = await fetch(`${projectUrl}/auth/v1/token?grant_type=password`, {
        method: 'POST',
        headers: { apikey: publishableKey, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: document.querySelector('#admin-email').value.trim(),
          password: document.querySelector('#admin-password').value,
        }),
      });
      const body = await readJson(response);
      if (!response.ok) throw new Error('Adresse e-mail ou mot de passe incorrect.');
      saveSession(body);
      await openDashboard();
      loginForm.reset();
      setFeedback(loginFeedback, '');
    } catch (error) {
      openLogin(error.message);
    } finally {
      loginButton.disabled = false;
      loginButton.textContent = 'Se connecter';
    }
  });

  logoutButton.addEventListener('click', async () => {
    const session = readSession();
    if (session?.accessToken) {
      await fetch(`${projectUrl}/auth/v1/logout`, {
        method: 'POST',
        headers: { apikey: publishableKey, Authorization: `Bearer ${session.accessToken}` },
      }).catch(() => {});
    }
    openLogin();
  });

  openDashboard().catch((error) => openLogin(error.message));
})();
