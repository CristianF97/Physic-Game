var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var wins = 0;
var losses = 0;
var randomLetter;

var winsAtt = document.getElementById("winsAtt");
var lossesAtt = document.getElementById("lossesAtt");
var attemptsRemain = document.getElementById("AttemptsLeft");
var prevattempts = document.getElementById("prevAttempts");


newLetter();



function newLetter(){
    attemptsLeft = 10;
    attempts = "";
    randomLetter = letter[Math.floor(Math.random()*letter.length)];
    console.log(randomLetter)
}



document.onkeyup = function(event){

    if (event.keyCode >= 65 && event.keyCode <= 90){
   
    attemptsLeft--;

    
    let attempt = event.key.toLowerCase();
    console.log(attempt)

    
    attempts = attempts + attempt + ", ";
    
    if (attempt === randomLetter){
        wins++;
        newLetter();
        
    }   else if (attemptsLeft === 0){
        losses++;
        newLetter();
    }

    winsAtt.textContent = "Wins: " + wins;
    lossesAtt.textContent = "Losses: " + losses;
    attemptsRemain.textContent = "Attempts Left: " + attemptsLeft;
    prevAttempts.textContent = "Previous attempts: " + attempts;
} else alert("please enter a letter")
}