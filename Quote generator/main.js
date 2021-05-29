
var quotes = ["The purpose of our lives is to be happy. — Dalai Lama", 
"Life is what happens when you are busy making other plans. — John Lennon",
"Get busy living or get busy dying.” — Stephen King",
"You only live once, but if you do it right, once is enough. — Mae West",
"If you want to live a happy life, tie it to a goal, not to people or things.– Albert Einstein",
 "Never let the fear of striking out keep you from playing the game.– Babe Ruth",
 "If life were predictable it would cease to be life, and be without flavor. – Eleanor Roosevelt",
 "Not how long, but how well you have lived is the main thing. — Seneca"
]

var btn = document.getElementById("button");

btn.addEventListener("click", function(){
    var board = document.getElementById("board");

    var index = Math.floor(Math.random()*quotes.length);
    board.innerText = quotes[index];
})