const todaySvg = d3.select("svg.today")

const barScale = d3.scaleLinear()
    .domain([0, 2000])
    .range([1, 112])


const hourFormat = d3.format("02")

const todayGroups = todaySvg
    .selectAll("g")
    .data(todayData)
    .enter()
    .append("g")
    .attr("transform", (d, i) => { return "translate(" + i * 36 + ", 0)" })


todayGroups
    .append("rect")
    .attr("class", "transparent")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", 24)
    .attr("height", 140)

todayGroups
    .append("rect")
    .attr("x", 0)
    .attr("y", 124)
    .attr("width", 24)
    .attr("height", 0)
    .transition()
        .attr("height", (d, i) => { return barScale(d) })
        .attr("y", (d, i) => { return 124 - barScale(d) })
        .delay((d, i) => { return i * 20 })


todayGroups
    .append("text")
    .attr("class", "hours")
    .attr("x", 12)
    .attr("y", 140)
    .text((d, i) => { return hourFormat(i) })

todayGroups
    .append("text")
    .attr("class", "steps")
    .attr("x", 12)
    .attr("y", (d, i ) => { return 118 - barScale(d) })
    .text((d, i) => { return d })

