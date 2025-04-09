const timerElement = document.getElementById('timer');

// Set the specific date
const startDate = new Date('2024-08-10T20:30:00');

function updateTimer() {
  const now = new Date();
  const diffInSeconds = Math.floor((now - startDate) / 1000);

  const months = Math.floor(diffInSeconds / (30 * 24 * 60 * 60));
  const days = Math.floor((diffInSeconds % (30 * 24 * 60 * 60)) / (24 * 60 * 60));
  const hours = Math.floor((diffInSeconds % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((diffInSeconds % (60 * 60)) / 60);
  const seconds = diffInSeconds % 60;

  timerElement.textContent = `${months} місяців, ${days} день, ${hours} години, ${minutes} хвилин і ${seconds} секунди`;
}

// Update the timer every second
setInterval(updateTimer, 1000);
updateTimer();