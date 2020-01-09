const colors = ["grey",
"yellow",
"green",
"blue",
"red",
"white",
"black",
"purple"];

const circles = document.querySelectorAll(".circle");
const rightColor = pickColor();
const colorText = document.querySelector("#colorText");

colorText.textContent = rightColor;

for(var i = 0; i < circles.length; i++) {
    circles[i].style.backgroundColor = colors[i];
    circles[i].addEventListener("click", function() {
        const clickedColor = this.style.backgroundColor;
        if(clickedColor === rightColor) {
            changeColors(clickedColor);
        } else {
            this.style.backgroundColor = "#1d1c1b";
        }
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
