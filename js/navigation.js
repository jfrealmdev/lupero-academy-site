function navigateTo(screenId) {
  const current = document.querySelector('.screen.active');
  const target = document.getElementById('screen-' + screenId);
  if (!target || target === current) return;

  if (current) current.classList.remove('active');
  target.classList.add('active');

  window.scrollTo(0, 0);

  document.querySelectorAll('.sidebar__item').forEach(item => {
    item.classList.toggle('active', item.dataset.screen === screenId);
  });

  document.querySelectorAll('.mobile-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.screen === screenId);
  });

  if (screenId === 'landing') {
    document.querySelectorAll('.top-nav').forEach(n => n.style.display = '');
  }
}

function initNavigation() {
  document.querySelectorAll('[data-nav]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo(el.dataset.nav);
    });
  });

  document.querySelectorAll('.sidebar__item').forEach(item => {
    item.addEventListener('click', () => {
      if (item.dataset.screen) {
        navigateTo(item.dataset.screen);
      }
    });
  });

  document.querySelectorAll('.mobile-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      if (tab.dataset.screen) {
        navigateTo(tab.dataset.screen);
      }
    });
  });
}
