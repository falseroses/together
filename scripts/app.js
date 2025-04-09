const timerElement = document.getElementById('timer');

// Set the specific date
const startDate = new Date('2024-08-10T20:30:00');

// Функція для вибору правильного закінчення
function getPluralForm(number, forms) {
  const n = Math.abs(number) % 100;
  const n1 = n % 10;

  if (n > 10 && n < 20) return forms[2]; // Наприклад: 11 секунд
  if (n1 > 1 && n1 < 5) return forms[1]; // Наприклад: 2 хвилини
  if (n1 === 1) return forms[0];         // Наприклад: 1 хвилина
  return forms[2];                       // Наприклад: 5 хвилин
}

function updateTimer() {
  const now = new Date();
  const diffInSeconds = Math.floor((now - startDate) / 1000);

  const months = Math.floor(diffInSeconds / (30 * 24 * 60 * 60));
  const days = Math.floor((diffInSeconds % (30 * 24 * 60 * 60)) / (24 * 60 * 60));
  const hours = Math.floor((diffInSeconds % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((diffInSeconds % (60 * 60)) / 60);
  const seconds = diffInSeconds % 60;

  // Формати для числівників
  const monthsText = getPluralForm(months, ['місяць', 'місяці', 'місяців']);
  const daysText = getPluralForm(days, ['день', 'дні', 'днів']);
  const hoursText = getPluralForm(hours, ['годину', 'години', 'годин']);
  const minutesText = getPluralForm(minutes, ['хвилину', 'хвилини', 'хвилин']);
  const secondsText = getPluralForm(seconds, ['секунду', 'секунди', 'секунд']);

  timerElement.textContent = `${months} ${monthsText}, ${days} ${daysText}, ${hours} ${hoursText}, ${minutes} ${minutesText} і ${seconds} ${secondsText}`;
}

// Update the timer every second
setInterval(updateTimer, 1000);
updateTimer();