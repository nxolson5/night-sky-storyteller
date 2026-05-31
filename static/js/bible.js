window.Bible = (() => {
  const panel = document.getElementById('bible-panel');
  const content = document.getElementById('bible-content');
  const closeBtn = document.getElementById('bible-close');
  const openBtn = document.getElementById('bible-btn');

  const CHAPTERS = [
    {
      id: 'what',
      title: 'What Is the Bible?',
      body: `
        <p class="bible-prose">
          The Bible is a collection of 66 books (Protestant canon) or up to 81 books (Ethiopian Orthodox)
          written across roughly 1,500 years, in Hebrew, Aramaic, and Greek. It is the best-selling
          and most translated book in human history — available in over 3,600 languages — and the
          foundational text of Judaism and Christianity.
        </p>
        <div class="bible-stats">
          <div class="bible-stat-card">
            <div class="bible-stat-label">Books (Protestant)</div>
            <div class="bible-stat-value">66 (39 OT + 27 NT)</div>
          </div>
          <div class="bible-stat-card">
            <div class="bible-stat-label">Languages Written In</div>
            <div class="bible-stat-value">Hebrew, Aramaic, Greek</div>
          </div>
          <div class="bible-stat-card">
            <div class="bible-stat-label">Span of Composition</div>
            <div class="bible-stat-value">~1400 BCE – 100 CE</div>
          </div>
          <div class="bible-stat-card">
            <div class="bible-stat-label">Translations Today</div>
            <div class="bible-stat-value">3,600+ languages</div>
          </div>
        </div>
        <p class="bible-prose">
          The Old Testament (Hebrew Bible / Tanakh) contains the Torah (Law), Nevi'im (Prophets),
          and Ketuvim (Writings). The New Testament records the life of Jesus (Gospels), the early
          church (Acts), letters (Epistles), and apocalyptic prophecy (Revelation). Different Christian
          traditions include different sets of deuterocanonical or apocryphal books.
        </p>
        <ul class="bible-facts">
          <li>The Torah (Genesis–Deuteronomy) is shared as authoritative scripture by Judaism, Christianity, and Islam</li>
          <li>The oldest complete manuscript of the Hebrew Bible is the Leningrad Codex (1008–1009 CE)</li>
          <li>The Dead Sea Scrolls (discovered 1947) contain fragments going back to the 3rd century BCE</li>
          <li>The Septuagint (LXX) is the Greek translation of the Hebrew Bible, begun c. 280 BCE in Alexandria</li>
        </ul>
      `
    },
    {
      id: 'creation',
      title: 'Creation & The Cosmos',
      body: `
        <p class="bible-prose">
          Genesis 1 opens with one of the most influential cosmological statements ever written.
          In six days, God creates the heavens and the earth, separating light from darkness,
          waters above from waters below, and filling the world with life — culminating in humanity
          made in the divine image.
        </p>
        <div class="bible-quote">
          <p>"In the beginning God created the heavens and the earth. Now the earth was formless and
          empty, darkness was over the surface of the deep, and the Spirit of God was hovering
          over the waters."</p>
          <cite>— Genesis 1:1–2</cite>
        </div>
        <p class="bible-prose">
          On the fourth day, God creates the "two great lights" — the greater light (sun) to govern
          the day and the lesser light (moon) to govern the night — along with the stars. Notably,
          the sun and moon are not named; ancient Near Eastern cultures deified these bodies, and
          the text may deliberately avoid their names to deny them divine status.
        </p>
        <div class="bible-quote">
          <p>"God made two great lights — the greater light to govern the day and the lesser light
          to govern the night. He also made the stars."</p>
          <cite>— Genesis 1:16</cite>
        </div>
        <ul class="bible-facts">
          <li>The Hebrew word <em>raqia</em> (firmament) describes a solid dome holding back the upper waters — the ancient cosmological model</li>
          <li>Genesis 1 shares structural parallels with the Babylonian <em>Enuma Elish</em>, likely reflecting a deliberate theological response</li>
          <li>The six-day creation gave rise to the seven-day week, now universal across nearly all human cultures</li>
          <li>Genesis 2 offers a second, distinct creation account focused on humanity and the Garden</li>
        </ul>
      `
    },
    {
      id: 'firmament',
      title: 'The Firmament & Ancient Cosmology',
      body: `
        <p class="bible-prose">
          The biblical cosmos is a three-tiered structure: the heavens above (including sun, moon,
          stars, and waters above the sky), the earth in the middle, and Sheol / the deep below.
          The <em>raqia</em> — translated "firmament" or "expanse" — is a solid vault separating
          the waters of the sky from the earth below.
        </p>
        <div class="bible-stats">
          <div class="bible-stat-card">
            <div class="bible-stat-label">Above the Firmament</div>
            <div class="bible-stat-value">Upper waters, divine throne, heaven of heavens</div>
          </div>
          <div class="bible-stat-card">
            <div class="bible-stat-label">The Firmament</div>
            <div class="bible-stat-value">Solid vault; sun, moon, and stars set within it</div>
          </div>
          <div class="bible-stat-card">
            <div class="bible-stat-label">Below the Firmament</div>
            <div class="bible-stat-value">Earth, seas, and the subterranean deep</div>
          </div>
          <div class="bible-stat-card">
            <div class="bible-stat-label">Below the Earth</div>
            <div class="bible-stat-value">Sheol — realm of the dead</div>
          </div>
        </div>
        <p class="bible-prose">
          Rain falls when God "opens the windows of heaven" — as in Noah's flood (Genesis 7:11).
          The foundations of the earth are described as pillars set in the deep (1 Samuel 2:8,
          Job 9:6). This is not primitive ignorance but a coherent cosmological system shared
          with neighboring cultures across the ancient Near East, translated into theological statement.
        </p>
        <div class="bible-quote">
          <p>"He set the earth on its foundations; it can never be moved… He established the heavens,
          when he drew a circle on the face of the deep."</p>
          <cite>— Psalm 104:5 / Proverbs 8:27</cite>
        </div>
      `
    },
    {
      id: 'constellations',
      title: 'Stars & Constellations',
      body: `
        <p class="bible-prose">
          The Bible contains some of the earliest named references to constellations in any literature.
          The book of Job, widely considered one of the oldest texts in the Bible, names several
          star groups whose identifications are still debated by scholars.
        </p>
        <div class="bible-quote">
          <p>"Can you bind the chains of the Pleiades? Can you loosen Orion's belt? Can you bring
          forth the constellations in their seasons or lead out the Bear with its cubs?"</p>
          <cite>— Job 38:31–32</cite>
        </div>
        <ul class="bible-facts">
          <li><strong style="color:#8b7cf8">Pleiades (Kimah):</strong> The cluster "bound" by God — possibly representing the rainy season in Canaan</li>
          <li><strong style="color:#8b7cf8">Orion (Kesil):</strong> Meaning "fool" or "giant" — associated with winter storms</li>
          <li><strong style="color:#8b7cf8">Bear (Ash/Ayish):</strong> Likely Ursa Major or Arcturus, "led out" across the northern sky</li>
          <li><strong style="color:#8b7cf8">Mazzaroth (Job 38:32):</strong> Possibly the 12 signs of the zodiac or the full circuit of constellations</li>
        </ul>
        <p class="bible-prose">
          Amos 5:8 adds: "He who made the Pleiades and Orion, who turns midnight into dawn and
          darkens day into night, who calls for the waters of the sea and pours them out over the
          face of the land — the LORD is his name." The prophet uses astronomical regularity
          as evidence of divine sovereignty — the same argument God makes directly to Job from the whirlwind.
        </p>
        <div class="bible-quote">
          <p>"He is the Maker of the Bear and Orion, the Pleiades and the constellations of the south."</p>
          <cite>— Job 9:9</cite>
        </div>
      `
    },
    {
      id: 'events',
      title: 'Astronomical Events in Scripture',
      body: `
        <p class="bible-prose">
          Several passages describe dramatic interventions in the normal behavior of celestial bodies —
          events that have fascinated astronomers, historians, and theologians for centuries.
        </p>
        <div class="bible-event-list">
          <div class="bible-event-card">
            <div class="bible-event-name">Joshua's Long Day</div>
            <div class="bible-event-ref">Joshua 10:12–14</div>
            <div class="bible-event-note">The sun "stood still" over Gibeon and the moon over the Valley of Aijalon for "about a full day." Proposed explanations include a solar eclipse, atmospheric refraction, a poetic metaphor for victory, or an actual astronomical anomaly. Ancient Chinese and Egyptian records have been searched for corroborating events.</div>
          </div>
          <div class="bible-event-card">
            <div class="bible-event-name">Hezekiah's Shadow</div>
            <div class="bible-event-ref">2 Kings 20:9–11 / Isaiah 38:8</div>
            <div class="bible-event-note">As a sign to the dying King Hezekiah that he would recover, the shadow on the sundial of Ahaz moved backward ten steps. Josephus and early interpreters debated whether this was a local miracle or a global astronomical reversal.</div>
          </div>
          <div class="bible-event-card">
            <div class="bible-event-name">The Star of Bethlehem</div>
            <div class="bible-event-ref">Matthew 2:1–12</div>
            <div class="bible-event-note">Magi from the east follow a star to Jesus' birthplace. Proposed astronomical candidates include the Jupiter–Saturn conjunction of 7 BCE, a comet recorded by Chinese astronomers around 5 BCE, a nova, or Jupiter's retrograde motion passing through Virgo in 3–2 BCE. The debate remains open.</div>
          </div>
          <div class="bible-event-card">
            <div class="bible-event-name">Darkness at the Crucifixion</div>
            <div class="bible-event-ref">Matthew 27:45 / Luke 23:44</div>
            <div class="bible-event-note">Three hours of darkness over the land during the crucifixion, from noon to 3 PM. A solar eclipse is ruled out by chronology — Passover falls on a full moon when a solar eclipse is impossible. Some historians note a recorded Mediterranean darkness or dust storm; others treat it as miraculous sign.</div>
          </div>
          <div class="bible-event-card">
            <div class="bible-event-name">Blood Moon & Solar Darkening</div>
            <div class="bible-event-ref">Joel 2:31 / Acts 2:20 / Revelation 6:12</div>
            <div class="bible-event-note">Recurring prophetic imagery of the sun turning dark and the moon turning to blood — likely describing lunar eclipses (which give the moon a reddish hue) combined with solar eclipses or volcanic dust events as signs of the Day of the Lord.</div>
          </div>
        </div>
      `
    },
    {
      id: 'angels',
      title: 'The Heavenly Host',
      body: `
        <p class="bible-prose">
          The Bible's heavens are populated by a vast hierarchy of spiritual beings. The term
          <em>heavenly host</em> (צְבָא הַשָּׁמַיִם, tseva hashamayim) refers both to angels and
          to the stars themselves — the two were often synonymous in ancient thought, and worshipping
          the stars ("host of heaven") was the most frequently condemned form of idolatry in the
          Old Testament.
        </p>
        <ul class="bible-facts">
          <li><strong style="color:#8b7cf8">Seraphim:</strong> Six-winged beings surrounding God's throne, calling out "Holy, holy, holy" (Isaiah 6:2–3)</li>
          <li><strong style="color:#8b7cf8">Cherubim:</strong> Four-faced, four-winged guardians at Eden and the Ark; Ezekiel's vision makes them extraordinarily cosmic</li>
          <li><strong style="color:#8b7cf8">The Angel of the LORD:</strong> A special divine messenger who often speaks as God himself; appears to Abraham, Moses, Gideon, and others</li>
          <li><strong style="color:#8b7cf8">Michael:</strong> Archangel, "great prince," warrior-guardian of Israel (Daniel 12:1; Revelation 12:7)</li>
          <li><strong style="color:#8b7cf8">Gabriel:</strong> Messenger angel; brings news to Daniel, Zechariah, and Mary (Luke 1:26–38)</li>
          <li><strong style="color:#8b7cf8">The Sons of God (Bene Elohim):</strong> Divine council members who present themselves before God (Job 1–2), and who in Genesis 6 take human wives — the same tradition expanded in the Book of Enoch</li>
        </ul>
        <div class="bible-quote">
          <p>"Praise him, all his angels; praise him, all his heavenly hosts. Praise him, sun and moon;
          praise him, all you shining stars."</p>
          <cite>— Psalm 148:2–3</cite>
        </div>
      `
    },
    {
      id: 'prophecy',
      title: 'Prophetic & Apocalyptic Visions',
      body: `
        <p class="bible-prose">
          The prophetic books contain some of the most cosmically vivid writing in all of ancient
          literature. Ezekiel, Daniel, and Revelation in particular describe heavenly realms,
          throne-room visions, and the ultimate fate of the cosmos in imagery that has captivated
          readers for millennia.
        </p>
        <div class="bible-quote">
          <p>"I looked, and I saw a windstorm coming out of the north — an immense cloud with
          flashing lightning and surrounded by brilliant light. The center of the fire looked
          like glowing metal, and in the fire was what looked like four living creatures."</p>
          <cite>— Ezekiel 1:4–5</cite>
        </div>
        <ul class="bible-facts">
          <li><strong style="color:#8b7cf8">Ezekiel's Chariot (Merkabah):</strong> Four living creatures bearing a crystal expanse, above which sits a sapphire throne — one of the most detailed and influential heavenly vision texts in any religion</li>
          <li><strong style="color:#8b7cf8">Daniel's Ancient of Days:</strong> God on a fiery throne, with the heavenly court seated around him; the "Son of Man" approaches on clouds (Daniel 7:9–14)</li>
          <li><strong style="color:#8b7cf8">Isaiah's New Creation:</strong> God promises to create a "new heavens and a new earth" (Isaiah 65:17), a theme picked up directly in Revelation 21</li>
          <li><strong style="color:#8b7cf8">Revelation's Cosmic War:</strong> The dragon sweeps a third of the stars from heaven (Rev 12:4); the sun, moon, and stars are darkened or fall; a new Jerusalem descends from heaven</li>
        </ul>
        <div class="bible-quote">
          <p>"Then I saw a new heaven and a new earth, for the first heaven and the first earth had
          passed away, and there was no longer any sea."</p>
          <cite>— Revelation 21:1</cite>
        </div>
      `
    },
    {
      id: 'legacy',
      title: 'Legacy & Influence',
      body: `
        <p class="bible-prose">
          The Bible's influence on science, astronomy, law, art, literature, music, and political
          philosophy is unparalleled. For over a millennium, the dominant model of the cosmos in
          Western civilization was one in which a personal God created, ordered, and sustained the
          universe — a framework that both impelled and constrained the development of natural science.
        </p>
        <ul class="bible-facts">
          <li>The seven-day week, adopted globally, derives directly from the Genesis creation account</li>
          <li>Medieval universities were founded primarily to study theology alongside the liberal arts; the first European universities were built on biblical learning</li>
          <li>Copernicus, Galileo, Kepler, Newton, and Faraday all operated within a framework shaped by biblical theism — even when their discoveries challenged traditional interpretations</li>
          <li>The conflict between Galileo and the Church concerned specific cosmological claims, not science vs. religion broadly; many churchmen supported him</li>
          <li>The concept of "laws of nature" — essential to scientific thinking — has roots in the biblical idea of a rational Creator who orders the cosmos consistently</li>
          <li>More hospitals, schools, and universities have been founded in the name of biblical teaching than any other single intellectual tradition</li>
          <li>Homer, Dante, Milton, Shakespeare, Dostoevsky, Toni Morrison — the Western literary canon is incomprehensible without biblical literacy</li>
        </ul>
        <div class="bible-quote">
          <p>"The heavens declare the glory of God; the skies proclaim the work of his hands.
          Day after day they pour forth speech; night after night they reveal knowledge."</p>
          <cite>— Psalm 19:1–2</cite>
        </div>
      `
    }
  ];

  function render() {
    const tocItems = CHAPTERS.map(c =>
      `<li><a href="#bible-ch-${c.id}">${c.title}</a></li>`
    ).join('');

    const chaptersHtml = CHAPTERS.map((c, i) => `
      <div class="bible-chapter" id="bible-ch-${c.id}">
        <div class="bible-chapter-header" data-chapter="${i}">
          <span class="bible-chapter-number">${String(i + 1).padStart(2, '0')}</span>
          <span class="bible-chapter-title">
            ${c.title}
            <span class="bible-chapter-toggle">▾</span>
          </span>
        </div>
        <div class="bible-chapter-body">${c.body}</div>
      </div>
      ${i < CHAPTERS.length - 1 ? '<hr class="bible-divider">' : ''}
    `).join('');

    content.innerHTML = `
      <div class="bible-header">
        <div class="bible-eyebrow">Sacred Cosmology</div>
        <h2 class="bible-title">The Bible</h2>
        <p class="bible-subtitle">c. 1400 BCE – 100 CE<br>
        The heavens, the stars, and the God who made them</p>
      </div>

      <div class="bible-toc">
        <div class="bible-toc-title">Contents</div>
        <ul class="bible-toc-list">${tocItems}</ul>
      </div>

      ${chaptersHtml}
    `;

    content.querySelectorAll('.bible-chapter-header').forEach(header => {
      header.addEventListener('click', () => {
        const chapter = header.closest('.bible-chapter');
        const isOpen = chapter.classList.contains('open');
        content.querySelectorAll('.bible-chapter').forEach(c => c.classList.remove('open'));
        if (!isOpen) chapter.classList.add('open');
      });
    });

    content.querySelectorAll('.bible-toc-list a').forEach(a => {
      a.addEventListener('click', e => {
        e.preventDefault();
        const target = content.querySelector(a.getAttribute('href'));
        if (!target) return;
        content.querySelectorAll('.bible-chapter').forEach(c => c.classList.remove('open'));
        target.classList.add('open');
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    const first = content.querySelector('.bible-chapter');
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
      window.App?.onBibleClose?.();
    } else {
      window.App?.onBibleOpen?.();
      show();
    }
  });

  closeBtn.addEventListener('click', () => {
    hide();
    window.App?.onBibleClose?.();
  });

  return { show, hide };
})();
