import processing.sound.*;

int radius;
PVector position;
PVector speed;
SoundFile sound;

void setup() {
  size(1200, 800);
  sound = new SoundFile(this, "drop.mp3");
  position = new PVector(100, 100);
  speed = new PVector(5, 5);
  radius = 50;
  
  background(254, 147, 75);
}

void draw() {  
  fill(254, 147, 75, 90);
  rect(0, 0, width, height);
  
  noStroke();
  fill(255, 255, 255);
  circle(position.x, position.y, radius * 2);
  
  position.add(speed);
  
  if (position.x > width - radius || position.x < radius) {
    speed.x = -1 * speed.x;
    sound.play();
  }
  
  if (position.y > height - radius || position.y < radius) {
    speed.y = -1 * speed.y;
    sound.play();
  }
  
  position.x = constrain(position.x, radius, width - radius);
  position.y = constrain(position.y, radius, height - radius);
}

void mouseClicked() {
  speed = speed.rotate(random(TWO_PI));
}
