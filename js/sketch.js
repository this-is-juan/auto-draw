let female;
let x, y;

function preload() {
  female = loadImage("assets/photo2-small.jpg");
}

function setup() {
  createCanvas(540, 675);
  x = 0;
  y = height - height;
  yBtm = height;

  image(female, 0, 0, width, height);
}

function draw() {

  noStroke();
  
  let c = female.get(x,y);
  print(c);
  fill(c);
  ellipse(x, y, 40, 40);

  let d = female.get(x+80,yBtm);
  print(d);
  fill(d);
  ellipse(x+40, yBtm, 40, 40);

  let e = female.get(x+80,y);
  print(e);
  fill(e);
  ellipse(x+80, y, 40, 40);

  let f = female.get(x+120,yBtm);
  print(f);
  fill(f);
  ellipse(x+120, yBtm, 40, 40);

  let g = female.get(x+160,y);
  print(g);
  fill(g);
  ellipse(x+160, y, 40, 40);

  let h = female.get(x+200,yBtm);
  print(h);
  fill(h);
  ellipse(x+200, yBtm, 40, 40);

  let i = female.get(x+240,y);
  print(i);
  fill(i);
  ellipse(x+240, y, 40, 40);

  let j = female.get(x+280,yBtm);
  print(j);
  fill(j);
  ellipse(x+280, yBtm, 40, 40);

  let k = female.get(x+320,y);
  print(k);
  fill(k);
  ellipse(x+320, y, 40, 40);

  let l = female.get(x+360,yBtm);
  print(l);
  fill(l);
  ellipse(x+360, yBtm, 40, 40);

  let m = female.get(x+400,y);
  print(m);
  fill(m);
  ellipse(x+400, y, 40, 40);

  let o = female.get(x+440,yBtm);
  print(o);
  fill(o);
  ellipse(x+440, yBtm, 40, 40);

  let p = female.get(x+480,y);
  print(p);
  fill(p);
  ellipse(x+480, y, 40, 40);

  let q = female.get(x+520,yBtm);
  print(q);
  fill(q);
  ellipse(x+520, yBtm, 40, 40);

  
  // Moving up at a constant speed
  y = y += 5;
  yBtm = yBtm - 5;

}

// SAVE AS PNG

function saveImage(){
    save('face.png');
}





