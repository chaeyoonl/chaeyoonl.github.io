/* Filename: app.js
   Javascript for Game 2 Homework
*/

//alert("ok");
//console.log("ok");

//global variables

var canvas; 
var ctx; 
var b,c;
var running  = false;
function Ball(x,y,size,xP, yP,color){
  this.x = x;
  this.y = y;
  this.xP = xP;
  this.yP = yP;

  this.size =size;
  this.xP = xP;
  this.yP = yP;
  this.color = color;

  this.draw = function (ctx){
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0,2 * Math.PI);
    ctx.fill();
  }
  this.updateData = function (){
    //Y Animation
    this.y+= this.yP;
    if(this.y>canvas.height-size)
      this.yP *=-1;
    if(this.y< this.size)
      this.yP *=-1;


    //Y Animation
    this.x+= this.xP;
    if(this.x>canvas.width-size)
      this.xP *=-1;
    if(this.x< size)
      this.xP *=-1;

  }

}






window.onload = init;

function init() {
    canvas = document.getElementById("game_area");
    ctx = canvas.getContext("2d");

    b = new Ball(25,20,20,5,5,"#f7f");
    c = new Ball(200,120,10,5,5,"#f00");

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
        requestAnimationFrame(looooop);
    });

}


function looooop(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if(running){
    b.updateData()
    c.updateData()
    b.draw(ctx);
    c.draw(ctx);
    requestAnimationFrame(looooop);
  }
}
