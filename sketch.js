const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygon;

var block1;
var block2, block3, block4;
var block5, block6, block7, block8, block9;
var block10, block11, block12, block13, block14, block15, block16;
var block17, block18, block19, block20, block21, block22, block23, block24, block25;
var block26, block27, block28, block29, block30, block31, block32, block33, block34, block35, block36;
var block37, block38, block39, block40, block41, block42, block43, block44, block45, block46, block47, block48, block49;

var stand;

var launcherString;

function setup() {
  createCanvas(700,700);
  engine = Engine.create();
  world = engine.world;

  stand = new Stand();
  
  block1 = new BOX(500,200);

  block2 = new BOX(500,220);
  block3 = new BOX(520,220);
  block4 = new BOX(480,220);

  block5 = new BOX(500,240);
  block6 = new BOX(520,240);
  block7 = new BOX(540,240);
  block8 = new BOX(480,240);
  block9 = new BOX(460,240);

  block10 = new BOX(500,260);
  block11 = new BOX(520,260);
  block12 = new BOX(540,260);
  block13 = new BOX(560,260);
  block14 = new BOX(480,260);
  block15 = new BOX(460,260);
  block16 = new BOX(440,260);

  block17 = new BOX(500,280);
  block18 = new BOX(520,280);
  block19 = new BOX(540,280);
  block20 = new BOX(560,280);
  block21 = new BOX(580,280);
  block22 = new BOX(480,280);
  block23 = new BOX(460,280);
  block24 = new BOX(440,280);
  block25 = new BOX(420,280);

  block26 = new BOX(500,300);
  block27 = new BOX(520,300);
  block28 = new BOX(540,300);
  block29 = new BOX(560,300);
  block30 = new BOX(580,300);
  block31 = new BOX(600,300);
  block32 = new BOX(480,300);
  block33 = new BOX(460,300);
  block34 = new BOX(440,300);
  block35 = new BOX(420,300);
  block36 = new BOX(400,300);

  block37 = new BOX(500,320);
  block38 = new BOX(520,320);
  block39 = new BOX(540,320);
  block40 = new BOX(560,320);
  block41 = new BOX(580,320);
  block42 = new BOX(600,320);
  block43 = new BOX(620,320);
  block44 = new BOX(480,320);
  block45 = new BOX(460,320);
  block46 = new BOX(440,320);
  block47 = new BOX(420,320);
  block48 = new BOX(400,320);
  block49 = new BOX(380,320);

  polygon = new Polygon();

  launcherString = new Launcher(polygon.body,{x:200,y:50});

  Engine.run(engine);

}

function draw() {
  Engine.update(engine);
  background(255,255,255); 
  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  block31.display();
  block32.display();
  block33.display();
  block34.display();
  block35.display();
  block36.display();
  block37.display();
  block38.display();
  block39.display();
  block40.display();
  block41.display();
  block42.display();
  block43.display();
  block44.display();
  block45.display();
  block46.display();
  block47.display();
  block48.display();
  block49.display();

  stand.display();

  polygon.display();

  launcherString.display();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY});
}
function mouseReleased(){
  launcherString.fly();
}
function keyPressed(){
  if(keyCode === 32){
      launcherString.attach(polygon.body);
  }
}