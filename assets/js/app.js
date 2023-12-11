// Countdown to 1st January 2024, 00:00:00
const countdownDate = new Date("2024-01-01T00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById(
    "timer"
  ).innerHTML = `${days}D: ${hours}H: ${minutes}M: ${seconds}S`;
}

setInterval(updateCountdown, 1000);
