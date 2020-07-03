
let blob

function setup() {
    createCanvas(windowWidth, windowHeight)
    blob = new Blobbo()
}

function draw() {
    background("#7446df")
    blob.draw()
}