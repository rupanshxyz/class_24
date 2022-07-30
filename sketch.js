const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball, ground;
var button;
var fan1;
var angle = 40;

function setup() {
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;

  var groundOption = {
    isStatic: true,
  };

  var ballOption = {
    restitution: 1,
  };

  var fan1Option = {
    isStatic: true,
  };

  ball = Bodies.circle(200, 20, 25, ballOption);
  World.add(world, ball);

  ground = Bodies.rectangle(200, 380, 400, 20, groundOption);
  World.add(world, ground);

  button = createImg("up.png");
  button.size(50, 50);
  button.position(350, 50);
  button.mouseClicked(vforce);

  fan1 = Bodies.rectangle(200, 300, 10, 80, fan1Option);
  World.add(world, fan1);
}

function draw() {
  background("black");

  Engine.update(engine);
  
push()
  ellipseMode(RADIUS);
  fill('pink')
  ellipse(ball.position.x, ball.position.y, 25, 25);
pop()

push()
  rectMode(CENTER);
  fill('brown')
  rect(ground.position.x, ground.position.y, 400, 20);
pop()
  push();
  translate(fan1.position.x, fan1.position.y);
  rotate(angle);
  rectMode(CENTER);
  fill("green");
  rect(0, 0, 10, 80);
  angle += 0.1;
  pop();
}

function vforce() {
  Matter.Body.applyForce(ball, ball.position, { x: 0, y: -0.05 });
}
