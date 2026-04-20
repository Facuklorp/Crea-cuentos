// ============================================
// CREA CUENTOS — App Logic v2.0
// ============================================

// State
let currentLang = localStorage.getItem('creacuentos_lang') || 'es';
let selected = { personaje: null, escenario: null, objeto: null };
let currentStory = null;

// ============================================
// Audio Manager
// ============================================
const AudioManager = (() => {
  // Mapeo de escenarios y personajes a archivos de música
  // Los archivos deben colocarse en la carpeta audio/
  // Usar Pixabay Music (gratis, royalty-free, uso comercial permitido)
  const TRACKS = {
    // Pantalla de inicio
    home:        { src: 'audio/HOME-geoffharvey-magical-music-box-389086.mp3', title: 'Magical Music Box', artist: 'geoffharvey' },

    // Escenarios
    castillo:    { src: 'audio/CASTILLO-geoffharvey-magical-storytime-389087.mp3', title: 'Magical Storytime', artist: 'geoffharvey' },
    bosque:      { src: 'audio/BOSQUE-mandakimdk-xylophone-and-forest-307174.mp3', title: 'Xylophone and Forest', artist: 'mandakimdk' },
    isla:        { src: 'audio/ISLA-alex_besss-a-pirate-343849.mp3', title: 'A Pirate', artist: 'alex_besss' },
    nube:        { src: 'audio/NUBE-viramiller-ethereal-magical-reverie-276713.mp3', title: 'Ethereal Magical Reverie', artist: 'viramiller' },
    mar:         { src: 'audio/MAR-musicword-bubbles-309433.mp3', title: 'Bubbles', artist: 'musicword' },
    montana:     { src: 'audio/MONTAÑA-saseendran-wind-from-the-mountain-raga-pahad-364841.mp3', title: 'Wind From The Mountain', artist: 'saseendran' },
    jardin:      { src: 'audio/JARDIN-46851258-musique-spring-travel-337522.mp3', title: 'Musique Spring Travel', artist: '46851258' },
    estrellas:   { src: 'audio/ESTRELLAS-victorvantast-fionax27s-fairy-song-152743.mp3', title: 'Fiona\'s Fairy Song', artist: 'victorvantast' },

    // Personajes
    princesa:    { src: 'audio/PRINCESA-good_b_music-cinematic-fairy-tale-story-short-kikc-8698.mp3', title: 'Cinematic Fairy Tale', artist: 'good_b_music' },
    caballero:   { src: 'audio/CABALLERO-magiksolo-light-magic-163952.mp3', title: 'Light Magic', artist: 'magiksolo' },
    dragon:      { src: 'audio/DRAGON-hitslab-magic-mystery-harry-potter-music-320643.mp3', title: 'Magic Mystery', artist: 'hitslab' },
    hada:        { src: 'audio/HADA-geoffharvey-magic-in-the-air-43177.mp3', title: 'Magic In The Air', artist: 'geoffharvey' },
    pirata:      { src: 'audio/PIRATA-crissa-steampunk-pirates-289789.mp3', title: 'Steampunk Pirates', artist: 'crissa' },
    unicornio:   { src: 'audio/UNICORNIO-croxroc-flight-of-the-unicorn-instrumental-391707.mp3', title: 'Flight Of The Unicorn', artist: 'croxroc' },
    robot:       { src: 'audio/ROBOT-hd-studio-robot-art-206392.mp3', title: 'Robot Art', artist: 'hd-studio' },
    sirena:      { src: 'audio/SIRENA-backgroundmusicforvideos-fairy-tale-music-amazing-beautiful-magic-background-intro-theme-287517.mp3', title: 'Fairy Tale Music', artist: 'backgroundmusicforvideos' },
    conejito:    { src: 'audio/CONEJITO-playlistsons-the-ukulele-magic-song-joy-and-fun-306996.mp3', title: 'The Ukulele Magic Song', artist: 'playlistsons' },
    bruja_buena: { src: 'audio/BRUJABUENA-yana126-the-magic-vortex1-482369.mp3', title: 'The Magic Vortex', artist: 'yana126' },
  };

  // Elige aleatoriamente entre música de personaje o de escenario
  // Si uno de los dos no existe, usa el que exista
  function pickStoryTrack(personajeId, escenarioId) {
    const hasPersonaje = !!TRACKS[personajeId];
    const hasEscenario = !!TRACKS[escenarioId];
    if (hasPersonaje && hasEscenario) {
      // 50/50 aleatorio
      return Math.random() < 0.5 ? personajeId : escenarioId;
    }
    if (hasPersonaje) return personajeId;
    if (hasEscenario) return escenarioId;
    return 'home'; // fallback
  }

  let currentAudio = null;
  let currentTrack = null;
  let isMuted = localStorage.getItem('cc_muted') === 'true';
  const VOLUME = 0.35;
  const FADE_DURATION = 1000; // ms

  function fadeOut(audio, onDone) {
    if (!audio) { if (onDone) onDone(); return; }
    const step = audio.volume / 20;
    const interval = setInterval(() => {
      if (audio.volume > step) {
        audio.volume = Math.max(0, audio.volume - step);
      } else {
        audio.pause();
        audio.volume = VOLUME;
        clearInterval(interval);
        if (onDone) onDone();
      }
    }, FADE_DURATION / 20);
  }

  function fadeIn(audio) {
    audio.volume = 0;
    const step = VOLUME / 20;
    const interval = setInterval(() => {
      if (audio.volume < VOLUME - step) {
        audio.volume = Math.min(VOLUME, audio.volume + step);
      } else {
        audio.volume = VOLUME;
        clearInterval(interval);
      }
    }, FADE_DURATION / 20);
  }

  let notificationTimeout = null;

  function showTrackNotification(title, artist) {
    const notif = document.getElementById('trackNotification');
    const titleEl = document.getElementById('trackTitle');
    const artistEl = document.getElementById('trackArtist');
    if (!notif || !titleEl || !artistEl) return;

    titleEl.textContent = '🎵 ' + title;
    artistEl.textContent = 'Por ' + artist;

    notif.classList.remove('show');
    // Force reflow
    void notif.offsetWidth;
    notif.classList.add('show');

    clearTimeout(notificationTimeout);
    notificationTimeout = setTimeout(() => {
      notif.classList.remove('show');
    }, 4000);
  }

  function play(trackKey) {
    if (trackKey === currentTrack) return; // Ya está tocando
    const trackInfo = TRACKS[trackKey];
    if (!trackInfo) return;

    fadeOut(currentAudio, () => {
      const newAudio = new Audio(trackInfo.src);
      newAudio.loop = true;
      newAudio.volume = 0;

      newAudio.addEventListener('error', () => {
        // Si el archivo no existe, ignorar silenciosamente
        console.warn('[AudioManager] Archivo no encontrado:', trackInfo.src);
      });

      if (!isMuted) {
        newAudio.play().then(() => {
          fadeIn(newAudio);
          showTrackNotification(trackInfo.title, trackInfo.artist);
        }).catch(() => {
          // Autoplay bloqueado, se reproducirá en el primer gesto del usuario
        });
      }

      currentAudio = newAudio;
      currentTrack = trackKey;
    });
  }

  function toggleMute() {
    isMuted = !isMuted;
    localStorage.setItem('cc_muted', isMuted);

    if (isMuted) {
      if (currentAudio) {
        fadeOut(currentAudio, () => {
          // Audio pausado, no detenemos para poder retomarlo
        });
      }
    } else {
      if (currentAudio) {
        currentAudio.play().catch(() => {});
        fadeIn(currentAudio);
      }
    }

    updateMuteButton();
    return isMuted;
  }

  function updateMuteButton() {
    const btn = document.getElementById('btnMute');
    if (!btn) return;
    btn.innerHTML = isMuted ? '🔇' : '🔊';
    btn.setAttribute('aria-label', isMuted ? 'Activar sonido' : 'Silenciar');
    btn.classList.toggle('muted', isMuted);
  }

  function initMuteButton() {
    updateMuteButton();
  }

  // Intentar reanudar después de un gesto del usuario
  function resumeOnGesture() {
    if (currentAudio && !isMuted && currentAudio.paused) {
      currentAudio.play().catch(() => {});
    }
  }

  function getMuted() { return isMuted; }

  // Array de música permitida para el menú y selección
  const HOME_TRACKS = ['home', 'castillo', 'bosque', 'nube', 'jardin', 'estrellas', 'princesa', 'hada', 'unicornio', 'conejito'];

  function playRandomHome() {
    const trackKey = HOME_TRACKS[Math.floor(Math.random() * HOME_TRACKS.length)];
    play(trackKey);
  }

  function getCurrentTrack() { return currentTrack; }

  return { play, pickStoryTrack, toggleMute, initMuteButton, resumeOnGesture, getMuted, playRandomHome, getCurrentTrack };
})();


