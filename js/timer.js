function startTimer(duration, display) 
{
    var timer = duration, minutes, seconds;

    setInterval(function () 
    {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) 
        {
            clearInterval(timer = 0)
            breakTimer();
        }
    }, 1000);
}


var timerRunning = false;
var timerMsg;

function playTimer()
{
    clearInterval()
    var twentyFiveMinutes = 3,
    display = document.querySelector('#main-timer');
    startTimer(twentyFiveMinutes, display);

    timerMsg = "Coding!";
    var elPlayMsg = document.getElementById('timer-state');
    elPlayMsg.textContent = timerMsg;
}

function breakTimer()
{
    timerMsg = "Take a Break!";
    var elPBreakMsg = document.getElementById('timer-state');
    elPBreakMsg.textContent = timerMsg;
}


function pauseTimer()
{
    timerMsg = "Paused!";
    var elPauseMsg = document.getElementById('timer-state');
    elPauseMsg.textContent = timerMsg;
}

document.getElementById("button-start").addEventListener("click", playTimer);
document.getElementById("button-pause").addEventListener("click", pauseTimer);





