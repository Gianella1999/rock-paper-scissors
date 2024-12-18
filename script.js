function getComputerChoice(){
    let valor = Math.random();
    return (valor <= 0.3)? "rock": 
    (valor <= 0.6) ? "paper": "scissors";
}

let eleccionJugador = document.querySelectorAll("button");

eleccionJugador.forEach(eleccion => {

    eleccion.addEventListener('click', () => {
        let choise = eleccion.value;
        let computer = getComputerChoice()
        playRound(choise, computer);
    })
});

function getResultMessage(winner) {
    if (winner === "human") {
      return "¡Ganas!";
    } else if (winner === "computer") {
      return "¡Pierdes!";
    } else {
      return "Empate";
    }
  }

// declaracion de variables globales de los jugadores(human y computer)
let humanScore = 0;
let computerScore = 0;

function playRound(playerChoice, computerChoice){

  let result = document.querySelector("#result");
  let winner;
  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    winner = "human";
    humanScore++;
  } else if (
    (playerChoice === "scissors" && computerChoice === "rock") ||
    (playerChoice === "paper" && computerChoice === "scissors") ||
    (playerChoice === "rock" && computerChoice === "paper")
  ) {
    winner = "computer";
    computerScore++;
  } else {
    winner = "empate";
  }

  const message = getResultMessage(winner) + ` ${playerChoice} vs ${computerChoice}`;
  const p = document.createElement("p");
  p.textContent = message;
  result.appendChild(p);

  // Verificar si algún jugador ha ganado
  if (humanScore === 5 || computerScore === 5) {
    ganador(humanScore, computerScore, result);
  }

}

function ganador(human, computer, result){
    let puntaje = document.createElement("p")
    puntaje.innerHTML = "Puntaje human: "+ human + " " +"Puntaje Computer: " + computer;
    result.appendChild(puntaje);

    let ganador = (computer < human)? "Hemos Ganado!":
    (computer > human)? "El ganador el computer jejjee!":
    "Puntaje empatado";
    let gana = document.createElement("p")
    gana.innerHTML = ganador;
    result.appendChild(gana);

}

let playAgain = document.getElementById("playAgain");
playAgain.addEventListener('click', reset);

function reset(){
    // Eliminar resultados
    let resultados = document.querySelectorAll("p");
    resultados.forEach(p => {
        p.remove();
    })
    // reset de puntaje 
    humanScore = 0;
    computerScore = 0;

}