function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('creacuentos_lang', lang);
  
  document.querySelectorAll('.btn-lang').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
      el.innerHTML = TRANSLATIONS[lang][key];
    }
  });

  renderElements();
  updateSelectionSummary();
  if (document.getElementById('screenHistory').classList.contains('active')) {
    renderHistory();
  }
}


// ============================================
// Stars Background
// ============================================
function createStars() {
  const container = document.getElementById('starsBg');
  const count = 60;
  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.setProperty('--dur', (2 + Math.random() * 4) + 's');
    star.style.animationDelay = Math.random() * 4 + 's';
    star.style.width = star.style.height = (1 + Math.random() * 3) + 'px';
    container.appendChild(star);
  }
}

// ============================================
// Screen Navigation
// ============================================
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  // Show/hide bottom bars
  const selBar = document.getElementById('selectionSummary');
  const storyBar = document.getElementById('storyActions');

  if (id === 'screenSelector') {
    selBar.classList.add('visible');
    storyBar.style.display = 'none';
    updateSelectionSummary();
    AudioManager.playRandomHome(); // Música general mientras elige
  } else if (id === 'screenStory') {
    selBar.classList.remove('visible');
    storyBar.style.display = 'flex';
    // Elegir aleatoriamente entre música de personaje o de escenario
    if (currentStory) {
      const trackKey = AudioManager.pickStoryTrack(currentStory.personajeId, currentStory.escenarioId);
      AudioManager.play(trackKey);
    } else if (selected.escenario) {
      // Fallback si no hay cuento todavía
      const trackKey = AudioManager.pickStoryTrack(selected.personaje, selected.escenario);
      AudioManager.play(trackKey);
    }
  } else if (id === 'screenHome') {
    selBar.classList.remove('visible');
    storyBar.style.display = 'none';
    AudioManager.playRandomHome();
  } else {
    selBar.classList.remove('visible');
    storyBar.style.display = 'none';
  }

  if (id === 'screenHistory') {
    renderHistory();
  }

  // Scroll to top
  window.scrollTo(0, 0);
  
  // Reanudar audio después del gesto de navegación
  AudioManager.resumeOnGesture();
}

