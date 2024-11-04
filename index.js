const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let watchRunning = false;

function start() {
    if (!watchRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateTime, 10);
        watchRunning = true;
    }
}
function stop() {
    if (watchRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        watchRunning = false;
    }
}
function reset() {
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    watchRunning = false;
    display.textContent = `00:00:00:00`;
}

function updateTime() {
    const currentTime = Date.now();
    let elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / (1000) % 60);
    let milliSeconds = Math.floor((elapsedTime % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliSeconds = String(milliSeconds).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}:${milliSeconds}`;
}