var mgr;
let images = [];

function preload() {
  defaultFont = loadFont('Domine-Regular.ttf');

  //consider a loop here??
  images[0] = loadImage('Assets/1.png');
  images[1] = loadImage('Assets/2.png');
  images[2] = loadImage('Assets/3.png');
  images[3] = loadImage('Assets/4.png');
  images[4] = loadImage('Assets/5.png');
  images[5] = loadImage('Assets/6.png');
  images[6] = loadImage('Assets/7.png');
  images[7] = loadImage('Assets/8.png');
  images[8] = loadImage('Assets/9.png');
  images[9] = loadImage('Assets/10.png');

}

function setup() {
  let c = createCanvas(750, 750);
  c.parent("p5sketch");

  mgr = new SceneManager();

  mgr.addScene(Intro);

  mgr.showNextScene();
}

function draw() {
  mgr.draw();
}

function keyPressed() {
  // You can optionaly handle the key press at global level...
  switch (key) {
    case '1':
      mgr.showScene(Intro);
      break;
    case '2':
      mgr.showScene(FindArtwork);
      break;
    case '3':
      mgr.showScene(NoPerm);
      break;
    case '4':
      mgr.showScene(YesPerm);
      break;
    case '5':
      mgr.showScene(Nope);
      break;
    case '6':
      mgr.showScene(GoAhead);
      break;
    case '7':
      mgr.showScene(ReallyWanna);
      break;
    case '8':
      mgr.showScene(CreditPlease);
      break;
    case '9':
      mgr.showScene(Comparison);
      break;
    case '0':
      mgr.showScene(Final);
      break;
  }
  // ... then dispatch via the SceneManager.
  mgr.handleEvent("keyPressed");
}

// DEFAULT BACKGROUND FOR EACH SCENE
function defaultBackground() {
  background(255, 99, 159);
  textSize(32);
  fill(255, 255, 255);
  textFont(defaultFont);
  textAlign(CENTER);
  text("Art Reposter", width * 0.5, height * 0.1);
}

// USE THIS METHOD TO DISPLAY A BODY OF TEXT
function textBody(txt) {
  textSize(23);
  fill(255, 255, 255);
  textAlign(LEFT);
  text(txt, width * 0.15, height * 0.2, width * 0.75, height * 0.8);
}

// USE THIS METHOD TO DISPLAY INSTRUCTION TEXT
function instructText(txt) {
  textSize(15);
  fill(28, 5, 17);
  textAlign(CENTER);
  text(txt, width * 0.5, height * 0.95);

}

function imageBody(img){
  image(img, width * 0.15, height * 0.3, 500, 500);
}

// Intro scene constructor function
function Intro() {

  this.setup = function() {}

  this.draw = function() {
    defaultBackground();

    introText = "Welcome to Art Reposter!\n\nToday I will show you the online ettiquete for respecting art.";
    instText = "press 2 to continue";
    textBody(introText);
    instructText(instText);
    imageBody(images[0]);
  }
  this.keyPressed = function() {
    // switch the scene
    this.sceneManager.showScene(save);
  }
}

// Main games scene constructor function
function FindArtwork() {
  this.setup = function() {}

  this.draw = function() {
    defaultBackground();
    caption = "You find a cool piece of art (photograph, digital art, etc.) and you really wanna share it! \n\nGo check the profile and see if there's information about reposting.";
    textBody(caption);

    imageBody(images[1]);

    instructText("press 3 if there's no indication and 4 if there is");

  }
}

function NoPerm() {
  this.setup = function() {}

  this.draw = function() {
    defaultBackground();
    caption = "Is there no indication for redistribution or reposting permissions?";
    textBody(caption);

    imageBody(images[2]);
    instructText("press 5 to continue");
  }
}

function YesPerm() {
  this.setup = function() {}

  this.draw = function() {
    defaultBackground();
    caption = "Is there clear indication for redistribution or reposting permissions?";
    textBody(caption);

    imageBody(images[3]);
    instructText("press 6 to continue");
  }
}
2

function Nope() {
  this.setup = function() {}

  this.draw = function() {
    defaultBackground();
    caption = "No! Don't repost!";
    textBody(caption);

    imageBody(images[4]);
    instructText("press 7 to continue");
  }
}


function GoAhead() {
  this.setup = function() {}

  this.draw = function() {
    defaultBackground();
    caption = "Go for it! However...";
    textBody(caption);

    imageBody(images[5]);
    instructText("press 7 to continue");
  }
}

function ReallyWanna() {
  this.setup = function() {}

  this.draw = function() {
    defaultBackground();
    caption = "But I really wanna!\n\nHowever, consider this: ";
    textBody(caption);

    imageBody(images[6]);
    instructText("press 7 to continue");
  }
}

function CreditPlease() {
  this.setup = function() {}

  this.draw = function() {
    defaultBackground();
    caption = "Remember, credit is important! Be sure to do your best to credit your fellow artists. \n\nBe happy that they're allowing you free use, the least you can do is give them a shoutout!";
    textBody(caption);

    imageBody(images[7]);
    instructText("Go wild!");
  }
}

function Comparison() {
  this.setup = function() {}

  this.draw = function() {
    defaultBackground();
    caption = "Remember! There have been multiple instances where a repost has gotten far more traction than the original.\n\nImagine someone telling your joke, but louder. Except this is probably worse since people poured their hearts into these.";
    textBody(caption);

    imageBody(images[8]);
    instructText("press 7 to continue");
  }
}

function Final() {
  this.setup = function() {}

  this.draw = function() {
    defaultBackground();
    caption = "Please remember to share the work you see! Every bit of support counts!\n\nSomeday you might have to post your work online, please understand and respect everyone's boundaries.";
    textBody(caption);

    imageBody(images[9]);
    instructText("Thank you for reading :)");
  }
}
