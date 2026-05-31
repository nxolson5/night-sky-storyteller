// Main state machine: OVERVIEW → FOCUSED → OVERVIEW
window.App = (() => {
  const State = { OVERVIEW: 0, ZOOMING: 1, FOCUSED: 2 };
  let state = State.OVERVIEW;
  let focusedPlanet = null;

  const orrery = document.getElementById('orrery-container');
  const header = document.getElementById('site-header');
  const hintBar = document.getElementById('hint-bar');
  const planetCount = document.getElementById('planet-count');
  const cloneContainer = document.getElementById('zoom-clone-container');

  async function init() {
    await SolarSystem.init();
    bindEvents();
  }

  function bindEvents() {
    // Click on any planet sphere or wrapper
    document.getElementById('solar-system').addEventListener('click', e => {
      const target = e.target.closest('[data-planet]');
      if (!target || state !== State.OVERVIEW) return;
      const key = target.dataset.planet;
      if (key) openPlanet(key);
    });

    // Escape key to close
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && state === State.FOCUSED) closePanel();
    });
  }

  function openPlanet(key) {
    if (state !== State.OVERVIEW) return;
    state = State.ZOOMING;
    focusedPlanet = key;

    const summary = SolarSystem.getPlanetData(key);
    const rect = SolarSystem.getPlanetScreenRect(key);

    // Create clone at exact screen position of the planet
    let clone = null;
    if (rect) {
      clone = document.createElement('div');
      clone.className = 'planet-clone';
      const r = summary?.radius_px ?? 8;
      const color = summary?.color ?? '#888';
      const glow = summary?.glow_color ?? 'rgba(150,150,150,0.4)';
      clone.style.cssText = `
        width: ${r * 2}px;
        height: ${r * 2}px;
        top: ${rect.top}px;
        left: ${rect.left}px;
        background: radial-gradient(circle at 35% 35%, rgba(255,255,255,0.4), ${color} 60%);
        box-shadow: 0 0 20px 8px ${glow};
      `;
      cloneContainer.appendChild(clone);

      // Animate: expand clone toward center of screen
      const targetSize = Math.min(window.innerWidth, window.innerHeight) * 0.45;
      const targetTop = (window.innerHeight - targetSize) / 2;
      const targetLeft = (window.innerWidth - targetSize) / 2 - 240; // offset for panel

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          clone.style.width = `${targetSize}px`;
          clone.style.height = `${targetSize}px`;
          clone.style.top = `${targetTop}px`;
          clone.style.left = `${targetLeft}px`;
        });
      });
    }

    // Dim the orrery and hide chrome
    orrery.classList.add('dimmed');
    header.classList.add('hidden');
    hintBar.classList.add('hidden');
    planetCount.classList.add('hidden');

    // Show panel after short delay (clone expansion starts)
    setTimeout(() => {
      state = State.FOCUSED;
      Panel.show(key, summary);
    }, 200);
  }

  function closePanel() {
    if (state !== State.FOCUSED) return;
    state = State.ZOOMING;

    // Slide panel out
    Panel.hide();

    // Shrink and remove clone
    const clone = cloneContainer.querySelector('.planet-clone');
    if (clone) {
      const rect = SolarSystem.getPlanetScreenRect(focusedPlanet);
      const summary = SolarSystem.getPlanetData(focusedPlanet);
      const r = summary?.radius_px ?? 8;

      if (rect) {
        clone.style.width = `${r * 2}px`;
        clone.style.height = `${r * 2}px`;
        clone.style.top = `${rect.top}px`;
        clone.style.left = `${rect.left}px`;
        clone.style.opacity = '0';
      }

      setTimeout(() => {
        clone.remove();
      }, 750);
    }

    // Restore orrery and chrome
    orrery.classList.remove('dimmed');
    header.classList.remove('hidden');
    hintBar.classList.remove('hidden');
    planetCount.classList.remove('hidden');

    setTimeout(() => {
      state = State.OVERVIEW;
      focusedPlanet = null;
    }, 600);
  }

  init();

  return { closePanel };
})();
