
const svg = d3.select("svg")

svg.attr("viewbox", "0 0 1000 600")

const worldGroup = svg.append("g")

const projection = d3.geoNaturalEarth1()
    .translate([500, 300])
    .scale(175)


const mapGenerator = d3.geoPath()
    .projection(projection)

const colorScale = d3.scaleSequentialPow(d3.interpolatePlasma)
    .domain([2000, 0])
    .exponent(0.3)

const scrollScale = d3.scaleLinear()
    .domain([0, 2000, 4000, 7500, 15000])
    .range([0, 10, 100, 300, 2000])
    .clamp(true)

d3.json("/d3/population-densities/js/data.json").then(function (data) {
    d3.json("/d3/population-densities/js/world-110m2.json").then(function (mapData) {
           
        worldGroup
            .selectAll("path")
            .data(mapData.features)
            .enter()
            .append("path")
            .attr("d", mapGenerator)
            .style("fill", (d, i) => {
                const country = data.find((country) => { return country.name == d.properties.name })
                
                if (country) {
                    return colorScale(country.density)
                } else {
                    return "#111111"
                }
            })

        window.addEventListener("scroll", () => {
      
            const pixels = window.pageYOffset
            const threshold = scrollScale(pixels)
            const format = d3.format(".1f")
      
            d3.select("span.counter").text(format(threshold))
            
            worldGroup
                .selectAll("path")
                .style("fill", (d) => {
                    const country = data.find(country => country.name == d.properties.name)
                if (country && country.density > threshold) {
                   return colorScale(country.density)
                } else {
                  return "#191919"
                }
              })
          })


    }) 
})


