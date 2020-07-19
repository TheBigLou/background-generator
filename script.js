var css_h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector(".random")

function setGradient() {
	body.style.background =
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	css_h3.textContent = body.style.background;
}

function randomColor() {
	var rcolor1 = "#" + Math.floor(Math.random()*16777215).toString(16);
	var rcolor2 = "#" + Math.floor(Math.random()*16777215).toString(16);
	body.style.background = "linear-gradient(to right, " + rcolor1 + ", " + rcolor2 + ")";
	color1.value = rcolor1;
	color2.value = rcolor2;
	css_h3.textContent = body.style.background;
}

// console.log(css_h3);
// console.log(color1);
// console.log(color2);
// console.log(body);

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", randomColor);