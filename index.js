const display = document.getElementById("display");
const resetBtn = document.getElementById("resetBtn");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let watchRunning = false;

function start() {
    if (!watchRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateTime, 10);
        watchRunning = true;
        checkBtnState();
    }
    else {
        console.log("Button is Inactive!");
    }
}
function stop() {
    if (watchRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        watchRunning = false;
        checkBtnState();
    }
    else{
        console.log("Button is Inactive!");
    }
}
function reset() {
    if ((!watchRunning) && elapsedTime > 0) {
        clearInterval(timer);
        startTime = 0;
        elapsedTime = 0;
        watchRunning = false;
        display.textContent = `00:00:00:00`;
        checkBtnState();
    }
    else {
        console.log("Button is Inactive!");
    }
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

function checkBtnState () {
    // To Check whether Reset Btn is Active or not
    if (!watchRunning && elapsedTime > 0) {
        resetBtn.disabled = false;
    }
    else {
        resetBtn.disabled = true;
    }

    // To Check whether Start Btn is Active or not
    if (!watchRunning) {
        startBtn.disabled = false;
    }
    else {
        startBtn.disabled = true;
    }
    // To Check whether Stop Btn is Active or not
    if (watchRunning) {
        stopBtn.disabled = false;
    }
    else {
        stopBtn.disabled = true;
    }
}

checkBtnState ();