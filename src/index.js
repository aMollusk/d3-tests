import * as d3 from "d3";
import * as scale from "d3-scale";
import * as fr from "d3-force";
import * as liner from "d3-shape";

const data = new Array(30).fill().map((_, index) => {
  return {
    score: Math.floor(Math.random() * 30),
    day: index
  };
});

let svg = d3.select("svg");
let g = svg.append("g");

let x = d3.scaleLinear().range([0, 40]);
let y = d3.scaleLinear().range([0, 5]);

const line = d3
  .line()
  .x(({ day }) => {
    console.log("sdf", day);
    return x(day);
  })
  .y(({ score }) => {
    return y(score);
  });

g.datum(data)
  .append("path")
  .attr("fill", "none")
  .attr("stroke", "blue")
  .attr("stroke-linejoin", "round")
  .attr("stroke-linecap", "round")
  .attr("stroke-width", 2)
  .attr("d", line);
