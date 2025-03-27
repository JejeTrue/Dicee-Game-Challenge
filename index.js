// for img1
// random number between 1 and 6
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
// pick out a random dice image between dice1.png to dice 6.png then place this image inside the left <img> element
document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");

// for img2
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");