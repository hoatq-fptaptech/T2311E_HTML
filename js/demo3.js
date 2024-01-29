var fs;
var speed = 10;
function fan(){
    var f = document.getElementById("fan");
    var dg = 0;
    fs = setInterval(function(){
        if(dg == 360) dg=0;
        dg+=speed;
        f.style.transform = `rotate(${dg}deg)`;
    },20);
}

function stopFan(){
    clearInterval(fs);
}