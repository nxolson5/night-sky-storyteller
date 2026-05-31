// Builds the animated orrery from API planet data and real positions.
window.SolarSystem = (() => {
  const container = document.getElementById('solar-system');
  let planets = [];

  async function init() {
    const [planetData, positions] = await Promise.all([
      fetch('/api/planets').then(r => r.json()).catch(() => []),
      fetch('/api/positions').then(r => r.json()).catch(() => ({})),
    ]);

    planets = planetData;
    buildOrrery(planetData, positions);
  }

  function buildOrrery(planetData, positions) {
    planetData.forEach(p => {
      const orbitR = p.orbit_radius_px;
      const period = p.orbit_period_s;
      const startAngle = positions[p.key] ?? Math.random() * 360;

      // Orbit ring (visual only, not part of the rotation hierarchy)
      const ring = document.createElement('div');
      ring.className = 'orbit-ring';
      ring.style.cssText = `
        width: ${orbitR * 2}px;
        height: ${orbitR * 2}px;
        left: calc(50% - ${orbitR}px);
        top: calc(50% - ${orbitR}px);
      `;
      container.appendChild(ring);

      // Orbit wrapper — rotates; planet rides on top
      const wrapper = document.createElement('div');
      wrapper.className = 'orbit-wrapper';
      wrapper.dataset.planet = p.key;
      wrapper.style.setProperty('--period', `${period}s`);
      // Negative delay positions planet at its real angle
      const delay = -(startAngle / 360) * period;
      wrapper.style.animationDelay = `${delay}s`;

      // Planet wrapper (counter-rotates so label stays upright)
      const planetWrapper = document.createElement('div');
      planetWrapper.className = 'planet-wrapper';
      planetWrapper.dataset.planet = p.key;
      planetWrapper.style.setProperty('--period', `${period}s`);
      // Position at top of orbit radius
      planetWrapper.style.top = `${-orbitR - p.radius_px}px`;
      planetWrapper.style.left = `${-p.radius_px}px`;

      // Planet sphere
      const sphere = document.createElement('div');
      sphere.className = 'planet';
      sphere.dataset.planet = p.key;
      sphere.style.cssText = `
        width: ${p.radius_px * 2}px;
        height: ${p.radius_px * 2}px;
        --color: ${p.color};
        --glow: ${p.glow_color};
        --planet-highlight: rgba(255,255,255,0.35);
      `;

      // Saturn rings
      if (p.key === 'saturn') {
        const rings = document.createElement('div');
        rings.className = 'saturn-rings';
        const rw = p.radius_px * 3.2;
        const rh = p.radius_px * 1.1;
        rings.style.cssText = `
          width: ${rw}px;
          height: ${rh}px;
          left: ${p.radius_px - rw / 2}px;
          top: ${p.radius_px - rh / 2}px;
        `;
        sphere.appendChild(rings);
      }

      // Earth beacon — pulsing ring + permanent "YOU ARE HERE" tag
      if (p.key === 'earth') {
        const beacon = document.createElement('div');
        beacon.className = 'earth-beacon';
        beacon.style.cssText = `
          width: ${p.radius_px * 2}px;
          height: ${p.radius_px * 2}px;
        `;
        sphere.appendChild(beacon);

        const tag = document.createElement('div');
        tag.className = 'earth-tag';
        tag.innerHTML = `<span class="earth-tag-dot"></span>YOU ARE HERE`;
        planetWrapper.appendChild(tag);
      }

      // Label
      const label = document.createElement('div');
      label.className = 'planet-label';
      label.textContent = p.display_name.toUpperCase();

      planetWrapper.appendChild(sphere);
      planetWrapper.appendChild(label);
      wrapper.appendChild(planetWrapper);
      container.appendChild(wrapper);
    });
  }

  function getPlanetScreenRect(planetKey) {
    const el = container.querySelector(`.planet[data-planet="${planetKey}"]`);
    if (!el) return null;
    return el.getBoundingClientRect();
  }

  function getPlanetData(planetKey) {
    return planets.find(p => p.key === planetKey) || null;
  }

  return { init, getPlanetScreenRect, getPlanetData };
})();
