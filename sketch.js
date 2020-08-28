var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 var man ;
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;

function preload(){
  

}
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  man= new paper(400,600,300);
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
  
  man.display();
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%1===0){
     particles.push(new Particle(random(width/2-100, width/2+100), 3,3));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}