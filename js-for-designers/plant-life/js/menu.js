const toggleTag = document.querySelector("a.toggle-nav")
const mainTag = document.querySelector("main")

toggleTag.addEventListener("click", function () {
    mainTag.classList.toggle("open")

    if (mainTag.classList.contains("open")) {
        toggleTag.innerHTML = `<img src="img/close.svg" alt="Close"> Close`
    } else {
        toggleTag.innerHTML = `<img src="img/menu.svg" alt="Menu"> Menu`
    }

})


