let position
let speed
let radius
let sound

function preload() {
    sound = loadSound("audio/drop.mp3")
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    position = createVector(100, 50)
    speed = createVector(5, 5)
    radius = 50
}

function draw() {
    background("#fe934b30")
    fill("#fff")
    noStroke()
    circle(position.x, position.y, radius * 2)

    position.add(speed)

    if (position.x > windowWidth - radius || position.x < radius) {
        speed.x = speed.x * -1
        sound.play()
    }

    if (position.y > windowHeight - radius || position.y < radius) {
        speed.y = speed.y * -1
        sound.play()
    }

    positionX = constrain(position.x, radius, windowWidth - radius)
    positionY = constrain(position.y, radius, windowHeight - radius)
}

function mouseClicked() {
    let angle = random(TWO_PI)
    speed.rotate(angle)
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}

