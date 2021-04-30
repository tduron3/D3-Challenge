// @TODO: YOUR CODE HERE!

var svgWidth = 960;
var svgHeight = 500;

var margin = {
  top: 20,
  right: 40,
  bottom: 60,
  left: 50
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart,
// and shift the latter by left and top margins.
var svg = d3
  .select(".chart")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

// Append an SVG group
var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Initial Params
var chosenXAxis = "hair_length";

// Format the Data
    demodata.forEach(function(data) {
        data.smokers = +data.smokers;
        data.age = +data.age;

    // Create scaling functions
    var xSmokersScale = d3.scaleSmokers()
    .domain(d3.extent(demoData, d => d.smokers))
    .range([0, width]);

    var yLinearScale1 = d3.scaleLinear()
    .domain([0, d3.max(demoData, d => d.age)])
    .range([height, 0]);

 // Line generators for each line
 var line = d3.line()
    .x(d => xSmokerScale(d.smokers))
    .y(d => yLinearScale1(d.age)); 


var svg = d3
  .select("#scatter")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Append a path for line1
var path = svg.selectAll("dot")
    chartGroup.append("path")
    .data([demoData])
    .attr("d", line1)
    .classed("line green", true);

    // Append axes titles
chartGroup.selectAll(".plot")
    .data(dataArray)
    .enter()
    .append("circle")
    .classed("plot", true)
    .attr("x", (d, i) => xScale(demoSmokers[i]))
    .attr("y", d => yScale(d))
    .attr("width", xScale.bandwidth())
    .attr("height", d => chartHeight - yScale(d));

   // Create axis functions
    var bottomAxis = d3.axisBottom(xSmokersScale)
    .tickFormat(d3.timeFormat("%d-%b-%Y"));
    var leftAxis = d3.axisLeft(yLinearScale1);

    // Add x-axis
    chartGroup.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(xAxis);

    // Add y1-axis to the left side of the display
    chartGroup.append("g")
    .classed("blue", true)
    .call(leftAxis);

    // append initial circles
  var circlesGroup = chartGroup.selectAll("circle")
    .data(hairData)
    .enter()
    .append("circle")
    .attr("cx", d => xLinearScale(d[chosenXAxis]))
    .attr("cy", d => yLinearScale(d.num_hits))
    .attr("r", 20)
    .attr("fill", "pink")
    .attr("opacity", ".5");


// Append axes titles
chartGroup.selectAll(".plot")
  .data(dataArray)
  .enter()
  .append("circle")
  .classed("plot", true)
  .attr("x", (d, i) => xScale(demoSmokers[i]))
  .attr("y", d => yScale(d))
  .attr("width", xScale.bandwidth())
  .attr("height", d => chartHeight - yScale(d));
}
});


d3.csv("./data.csv").then(function(demoData) {

    console.log(data);
 
