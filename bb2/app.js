/* Filename: app.js
   Javascript for Game 2 Homework
*/

//alert("ok");
//console.log("ok");

window.onload = init;

function init() {
  var canvas = document.getElementById("game_area");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#77f";

  ctx.beginPath();
  ctx.arc(50, 50, 20, 0, 2 * Math.PI);
  ctx.fill();
}
