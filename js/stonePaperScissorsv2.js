var op1 = "Rock";
var op3 = "Scissors";
var op2 = "Paper";

var move;
var pc;

var winner = function(move, pc){
    if (move != pc){
        switch(true){ //En este caso hemos empleado el valor verdadero para que el switch entre automáticamente a los casos, ya que al ser verdadero lo válida.
            case (move === op1 && pc === op3):
                console.log(move + " < " + pc + " You win");
                break;
            case (move === op2 && pc === op1):
                console.log(move + " < " + pc + " You win");
                break;
            case (move === op3 && pc === op2):
                console.log(move + " < " + pc + " You win");
                break;
            default:
                console.log("You Lose");
        }
    }else if (move === pc){
        console.log("Empate");
    }
}

winner(op1,op3);
