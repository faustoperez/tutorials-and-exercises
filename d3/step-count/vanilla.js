
// const headerTag = document.querySelector("h1");

// headerTag.innerHTML = "Hello someone!";

// headerTag.style.backgroundColor = "var(--primary-orange)";

// headerTag.style.fontSize = "36px";

const headerTags = document.querySelectorAll("h1");

// headerTags.forEach(h1 => {

//     const hue = 360 * Math.random();

//     h1.style.backgroundColor = "hsl(" + hue + ", 100%, 50%)";
// });

headerTags.forEach((h1, index) => {
    h1.innerHTML = "This is tag number " + index;
});

// const rectTags = document.querySelectorAll("rect");

// rectTags.forEach((tag, i) => {
//     // tag.style.fill = "red";
//     // const width = 100 + 200 * i;

//     tag.setAttribute("width", data[i] + "px");
// });



const data = [112, 65, 66, 87, 52, 12, 90, 112, 65, 66, 87, 52, 12, 90, 112, 65, 66, 87, 52, 12, 90]

const maxHeight = 112;

const todaySvg = document.querySelector("svg")

data.forEach((d, i) => {

    const rectTag = document.createElementNS("http://www.w3.org/2000/svg", "rect")
    rectTag.setAttribute("x", i * 36)
    rectTag.setAttribute("y", maxHeight - d)
    rectTag.setAttribute("width", "24")
    rectTag.setAttribute("height", d)

    todaySvg.append(rectTag)

})