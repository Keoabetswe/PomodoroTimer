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
function mainTimer() 
{
    var twentyFiveMinutes = 3 * 3, //temporary values
    display = document.querySelector('#main-timer');
    startTimer(twentyFiveMinutes, display);
}

//executes 25 main timer
document.getElementById("button-start").addEventListener("click", mainTimer);


//break timer (5 minutes)
function breakTimer() 
{
    var fiveMinutes = 60 * 3, //temporary values
    display = document.querySelector('#break-timer');
    startTimer(fiveMinutes, display);
};

function showGreeting()
{
    var today = newDate();
    var hourNow = today.getHours();
    var greetingMessage;

    if(hourNow > 18)
    {
        greetingMessage = "Good Evening!";
    }
    else if(hourNow > 12)
    {
        greetingMessage = "Good Afternoon!";
    }
    else if(hourNow > 0)6
    {
        greetingMessage = "Good Morning!"
    }
    
    document.getElementById("greet").innerHTML = greetingMessage;
}

function playAudio()
{
    var ping = document.getElementById("timer-alarm");
    ping.playAudio();
}