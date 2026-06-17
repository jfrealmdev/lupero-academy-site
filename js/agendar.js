const agendarState = {
  selectedDay: 2,
  selectedSlot: 's3',
};

const days = [
  { key: 'day.lun', num: '12', index: 0 },
  { key: 'day.mar', num: '13', index: 1 },
  { key: 'day.mie', num: '14', index: 2 },
  { key: 'day.jue', num: '15', index: 3 },
  { key: 'day.vie', num: '16', index: 4 },
  { key: 'day.sab', num: '17', index: 5 },
];

const slots = [
  { id: 's1', time: '08:00', available: true },
  { id: 's2', time: '09:30', available: false },
  { id: 's3', time: '11:00', available: true },
  { id: 's4', time: '14:00', available: true },
  { id: 's5', time: '16:30', available: true },
  { id: 's6', time: '18:00', available: false },
];

function selectDay(index) {
  agendarState.selectedDay = index;
  renderAgendar();
}

function selectSlot(id) {
  const slot = slots.find(s => s.id === id);
  if (!slot || !slot.available) return;
  agendarState.selectedSlot = id;
  renderAgendar();
}

function renderAgendar() {
  const lang = window.__luperoLang || 'es';
  const dict = translations[lang];

  document.querySelectorAll('.day-chip').forEach((chip, i) => {
    const isSelected = i === agendarState.selectedDay;
    chip.classList.toggle('selected', isSelected);
  });

  document.querySelectorAll('.slot-chip').forEach(chip => {
    const slotId = chip.dataset.slot;
    const slot = slots.find(s => s.id === slotId);
    if (!slot) return;
    chip.classList.toggle('selected', slotId === agendarState.selectedSlot);
    chip.classList.toggle('disabled', !slot.available);
  });

  const selDay = days[agendarState.selectedDay];
  const selSlot = slots.find(s => s.id === agendarState.selectedSlot);
  const selLabel = document.getElementById('agendar-sel-label');
  if (selLabel && selDay && selSlot) {
    const dayLabel = dict[selDay.key] || selDay.key;
    selLabel.textContent = dayLabel + ' ' + selDay.num + ' · ' + selSlot.time;
  } else if (selLabel) {
    selLabel.textContent = dict['agendar.chooseTime'] || 'Elige un horario';
  }
}

function initAgendar() {
  document.querySelectorAll('.day-chip').forEach((chip, i) => {
    chip.addEventListener('click', () => selectDay(i));
  });

  document.querySelectorAll('.slot-chip').forEach(chip => {
    chip.addEventListener('click', () => selectSlot(chip.dataset.slot));
  });

  renderAgendar();
}
