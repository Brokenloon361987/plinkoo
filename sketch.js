const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var ground

var particles = [];
var plinkos = [];
var divisions = [];
//var div

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground (240, 790, 480, 20);

  for (var k = 0; k <=width; k = k + 80) {
        
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var j = 75; j <=width; j = j + 50) {
        
    plinkos.push(new Plinko(j,75));
  }
  for (var j = 50; j <=width-10; j = j + 50) {
        
    plinkos.push(new Plinko(j,175));
  }
  for (var j = 75; j <=width; j = j + 50) {
        
    plinkos.push(new Plinko(j,275));
  }
  for (var j = 50; j <=width-10; j = j + 50) {
        
    plinkos.push(new Plinko(j,375));
  }
 

}

function draw() {
  background("black");  

  Engine.update(engine)
  
  ground.display();

  for (var k = 0; k <divisions.length; k = k+1) {
        
    divisions[k].display();
  }
  for (var j = 0; j <plinkos.length; j = j + 1) {

    plinkos[j].display();
    
  }
  // for (var j = 40; j <width; j = j + 50) {

  //   plinkos[j].display();
    
  // }
  if(frameCount%60===0){
     particles.push(new particle(random(width/2-30, width/2+30), 10, 10))
    }
  
    for (var j = 0; j <particles.length; j = j + 1) {
      particles[j].display();
  }
  

  drawSprites();
 
}
