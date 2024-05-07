const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var pelota;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  barra = new Ground(199,350,20,50)
  var pelota_op={
  restitution:0.95
 }
 pelota = Bodies.circle(200,100,20,pelota_op)
 World.add(world,pelota)
 arriba = createImg("up.png")
 arriba.position(20,30)
 arriba.size(50,50)
 arriba.mouseClicked(subir)
 derecha = createImg("right.png")
 derecha.position(220,30)
 derecha.size(50,50)
 derecha.mouseClicked(girar) 
 rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ellipse(pelota.position.x, pelota.position.y,20)
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  barra.show()
  Engine.update(engine);
}
function subir() {
  Matter.Body.applyForce(pelota, {x:0,y:0},{x:0,y:-0.05})
}
function girar() {
  Matter.Body.applyForce(pelota, {x:0,y:0},{x:0.05,y:0})
}