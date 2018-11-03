var ctx;
var canvas;
var unit = 5;
var positionX = 0;

var requestId;
window.onload = init;

function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    startAnimation();
}

function startAnimation() {
    requestId = requestAnimationFrame(animationLoop);
}

function animationLoop() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    drawBackground();
    drawRuler(10);
    positionX += 10;
    requestId = requestAnimationFrame(animationLoop);
}

function drawBackground() {
    ctx.fillStyle="#5B8BFF"; 
    ctx.fillRect(0,0,canvas.width,canvas.height);

}