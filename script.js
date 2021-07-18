// Color formats
var hexLetters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
var colors = ["red", "yellow", "green", "blue", "pink", "purple","tomato",'violet',"lightgreen","lightseagreen"];

// HTML color generator
var htmlColors = document.getElementById("html");
htmlColors.addEventListener("click", htmlColorGenerator);

// Hex color generator
var hexColors = document.getElementById("hex");
hexColors.addEventListener("click", hexColorGenerator);

// Linear Gradient color generator
var linearGradient = document.getElementById("linear-gradient");
linearGradient.addEventListener("click", linearGradientColorGenerator);

// html color generator function 
function htmlColorGenerator(){
     var colorIndex = Math.floor(Math.random() * colors.length);
     document.body.style.background = colors[colorIndex];
     document.getElementById("color").innerHTML = colors[colorIndex];
}

// Random hex color generator function (its a global function used in both hex color function and linear gradient color function)
function randomHexCodeGenerator() {
     var randomHexCode = "#";                     // we are including # to randomHexCode
     for (var i = 0; i < 6; i++) {
          randomHexCode = randomHexCode + hexLetters[Math.floor(Math.random() * hexLetters.length)];  // adds a randomly generated hex letter to random hex code variable every time the loop is run
          // this loop is used to generate a letter of hexadeximeal sysem using hex letter array
     }
     return randomHexCode;
     // this function returns the six digit random hex digit with # in the begining
}

// hex color generator function
function hexColorGenerator(){
     var randomHexCode = randomHexCodeGenerator();
     document.body.style.background = randomHexCode;      //don't use backgroundColor for adding css property in this case because once liniar gadient function is executed the you would not be able to alter it since for adding liniar gradient background color is used not background
     document.getElementById("color").innerHTML = randomHexCode;
}

// linear gradient color generator function
function linearGradientColorGenerator() {
//   background: linear-gradient(to right, #33ccff 0%, #ff99cc 100%);

     var randomHexCode1 = randomHexCodeGenerator();
     var randomHexCode2 = randomHexCodeGenerator();

     document.body.style.background = "linear-gradient(to right, " + randomHexCode1 + " 0%, " + randomHexCode2 + " 100%)";
     document.getElementById("color").textContent = "Combination of "+ randomHexCode1 + " and " + randomHexCode2;

     // // console.log("linear-gradient(to right, " + randomHexCode1 + " 0%, " + randomHexCode2 + " 100%)");
     // // console.log(randomHexCode);
}