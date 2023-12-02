const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");
const newYears = "2023-12-02T10:24:03";

function isDaytime(dateStr) {
    const date = new Date(dateStr);
    return date.getHours() >= 5 && date.getHours() < 18;
}

const now = new Date();
const hours = now.getHours();

if (isDaytime(now)) {
    // Daytime
    document.body.style.background = "##ff0000";
    document.body.style.color = "#333";
} else {
    // Nighttime
    document.body.style.background = "#262626";
    document.body.style.color = "#f2f2f2";
}

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  if (currentDate > newYearsDate) {
    // Calculate the difference between the current time and the target time
    const diff = currentDate - newYearsDate;

    // Update the countdown with the difference
    const days = Math.floor(diff / 3600 / 24);
    const hours = Math.floor(diff / 3600) % 24;
    const mins = Math.floor(diff / 60) % 60;
    const seconds = Math.floor(diff) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
  } else {
    // Current time is before the target time, so just display the countdown normally
    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
  }
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();
setInterval(countdown, 1000);
