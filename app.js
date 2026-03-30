// ============================================
// CREA CUENTOS — App Logic
// ============================================

// State
let currentLang = localStorage.getItem('creacuentos_lang') || 'es';
let selected = { personaje: null, escenario: null, objeto: null };
let currentStory = null;

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
  } else if (id === 'screenStory') {
    selBar.classList.remove('visible');
    storyBar.style.display = 'flex';
  } else {
    selBar.classList.remove('visible');
    storyBar.style.display = 'none';
  }

  if (id === 'screenHistory') {
    renderHistory();
  }

  // Scroll to top
  window.scrollTo(0, 0);
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
  }, 1800);
}

function renderStory(story) {
  // English keywords for AI image generation (avoids URL issues with accented chars)
  const IMG_KEYWORDS = {
    personaje: {
      princesa: 'princess', caballero: 'knight', dragon: 'cute dragon', hada: 'fairy',
      pirata: 'pirate', unicornio: 'unicorn', robot: 'friendly robot', sirena: 'mermaid',
      conejito: 'cute bunny', bruja_buena: 'friendly witch'
    },
    escenario: {
      castillo: 'enchanted castle', bosque: 'magical forest', isla: 'treasure island',
      nube: 'giant cloud', mar: 'underwater world', montana: 'snowy mountain',
      jardin: 'secret garden', estrellas: 'city of stars'
    },
    objeto: {
      espada: 'glowing sword', corona: 'magical crown', mapa: 'treasure map',
      varita: 'magic wand', pocion: 'shiny potion', llave: 'golden key',
      libro: 'enchanted book', amuleto: 'magical amulet'
    }
  };

  document.getElementById('storyBadges').innerHTML = `
    <span class="story-badge">${story.personajeEmoji} ${story.personaje}</span>
    <span class="story-badge">${story.escenarioEmoji} ${story.escenario}</span>
    <span class="story-badge">${story.objetoEmoji} ${story.objeto}</span>
  `;
  document.getElementById('storyTitle').textContent = story.titulo;
  document.getElementById('storyBody').textContent = story.cuerpo;

  // Render Image
  const imgEl = document.getElementById('storyImage');
  const offlineEl = document.getElementById('storyImageOffline');
  
  imgEl.style.display = 'none';
  offlineEl.style.display = 'none';
  
  if (navigator.onLine) {
    const p = IMG_KEYWORDS.personaje[story.personajeId] || story.personajeId;
    const e = IMG_KEYWORDS.escenario[story.escenarioId] || story.escenarioId;
    const o = IMG_KEYWORDS.objeto[story.objetoId] || story.objetoId;
    const prompt = `cute 3d children book illustration of a ${p} in a ${e} holding a ${o}, magical soft lighting, pixar disney style, vibrant colors`;
    const seed = Math.floor(Math.random() * 999999);
    
    imgEl.onload = () => { imgEl.style.display = 'block'; };
    imgEl.onerror = () => { offlineEl.style.display = 'block'; };
    
    imgEl.src = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=768&height=432&nologo=true&seed=${seed}`;
  } else {
    offlineEl.style.display = 'block';
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

  // Register Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
});
