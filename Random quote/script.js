let quotes = [
    "It is hard to fail but it is worse never to have tried to succeed.” —Theodore Roosevelt",
    "“That which does not kill us makes us stronger.” —Friedrich Nietzsche",
    "“I have not failed. I’ve just found 10,000 ways that won’t work.” —Thomas A. Edison",
    "“Be miserable. Or motivate yourself. Whatever has to be done, it’s always your choice.” —Wayne Dyer",
    "“The future belongs to those who believe in the beauty of their dreams.” —Eleanor Roosevelt",
    "“I challenge you to make your life a masterpiece. I challenge you to join the ranks of those people who live what they teach, who walk their talk.” —Anthony Robbins",
    "“The greater damage for most of us is not that our aim is too high and we miss it, but that it it too low and we reach it.” —Michelangelo",
    "“Do not go where the path may lead , go instead where there is no path and leave a trail.” —Ralph Waldo Emerson",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. —Winston Churchill",
    "“I hated every minute of training, but I said, ‘Don’t quit. Suffer now and live the rest of your life as a champion.’” —Muhammad Ali",
    "“I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game-winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.” —Michael Jordan",
    "“The   two most important days in your life are the day you are born and the day you find out why.” —Mark Twain"];
    
    function newQuote(){
        let randomNumber = Math.floor(Math.random() * (quotes.length));
        document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
   }
    
    
    
    
    
    // function newQuote(){
    //     let quoteViewer = document.getElementById("quoteDisplay").innerText;
    //     for (let i = 0; i < quotes.length; i++){
    //         return quoteViewer[i];
    //     }

    //}