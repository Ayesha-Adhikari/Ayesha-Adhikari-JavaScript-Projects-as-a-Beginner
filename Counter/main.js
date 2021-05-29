
var add =  document.getElementById("add");
var sub = document.getElementById("sub");
var board = document.getElementById("board");
let counterValue = 0;
add.addEventListener("click", function(){
    counterValue += 1;
    board.innerHTML = counterValue;
    console.log("counter =", counterValue);
})

sub.addEventListener("click", function(){
    counterValue -= 1;
    board.innerHTML = counterValue;
})
