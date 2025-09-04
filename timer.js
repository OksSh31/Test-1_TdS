// timer.js
window.onload = function () {
  const timerElement = document.getElementById("timer");
  const form = document.forms["mechanics-test"];
  let time = 5 * 60; // 1 minute in seconds

  function updateTimer() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    timerElement.textContent = `Час: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    if (time <= 0) {
      clearInterval(countdown);
      form.submit(); // auto-submit when time runs out
    }
    time--;
  }

  // update every second
  updateTimer();
  let countdown = setInterval(updateTimer, 1000);
};
