var today = newDate();
var hourNow = today.getHours();
var greetingMessage;

function greetUser()
{
    if(hourNow > 18)
    {
        greetingMessage = 'Good Evening';
    }
    else if(hourNow > 12)
    {
        greetingMessage = 'Good Afternoon!';
    }
    else if(hourNow > 0)
    {
        greetingMessage = 'Good Morning!';
    }
    
    var el = document.getElementById('greet');
    el.textContent = greetingMessage;
}

greetUser();
