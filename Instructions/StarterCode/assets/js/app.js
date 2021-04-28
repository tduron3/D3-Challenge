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

var svg = d3
  .select("body")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);


//Import data from CSV

d3.csv("./data.csv").then(function(demoData) {

    console.log(data);
 
// Format the Data
    demodata.forEach(function(data) {
        data.smokers = +data.smokers;
        data.age = +data.age;

    });

    // Create scaling functions
    var xSmokersScale = d3.scaleSmokers()
    .domain(d3.extent(demoData, d => d.smokers))
    .range([0, width]);

    var yLinearScale1 = d3.scaleLinear()
    .domain([0, d3.max(demoData, d => d.age)])
    .range([height, 0]);

   // Create axis functions
    var bottomAxis = d3.axisBottom(xSmokersScale)
    .tickFormat(d3.timeFormat("%d-%b-%Y"));
    var leftAxis = d3.axisLeft(yLinearScale1);

    // Add x-axis
    chartGroup.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(bottomAxis);

    // Add y1-axis to the left side of the display
    chartGroup.append("g")

  // Define the color of the axis text
    .classed("blue", true)
    .call(leftAxis);

    // Line generators for each line
    var line = d3.line()
    .x(d => xSmokerScale(d.smokers))
    .y(d => yLinearScale1(d.age)); 

    // Append a path for line1
    chartGroup.append("path")
    .data([smurfData])
    .attr("d", line1)
    .classed("line green", true);