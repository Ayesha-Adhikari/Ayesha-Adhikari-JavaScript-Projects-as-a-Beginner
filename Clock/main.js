
const secondHand = document.querySelector('.sec-hand');
const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');

function setDate()
{
    const now =  new Date();
    const sec =  now.getSeconds();
    console.log(sec);
    const secondsDegrees = ((sec / 60) * 360) + 90;
    secondHand.style.transform = "rotate("+ secondsDegrees +"deg)";

    let min = now.getMinutes();
    const minDegrees = min * 6 + 90;
    minHand.style.transform = "rotate("+ minDegrees +"deg)";
    console.log("min-"+ min);

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((min/60)*30) + 90;
    console.log("hd- "+ hourDegrees);
    hourHand.style.transform = "rotate(" +  hourDegrees+ "deg)" ;

}

setInterval(setDate, 1000);
setDate();