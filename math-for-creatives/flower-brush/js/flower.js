class Flower {

    constructor(x, y, hue, size) {
        // what do we need to setup a flower?

        this.x = x
        this.y = y
        this.hue = hue
        this.midSize = size
        this.petalDist = size
        this.numOfPetals = random(3, 10)
       
    }

    draw() {
        // what do we need to draw a flower?

        colorMode(HSB, 100)
        noStroke()
        fill(this.hue, 100, 100)
        circle(this.x, this.y, this.midSize)


        for (let num = 0 ; num < this.numOfPetals; num = num + 1) {
            let angle = TWO_PI * num / this.numOfPetals

            //let px = this.petalDist * cos(angle)
            //let py = this.petalDist * sin(angle)

            let branch = createVector(this.petalDist, 0)

            branch.rotate(angle)

            circle(this.x + branch.x, this.y + branch.y, 10)
        }

    }

}