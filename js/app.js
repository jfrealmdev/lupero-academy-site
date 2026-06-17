/* ─── Live class tabs ─── */
function switchLiveTab(tabName) {
  document.querySelectorAll('.live-panel__tab').forEach(t => {
    t.classList.toggle('active', t.dataset.tab === tabName);
  });
  document.querySelectorAll('.live-panel__tab-content').forEach(c => {
    c.classList.toggle('active', c.dataset.tab === tabName);
  });
}

function initLiveTabs() {
  document.querySelectorAll('.live-panel__tab').forEach(tab => {
    tab.addEventListener('click', () => switchLiveTab(tab.dataset.tab));
  });
}

/* ─── Recursos filter ─── */
function filterRecursos(category) {
  document.querySelectorAll('.filter-pill').forEach(pill => {
    pill.classList.toggle('active', pill.dataset.filter === category);
  });

  document.querySelectorAll('.recurso-card').forEach(card => {
    if (category === 'todo') {
      card.style.display = '';
    } else {
      card.style.display = card.dataset.category === category ? '' : 'none';
    }
  });
}

function initRecursosFilter() {
  document.querySelectorAll('.filter-pill').forEach(pill => {
    pill.addEventListener('click', () => filterRecursos(pill.dataset.filter));
  });
}

/* ─── Recurso Preview ─── */
function showRecursoPreview(recursoId) {
  document.querySelectorAll('.recurso-preview__content-block').forEach(b => {
    b.classList.toggle('active', b.dataset.recurso === recursoId);
  });
  navigateTo('recurso-preview');
}

function initRecursoPreview() {
  document.querySelectorAll('.recurso-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.recursoId;
      if (id) showRecursoPreview(id);
    });
  });
}

/* ─── Mis Clases tabs ─── */
function switchClasesTab(tabName) {
  document.querySelectorAll('#screen-mis-clases .tab-pill').forEach(t => {
    t.classList.toggle('active', t.dataset.tab === tabName);
  });
  document.querySelectorAll('#screen-mis-clases .tab-content').forEach(c => {
    c.classList.toggle('active', c.dataset.tab === tabName);
  });
}

function initMisClasesTabs() {
  document.querySelectorAll('#screen-mis-clases .tab-pill').forEach(pill => {
    pill.addEventListener('click', () => switchClasesTab(pill.dataset.tab));
  });
}

/* ─── Language toggle ─── */
function initLangToggle() {
  document.querySelectorAll('.lang-toggle__btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang);
    });
  });

  const saved = localStorage.getItem('lupero-lang') || 'es';
  setLanguage(saved);
}

/* ─── Init all ─── */
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initLangToggle();
  initAgendar();
  initLiveTabs();
  initRecursosFilter();
  initRecursoPreview();
  initMisClasesTabs();
});
