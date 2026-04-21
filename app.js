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
  // Mapeo de personajes a archivos de música
  // Los archivos deben colocarse en la carpeta audio/
  // Usar Pixabay Music (gratis, royalty-free, uso comercial permitido)
  const TRACKS = {
    // Pantalla de inicio
    home:        { src: 'audio/HOME-geoffharvey-magical-music-box-389086.mp3', title: 'Magical Music Box', artist: 'geoffharvey' },

    // Personajes (cada uno acepta un array de múltiples opciones)
    princesa:    [ 
      { src: 'audio/PRINCESA-good_b_music-cinematic-fairy-tale-story-short-kikc-8698.mp3', title: 'Cinematic Fairy Tale', artist: 'good_b_music' },
      { src: 'audio/PRINCESA-geoffharvey-the-princess-and-her-jewels-120679.mp3', title: 'The Princess And Her Jewels', artist: 'geoffharvey' }
    ],
    caballero:   [ 
      { src: 'audio/CABALLERO-magiksolo-light-magic-163952.mp3', title: 'Light Magic', artist: 'magiksolo' },
      { src: 'audio/CABALLERO-tunetank-medieval-happy-music-412790.mp3', title: 'Medieval Happy Music', artist: 'tunetank' }
    ],
    dragon:      [ 
      { src: 'audio/DRAGON-hitslab-magic-mystery-harry-potter-music-320643.mp3', title: 'Magic Mystery', artist: 'hitslab' },
      { src: 'audio/DRAGON-tyufyakin-act-1-pack-your-bags-itx27s-time-to-go-455438.mp3', title: 'Act 1 Pack Your Bags', artist: 'tyufyakin' }
    ],
    hada:        [ 
      { src: 'audio/HADA-geoffharvey-magic-in-the-air-43177.mp3', title: 'Magic In The Air', artist: 'geoffharvey' },
      { src: 'audio/HADA-leberch-quirky-orchestra-244600.mp3', title: 'Quirky Orchestra', artist: 'leberch' }
    ],
    pirata:      [ 
      { src: 'audio/PIRATA-crissa-steampunk-pirates-289789.mp3', title: 'Steampunk Pirates', artist: 'crissa' },
      { src: 'audio/PIRATAS-ebunny-pirate-adventure-361663.mp3', title: 'Pirate Adventure', artist: 'ebunny' }
    ],
    unicornio:   [ 
      { src: 'audio/UNICORNIO-croxroc-flight-of-the-unicorn-instrumental-391707.mp3', title: 'Flight Of The Unicorn', artist: 'croxroc' },
      { src: 'audio/UNICORNIO-hitslab-fantasy-fantasy-magic-fairy-tale-music-460585.mp3', title: 'Fantasy Fairy Tale Music', artist: 'hitslab' }
    ],
    robot:       [ 
      { src: 'audio/ROBOT-hd-studio-robot-art-206392.mp3', title: 'Robot Art', artist: 'hd-studio' },
      { src: 'audio/ROBOT-raspberrymusic-arcade-hero-children-video-game-cartoon-379376.mp3', title: 'Arcade Hero', artist: 'raspberrymusic' }
    ],
    sirena:      [ 
      { src: 'audio/SIRENA-backgroundmusicforvideos-fairy-tale-music-amazing-beautiful-magic-background-intro-theme-287517.mp3', title: 'Fairy Tale Music', artist: 'backgroundmusicforvideos' },
      { src: 'audio/SIRENA-soundfreezone_24-x27a-cradle-of-winter-lightx27-443545.mp3', title: 'A Cradle Of Winter Light', artist: 'soundfreezone_24' }
    ],
    conejito:    [ 
      { src: 'audio/CONEJITO-playlistsons-the-ukulele-magic-song-joy-and-fun-306996.mp3', title: 'The Ukulele Magic Song', artist: 'playlistsons' },
      { src: 'audio/CONEJITO-geoffharvey-catch-that-rabbit-175651.mp3', title: 'Catch That Rabbit', artist: 'geoffharvey' }
    ],
    bruja_buena: [ 
      { src: 'audio/BRUJABUENA-yana126-the-magic-vortex1-482369.mp3', title: 'The Magic Vortex', artist: 'yana126' },
      { src: 'audio/BRUJABUENA-whatssmooth-the-fairy-of-crimson-light-426355.mp3', title: 'The Fairy Of Crimson Light', artist: 'whatssmooth' }
    ],
  };

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
    let trackInfo = TRACKS[trackKey];
    if (!trackInfo) return;

    if (Array.isArray(trackInfo)) {
      trackInfo = trackInfo[Math.floor(Math.random() * trackInfo.length)];
    }

    if (currentAudio && currentAudio.src.endsWith(trackInfo.src.split('/').pop())) {
      currentTrack = trackKey;
      return; 
    }

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
          // Autoplay bloqueado, se anotará para hacer fade-in en el primer gesto
          newAudio.autoplayBlocked = true;
          newAudio.trackInfoSaved = trackInfo;
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
      currentAudio.play().then(() => {
        if (currentAudio.autoplayBlocked) {
          currentAudio.autoplayBlocked = false;
          fadeIn(currentAudio);
          if (currentAudio.trackInfoSaved) {
            showTrackNotification(currentAudio.trackInfoSaved.title, currentAudio.trackInfoSaved.artist);
          }
        }
      }).catch(() => {});
    }
  }

  function getMuted() { return isMuted; }

  // Array de música permitida para el menú y selección
  const HOME_TRACKS = ['home'];

  function playRandomHome() {
    const trackKey = HOME_TRACKS[Math.floor(Math.random() * HOME_TRACKS.length)];
    play(trackKey);
  }

  function getCurrentTrack() { return currentTrack; }

  return { play, toggleMute, initMuteButton, resumeOnGesture, getMuted, playRandomHome, getCurrentTrack };
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
    // Tocar música de personaje
    if (currentStory) {
      AudioManager.play(currentStory.personajeId || 'home');
    } else if (selected.personaje) {
      AudioManager.play(selected.personaje);
    } else {
      AudioManager.play('home');
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

  const overlay = document.getElementById('generatingOverlay');
  
  // Extraer los emojis de las opciones seleccionadas
  const emojis = [
    STORY_DATA[currentLang].elementos.personajes.find(e => e.id === selected.personaje).emoji,
    STORY_DATA[currentLang].elementos.escenarios.find(e => e.id === selected.escenario).emoji,
    STORY_DATA[currentLang].elementos.objetos.find(e => e.id === selected.objeto).emoji
  ];

  // Insertar los emojis elegidos
  document.getElementById('generatingEmojis').innerHTML = `
    <span class="anim-emoji left">${emojis[0]}</span>
    <span class="anim-emoji center">${emojis[1]}</span>
    <span class="anim-emoji right">${emojis[2]}</span>
  `;

  // Asegurarnos que la poción esté reseteada
  const potion = document.getElementById('generatingPotion');
  potion.classList.remove('burst');

  overlay.classList.add('active');

  // A los 2 segundos, detonar la explosión de la magia
  setTimeout(() => {
    if (potion) potion.classList.add('burst');
  }, 2200);

  // A los 2.8 segundos, revelar el cuento
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
  }, 2800);
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
    // Tocar música del personaje correspondiente al cuento guardado
    AudioManager.play(currentStory.personajeId || 'home');
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

  // Iniciar música imperceptible al primer gesto real en la pantalla
  const startAudioOnFirstInteraction = () => {
    AudioManager.resumeOnGesture();
    // Solo reproducir home si no hay nada sonando aún
    if (!AudioManager.getCurrentTrack()) {
      AudioManager.playRandomHome();
    }
    // Remover los eventos una vez disparado para que no consuma recursos
    document.removeEventListener('click', startAudioOnFirstInteraction);
    document.removeEventListener('touchstart', startAudioOnFirstInteraction);
  };

  document.addEventListener('click', startAudioOnFirstInteraction);
  document.addEventListener('touchstart', startAudioOnFirstInteraction);

  // Iniciar música home al cargar
  AudioManager.playRandomHome();

  // Register Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
});
