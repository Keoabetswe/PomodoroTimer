function greetUser()
{
    var today = newDate();
    var hourNow = today.getHours();
    var greetingMessage;

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

    var el = document.getElementById('greeting');
    el.textContent = greetingMessage;
}

greetUser();
