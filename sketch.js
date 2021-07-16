const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box1,box2,box3;

function setup(){
    var canvas = createCanvas(500,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(250,390,500,20,ground_options);
    World.add(world,ground);

    ball=new Ball(50,330,20);

    box1= new Box(280,330,20,100);
    box2=new Box(400,330,20,100);
    box3=new Box(340,380,140,10);

}

function draw(){
    background("pink");
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,500,20);

    box1.display();
    box2.display();
    box3.display();
    ball.display();
}

function keyPressed(){
    if(keyCode===UP_ARROW){
        Matter.Body.applyForce(ball.body,ball.body.position,{x:30,y:-20})
    }
}
