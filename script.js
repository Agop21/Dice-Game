let randomNumber1 = Math.floor(Math.random()*6) + 1; //generating a whole number between 1-6

let randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

let randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


//dice number2

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//if player 1 wins
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
//if player 2 wins
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
//draw
else{
    document.querySelector("h1").innerHTML = "Draw!";
}
