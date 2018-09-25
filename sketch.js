function setup() {
  createCanvas (windowWidth, windowHeight);
  background (63, 50, 111);
}

function draw() {
  //FLOOR
  noStroke();
  fill (159, 153, 183);
  rect (0, 550, 1440, 305);

  //FIRST ROBOT !!!!!

  //electrical
  //1
  strokeWeight(2);
  stroke(255, 255, 0);
  line(477, 185, 485, 165);
  //2
  strokeWeight(2);
  stroke(255, 255, 0);
  line(485, 165, 500, 195);
  //3
  strokeWeight(2);
  stroke(255, 255, 0);
  line(500, 195, 507, 180);
  //4
  strokeWeight(2);
  stroke(255, 255, 0);
  line(507, 180, 513, 190);
  //5
  strokeWeight(2);
  stroke(255, 255, 0);
  line(513, 190, 522, 170);
  //6
  strokeWeight(2);
  stroke(255, 255, 0);
  line(522, 170, 533, 192);
  //7
  strokeWeight(2);
  stroke(255, 255, 0);
  line(533, 192, 541, 160);
  //8
  strokeWeight(2);
  stroke(255, 255, 0);
  line(541, 160, 546, 170);
  //9
  strokeWeight(2);
  stroke(255, 255, 0);
  line(546, 170, 549, 166);
  //10
  strokeWeight(2);
  stroke(255, 255, 0);
  line(549, 166, 560, 190);
  //11
  strokeWeight(2);
  stroke(255, 255, 0);
  line(560, 190, 567, 178);
  //12
  strokeWeight(2);
  stroke(255, 255, 0);
  line(567, 178, 572, 185);

  //left antenna
  noStroke();
  fill(10);
  rect(468, 190, 3, 52);

  noStroke();
  fill(255, 10, 10);
  ellipse(469.5, 185, 20);

  //right antenna
  noStroke();
  fill(10);
  rect(579, 190, 3, 52);

  noStroke();
  fill(255, 10, 10);
  ellipse(580.5, 185, 20);

  //left and right ears
  noStroke();
  fill(99, 134, 223);
  ellipse(478, 253, 30);

  noStroke();
  fill(99, 134, 223);
  ellipse(572, 253, 30);

  //left and right ear extra-parts
  noStroke();
  fill(255, 10, 10);
  rect(475, 238, 8, 30, 3);

  noStroke();
  fill(255, 10, 10);
  rect(567, 238, 8, 30, 3);

  //head
  noStroke();
  fill(99, 196, 223);
  rect(478, 206, 94, 94, 15);

  //left and right eyes
  noStroke();
  fill(185, 235, 248);
  ellipse(505, 240, 24);

  noStroke();
  fill(185, 235, 248);
  ellipse(545, 240, 24);

  //left and right pupils
  noStroke();
  fill(70);
  ellipse(505, 240, 13);

  noStroke();
  fill(70);
  ellipse(545, 240, 13);

  //+ reflex
  noStroke();
  fill(255, 255, 255);
  ellipse(503, 238, 4);

  noStroke();
  fill(255, 255, 255);
  ellipse(543, 238, 4);

  //mouth = teeth
  noStroke();
  fill(185, 235, 248);
  rect(494, 267, 7, 17);

  noStroke();
  fill(185, 235, 248);
  rect(503, 267, 7, 17);

  noStroke();
  fill(185, 235, 248);
  rect(512, 267, 7, 17);

  noStroke();
  fill(185, 235, 248);
  rect(521, 267, 7, 17);

  noStroke();
  fill(185, 235, 248);
  rect(530, 267, 7, 17);

  noStroke();
  fill(185, 235, 248);
  rect(539, 267, 7, 17);

  noStroke();
  fill(185, 235, 248);
  rect(548, 267, 7, 17);

  //neck
  noStroke();
  fill(99, 180, 200);
  rect(500, 300, 50, 5);

  //bust
  noStroke();
  fill(99, 165, 223);
  rect(470, 305, 110, 140);

  //buttons
  noStroke();
  fill(255, 30, 30);
  ellipse(495, 330, 10);

  noStroke();
  fill(255, 30, 30);
  ellipse(525, 330, 10);

  noStroke();
  fill(232, 204, 135);
  rect(550, 326, 15, 8);

  //keypad
  noStroke();
  fill(100);
  rect(495, 355, 60, 65);

  //+ buttons
  noStroke();
  fill(185, 235, 248);
  rect(500, 360, 50, 15);

  //first column
  noStroke();
  fill(185, 235, 248);
  rect(500, 380, 10, 10);

  noStroke();
  fill(185, 235, 248);
  rect(500, 393, 10, 10);

  noStroke();
  fill(185, 235, 248);
  rect(500, 406, 10, 10);

  //second column
  noStroke();
  fill(185, 235, 248);
  rect(513, 380, 10, 10);

  noStroke();
  fill(185, 235, 248);
  rect(513, 393, 10, 10);

  noStroke();
  fill(185, 235, 248);
  rect(513, 406, 10, 10);

  //third column
  noStroke();
  fill(185, 235, 248);
  rect(526, 380, 10, 10);

  noStroke();
  fill(185, 235, 248);
  rect(526, 393, 10, 10);

  noStroke();
  fill(185, 235, 248);
  rect(526, 406, 10, 10);

  //fourth column
  noStroke();
  fill(185, 235, 248);
  rect(539, 380, 10, 10);

  noStroke();
  fill(185, 235, 248);
  rect(539, 393, 10, 10);

  noStroke();
  fill(185, 235, 248);
  rect(539, 406, 10, 10);

  //left and right arms
  noStroke();
  fill(99, 134, 223);
  rect(442, 315, 25, 90);

  noStroke();
  fill(99, 134, 223);
  rect(583, 315, 25, 90);

  //+ connections
  noStroke();
  fill(99, 180, 200);
  rect(467, 320, 3, 25);

  noStroke();
  fill(99, 180, 200);
  rect(580, 320, 3, 25);

  //left and right hands
  strokeWeight(10);
  stroke(99, 180, 200);
  noFill();
  arc(455, 415, 30, 30, PI, TWO_PI);

  strokeWeight(10);
  stroke(99, 180, 200);
  noFill();
  arc(595, 415, 30, 30, PI, TWO_PI);

  //left and right legs
  noStroke();
  fill(99, 134, 223);
  rect(470, 448, 50, 87);

  noStroke();
  fill(99, 134, 223);
  rect(530, 448, 50, 87);

  //+ connection
  noStroke();
  fill(99, 180, 200);
  rect(475, 445, 40, 3);

  noStroke();
  fill(99, 180, 200);
  rect(535, 445, 40, 3);

  //left and right feet
  noStroke();
  fill(99, 196, 223);
  arc(495, 550, 58, 58, PI, TWO_PI);

  noStroke();
  fill(99, 196, 223);
  arc(555, 550, 58, 58, PI, TWO_PI);

  //SECOND ROBOT !!!!!
  //"leg"
  noStroke();
  fill(112, 143, 207);
  rect(196, 58, 8, 45, 5);

  noStroke();
  fill(200);
  rect(186, 101, 26, 7, 5);

  noStroke();
  fill(140);
  rect(178, 108, 42, 7, 5);

  //wheel
  noStroke();
  fill(200);
  ellipse(200, 30, 60);

  noStroke();
  fill(120);
  ellipse(200, 30, 30);

  //neck
  noStroke();
  fill(112, 143, 207);
  rect(196, 238, 8, 22, 5);

  //bust
  noStroke();
  fill(229, 171, 213);
  rect(145, 115, 110, 125, 5);

  //keypad
  noStroke();
  fill(241, 239, 164);
  rect(155, 165, 90, 60, 10);

  //+ buttons
  noStroke();
  fill(255, 0, 0);
  ellipse(170, 210, 10)

  noStroke();
  fill(255, 0, 0);
  ellipse(190, 210, 10)

  noStroke();
  fill(255, 0, 0);
  ellipse(210, 210, 10)

  noStroke();
  fill(255, 0, 0);
  ellipse(230, 210, 10)

  noStroke();
  fill(169, 167, 105);
  rect(165, 175, 70, 22, 10)

  //top of bust
  strokeWeight(3);
  stroke(10);
  line(175, 150, 225, 150)

  strokeWeight(3);
  stroke(10);
  line(180, 140, 220, 140)

  //left and right ears
  noStroke();
  fill(112, 143, 207);
  rect(145, 280, 13, 13);

  noStroke();
  fill(112, 143, 207);
  rect(240, 280, 13, 13);

  //top of head
  noStroke();
  fill(200);
  rect(197, 339, 4, 20, 5);

  noStroke();
  fill(112, 143, 207);
  ellipse(199, 361, 8);

  noStroke();
  fill(112, 143, 207);
  ellipse(199, 328, 23)

  //head
  noStroke();
  fill(229, 171, 213);
  arc(199, 258, 106, 140, 0, PI);

  //left and right eyes
  noStroke();
  fill(80);
  ellipse(184, 297, 14);

  noStroke();
  fill(80);
  ellipse(214, 297, 14);

  //+ reflex
  noStroke();
  fill(255, 255, 255);
  ellipse(186, 299, 4);

  noStroke();
  fill(255, 255, 255);
  ellipse(216, 299, 4);

  //mouth
  strokeWeight(2);
  stroke(0);
  noFill();
  arc(199, 280, 20, 20, PI, 0);

  //left arm
  strokeWeight(8);
  stroke(200)
  noFill();
  line(136, 205, 95, 150)

  noStroke();
  fill(112, 143, 207);
  ellipse(136, 205, 18);

  //right arm
  strokeWeight(8);
  stroke(200)
  noFill();
  line(264, 205, 303, 150)

  noStroke();
  fill(112, 143, 207);
  ellipse(264, 205, 18);

  //left and right hands
  noStroke();
  fill(112, 143, 207);
  ellipse(95, 150, 15);

  noStroke();
  fill(112, 143, 207);
  ellipse(303, 150, 15);

  //HEART!!!!
  noStroke();
  fill(255, 0, 0);
  triangle(320, 260, 350, 260, 335, 230)

  noStroke();
  fill(255, 0, 0);
  triangle(350, 260, 380, 260, 365, 230)

  noStroke();
  fill(255, 0, 0);
  triangle(320, 260, 380, 260, 350, 300)

}

function trapezoid(x, y) {
  noStroke();

  beginShape(QUADS);
  vertex(x +   10, y -   0);
  vertex(x + 70, y -   0);
  vertex(x + 100, y - 140);
  vertex(x -  20, y - 140);
  endShape();
}
