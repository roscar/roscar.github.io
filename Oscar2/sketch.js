var pollo;
var coli;
var platform;
var pantallaInicio;
var numPantalla = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);

  pantallaInicio = new InicioP();
  pollo = createSprite(300, 650);
  pollo.addAnimation("normal", "assets/1.png", "assets/12.png");
  pollo.setCollider("circle", 0, 0, 50);
  pollo.debug = true;

  Cs = new Group();
  Ds = new Group();
  Es = new Group();

  platform = loadImage("assets/fondo.png");

  for (var i = 0; i < 4; i++) {
    var coli = createSprite(i * width / 4, random(-height, 0));
    coli.addAnimation("normal", "assets/c1.png", "assets/c3.png");
    coli.velocity.y = random(1, 3);
    Cs.add(coli);
    coli.setCollider("circle", 0, 0, 50);
    coli.debug = true;
  }

  for (var i = 0; i < 4; i++) {
    var zana = createSprite(i * width / 4 + 100, random(-height, 0));
    zana.addAnimation("normal", "assets/z1.png", "assets/z3.png");
    zana.velocity.y = random(1, 2);
    Ds.add(zana);
    zana.setCollider("circle", 0, 0, 50);
    zana.debug = true;
  }

  for (var i = 0; i < 4; i++) {
    var papa = createSprite(i * width / 4 + 125, random(-height, 0));
    papa.addAnimation("normal", "assets/p1.png", "assets/p3.png");
    papa.velocity.y = random(1, 2);
    Es.add(papa);
    papa.setCollider("circle", 0, 0, 50);
    papa.debug = true;
  }



}



function draw() {




  background(255, 255, 255);

  if (numPantalla == 0) {
    pantallaInicio.Inicio();
  }


    if (keyIsPressed === true) {

      numPantalla = 1;

    }
    if (numPantalla == 1) {
      image(platform, 0, 0, width, height);
      //if no arrow input set velocity to 0

      if (Es.collide(pollo)) {}
      if (Ds.collide(pollo)) {}
      if (Cs.collide(pollo)) {}

      pollo.velocity.x = 0;

      if (keyIsDown(LEFT_ARROW))
        pollo.velocity.x = -5;
      if (keyIsDown(RIGHT_ARROW))
        pollo.velocity.x = 5;

      drawSprites();


    }
  }

  function InicioP() {

    this.Inicio = function() {

      a = width * 0.05;
      b = height * 0.9;

      rectMode(CENTER);

      image(platform, 0, 0, width, height);
      noStroke();
      fill(150, 200, 20);

      rect(width / 2, height / 2, 200, 100);
      fill(150, 200, 20)
      fill(255);
      textSize(20);
      textAlign(CENTER, CENTER);
      text("ENTER", width / 2, height / 2);
    }
  }