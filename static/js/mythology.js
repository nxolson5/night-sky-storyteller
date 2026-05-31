window.Mythology = (() => {
  const panel = document.getElementById('mythology-panel');
  const content = document.getElementById('mythology-content');
  const closeBtn = document.getElementById('mythology-close');
  const openBtn = document.getElementById('mythology-btn');

  const CHAPTERS = [
    {
      id: 'intro',
      title: 'The Sky as Story',
      body: `
        <p class="myth-prose">
          Before telescopes, before mathematics, before writing itself, human beings looked up.
          Every culture on Earth independently developed stories to explain the sun, moon, stars,
          and the great river of light we now call the Milky Way. These myths were not childish
          guesses — they were the first attempts to impose meaning on a cosmos that was vast,
          indifferent, and overwhelming.
        </p>
        <p class="myth-prose">
          Cosmic mythology served practical purposes: it encoded agricultural calendars, guided
          navigation, ordered religious festivals, and explained natural phenomena like eclipses
          and meteor showers. But it also addressed deeper questions — where did we come from,
          what are we made of, and what happens when the stars go out?
        </p>
        <ul class="myth-facts">
          <li>Every known human culture has developed a cosmology — a myth of how the universe began</li>
          <li>The same constellations were independently "discovered" and named by cultures with no contact with each other</li>
          <li>Many astronomical features we consider purely scientific (the Milky Way, the planets, the zodiac) were first named in mythological contexts</li>
          <li>Modern planet names all come from Roman mythology; most star names come from Arabic astronomy</li>
          <li>The oldest known star catalogue, the Mul.Apin, was compiled in Babylon around 1200 BCE — and embedded in a mythological framework</li>
        </ul>
      `
    },
    {
      id: 'greek',
      title: 'Greek & Roman',
      body: `
        <div class="myth-culture-tag">Greece · Rome</div>
        <p class="myth-prose">
          Greek cosmology began with <em>Chaos</em> — a vast, formless void — from which emerged
          Gaia (Earth), Tartarus (the Underworld), Eros (Love), Erebus (Darkness), and Nyx (Night).
          From Nyx came Aether (the upper sky) and Hemera (Day). This layered cosmos directly
          shaped our modern understanding of the solar system: every planet bears the name of a
          Roman god, who is the Roman equivalent of a Greek deity.
        </p>
        <div class="myth-deity-list">
          <div class="myth-deity-card">
            <div class="myth-deity-name">Helios / Sol</div>
            <div class="myth-deity-role">God of the Sun</div>
            <div class="myth-deity-note">Helios drives a golden chariot drawn by four fire-breathing horses across the sky each day, descending into the Ocean at night and sailing eastward in a golden cup to rise again at dawn. His son Phaethon famously lost control of the chariot, scorching the earth — an early mythological account of a solar event.</div>
          </div>
          <div class="myth-deity-card">
            <div class="myth-deity-name">Selene / Luna</div>
            <div class="myth-deity-role">Goddess of the Moon</div>
            <div class="myth-deity-note">Selene drives a silver chariot pulled by two white horses. She fell in love with the mortal Endymion, who Zeus put into eternal sleep so she could visit him nightly — a myth explaining the moon's nightly passage across the sky.</div>
          </div>
          <div class="myth-deity-card">
            <div class="myth-deity-name">Atlas</div>
            <div class="myth-deity-role">Titan Who Bears the Heavens</div>
            <div class="myth-deity-note">After the Titans were defeated by the Olympians, Atlas was condemned to hold up the celestial sphere on his shoulders for eternity — the ancient personification of the axis around which the stars revolve.</div>
          </div>
          <div class="myth-deity-card">
            <div class="myth-deity-name">Astraeus & Eos</div>
            <div class="myth-deity-role">Parents of the Stars and Winds</div>
            <div class="myth-deity-note">The Titan Astraeus (the starry sky) and Eos (the dawn) were the parents of the five wandering stars (planets), the four winds, and the morning star Eosphoros (Venus at dawn). Their union embodied the marriage of sky and light.</div>
          </div>
        </div>
        <p class="myth-prose">
          <strong style="color:#4ecca3">The Milky Way</strong> gets its name from Greek myth: Hermes
          placed the infant Heracles at Hera's breast while she slept; when she woke and pulled away,
          her milk sprayed across the sky, forming the galaxy. The Greek <em>galaxias kyklos</em>
          ("milky circle") became the Latin <em>via lactea</em> ("milky road") — and eventually the word "galaxy" itself.
        </p>
        <div class="myth-quote">
          <p>"The Milky Way, that broad white shining band — Hera's spilled milk, scattered across heaven's vault."</p>
          <cite>— Ovid, Metamorphoses</cite>
        </div>
      `
    },
    {
      id: 'norse',
      title: 'Norse',
      body: `
        <div class="myth-culture-tag">Norse · Germanic</div>
        <p class="myth-prose">
          Norse cosmology is among the most elaborate in the ancient world. At its center stands
          <em>Yggdrasil</em>, the World Tree — an immense ash connecting nine realms, its roots
          reaching into the wells of fate, frost-giants, and the dead; its branches sheltering
          the heavens where the gods dwell.
        </p>
        <div class="myth-deity-list">
          <div class="myth-deity-card">
            <div class="myth-deity-name">Sól & Máni</div>
            <div class="myth-deity-role">The Sun & Moon</div>
            <div class="myth-deity-note">Sol (the sun) and Máni (the moon) are siblings who drive their chariots endlessly across the sky. They are pursued by two wolves — Sköll chases the sun, Hati chases the moon. At Ragnarök they will finally be caught and devoured, and the sky will go dark.</div>
          </div>
          <div class="myth-deity-card">
            <div class="myth-deity-name">Odin's Eye</div>
            <div class="myth-deity-role">The Sun as Divine Sacrifice</div>
            <div class="myth-deity-note">In one tradition, Odin sacrificed one eye into the well of Mímir to gain cosmic wisdom. Some scholars read this as a solar myth — the one-eyed sun moving across the sky, "seeing" all while giving up half its vision to the darkness.</div>
          </div>
          <div class="myth-deity-card">
            <div class="myth-deity-name">Auðumbla</div>
            <div class="myth-deity-role">The Primordial Cow</div>
            <div class="myth-deity-note">In the beginning there was only Ginnungagap (the void), ice from Niflheim, and fire from Muspelheim. Where they met, a frost-giant Ymir formed, nourished by the cosmic cow Auðumbla, who herself licked salt from ice blocks — an account of differentiation from primordial chaos.</div>
          </div>
          <div class="myth-deity-card">
            <div class="myth-deity-name">Jörmungandr</div>
            <div class="myth-deity-role">The World Serpent</div>
            <div class="myth-deity-note">The Midgard Serpent lies coiled around the entire earth in the ocean, biting its own tail — a near-universal symbol (the Ouroboros) representing cyclical time, the boundary of the world, and eternal return.</div>
          </div>
        </div>
        <p class="myth-prose">
          The Norse Milky Way was called the <em>Vintergatan</em> ("Winter Road") in Scandinavian
          tradition — a path souls traveled after death, or the road the wild hunt rode across the
          winter sky. Ragnarök, the Norse apocalypse, involves cosmic events: the sun and moon
          are eaten, stars fall, the World Tree shakes, and the sea swallows the land — before
          a new, renewed world emerges.
        </p>
      `
    },
    {
      id: 'egyptian',
      title: 'Egyptian',
      body: `
        <div class="myth-culture-tag">Ancient Egypt</div>
        <p class="myth-prose">
          Egyptian cosmology is one of the oldest on record, with texts dating to 2400 BCE and
          earlier. The sky itself was a goddess — <em>Nut</em> — arching her star-covered body
          over the earth, swallowing the sun each evening and giving birth to it each morning.
          Her body was the Milky Way.
        </p>
        <div class="myth-deity-list">
          <div class="myth-deity-card">
            <div class="myth-deity-name">Ra / Amun-Ra</div>
            <div class="myth-deity-role">The Sun God</div>
            <div class="myth-deity-note">Ra travels through the sky in his solar barque each day. At sunset he enters the Duat (underworld), battling the chaos serpent Apophis through twelve hours of darkness. His nightly victory and rebirth at dawn is the cosmic cycle underlying all Egyptian religion.</div>
          </div>
          <div class="myth-deity-card">
            <div class="myth-deity-name">Nut</div>
            <div class="myth-deity-role">Goddess of the Sky</div>
            <div class="myth-deity-note">Nut's body arches over the earth; her fingertips touch the horizon on one side and her toes the other. The stars are the decorations on her body. She swallows the sun at sunset (her mouth at the western horizon) and births it at dawn (her womb at the eastern horizon).</div>
          </div>
          <div class="myth-deity-card">
            <div class="myth-deity-name">Osiris & the Stars</div>
            <div class="myth-deity-role">God of the Dead & Resurrection</div>
            <div class="myth-deity-note">Osiris was associated with Orion — his soul was said to rise to the stars. The pyramids of Giza are aligned with Orion's Belt, their shafts pointing toward specific stars in the northern sky. The Egyptians believed the pharaoh's soul would travel to the circumpolar stars (which never set) for eternal life.</div>
          </div>
          <div class="myth-deity-card">
            <div class="myth-deity-name">Thoth</div>
            <div class="myth-deity-role">God of the Moon & Writing</div>
            <div class="myth-deity-note">The ibis-headed Thoth governed the moon and was the inventor of writing. He measured time with the lunar calendar and was the divine scribe who recorded the weighing of souls in the afterlife. The moon's phases were explained as Thoth playing checkers with the moon itself.</div>
          </div>
        </div>
        <div class="myth-quote">
          <p>"I am Nut, and I enfold you and your divine essence. I have given you your life. You will
          live forever, for you are the son of Nut."</p>
          <cite>— Pyramid Texts, c. 2400 BCE</cite>
        </div>
      `
    },
    {
      id: 'mesopotamian',
      title: 'Mesopotamian',
      body: `
        <div class="myth-culture-tag">Sumer · Babylon · Assyria</div>
        <p class="myth-prose">
          Mesopotamia gave the world its first written astronomical records, its first star catalogues,
          and its first zodiac — all embedded in a mythological framework where the planets were gods
          and the sky was a divine text to be read. The Babylonian creation epic <em>Enuma Elish</em>
          ("When on High") describes the cosmos forming from the body of the slain chaos-dragon Tiamat.
        </p>
        <div class="myth-quote">
          <p>"When the skies above were not yet named, nor earth below pronounced by name, Apsu, the first
          one, their begetter, and maker Tiamat, who bore them all, had mixed their waters together."</p>
          <cite>— Enuma Elish, Tablet I</cite>
        </div>
        <p class="myth-prose">
          After Marduk defeats Tiamat, he splits her body in two: one half becomes the sky (held in
          place to keep the upper waters from flooding the earth), the other becomes the ground.
          He then creates the stars, assigning each a station and setting the year. This is the
          oldest surviving creation-by-astronomical-ordering myth.
        </p>
        <div class="myth-deity-list">
          <div class="myth-deity-card">
            <div class="myth-deity-name">Marduk / Jupiter</div>
            <div class="myth-deity-role">King of the Gods, Creator</div>
            <div class="myth-deity-note">The patron god of Babylon and the brightest planet visible to the naked eye. His annual return to specific constellations governed kingly authority and was observed by royal astronomers.</div>
          </div>
          <div class="myth-deity-card">
            <div class="myth-deity-name">Ishtar / Venus</div>
            <div class="myth-deity-role">Goddess of Love & War</div>
            <div class="myth-deity-note">Venus, the most prominent planet after the sun and moon, was identified with Ishtar. Her dual nature (morning star / evening star) was reflected in her roles as both love goddess and goddess of battle. The Venus Tablet of Ammisaduqa (c. 1650 BCE) is the oldest surviving planetary observation record.</div>
          </div>
          <div class="myth-deity-card">
            <div class="myth-deity-name">Nergal / Mars</div>
            <div class="myth-deity-role">God of War & Plague</div>
            <div class="myth-deity-note">Mars' reddish color made it the natural symbol of blood, war, and pestilence. Nergal also ruled the underworld. When Mars appeared in certain constellations, Babylonian astrologers warned of military defeats or epidemics.</div>
          </div>
          <div class="myth-deity-card">
            <div class="myth-deity-name">Nabu / Mercury</div>
            <div class="myth-deity-role">God of Writing & Wisdom</div>
            <div class="myth-deity-note">Swift Mercury, closest to the sun and hardest to observe, was identified with Nabu — the divine scribe and son of Marduk, fitting for the fastest planet. The city of Borsippa was his cult center, home to the famous Borsippa ziggurat (possibly the tower of Babel tradition).</div>
          </div>
        </div>
      `
    },
    {
      id: 'hindu',
      title: 'Hindu',
      body: `
        <div class="myth-culture-tag">Hindu · Vedic</div>
        <p class="myth-prose">
          Hindu cosmology operates on a scale that dwarfs most other traditions. The universe is
          not created once but cycles endlessly through vast spans of time — a <em>kalpa</em>
          (one "day of Brahma") lasts 4.32 billion years, remarkably close to the current scientific
          estimate for the age of the Earth. One full cycle of creation and dissolution is
          311 trillion years.
        </p>
        <div class="myth-deity-list">
          <div class="myth-deity-card">
            <div class="myth-deity-name">Brahma, Vishnu, Shiva</div>
            <div class="myth-deity-role">The Trimurti — Creator, Preserver, Destroyer</div>
            <div class="myth-deity-note">The three aspects of the divine govern the cosmic cycle. Brahma creates the universe at the start of each kalpa; Vishnu preserves and sustains it; Shiva destroys it at the end, clearing space for the next creation. The cycle is not tragedy but necessity — destruction is the precondition of renewal.</div>
          </div>
          <div class="myth-deity-card">
            <div class="myth-deity-name">Surya</div>
            <div class="myth-deity-role">The Sun God</div>
            <div class="myth-deity-note">Surya rides a golden chariot pulled by seven horses (often interpreted as the seven colors of visible light, or the seven days of the week). He is the source of all light and life; his chariot is driven by Aruna (the dawn), and his charioteer is said to be half-bodied — one side day, one side night.</div>
          </div>
          <div class="myth-deity-card">
            <div class="myth-deity-name">Samudra Manthan</div>
            <div class="myth-deity-role">The Churning of the Cosmic Ocean</div>
            <div class="myth-deity-note">Gods and demons churned the primordial cosmic ocean using Mount Meru as a churning rod and the serpent Vasuki as a rope — producing the moon, the sun, the goddess Lakshmi, the divine physician Dhanvantari, and ultimately amrita (the nectar of immortality). This myth of creation-through-churning has been read as describing the rotation of the galaxy.</div>
          </div>
          <div class="myth-deity-card">
            <div class="myth-deity-name">Rahu & Ketu</div>
            <div class="myth-deity-role">The Lunar Nodes — Causers of Eclipses</div>
            <div class="myth-deity-note">The demon Svarbhanu disguised himself as a god and drank the nectar of immortality. Vishnu beheaded him, but the head (Rahu) and tail (Ketu) became immortal. They periodically swallow the sun and moon in revenge, causing eclipses — and then release them when the gods intervene.</div>
          </div>
        </div>
        <p class="myth-prose">
          The Vedic tradition also developed the <em>Navagraha</em> — nine celestial bodies treated
          as deities: Sun (Surya), Moon (Chandra), Mars (Mangala), Mercury (Budha), Jupiter (Brihaspati),
          Venus (Shukra), Saturn (Shani), and the two lunar nodes Rahu and Ketu. This system became
          the foundation of Indian astrology and influenced the Islamic and eventually European
          astrological traditions.
        </p>
      `
    },
    {
      id: 'indigenous',
      title: 'Indigenous Star Lore',
      body: `
        <div class="myth-culture-tag">Aboriginal · Māori · Navajo · Inuit · Inca</div>
        <p class="myth-prose">
          Some of the most sophisticated observational astronomy in the ancient world came from
          indigenous cultures. Aboriginal Australians developed the world's oldest continuous
          astronomical tradition — at least 65,000 years of sky-watching encoded in oral
          traditions, songs, and ceremony.
        </p>
        <div class="myth-deity-list">
          <div class="myth-deity-card">
            <div class="myth-deity-name">Aboriginal Dark Constellations</div>
            <div class="myth-deity-role">Australia — 65,000+ year tradition</div>
            <div class="myth-deity-note">While most cultures saw constellations in the bright stars, Aboriginal Australians also identified "dark constellations" — shapes formed by the dark dust clouds of the Milky Way. The Emu in the Sky is the most famous: its body is the dark nebula between the Southern Cross and Scorpius, and emu eggs appear on the ground when the constellation is overhead, signaling harvest time.</div>
          </div>
          <div class="myth-deity-card">
            <div class="myth-deity-name">Māori Navigation & Matariki</div>
            <div class="myth-deity-role">Polynesia — Stars as Ancestors</div>
            <div class="myth-deity-note">The Māori navigated the Pacific using star paths, ocean swells, and bird flight. Matariki (the Pleiades) marks the Māori New Year — its heliacal rising in mid-winter signals a time to remember the dead and plan for the new season. Stars were treated as ancestors; "Ka mate te rangi, ka ora te rangi" — "As the heavens die, so they live again."</div>
          </div>
          <div class="myth-deity-card">
            <div class="myth-deity-name">Navajo Night Sky</div>
            <div class="myth-deity-role">Southwest North America</div>
            <div class="myth-deity-note">In Navajo cosmology, the Holy People arranged the stars in the sky. The Milky Way (Yikáísdáhí, "that which awaits the dawn") is a path for traveling spirits. When the trickster Coyote grew impatient during the deliberate star-placing, he grabbed the blanket and threw the remaining stars up at random — creating the scattered field of faint stars visible today.</div>
          </div>
          <div class="myth-deity-card">
            <div class="myth-deity-name">Inca Ceque System</div>
            <div class="myth-deity-role">Andes — Cosmic Calendar in Stone</div>
            <div class="myth-deity-note">The Inca organized their capital Cusco as a cosmic map, with 41 ceque lines radiating outward from the Temple of the Sun (Coricancha) to 328 sacred sites (huacas). This system encoded the solar and lunar calendar, agricultural cycles, and the risings of the Pleiades — which the Inca called the Seven Kids and used to predict harvest yields.</div>
          </div>
        </div>
        <div class="myth-quote">
          <p>"We do not see the stars as separate. They are our ancestors, looking down. We navigate
          by them, we pray by them, we time our planting by them."</p>
          <cite>— Attributed to Polynesian navigator tradition</cite>
        </div>
      `
    },
    {
      id: 'milkyway',
      title: 'The Milky Way Across Cultures',
      body: `
        <p class="myth-prose">
          The great band of light stretching across the night sky — our galaxy seen edge-on from
          within — may be the single most universally mythologized feature of the night sky.
          Every culture gave it a name, a story, and a meaning. Here is how the same object was
          understood across the ancient world:
        </p>
        <ul class="myth-facts">
          <li><strong style="color:#4ecca3">Greek (Galaxias):</strong> Hera's spilled milk — giving us the words "galaxy" and "Milky Way"</li>
          <li><strong style="color:#4ecca3">Norse (Vintergatan):</strong> "Winter Road" — the path of the dead, or the route of the Wild Hunt</li>
          <li><strong style="color:#4ecca3">Egyptian:</strong> The body of Nut, the sky goddess, stretched across the heavens</li>
          <li><strong style="color:#4ecca3">Navajo (Yikáísdáhí):</strong> "That which awaits the dawn" — a spirit road across the sky</li>
          <li><strong style="color:#4ecca3">Chinese (Tiān Hé):</strong> "Heavenly River" — separating the Weaver Girl (Vega) from the Cowherd (Altair), who reunite once a year when magpies form a bridge</li>
          <li><strong style="color:#4ecca3">Japanese (Amanogawa):</strong> "River of Heaven" — same legend as the Chinese, with the Tanabata festival celebrated when the two stars draw closest</li>
          <li><strong style="color:#4ecca3">Armenian (Archway of Straw):</strong> The god Vahagn stole straw from the Assyrian king in winter and spilled it across the sky while fleeing</li>
          <li><strong style="color:#4ecca3">Inca (Mayu):</strong> "Celestial River" — the mirror of the Amazon, with dark cloud constellations (the Emu, the Llama, the Toad) along its banks</li>
          <li><strong style="color:#4ecca3">Khoisan (Africa):</strong> The "backbone of the night" — the structural spine holding the sky above the earth</li>
          <li><strong style="color:#4ecca3">Finnish (Linnunrata):</strong> "Path of the Birds" — the migratory route followed by birds flying south, later confirmed as accurate by ornithologists</li>
        </ul>
        <p class="myth-prose">
          What is remarkable is not just the diversity of these interpretations, but the consistency
          of the impulse: to see pattern, to impose narrative, to connect the sky above to the world
          below. The scientific name — the Milky Way galaxy, from the Greek <em>galaxias</em> — is
          itself a myth made permanent in language.
        </p>
        <div class="myth-quote">
          <p>"Two things fill the mind with ever-increasing wonder and awe: the starry heavens above me
          and the moral law within me."</p>
          <cite>— Immanuel Kant, Critique of Practical Reason (1788)</cite>
        </div>
      `
    }
  ];

  function render() {
    const tocItems = CHAPTERS.map(c =>
      `<li><a href="#myth-ch-${c.id}">${c.title}</a></li>`
    ).join('');

    const chaptersHtml = CHAPTERS.map((c, i) => `
      <div class="myth-chapter" id="myth-ch-${c.id}">
        <div class="myth-chapter-header" data-chapter="${i}">
          <span class="myth-chapter-number">${String(i + 1).padStart(2, '0')}</span>
          <span class="myth-chapter-title">
            ${c.title}
            <span class="myth-chapter-toggle">▾</span>
          </span>
        </div>
        <div class="myth-chapter-body">${c.body}</div>
      </div>
      ${i < CHAPTERS.length - 1 ? '<hr class="myth-divider">' : ''}
    `).join('');

    content.innerHTML = `
      <div class="myth-header">
        <div class="myth-eyebrow">Cross-Cultural Cosmology</div>
        <h2 class="myth-title">Cosmic<br>Mythology</h2>
        <p class="myth-subtitle">How every civilization on Earth<br>told the story of the universe above them</p>
      </div>

      <div class="myth-toc">
        <div class="myth-toc-title">Contents</div>
        <ul class="myth-toc-list">${tocItems}</ul>
      </div>

      ${chaptersHtml}
    `;

    content.querySelectorAll('.myth-chapter-header').forEach(header => {
      header.addEventListener('click', () => {
        const chapter = header.closest('.myth-chapter');
        const isOpen = chapter.classList.contains('open');
        content.querySelectorAll('.myth-chapter').forEach(c => c.classList.remove('open'));
        if (!isOpen) chapter.classList.add('open');
      });
    });

    content.querySelectorAll('.myth-toc-list a').forEach(a => {
      a.addEventListener('click', e => {
        e.preventDefault();
        const target = content.querySelector(a.getAttribute('href'));
        if (!target) return;
        content.querySelectorAll('.myth-chapter').forEach(c => c.classList.remove('open'));
        target.classList.add('open');
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    const first = content.querySelector('.myth-chapter');
    if (first) first.classList.add('open');
  }

  function show() {
    render();
    panel.classList.add('visible');
  }

  function hide() {
    panel.classList.remove('visible');
  }

  openBtn.addEventListener('click', () => {
    if (panel.classList.contains('visible')) {
      hide();
      window.App?.onMythologyClose?.();
    } else {
      window.App?.onMythologyOpen?.();
      show();
    }
  });

  closeBtn.addEventListener('click', () => {
    hide();
    window.App?.onMythologyClose?.();
  });

  return { show, hide };
})();
