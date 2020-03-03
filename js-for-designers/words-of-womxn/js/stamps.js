let number = 0

const stamps = [
    "circles.svg",
    "heart.svg",
    "moon.svg",
    "rainbow.svg",
    "shooting-star.svg",
    "waves.svg"
]

const stampsTag = document.querySelector("div.stamps")

const addStamp = function (x, y) {
    const img = document.createElement("img")

    const randomStamp = stamps[Math.floor(Math.random() * stamps.length)]
    
    img.setAttribute("src", "img/" + randomStamp)

    img.style.left = (x - window.innerWidth / 2) + "px"
    img.style.top = y + "px"

    stampsTag.appendChild(img)

    const audio = document.createElement("audio")
    audio.setAttribute("src", "audio/plop.mp3")
    audio.play()
}

document.addEventListener("click", function (event) {
    addStamp(event.pageX, event.pageY)
})