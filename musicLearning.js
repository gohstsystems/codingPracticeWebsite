var c = document.getElementById("screen0");
var ctx = c.getContext("2d");
var c = document.getElementById("screen1");
var ctx2 = c.getContext("2d");


function drawBkgd()
{
ctx.fillStyle = "#aaaaff";
ctx.fillRect(0, 0, 700, 400);

ctx.fillStyle = "black";
ctx.font = "30px Arial";
ctx.fillText("Music" , 200, 50);


ctx.moveTo(100, 100);
ctx.lineTo(500, 100);
ctx.stroke();

ctx.moveTo(100, 150);
ctx.lineTo(500, 150);
ctx.stroke();

ctx.moveTo(100, 200);
ctx.lineTo(500, 200);
ctx.stroke();

ctx.moveTo(100, 250);
ctx.lineTo(500, 250);
ctx.stroke();

ctx.moveTo(100, 300);
ctx.lineTo(500, 300);
ctx.stroke();
}


drawBkgd();