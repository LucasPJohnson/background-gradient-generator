var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");


function setGradient(){
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

var randomize = () => {
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  return "#" + randomColor
}

function randomizeBoth(){
	document.querySelector(".color1").setAttribute("value", randomize());
	document.querySelector(".color2").setAttribute("value", randomize());
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", randomizeBoth);

