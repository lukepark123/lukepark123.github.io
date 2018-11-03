var ctx;
var canvas; 

var unit = 10

window.onload = init;

function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
  

    
    ctx.save();
    ctx.translate(20*unit,30*unit);
    ctx.fillRect(0,0,50,50);
    ctx.restore();
    drawRuler(5);
}