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
            timer = duration;
        }
    }, 1000);
}

// main timer (25 minutes)
/*function mainTimer() 
{
    var twentyFiveMinutes = 3 * 3, //temporary values
    display = document.querySelector('#main-timer');
    startTimer(twentyFiveMinutes, display);
}*/





