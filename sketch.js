const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var divisions=[];
var divisionsHeight=300;
var particles=[];
var plinkos=[];

function setup() {
  createCanvas(450,800);
  engine= engine.create();
  world = engine.world;
  
  ground = new Ground(400,690.800,20);

  for (var i= 0; i<=width-10;j=j+80){
    divisions.push(new Division(i,height-divisionsHeight/2,10,divisionsHeight));
  }
  for (var j= 75; i<=width;i=i+30){
    plinkos.push(new Plinko(j,175));
  }
  for (var j= 75; i<=width;i=i+30){
    plinkos.push(new Plinko(j,275));
  }
  for (var j= 75; i<=width;i=i+30){
    plinkos.push(new Plinko(j,375));
  }

  Engine.run(engine);


}

function draw() {
  rectMode(CENTER)
  background(0);  
  drawSprites();

  for (var k=0;k<divisions.length; k++){
    divisions[n].display();
  }
  if (frameCount %60 ===0) {
    particles.push(new Particles(width/2-30, width/2+30,10,10));
  }
  for (var j=0; j<particles.length;j++)
  particles[h].display();
}