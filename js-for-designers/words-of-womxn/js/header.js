window.addEventListener("DOMContentLoaded", function () {


    const headerTag = document.querySelector("header")

    document.addEventListener("scroll", function () {
        const pixels = window.pageYOffset

        if (pixels > 80) {
            headerTag.classList.add("scrolled")
        } else {
            headerTag.classList.remove("scrolled")
        }
    })




})


