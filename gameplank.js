let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

canvas.width = window.innerWidth - 40;
canvas.height = window.innerHeight - 50;

canvas.style.border = '5px solid red';

let canvas_width = canvas.width;
let canvas_height = canvas.height;

let shapes = [];
shapes.push( {x: 0, y: 0, width: 200, height: 200, color: 'blue'});
shapes.push( {x: 0, y: 0, width: 100, height: 100, color: 'orange'});

