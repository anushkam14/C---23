const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    
    g1=new ground(200,390,400,10)
    var ball_options ={
        restitution: 1.0
    }

    ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);

b1=new box(100,100,30,30)
b2=new box(110,50,30,100)
}

function draw(){
    background(0);
    Engine.update(engine);
    
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);
    
    g1.display()
    b1.display()
    b2.display()
}