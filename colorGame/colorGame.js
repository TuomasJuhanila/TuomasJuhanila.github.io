const colors = [
"grey",
"yellow",
"green",
"blue",
"red",
"white",
"black",
"purple"];

const circles = document.querySelectorAll(".circle");
const rightColor = pickColor();
const colorText = document.getElementById("colorText");
const listenButton = document.getElementById("listenButton");
let score = 0;
let scoreBoard = document.getElementById("scoreBoard");

//sounds
const flipSound = document.getElementById("flipSound");
const correctSound = document.getElementById("correctSound");
const greenSound = document.getElementById("greenSound");
const yellowSound = document.getElementById("yellowSound");
const greySound = document.getElementById("greySound");
const blackSound = document.getElementById("blackSound");
const whiteSound = document.getElementById("whiteSound");
const redSound = document.getElementById("redSound");
const purpleSound = document.getElementById("purpleSound");
const blueSound = document.getElementById("blueSound");

colorText.textContent = rightColor;

listenButton.addEventListener("click", function() {
    if(rightColor === "green") {
        greenSound.play();
    } else if (rightColor === "yellow") {
        yellowSound.play();
    } else if (rightColor === "blue") {
        blueSound.play();
    } else if (rightColor === "white") {
        whiteSound.play();
    } else if (rightColor === "black") {
        blackSound.play();
    } else if (rightColor === "purple") {
        purpleSound.play();
    } else if (rightColor === "grey") {
        greySound.play();
    } else if (rightColor === "red") {
        redSound.play();
    }
})

for(var i = 0; i < circles.length; i++) {
    circles[i].style.backgroundColor = colors[i];
    circles[i].addEventListener("click", function() {
        const clickedColor = this.style.backgroundColor;
        if(clickedColor === rightColor) {
            score++;
            correctSound.play();
            changeColors(clickedColor);
            setTimeout(function(){ window.location.reload(); }, 4000);
        } else {
            score--;
            flipSound.play();
            this.style.backgroundColor = "#1d1c1b";
            this.style.boxShadow = "none";
        }
    scoreBoard.textContent = score;
    });
}

function changeColors(color) {
    for(var i = 0; i < circles.length; i++) {
        circles[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
