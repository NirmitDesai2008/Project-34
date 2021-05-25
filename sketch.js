const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {
  bg = loadImage("sprites/background2.png");
}

function setup() {
  createCanvas(1280,655);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(500,550,1000,15);

  hero = new Hero(250,500,200);
  rope = new Rope(hero.body, {x: 500, y: 50});
  monster = new Monster(950,540,230);

  box1 = new Box(530,520,50,50);
  box2 = new Box(530,470,50,50);
  box3 = new Box(530,420,50,50);
  box4 = new Box(530,370,50,50);
  box5 = new Box(530,320,50,50);
  box6 = new Box(530,270,50,50);
  box7 = new Box(530,220,50,50);

  box8 = new Box(600,520,50,50);
  box9 = new Box(600,470,50,50);
  box10 = new Box(600,420,50,50);
  box11 = new Box(600,370,50,50);
  box12 = new Box(600,320,50,50);
  box13 = new Box(600,270,50,50);

  box14 = new Box(670,520,50,50);
  box15 = new Box(670,470,50,50);
  box16 = new Box(670,420,50,50);
  box17 = new Box(670,370,50,50);
  box18 = new Box(670,320,50,50);
  box19 = new Box(670,270,50,50);
  box20 = new Box(670,220,50,50);

  box21 = new Box(740,520,50,50);
  box22 = new Box(740,470,50,50);
  box23 = new Box(740,420,50,50);
  box24 = new Box(740,370,50,50);
  box25 = new Box(740,320,50,50);
  box26 = new Box(740,270,50,50);
}

function draw(){
  background(bg);
  Engine.update(engine);

  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();

  hero.display();
  rope.display();
  monster.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX, y: mouseY});
}