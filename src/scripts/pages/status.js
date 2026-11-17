(() => {
  const endpoint = 'https://fvuvfdwdmwjpkrxxslgp.supabase.co/functions/v1/server-status';
  const dots = [...document.querySelectorAll('[data-server-status-dot]')];
  const label = document.querySelector('[data-server-status-label]');
  const description = document.querySelector('[data-server-status-description]');
  const playerCount = document.querySelector('[data-server-player-count]');
  const updated = document.querySelector('[data-server-updated]');
  const navigationLink = document.querySelector('.status-navigation-link');

  if (!dots.length || !label || !description || !playerCount || !updated) return;

  const states = {
    online: {
      label: 'En ligne',
      description: 'Le serveur accepte les connexions.',
    },
    starting: {
      label: 'Démarrage en cours',
      description: 'Le processus est lancé et Minecraft termine son démarrage.',
    },
    offline: {
      label: 'Éteint',
      description: 'Le serveur Minecraft est actuellement arrêté.',
    },
    unknown: {
      label: 'Statut indisponible',
      description: 'Le site n’a pas reçu de signal récent de la machine du serveur.',
    },
  };

  function relativeTime(value) {
    const date = new Date(value);
    if (!Number.isFinite(date.getTime())) return 'Indisponible';

    const elapsedSeconds = Math.max(0, Math.round((Date.now() - date.getTime()) / 1000));
    if (elapsedSeconds < 10) return 'À l’instant';
    if (elapsedSeconds < 60) return `Il y a ${elapsedSeconds} secondes`;

    const elapsedMinutes = Math.floor(elapsedSeconds / 60);
    if (elapsedMinutes === 1) return 'Il y a 1 minute';
    if (elapsedMinutes < 60) return `Il y a ${elapsedMinutes} minutes`;

    return date.toLocaleString('fr-CH', { dateStyle: 'short', timeStyle: 'short' });
  }

  function renderStatus(payload = {}) {
    const state = Object.hasOwn(states, payload.state) ? payload.state : 'unknown';
    const content = states[state];

    dots.forEach((dot) => {
      dot.classList.remove('is-online', 'is-starting', 'is-offline', 'is-unknown');
      dot.classList.add(`is-${state}`);
    });

    label.textContent = content.label;
    description.textContent = content.description;
    playerCount.textContent =
      state === 'online' && Number.isInteger(payload.players) && Number.isInteger(payload.maxPlayers)
        ? `${payload.players} / ${payload.maxPlayers}`
        : 'Indisponible';
    updated.textContent = relativeTime(payload.updatedAt);

    if (navigationLink) navigationLink.setAttribute('aria-label', `État du serveur : ${content.label}`);
  }

  async function refreshStatus() {
    try {
      const response = await fetch(endpoint, { cache: 'no-store' });
      if (!response.ok) throw new Error(`Statut HTTP ${response.status}`);
      renderStatus(await response.json());
    } catch (_) {
      renderStatus({ state: 'unknown' });
    }
  }

  refreshStatus();
  window.setInterval(refreshStatus, 30_000);
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') refreshStatus();
  });
})();
