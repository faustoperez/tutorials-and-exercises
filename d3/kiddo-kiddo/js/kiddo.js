
const formTag = document.querySelector("form")
const inputTag = formTag.querySelector("input")
const nameTag = d3.select("span.name")

const svg = d3.select("svg")

svg
    .attr("width", 960)
    .attr("height", 540)

const PathsGroup = svg
    .append("g")
    .attr("class", "paths")

const rankScale = d3.scalePow()
    .exponent(0.1)
    .domain([1, 1000])
    .range([20, 500])


const dateScale = d3.scaleLinear()
    .domain([1880, 2010])
    .range([80, 915])

const rankAxis = d3.axisLeft(rankScale)
    .tickValues([1, 5, 10, 25, 50, 75, 100, 500, 750, 1000])
    .tickPadding(5)

const dateAxis = d3.axisBottom(dateScale)
    .tickFormat((d, i) => { return d + "s"})
    .tickPadding(5)

const line = d3.line()
    .x((d, i) => { return dateScale(1880 + 10 * i) })
    .y((d, i) => { return rankScale(d) })
    .defined((d, i) => { return d != 0 })
    .curve(d3.curveCardinal.tension(0.5))

const flatLine = d3.line()
    .x((d, i) => { return dateScale(1880 + 10 * i) })
    .y((d, i) => { return rankScale(1000) })
    .defined((d, i) => { return d != 0 })
    .curve(d3.curveCardinal.tension(0.5))

svg
    .append("g")
    .attr("transform", "translate(60, 0)")
    .call(rankAxis)

svg
    .append("g")
    .attr("transform", "translate(0, 520)")
    .call(dateAxis)
    

const search = function (name) {
    let results = data.filter((d, i) => {
        return d.name.toLowerCase() == name.toLowerCase()
    })

    if (results.length > 0) {
        nameTag.text(name)

        const lines = PathsGroup
            .selectAll("path")
            .data(results, (d, i) => { return d.name })
        
        lines
            .enter()
            .append("path")
            .attr("class", (d, i) => { return d.sex })
            .attr("d", (d, i) => { return flatLine(d.rank) })
            .style("opacity", 0)
            .transition()
            .duration(800)
            .style("opacity", 1)
            .attr("d", (d, i) => { return line(d.rank) })
        
        lines
            .exit()
            .style("opacity", 1)
            .transition()
            .duration(800)
            .style("opacity", 0)
            .attr("d", (d, i) => { return flatLine(d.rank) })
            .remove()

    } else {
        alert(`No results for ${name}!`)
    }

}

search("Richard")

formTag.addEventListener("submit", function(event) {
    event.preventDefault()

    search(inputTag.value)

    inputTag.value = ""

})