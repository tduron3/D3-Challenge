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

d3.csv("./data.csv").then(function(demoData) {

    console.log(data);

    demodata.forEach(function(data) {
        data.healthcare = +data.healthcare;
        data.poverty = +data.poverty;
        data.smokers = +data.smokers;
        data.age = +data.age;

    });

    var xTimeScale = d3.scaleTime()
        .domain(d3.extent(demoData, d => d.age))
        .range([0, width]);

    var yLinearScale = d3.scaleLinear().range([height, 0]);

    var 