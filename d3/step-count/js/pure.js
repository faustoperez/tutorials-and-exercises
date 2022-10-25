const headerTags = document.querySelectorAll("h1")



// headerTags.forEach(h1 => {
//     const hue = 360 * Math.random()
//     h1.style.backgroundColor = "hsl(" + hue + ", 100%, 50%)"
// })

headerTags.forEach((h1, i) => {
    h1.innerHTML = "this is tag number " + i
})


