var timerRunning = false;
var timerMsg;

function playTimer()
{
    var twentyFiveMinutes = 3 * 3, //temporary values
    display = document.querySelector('#main-timer');
    startTimer(twentyFiveMinutes, display);

    timerMsg = "Working!";
    var elPlayMsg = document.getElementById('timer-state');
    elPlayMsg.textContent = timerMsg;
}

function pauseTimer()
{
    timerMsg = "Paused!";
    var elPauseMsg = document.getElementById('timer-state');
    elPauseMsg.textContent = timerMsg;
}

document.getElementById("button-start").addEventListener("click", mainTimer);
