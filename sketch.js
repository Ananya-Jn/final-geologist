
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var sand1, sand2, sand3, sand4, sand5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600,height,1200,20)

    hammer = new Hammer(100,100, 50, 40);

    rubber = new Rubber(700, 300, 30, 20);

    stone = new Stone(500, 500, 25, 25);

    iron = new Iron(300, 200, 20, 25);

    sand1 = new Sand(200, 400, 5, 5);
    sand2 = new Sand(230, 400, 5, 5);
    sand3 = new Sand(260, 400, 5, 5);
    sand4 = new Sand(290, 400, 5, 5);
    sand5 = new Sand(320, 400, 5, 5);


  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  hammer.display();
  ground.display();
  rubber.display();
  stone.display();
  iron.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
}



