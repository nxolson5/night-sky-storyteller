window.Enoch = (() => {
  const panel = document.getElementById('enoch-panel');
  const content = document.getElementById('enoch-content');
  const closeBtn = document.getElementById('enoch-close');
  const openBtn = document.getElementById('enoch-btn');

  const CHAPTERS = [
    {
      id: 'who',
      title: 'Who Was Enoch?',
      body: `
        <p class="enoch-prose">
          Enoch is one of the most enigmatic figures in ancient literature. According to Genesis 5:24,
          he "walked with God, and was not, for God took him" — a mysterious departure that sparked
          centuries of speculation. He is the seventh generation from Adam, father of Methuselah,
          and grandfather of Noah.
        </p>
        <div class="enoch-quote">
          <p>"And Enoch walked with God after he begat Methuselah three hundred years… and he was not;
          for God took him."</p>
          <cite>— Genesis 5:22–24</cite>
        </div>
        <p class="enoch-prose">
          Unlike other patriarchs who simply died, Enoch was taken directly to heaven while still alive —
          placing him alongside Elijah as one of only two figures in the Hebrew Bible who never died.
          This translated status made him the ideal narrator for heavenly secrets, cosmic journeys,
          and divine mysteries.
        </p>
        <ul class="enoch-facts">
          <li>Lived 365 years — a number matching the solar year, possibly intentional</li>
          <li>Mentioned in the New Testament (Hebrews 11:5, Jude 1:14–15)</li>
          <li>Venerated in Ethiopian Orthodox Christianity as a canonical prophet</li>
          <li>His name (חֲנוֹךְ, Ḥanōḵ) means "dedicated" or "initiated"</li>
        </ul>
      `
    },
    {
      id: 'text',
      title: 'The Text & Its Sections',
      body: `
        <p class="enoch-prose">
          <em>1 Enoch</em> (the Ethiopic Book of Enoch) is a composite work assembled over several
          centuries, roughly 300 BCE–100 CE. It survived intact only in the Ethiopic (Ge'ez) language,
          though Aramaic fragments were found among the Dead Sea Scrolls, confirming its pre-Christian
          antiquity. It is considered canonical scripture by the Ethiopian Orthodox Church.
        </p>
        <ul class="enoch-facts">
          <li><strong style="color:#d4af37">Chapters 1–36:</strong> The Book of the Watchers — fallen angels, the great flood's cause, and Enoch's heavenly tour</li>
          <li><strong style="color:#d4af37">Chapters 37–71:</strong> The Book of Parables — the Son of Man, judgement, and the secrets of heaven</li>
          <li><strong style="color:#d4af37">Chapters 72–82:</strong> The Astronomical Book — the most ancient section; solar and lunar mechanics, the 364-day calendar</li>
          <li><strong style="color:#d4af37">Chapters 83–90:</strong> The Book of Dream Visions — symbolic history from Adam to the Maccabean revolt</li>
          <li><strong style="color:#d4af37">Chapters 91–108:</strong> The Epistle of Enoch — moral exhortation, the Apocalypse of Weeks</li>
        </ul>
        <p class="enoch-prose">
          The Astronomical Book (chapters 72–82) is likely the oldest section, possibly pre-dating
          the rest by centuries. It reads less like prophecy and more like a technical manual —
          an ancient astronomer's notebook delivered through the voice of an angel named Uriel.
        </p>
      `
    },
    {
      id: 'astronomy',
      title: 'The Astronomical Book',
      body: `
        <p class="enoch-prose">
          Also called <em>The Book of the Heavenly Luminaries</em>, chapters 72–82 constitute the
          oldest surviving Jewish astronomical text. The angel Uriel ("Light of God") leads Enoch
          on a tour of the mechanisms governing the sun, moon, stars, and seasons.
        </p>
        <div class="enoch-quote">
          <p>"This is the first law of the luminaries: the luminary the Sun has its rising in the
          eastern portals of heaven and its setting in the western portals of heaven."</p>
          <cite>— 1 Enoch 72:2</cite>
        </div>
        <p class="enoch-prose">
          The system described is a <strong style="color:#d4af37">364-day solar calendar</strong> divided into
          four seasons of 91 days each (13 weeks × 4). This calendar was also used by the Dead Sea
          Scroll community (the Essenes) and may reflect a priestly tradition that conflicted with
          the lunar calendar used in the Jerusalem Temple.
        </p>
        <ul class="enoch-facts">
          <li>The sun traverses 6 eastern "gates" and 6 western "gates" across the year</li>
          <li>Days lengthen and shorten as the sun moves between gates — an early model of seasonal change</li>
          <li>The moon is described with 14-day waxing and waning cycles</li>
          <li>Stars are governed by angels who ensure they rise and set on time</li>
          <li>Wind directions, rain, and dew are all assigned to specific portals and angels</li>
        </ul>
      `
    },
    {
      id: 'gates',
      title: 'The Six Gates of the Sun',
      body: `
        <p class="enoch-prose">
          Enoch describes the eastern horizon as divided into six "portals" or gates through which
          the sun rises at different times of year. This is an early geometric model of the sun's
          apparent movement along the horizon — what we now call the variation in azimuth at sunrise.
        </p>
        <div class="enoch-gate-grid">
          <div class="enoch-gate-card">
            <div class="enoch-gate-label">Gate I</div>
            <div class="enoch-gate-value">Far north — summer solstice, longest day</div>
          </div>
          <div class="enoch-gate-card">
            <div class="enoch-gate-label">Gate II</div>
            <div class="enoch-gate-value">North — late spring / early summer</div>
          </div>
          <div class="enoch-gate-card">
            <div class="enoch-gate-label">Gate III</div>
            <div class="enoch-gate-value">Northeast — spring equinox</div>
          </div>
          <div class="enoch-gate-card">
            <div class="enoch-gate-label">Gate IV</div>
            <div class="enoch-gate-value">East — autumn equinox</div>
          </div>
          <div class="enoch-gate-card">
            <div class="enoch-gate-label">Gate V</div>
            <div class="enoch-gate-value">Southeast — early winter</div>
          </div>
          <div class="enoch-gate-card">
            <div class="enoch-gate-label">Gate VI</div>
            <div class="enoch-gate-value">Far south — winter solstice, shortest day</div>
          </div>
        </div>
        <p class="enoch-prose">
          Each gate also governs specific weather phenomena: winds, snow, frost, dew, and rain.
          The text assigns different numbers of daylight hours to each month, creating a table of
          seasonal variation. Modern analysis shows these figures roughly correspond to the latitude
          of northern Mesopotamia or the Levant.
        </p>
        <div class="enoch-quote">
          <p>"In those days the sun rises from that portal and sets in the west, and returns to the
          east and rises in the third portal for one-and-thirty mornings."</p>
          <cite>— 1 Enoch 72:15</cite>
        </div>
      `
    },
    {
      id: 'watchers',
      title: 'The Watchers',
      body: `
        <p class="enoch-prose">
          The Watchers (<em>Irin</em> in Aramaic) are a class of angels assigned to observe and
          guard humanity. In 1 Enoch 6–16, two hundred of them descend to Mount Hermon, take human
          wives, and teach forbidden knowledge — setting off a chain of corruption that leads to
          the Great Flood. Their leader is Semjâzâ; their chief of knowledge is Azâzêl.
        </p>
        <div class="enoch-quote">
          <p>"And they were in all two hundred; who descended in the days of Jared on the summit of
          Mount Hermon, and they called it Mount Hermon, because they had sworn and bound themselves
          by mutual imprecations upon it."</p>
          <cite>— 1 Enoch 6:6</cite>
        </div>
        <p class="enoch-prose">
          Several Watchers are named specifically for celestial or meteorological phenomena, suggesting
          the text encodes astronomical knowledge within its mythology:
        </p>
        <div class="enoch-watcher-list">
          <div class="enoch-watcher-card">
            <div class="enoch-watcher-name">Kokabiel</div>
            <div class="enoch-watcher-role">Angel of the Stars</div>
            <div class="enoch-watcher-note">His name derives from כּוֹכָב (kōḵāḇ), Hebrew for "star." Taught astrology and the movements of the constellations.</div>
          </div>
          <div class="enoch-watcher-card">
            <div class="enoch-watcher-name">Shamsiel</div>
            <div class="enoch-watcher-role">Angel of the Sun</div>
            <div class="enoch-watcher-note">From שֶׁמֶשׁ (shemesh), "sun." One of the leaders of the fallen host; presided over the sun's course.</div>
          </div>
          <div class="enoch-watcher-card">
            <div class="enoch-watcher-name">Saraqael</div>
            <div class="enoch-watcher-role">Angel over Spirits</div>
            <div class="enoch-watcher-note">Set over the spirits of mankind who sin against the spirit. Counted among the holy watchers in some traditions.</div>
          </div>
          <div class="enoch-watcher-card">
            <div class="enoch-watcher-name">Baraqiel</div>
            <div class="enoch-watcher-role">Angel of Lightning</div>
            <div class="enoch-watcher-note">From בָּרָק (baraq), "lightning." Taught the secrets of astrology alongside lightning and storm.</div>
          </div>
          <div class="enoch-watcher-card">
            <div class="enoch-watcher-name">Azâzêl</div>
            <div class="enoch-watcher-role">Chief of Knowledge</div>
            <div class="enoch-watcher-note">Taught metalworking, weapons, and cosmetics — the knowledge that made humanity forget heaven. Bound under the desert until judgement.</div>
          </div>
        </div>
      `
    },
    {
      id: 'heavens',
      title: 'The Seven Heavens',
      body: `
        <p class="enoch-prose">
          In his guided tour with Uriel and other angels, Enoch passes through multiple cosmic layers.
          While 1 Enoch describes a complex cosmology, later Enochic and related texts (2 Enoch,
          the Testament of Levi) elaborate a seven-heaven model that became foundational to
          Jewish mysticism and early Christian thought.
        </p>
        <ul class="enoch-facts">
          <li><strong style="color:#d4af37">First Heaven:</strong> The firmament — home of the weather angels governing wind, snow, rain, and dew</li>
          <li><strong style="color:#d4af37">Second Heaven:</strong> The realm of the fallen Watchers, awaiting judgement in darkness</li>
          <li><strong style="color:#d4af37">Third Heaven:</strong> Paradise on one side; the place of punishment on the other</li>
          <li><strong style="color:#d4af37">Fourth Heaven:</strong> The sun's course, the moon's paths, and the 12 gates of the winds</li>
          <li><strong style="color:#d4af37">Fifth Heaven:</strong> The Grigori — the remaining Watchers who did not descend, mourning their fallen brethren</li>
          <li><strong style="color:#d4af37">Sixth Heaven:</strong> Angels governing nature: seasons, rivers, seas, and the growth of all living things</li>
          <li><strong style="color:#d4af37">Seventh Heaven:</strong> The throne of God, the highest angels, and the heavenly books containing all human deeds</li>
        </ul>
        <p class="enoch-prose">
          This cosmological map directly influenced the Merkabah ("chariot") mysticism of rabbinic Judaism,
          early Christian cosmology (Paul's reference to the "third heaven" in 2 Corinthians 12:2),
          and later Islamic descriptions of the heavens in Hadith literature.
        </p>
      `
    },
    {
      id: 'stars',
      title: 'Stars as Living Beings',
      body: `
        <p class="enoch-prose">
          One of the most striking features of Enochic cosmology is that stars are not inanimate
          objects — they are <em>living beings</em>, specifically angels, who are commanded to rise
          and set on schedule. Stars that deviate from their ordained paths are imprisoned and punished.
        </p>
        <div class="enoch-quote">
          <p>"And I saw there something like an invisible sea, and seven stars like great burning mountains,
          and when I inquired regarding them, the angel said: 'This place is the end of heaven and earth:
          this has become a prison for the stars and the host of heaven.'"</p>
          <cite>— 1 Enoch 18:14–15</cite>
        </div>
        <p class="enoch-prose">
          Enoch witnesses stars locked in a fiery prison — stars that did not rise at their appointed
          time. This is a remarkable concept: cosmic obedience as a moral category. The regularity
          of astronomical motion is not mechanical but ethical, maintained by angelic obedience to
          divine command.
        </p>
        <ul class="enoch-facts">
          <li>Each star has a name, a corresponding angel, and an assigned orbit</li>
          <li>Stars that rise "late" are condemned for transgression — same language used for the Watchers</li>
          <li>Uriel is specifically the angel set over all the luminaries of heaven</li>
          <li>The regularity of stars serves as proof of God's order — chaos is always the result of disobedience</li>
        </ul>
      `
    },
    {
      id: 'legacy',
      title: 'Legacy & Influence',
      body: `
        <p class="enoch-prose">
          The Book of Enoch was widely read across the ancient world. Fragments from eleven separate
          manuscripts were found among the Dead Sea Scrolls — more copies than most books of the
          Hebrew Bible — indicating it was treated as authoritative scripture by the Qumran community.
        </p>
        <ul class="enoch-facts">
          <li>The New Testament book of Jude (vv. 14–15) quotes 1 Enoch 1:9 directly, calling Enoch a prophet</li>
          <li>Several Church Fathers (Tertullian, Origen, Clement of Alexandria) knew and cited it</li>
          <li>It was gradually excluded from the Western canon but retained in the Ethiopian Orthodox Bible</li>
          <li>The Dead Sea Scrolls (discovered 1947) confirmed the Aramaic original, validating Ethiopic translations</li>
          <li>The 364-day Enochic calendar influenced the sectarian calendar at Qumran and may underlie some New Testament chronology debates</li>
          <li>The Watcher myth is the basis for the "sons of God" passage in Genesis 6:1–4</li>
        </ul>
        <p class="enoch-prose">
          Modern scholars view the Astronomical Book as evidence that ancient Israelite and Jewish
          communities engaged seriously with observational astronomy, embedded their findings in
          religious narrative, and preserved technical knowledge across generations in ways that
          orthodox histories of science have often overlooked.
        </p>
        <div class="enoch-quote">
          <p>"Blessed is the man who dies in righteousness and goodness, concerning whom there is no
          book of unrighteousness written, and against whom no day of judgement shall be found."</p>
          <cite>— 1 Enoch 81:4</cite>
        </div>
      `
    }
  ];

  function render() {
    const tocItems = CHAPTERS.map(c =>
      `<li><a href="#enoch-ch-${c.id}">${c.title}</a></li>`
    ).join('');

    const chaptersHtml = CHAPTERS.map((c, i) => `
      <div class="enoch-chapter" id="enoch-ch-${c.id}">
        <div class="enoch-chapter-header" data-chapter="${i}">
          <span class="enoch-chapter-number">${String(i + 1).padStart(2, '0')}</span>
          <span class="enoch-chapter-title">
            ${c.title}
            <span class="enoch-chapter-toggle">▾</span>
          </span>
        </div>
        <div class="enoch-chapter-body">${c.body}</div>
      </div>
      ${i < CHAPTERS.length - 1 ? '<hr class="enoch-divider">' : ''}
    `).join('');

    content.innerHTML = `
      <div class="enoch-header">
        <div class="enoch-eyebrow">Ancient Cosmology</div>
        <h2 class="enoch-title">The Book<br>of Enoch</h2>
        <p class="enoch-subtitle">1 Enoch — c. 300 BCE to 100 CE<br>
        A journey through heaven, the stars, and the angels who govern them</p>
      </div>

      <div class="enoch-toc">
        <div class="enoch-toc-title">Contents</div>
        <ul class="enoch-toc-list">${tocItems}</ul>
      </div>

      ${chaptersHtml}
    `;

    // Accordion toggle
    content.querySelectorAll('.enoch-chapter-header').forEach(header => {
      header.addEventListener('click', () => {
        const chapter = header.closest('.enoch-chapter');
        const isOpen = chapter.classList.contains('open');
        // Close all
        content.querySelectorAll('.enoch-chapter').forEach(c => c.classList.remove('open'));
        // Open clicked if it wasn't open
        if (!isOpen) chapter.classList.add('open');
      });
    });

    // TOC smooth scroll inside panel
    content.querySelectorAll('.enoch-toc-list a').forEach(a => {
      a.addEventListener('click', e => {
        e.preventDefault();
        const target = content.querySelector(a.getAttribute('href'));
        if (!target) return;
        const chapterIdx = [...content.querySelectorAll('.enoch-chapter')].indexOf(target);
        // Open that chapter
        content.querySelectorAll('.enoch-chapter').forEach(c => c.classList.remove('open'));
        target.classList.add('open');
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    // Open first chapter by default
    const first = content.querySelector('.enoch-chapter');
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
    } else {
      window.App?.onEnochOpen?.();
      show();
    }
  });

  closeBtn.addEventListener('click', () => {
    hide();
    window.App?.onEnochClose?.();
  });

  return { show, hide };
})();
