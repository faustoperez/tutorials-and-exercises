 const svg = d3.select("svg")

 svg.attr("viewBox", "0 0 960 320")

 const url = "https://api.superhi.com/api/stocks/aapl"
 
 
 d3.json(url).then(function (data) {

    const dateParse = d3.timeParse("%Y-%m-%d")
    
    data = data.map((d, i) => {

        return { close: d.close, date: dateParse(d.date) }

    })

    const minDate = d3.min(data, (d, i) => { return d.date })
    const maxDate = d3.max(data, (d, i) => { return d.date })

    const minClose = d3.min(data, (d, i) => { return d.close })
    const maxClose = d3.max(data, (d, i) => { return d.close })

    const dateScale = d3.scaleTime()
        .domain([minDate, maxDate])
        .range([60, 900])
    
    const closeScale = d3.scaleLinear()
        .domain([minClose, maxClose])
        .range([280, 60])


    const line = d3.line()
        .x((d, i) => { return dateScale(d.date) })
        .y((d, i) => { return closeScale(d.close) })

    const area = d3.area()
        .x0((d, i) => { return dateScale(d.date) })
        .x1((d, i) => { return dateScale(d.date) })
        .y0((d, i) => { return closeScale(minClose) + 10 })
        .y1((d, i) => { return closeScale(d.close) })

    svg
        .append("path")
        .datum(data)
        .attr("class", "area")
        .attr("d", area)


    svg
        .append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", line)
    
    const hoverGroup = svg
        .append("g")
        .attr("transform", "translate(-100, -100)")

    hoverGroup
        .append("rect")
        .attr("x", -50)
        .attr("y", -60)
        .attr("width", 100)
        .attr("height", 50)

    hoverGroup
        .append("circle")
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("r", 7)
    
    const closeText = hoverGroup
        .append("text")
        .attr("class", "close")
        .attr("x", 0)
        .attr("y", -37)
        .text("Hi")

    const dateText = hoverGroup
        .append("text")
        .attr("class", "date")
        .attr("x", 0)
        .attr("y", -18)
        .text("date")

    svg.on("mousemove", function () {
        const mouse = d3.mouse(this)
        const mouseX = mouse[0]
        const mouseDate = dateScale.invert(mouseX)
        const bisector = d3.bisector((d) => { return d.date }).right
        const i = bisector(data, mouseDate)
        const dataPoint = data[i]

        if (dataPoint) {
            const x = dateScale(dataPoint.date)
            const y = closeScale(dataPoint.close)
            const timeFormat = d3.timeFormat("%Y-%b-%d")
            const dateFormatted = timeFormat(dataPoint.date)

            closeText.text(dataPoint.close)
            dateText.text(dateFormatted)
            hoverGroup.attr("transform", `translate(${x}, ${y})`)
        }
       
    })

    svg.on("mouseout", function () {
        hoverGroup.attr("transform", "translate(-999, -999)")
    })

 })