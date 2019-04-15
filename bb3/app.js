/* Filename: app.js
   Javascript for Game 2 Homework
*/

//alert("ok");
//console.log("ok");

//global variables

var canvas; 
var ctx; 

var y = 20;
var yp = 3;

var x = 20;

function ball(x,y,size,xp,yp,speed,color) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.speed = speed;
  this.color = color;
  this.xp = xp;
  this.yp = yp;
  this.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, thix.y, 20, 0,2 * Math.PI);
    ctx.fill();
  }
  this.updateData = function() {

  }
}




running = false;

window.onload = init;



function init() {
    canvas = document.getElementById("game_area");
    ctx = canvas.getContext("2d");
    draw();

    b = new ball(20,20,20,5,"#f7f");
    c = new ball(200,120,20,5,"#f00");

    b.draw(ctx);
    c.draw(ctx);
    document.querySelector("#sijak").addEventListener("click",function(){
        if(running){
          running = false;
          this.innerHTML = "Start";
          return ;
        }else{
          running = true;
          this.innerHTML = "Stop";
        }
        updateData();
        //rightdata();
        requestAnimationFrame(loop);
    });

}


function loop(){
  if(running){
  b.updateData();
  c.updateData();

  b.draw(ctx);
  c.draw(ctx);
  }
}






function updateData(){
  y++;
  x++;
  draw();
  if(running) {
  requestAnimationFrame(updateData);
  }
  
  if (y==330) if(running) {
    y--;
    if(y==20) {
    requestAnimationFrame(updateData);
    }
  }
 //updateData2();
    
  if (x==330) {
    x--;
    if(x==20) {
      requestAnimationFrame(updateData);
      }
  }






  
}
/*
function updateData2(){

  y--;
  
  draw();
  if(running)
  requestAnimationFrame(updateData2);
  if (x==330) updateData3();
  if (y==20) updateData();
}
function updatedata3() {
  x--;
  draw();
  if(running)
  requestAnimationFrame(updateData2);

  if (x==20) updateData();
}

function rightdata(){
  x++;
  draw();
  if(running) {
  requestAnimationFrame(updateData);

  if (x==330) rightdata2();
  }
}

function rightdata2(){

  x--;
  draw();
  if(running)
  requestAnimationFrame(updateData2);

  if (x==20) rightdata();
}
*/
function draw(){
  //CLEAR YOUR CANVAS
  ctx.clearRect(0, 0, canvas.width, canvas.height);


  //DRAW CIRCLE
  ctx.fillStyle = "#f7f";
  ctx.beginPath();
  ctx.arc(x, y, 20, 0,2 * Math.PI);
  ctx.fill();


}

