var btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    var board = document.getElementById("board");
    var message = document.getElementById("message").value;
    board.innerHTML = message;
    document.getElementById("message").value = " ";
})