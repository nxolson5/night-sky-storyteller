// Fetches and renders the planet info panel.
window.Panel = (() => {
  const panel = document.getElementById('planet-panel');
  const content = document.getElementById('panel-content');
  const closeBtn = document.getElementById('panel-close');

  function show(planetKey, planetSummary) {
    content.innerHTML = `<div class="panel-loading">Loading…</div>`;
    panel.classList.add('visible');

    fetch(`/api/planets/${planetKey}`)
      .then(r => r.json())
      .then(data => render(data, planetSummary))
      .catch(() => {
        content.innerHTML = `<div class="panel-loading">Could not load planet data.</div>`;
      });
  }

  function hide() {
    panel.classList.remove('visible');
  }

  function render(data, summary) {
    const color = summary?.color ?? '#4fc3f7';
    const glow = summary?.glow_color ?? 'rgba(79,195,247,0.4)';
    const radius = summary?.radius_px ?? 10;

    // Size bar: clamp to max 100%, cap giant planets
    const earthDiam = 12742;
    const barPct = Math.min(100, (data.diameter_km / (earthDiam * 11)) * 100);
    const vsEarth = data.diameter_vs_earth === 1.0
      ? 'Same as Earth'
      : data.diameter_vs_earth < 1
        ? `${(data.diameter_vs_earth * 100).toFixed(0)}% of Earth`
        : `${data.diameter_vs_earth.toFixed(1)}× Earth`;

    const moonsHtml = data.moons && data.moons.length > 0
      ? data.moons.map(m => `
          <div class="moon-card">
            <div class="moon-name">${m.name}</div>
            <div class="moon-note">${m.note}</div>
          </div>`).join('')
      : '<p class="no-moons">No natural satellites</p>';

    const featuresHtml = (data.notable_features || [])
      .map(f => `<li>${f}</li>`).join('');

    const factsHtml = (data.fun_facts || [])
      .map(f => `<li>${f}</li>`).join('');

    const explorationHtml = (data.exploration || [])
      .map(e => `<li>${e}</li>`).join('');

    content.innerHTML = `
      <div class="panel-planet-icon" style="
        width:${Math.max(radius * 4, 48)}px;
        height:${Math.max(radius * 4, 48)}px;
        background: radial-gradient(circle at 35% 35%, rgba(255,255,255,0.4), ${color} 60%);
        --planet-glow: ${glow};
      "></div>

      <h2 class="panel-title">${data.display_name}</h2>
      <p class="panel-tagline">${data.tagline}</p>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-label">Diameter</div>
          <div class="stat-value">${data.diameter_km.toLocaleString()} km</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Mass vs Earth</div>
          <div class="stat-value">${data.mass_vs_earth}×</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Surface Gravity</div>
          <div class="stat-value">${data.gravity_vs_earth}g</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Avg Temp</div>
          <div class="stat-value">${data.avg_temp_c}°C</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Day Length</div>
          <div class="stat-value">${formatHours(data.day_length_hours)}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Year Length</div>
          <div class="stat-value">${Math.round(data.year_length_days)} days</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Distance from Sun</div>
          <div class="stat-value">${data.distance_from_sun_au} AU</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Known Moons</div>
          <div class="stat-value">${data.moons ? data.moons.length : 0}</div>
        </div>
      </div>

      <div class="size-compare">
        <div class="size-compare-label">Size relative to Jupiter</div>
        <div class="size-bar-track">
          <div class="size-bar-fill" style="width:0%;--planet-color:${color}" data-target="${barPct}"></div>
        </div>
        <div class="size-compare-note">${vsEarth} &nbsp;·&nbsp; ${data.temp_range}</div>
      </div>

      <div class="panel-section">
        <div class="panel-section-title">Composition</div>
        <p class="panel-prose">${data.composition}</p>
      </div>

      <div class="panel-section">
        <div class="panel-section-title">What it feels like</div>
        <p class="panel-prose">${data.what_it_feels_like}</p>
      </div>

      <div class="panel-section">
        <div class="panel-section-title">Notable Features</div>
        <ul class="feature-list">${featuresHtml}</ul>
      </div>

      <div class="panel-section">
        <div class="panel-section-title">Moons</div>
        <div class="moon-list">${moonsHtml}</div>
      </div>

      <div class="panel-section">
        <div class="panel-section-title">Fast Facts</div>
        <ul class="fact-list">${factsHtml}</ul>
      </div>

      <div class="panel-section">
        <div class="panel-section-title">Exploration</div>
        <ul class="exploration-list">${explorationHtml}</ul>
      </div>
    `;

    // Animate size bar after render
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const bar = content.querySelector('.size-bar-fill');
        if (bar) bar.style.width = `${bar.dataset.target}%`;
      });
    });
  }

  function formatHours(h) {
    if (h >= 720) return `${(h / 720).toFixed(1)} mo`;
    if (h >= 24) return `${(h / 24).toFixed(1)} days`;
    return `${h.toFixed(1)} hrs`;
  }

  closeBtn.addEventListener('click', () => window.App.closePanel());

  return { show, hide };
})();
