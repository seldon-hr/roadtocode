var op1 = "Rock";
var op3 = "Scissors";
var op2 = "Paper";

var move;
var pc;

var winner = function(move, pc){
    if (move != pc){
        if(move === op1 && pc === op3){
            console.log(move + " < " + pc + " You win");
        }
        else if(move === op2 && pc === op1){
            console.log(move + " < " + pc + " You win");
        }
        else if(move === op3 && pc === op2){
            console.log(move + " < " + pc + " You win");
        }else{
            console.log("You Lose");
        }
    }else if (move === pc){
        console.log("Empate");
    }
}

winner(op1,op3);
