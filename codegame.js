
var colors =RandomColorGenerator(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colordisplay = document.getElementById("colordisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");
var theme= document.querySelector("#theme");
var body=document.querySelector("body");

easybtn.addEventListener("click", function(){
	hardbtn.classList.remove("bt");
	easybtn.classList.add("bt");
	//generate all new colors
	colors = RandomColorGenerator(3);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colordisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		if (colors[i]){
			squares[i].style.background = colors[i];

		}
		else{
			squares[i].style.background = "none";
		}
		
	}

})
hardbtn.addEventListener("click", function(){
	hardbtn.classList.add("bt");
	easybtn.classList.remove("bt");
	//generate all new colors
	colors = RandomColorGenerator(6);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colordisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		
			squares[i].style.background = colors[i];

		

} })

theme.addEventListener("click" , function(){
	body.style.background=	"lightpink";


})


resetButton.addEventListener("click", function() {
	//generate all new colors
	colors = RandomColorGenerator(6);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colordisplay.textContent = pickedColor;
	this.textContent="New Colors";
	//change colors of squares
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
	h1.style.background = "#800000";
});

colordisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickcolor = this.style.background;
		//compare color to pickedColor
		if(clickcolor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changecolor(clickcolor);
			h1.style.background = clickcolor;
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changecolor(color) {
	//loop through all squares
	for(var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function RandomColorGenerator(num) {
	//make an array
	var array = [];
	//add num random colors to arr
	for(var i = 0; i < num; i++) {
		//get random color and push into arr
		array.push(RandomColor());
	}
	//return that array
	return array;
}

function RandomColor() {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}





