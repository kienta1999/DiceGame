var selfDice = document.querySelector(".self_dice");
var oppDice = document.querySelector(".opp_dice");
var infoBoard = document.querySelector("h1");
var scoreBoard = document.querySelector("h2");
var button = document.querySelector("button");
var selfScore = 0;
var oppScore = 0;
//selfDice.src

function getRandom(){
    return Math.floor(Math.random() * 6 + 1);
}
function alterDice(dice, choice){
    dice.src = "images/dice_" + choice + ".JPG";
}
function selfWin(){
    infoBoard.innerHTML = "Congrats, you win! :) :)";
}
function oppWin(){
    infoBoard.innerHTML = "You lost! :( :("; 
}
function draw(){
    infoBoard.innerHTML = "Draw";
}
function play(){
    var self = getRandom();
    var opp = getRandom();
    alterDice(selfDice, self);
    alterDice(oppDice, opp);
    if(self > opp){
        selfScore++;
        selfWin();
    }
    else if(self < opp){
        oppScore++;
        oppWin();
    }
    else{
        draw();
    }
    scoreBoard.innerHTML = "The current score is: " + selfScore + "-" + oppScore;
}
function main(){
    button.addEventListener("click", play);
}
main();