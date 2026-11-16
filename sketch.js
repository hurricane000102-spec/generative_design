
let shapeSlider;
let bgPicker;
let generateButton;
let saveButton;

function setup() {
  createCanvas(800, 800);
  
  shapeSlider = createSlider(5, 40, 15);
  shapeSlider.position(20, 20);
  
  bgPicker = createColorPicker('#F2C94C');
  bgPicker.position(20, 50);
  
  generateButton = createButton('Surprise Me!');
  generateButton.position(20, 85);
  generateButton.mousePressed(randomize);
  
  saveButton = createButton('Export Design');
  saveButton.position(20, 120);
  saveButton.mousePressed(saveDesign);
  
  noLoop();
}

function draw() {
  background(bgPicker.value());

  // Main circular badge
  push();
  translate(400, 420);

  fill(255);
  stroke(0);
  strokeWeight(5);
  ellipse(0, 0, 400, 400);

  // Decorative shapes
  let amount = shapeSlider.value();

  for (let i = 0; i < amount; i++) {
    push();

    let angle = TWO_PI / amount * i;
    rotate(angle);

    fill(random(50, 230), random(50, 180), random(50, 200));
    noStroke();

    // Alternate between circles and rectangles
    if (i % 2 == 0) {
      ellipse(0, -130, 45, 45);
    } else {
      rect(-15, -155, 30, 50);
    }

    pop();
  }

  // Center decoration
  fill('#E85D45');
  stroke(0);
  strokeWeight(4);
  ellipse(0, 0, 130, 130);

  fill(255);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(30);
  textStyle(BOLD);
  text("DESIGN", 0, 0);

  pop();
}

function randomize() {
  shapeSlider.value(int(random(5, 41)));
  bgPicker.value(randomColor());
  redraw();
}

function randomColor() {
  let colors = [
    '#F2C94C',
    '#E85D45',
    '#8AB17D',
    '#577590',
    '#F4A261',
    '#DDA0DD'
  ];

  return random(colors);
}

function saveDesign() {
  saveCanvas('my-badge', 'png');
}
