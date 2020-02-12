const sentenceTag = document.querySelector(`input[type="text"]`)

const typesizeTag = document.querySelector(`input[name="typesize"]`)
const typesizeOutput = document.querySelector("span.typesize-output")

const lineheightTag = document.querySelector(`input[name="lineheight"]`)
const lineheightOutput = document.querySelector("span.lineheight-output")

const fontweightTag = document.querySelector(`input[name="fontweight"]`)
const fontweightOutput = document.querySelector("span.fontweight-output")

const italicTag = document.querySelector(`input[name="italic"]`)

const typefaceTag = document.querySelector(`select[name="typeface"]`)

const colorTags = document.querySelectorAll("div.colors div")

const outputTag = document.querySelector("textarea.output")
const originalText = outputTag.value


sentenceTag.addEventListener("keyup", function() {

    if (this.value) {
        outputTag.value = this.value
    } else {
        outputTag.value = originalText
    }
})

outputTag.addEventListener("keyup", function () {
    sentenceTag.value = this.value
})

typesizeTag.addEventListener("input", function () {
    outputTag.style.fontSize = this.value + "px"
    typesizeOutput.innerHTML = this.value + "px"

})


lineheightTag.addEventListener("input", function () {
    outputTag.style.lineHeight = this.value
    lineheightOutput.innerHTML = this.value
})

fontweightTag.addEventListener("input", function () {
    outputTag.style.fontWeight = this.value
    fontweightOutput.innerHTML = this.value
})


italicTag.addEventListener("change", function () {
    if (this.checked) {
        outputTag.style.fontStyle = "italic"
    } else {
        outputTag.style.fontStyle = "normal"
    }
})

typefaceTag.addEventListener("input", function () {
    outputTag.style.fontFamily = this.value
})

colorTags.forEach (tag => {
    tag.addEventListener("click", function () {
        outputTag.style.backgroundColor = this.style.backgroundColor
        outputTag.style.color = this.style.color

        colorTags.forEach(tag => {
            tag.classList.remove("selected")
        })

        this.classList.add("selected")
    })
}) 