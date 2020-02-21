const animatedTags = document.querySelectorAll("h2, h3, p, section img, a.button")

animatedTags.forEach(tag => {
    tag.style.opacity = 0
})

const fadeIn = function () {

    let delay = 0.25

    animatedTags.forEach(tag => {
        const tagTop = tag.getBoundingClientRect().top
        const tagBottom = tag.getBoundingClientRect().bottom
        if (tagTop < window.innerHeight) {
            tag.style.animation = `fadeIn 1s ${delay}s both`
            delay = delay + 0.25
        }
        
    })

}


fadeIn()

document.addEventListener("scroll", function () {
    fadeIn()
})

window.addEventListener("resize", function () {
    fadeIn()
})