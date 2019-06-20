// variables in our game that will hold randomly generated numbers for the gems and the computer guess
var blueRanNum = randomNumberGem();
var redRanNum = randomNumberGem();
var greenRanNum = randomNumberGem();
var purpleRanNum = randomNumberGem();
var computerGuess = randomNumber();
var red;
var green;
var blue;
var purple;
var counter = 0;
var imageCrystal = $(".pic");
var crystalValue = 0;
var wins = 0
var losses = 0

function initialize() {
   blueRanNum = randomNumberGem();
redRanNum = randomNumberGem();
 greenRanNum = randomNumberGem();
purpleRanNum = randomNumberGem();
 computerGuess = randomNumber();
}

$('#total-score').text(counter);
$('#wins').text(wins)
$('#losses').text(losses)


// function that will generate a random number between 0 and 50 for the gems
function randomNumberGem() {
    x = Math.floor(Math.random()*20)
    return x;
}

// function that will generate a random number between 0 and 100 for the computer guess
function randomNumber() {
    y = Math.floor(Math.random()*70)
    return y;
}

 function gameStart() {
    var guessDiv = $('<div>').text(computerGuess)
   $('#random-num').append(guessDiv)}
  

 function setAttribute() {
     $('.redCrystal').attr("data-value",redRanNum)
     $('.blueCrystal').attr("data-value",blueRanNum)
     $('.greenCrystal').attr("data-value",greenRanNum)
     $('.purpleCrystal').attr("data-value",purpleRanNum)
     $('.redCrystal').addClass("pic")
     $('.blueCrystal').addClass("pic")
     $('.greenCrystal').addClass("pic")
     $('.purpleCrystal').addClass("pic")
     
     
     // First each crystal will be given the class ".crystal-image".
     // This will allow the CSS to take effect.
  
     
 }

 function restartLose() {
     $('#random-num').empty()
    initialize();
    gameStart();
    setAttribute();
   
 }

 function restartWin() {
    $('#random-num').empty()
    initialize();
    gameStart();
    setAttribute();
  
   
 }
 gameStart();
// initializeGame();
setAttribute();


$(document).ready(function() {
    
    // $('img').on("click", function() {
   
// })

$('.redCrystal').on("click", function() {
     red = $(this).attr("data-value")
    alert("you guessed: " + red)
})
$('.blueCrystal').on("click", function() {
     blue = $(this).attr("data-value")
    alert("you guessed: " + blue)
})

$('.greenCrystal').on("click", function() {
     green = $(this).attr("data-value")
    alert("you guessed: " + green)
})
$('.purpleCrystal').on("click", function() {
    purple = $(this).attr("data-value")
    alert("you guessed: " + purple)
})

$('.pic').on("click", function() {
    crystalValue = ($(this).attr("data-value"));
    crystalValue = parseInt(crystalValue);

console.log(crystalValue)

win = false

if (!win) {
    counter += crystalValue;
    // totalSum = totalSum + counter
    console.log(counter)
    // console.log(totalSum)
   
}

if (counter == computerGuess) {
   
    alert("you win")
    win = true
    wins++;
    counter = 0;
   restartWin()
}

else if (counter > computerGuess) {
    losses++
    counter = 0
    alert('you lose')
    restartLose()
    

}
$('#total-score').text(counter);
$('#wins').text(wins)
$('#losses').text(losses)


});
});
