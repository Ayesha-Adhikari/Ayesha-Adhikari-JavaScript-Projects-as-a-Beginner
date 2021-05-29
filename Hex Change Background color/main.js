
let button = document.getElementById("button");

var generateColor = function()
{
    new_color = '#'+ (Math.random()*0xFFFFFF<<0).toString(16);
    if( new_color.length < 7)
        generateColor();
}

button.addEventListener('click', function(){
    generateColor();

    var container = document.getElementById('container');
    var text = document.getElementById('hex_code');
    text.innerText = new_color;
    container.style.background = new_color;
})


