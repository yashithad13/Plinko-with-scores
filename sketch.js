 var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];

var divisionHeight = 300;
var score = 0;

function setup() {
    createCanvas(480, 800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

    for (var j = 75; j <=width-30; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width-30; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
    
}
 


function draw() {
  background(0);

  textSize(20)
  fill("white")
  text("Scores :"+score,350,20);
  text("500",25,500);
  text("500",105,500);
  text("100",185,500);
  text("100",265,500);
  text("200",340,500);
  text("200",420,500);

  Engine.update(engine);
  ground.display();
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     var part = new Particle(random(width/2-30, width/2+30), 10,10)
     particles.push(part);
     if(frameCount%90===0){
     if (part.body.position.x<130){
      score = score+500;
     }
     else if (part.body.position.x<300 && part.body.position.x>130){
       score = score+100;
     }
     else {
       score = score+200;
     }
    } 
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   
}