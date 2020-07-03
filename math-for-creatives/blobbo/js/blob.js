class Blobbo {
    constructor() {
        // let's set up the blobbo
        this.numOfPoints = 500
        this.time = 0
    }

    wave(num, amp, freq) {
        return amp * sin(freq * TWO_PI * num / this.numOfPoints + this.time)
    }

    draw() {

        noStroke()
        fill("#91fc9e")

        // let's draw the blob
        for (let num = 0; num < this.numOfPoints; num = num + 1) {


            let h = this.wave(num, 50, 10)

            let x = 100 + num * 6
            let y = 100 + h
            circle(x, y, 5)
        }

        this.time = this.time + 0.01
    }
}