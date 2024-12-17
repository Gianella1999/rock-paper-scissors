// funcion getComputerChoice -> Eligue aleatoriamente(piedra, papel o tijera)
function getComputerChoice(){

    let valor = Math.random();

    let choise = (valor <= 0.3)? "rock": 
    (valor <= 0.6) ? "paper": "scissors";
  
    return choise;

}
//---> console.log(getComputerChoise());

// funcion getHumanChoice -> toma la eleccion del usuario 
function getHumanChoice(){

    let eleccion = prompt("Escoge 1: rock, paper, scissors.");

    return eleccion;

}
//--> console.log(getHumanChoise());


//función que tome las elecciones de los jugadores humanos y de la computadora como argumentos, juegue una sola ronda, incremente el puntaje del ganador de la ronda y registre un anuncio del ganador.

function playRound(human, computer){

    humanLower = human.toLowerCase();

    switch(humanLower){

    case "rock": 
        if(computer == "scissors"){
            
            console.log("¡Ganas! La piedra le gana a la tijera");
            return humanScore++;

        } else if(computer == "paper"){

            console.log("¡Pierdes! El papel le gana a la piedra");
            return computerScore++;
        } else{
            console.log("empate");
        }
        break;


    case "scissors":

        if(computer == "paper"){
            console.log("¡Ganas! La tijera le gana a el papel");
            return humanScore++;

        } else if(computer == "rock"){

            console.log("¡Pierdes! La piedra le gana a la tijera");
            return computerScore++;
        }else{
            console.log("empate");
        }

        break;

    case "paper":

        if(computer == "rock"){
            console.log("¡Ganas! El papel le gana a la piedra");
        
            return humanScore++;

        } else if(computer == "scissors"){

            console.log("¡Pierdes! La tijera le gana a el papel");
            return computerScore++;
        }else{
            console.log("empate");
        }
        break;
    }
}

// funcion playGame que llame a playRound -> lleve el registro de los puntajes y declare al ganador al final 

function playGame(){

const round = 5;

for(let i=1; i<= round; i++){

       const computerSelection = getComputerChoice();
       const humanSelection = getHumanChoice();
       // Para ver por consola la seleccion de cada jugador
       console.log("Ronda " + i + "->"+ "Yo: " + humanSelection +  " " + "Computer: " + computerSelection )

        playRound(humanSelection, computerSelection);
            
    }

    console.log("nuestro puntaje total es: "+ humanScore);
    console.log("puntaje total de tu oponente: " + computerScore);

    let ganador = (computerScore < humanScore)? "Hemos Ganado!":
    (computerScore > humanScore)? "El ganador el computer jejjee!":
    "Puntaje empatado";

    console.log(ganador);
}

// declaracion de variables globales de los jugadores(human y computer)
    let humanScore = 0;
    let computerScore = 0;

// Llamada a la funcion para jugar todo el juego
playGame();

/*comentarios de la resolucion del ejercicio

    Me gustaria mejorar la implementacion de las rondas, que me solicite 
    la eleccion del jugador y hasta que no se haya ejecutado la 1 ronda n
    o vuelva a pedir mi eleccion.

*/

