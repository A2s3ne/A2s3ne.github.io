const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");
const newYears = "2023-12-03T16:24:03";

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

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);

// Update the countdown to start at a specific time
const targetTime = new Date("2023-11-27T15:00:00"); // 3 PM on November 27th, 2023
const currentTime = new Date();
const diff = targetTime - currentTime;

if (diff > 0) {
    setTimeout(() => {
        countdown();
    }, diff);
}
