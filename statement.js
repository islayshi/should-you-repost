var mgr;
let images = [];

function preload() {
  defaultFont = loadFont('Domine-Regular.ttf');

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


// DEFAULT BACKGROUND FOR EACH SCENE
function defaultBackground() {
  background(255, 99, 159);
  textSize(32);
  fill(255, 255, 255);
  textFont(defaultFont);
  textAlign(CENTER);
  text("Artist's Statement", width * 0.5, height * 0.1);
}

// USE THIS METHOD TO DISPLAY A BODY OF TEXT
function textBody(txt) {
  textSize(22);
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

    introText = "Welcome to Art Reposter!\n\nAs someone who has been active on social media and posts their own individual work regularly, it's no surprise that I've seen people redistribute my work without permission. In addition, I've been in many communities where this has been at least an annoying issue and at most problematic, as many people easy profit off of other people's digital products unfairly. I hope to educate others on why it's important to respect people and their boundaries. An image you see for a few seconds doesn't take only a few minutes to make. Even if the art did take hours, there still conists of years worth of practice for people adapt to their own style. \n\nI hope to create more understanding for those unfamiliar with this trend, thank you for reading and exploring my page!";
    textBody(introText);
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