// ============================================
// Element Cards Rendering
// ============================================
function renderElements() {
  renderCategory('personajes', 'gridPersonajes');
  renderCategory('escenarios', 'gridEscenarios');
  renderCategory('objetos', 'gridObjetos');
}

function renderCategory(cat, gridId) {
  const grid = document.getElementById(gridId);
  grid.innerHTML = '';
  const catKey = cat === 'personajes' ? 'personaje' : cat === 'escenarios' ? 'escenario' : 'objeto';
  const elements = STORY_DATA[currentLang].elementos[cat];

  elements.forEach(el => {
    const card = document.createElement('div');
    card.className = 'element-card' + (selected[catKey] === el.id ? ' selected' : '');
    card.innerHTML = `<span class="element-emoji">${el.emoji}</span><span class="element-name">${el.nombre}</span>`;
    card.addEventListener('click', () => {
      if (selected[catKey] === el.id) {
        selected[catKey] = null;
      } else {
        selected[catKey] = el.id;
        // Auto-scroll logic
        setTimeout(() => {
          if (cat === 'personajes') {
            document.getElementById('gridEscenarios').parentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else if (cat === 'escenarios') {
            // Preview musical del escenario al seleccionarlo
            AudioManager.play(el.id);
            document.getElementById('gridObjetos').parentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 300);
      }
      renderCategory(cat, gridId);
      updateSelectionSummary();
      
      // Reanudar audio tras gesto
      AudioManager.resumeOnGesture();
    });
    grid.appendChild(card);
  });
}

// ============================================
// Selection Summary
// ============================================
function updateSelectionSummary() {
  const pills = document.getElementById('selectionPills');
  const btn = document.getElementById('btnGenerate');

  const items = [
    { key: 'personaje', label: TRANSLATIONS[currentLang].pillPersonaje, emoji: '🧑' },
    { key: 'escenario', label: TRANSLATIONS[currentLang].pillEscenario, emoji: '🏰' },
    { key: 'objeto', label: TRANSLATIONS[currentLang].pillObjeto, emoji: '✨' },
  ];

  pills.innerHTML = items.map(item => {
    const sel = selected[item.key];
    if (sel) {
      const cat = item.key === 'personaje' ? 'personajes' :
                  item.key === 'escenario' ? 'escenarios' : 'objetos';
      const elements = STORY_DATA[currentLang].elementos[cat];
      const el = elements.find(e => e.id === sel);
      return `<span class="selection-pill filled">${el.emoji} ${el.nombre}</span>`;
    }
    return `<span class="selection-pill">${item.emoji} ${item.label}</span>`;
  }).join('');

  const allSelected = selected.personaje && selected.escenario && selected.objeto;
  btn.disabled = !allSelected;
  btn.style.opacity = allSelected ? '1' : '0.5';
}

// ============================================
// Generate Story
// ============================================
function onGenerate() {
  if (!selected.personaje || !selected.escenario || !selected.objeto) return;

  // Show generating overlay
  const overlay = document.getElementById('generatingOverlay');
  overlay.classList.add('active');

  setTimeout(() => {
    currentStory = generateStory(selected.personaje, selected.escenario, selected.objeto);

    if (currentStory) {
      renderStory(currentStory);
      overlay.classList.remove('active');
      showScreen('screenStory');
    } else {
      overlay.classList.remove('active');
      showToast(TRANSLATIONS[currentLang].errorGenerate);
    }
  }, 600);
}

function renderStory(story) {
  document.getElementById('storyBadges').innerHTML = `
    <span class="story-badge">${story.personajeEmoji} ${story.personaje}</span>
    <span class="story-badge">${story.escenarioEmoji} ${story.escenario}</span>
    <span class="story-badge">${story.objetoEmoji} ${story.objeto}</span>
    ${story.villanoEmoji ? `<span class="story-badge ${story.villanoTipo === 'entorno' ? 'entorno-badge' : 'villain-badge'}">${story.villanoEmoji}</span>` : ''}
  `;
  document.getElementById('storyTitle').textContent = story.titulo;
  document.getElementById('storyBody').textContent = story.cuerpo;

  // Render local illustration based on character
  const imgEl = document.getElementById('storyImage');
  const offlineEl = document.getElementById('storyImageOffline');
  
  imgEl.style.display = 'none';
  offlineEl.style.display = 'none';
  
  const localImages = ['princesa','caballero','dragon','hada','pirata',
                       'unicornio','robot','sirena','conejito','bruja_buena'];
  const charId = story.personajeId;

  if (localImages.includes(charId)) {
    imgEl.onload = () => { imgEl.style.display = 'block'; };
    imgEl.onerror = () => { imgEl.style.display = 'none'; };
    imgEl.src = `images/char-${charId}.png`;
  }
}

// ============================================
// Save & History
// ============================================
function onSaveStory() {
  if (!currentStory) return;
  const history = getHistory();

  // Check if already saved (same template + same elements)
  const exists = history.some(h =>
    h.personaje === currentStory.personaje &&
    h.escenario === currentStory.escenario &&
    h.objeto === currentStory.objeto &&
    h.templateId === currentStory.templateId
  );

  if (exists) {
    showToast(TRANSLATIONS[currentLang].alreadySaved);
    return;
  }

  history.unshift(currentStory);
  if (history.length > 50) history.pop();
  localStorage.setItem('creacuentos_history', JSON.stringify(history));
  showToast(TRANSLATIONS[currentLang].savedSuccess);
}

function getHistory() {
  try {
    return JSON.parse(localStorage.getItem('creacuentos_history')) || [];
  } catch { return []; }
}

function renderHistory() {
  const container = document.getElementById('historyContainer');
  const history = getHistory();

  if (history.length === 0) {
    container.innerHTML = `
      <div class="history-empty">
        <span class="history-empty-emoji">📖</span>
        <p>${TRANSLATIONS[currentLang].emptyHistory}</p>
        <p style="margin-top:8px;font-size:0.85rem;">${TRANSLATIONS[currentLang].emptyHistorySub}</p>
      </div>`;
    return;
  }

  container.innerHTML = '<div class="history-list">' + history.map((story, i) => {
    const date = new Date(story.fecha);
    const dateStr = date.toLocaleDateString('es', { day: 'numeric', month: 'short', year: 'numeric' });
    const preview = story.cuerpo.substring(0, 100) + '...';
    return `
      <div class="history-card" onclick="openHistoryStory(${i})">
        <div class="history-card-header">
          <div class="history-card-emojis">${story.personajeEmoji}${story.escenarioEmoji}${story.objetoEmoji}</div>
          <div class="history-card-title">${story.titulo}</div>
        </div>
        <div class="history-card-date">${dateStr}</div>
        <div class="history-card-preview">${preview}</div>
        <div class="history-card-actions">
          <button class="btn-delete" onclick="event.stopPropagation(); deleteStory(${i})">${TRANSLATIONS[currentLang].btnDelete}</button>
        </div>
      </div>`;
  }).join('') + '</div>';
}

function openHistoryStory(index) {
  const history = getHistory();
  if (history[index]) {
    currentStory = history[index];
    renderStory(currentStory);
    // Elegir aleatoriamente entre música de personaje o de escenario del cuento guardado
    const trackKey = AudioManager.pickStoryTrack(
      currentStory.personajeId,
      currentStory.escenarioId
    );
    AudioManager.play(trackKey);
    showScreen('screenStory');
  }
}

function deleteStory(index) {
  const history = getHistory();
  history.splice(index, 1);
  localStorage.setItem('creacuentos_history', JSON.stringify(history));
  renderHistory();
  showToast(TRANSLATIONS[currentLang].deletedSuccess);
}

function onNewStory() {
  showScreen('screenSelector');
}

// ============================================
// Toast
// ============================================
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// ============================================
// Init
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang); // Initializes language
  createStars();
  AudioManager.initMuteButton();

  // Intentar iniciar música al primer gesto del usuario en la pantalla home
  document.addEventListener('click', () => {
    AudioManager.resumeOnGesture();
    // Solo reproducir home si no hay nada sonando aún
    if (!AudioManager.getCurrentTrack()) {
      AudioManager.playRandomHome();
    }
  }, { once: true });

  // Iniciar música home al cargar
  AudioManager.playRandomHome();

  // Register Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
});
