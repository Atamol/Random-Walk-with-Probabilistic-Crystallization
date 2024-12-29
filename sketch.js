let ps = [];
let cPs = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 20000; i++) {
    ps[i] = createVector(int(random(width)), int(random(height)));
  }
}

function draw() {
  background(255);
  setDots();
  randomMove();
  crystalize();
}


function setDots() {
  stroke(0);
  strokeWeight(2);
  for (let i = 0; i < ps.length; i++) {
    let p = ps[i];
    point(p.x, p.y);
  }
}

function randomMove() {
  for (let i = 0; i < ps.length; i++) {
    let p = ps[i];
    p.x += random(-1, 1.0);
    p.y += random(-1, 1.0);
    p.x = (p.x + width) % width;
    p.y = (p.y + height) % height;
  }
}

function crystalize() {
  for (let i = ps.length - 1; i >= 0; i--) {
    if (random(1) < 0.01) {  // 1%の確率で結晶化
      cPs.push(ps[i]);
      ps.splice(i, 1);
    }
  }
}
