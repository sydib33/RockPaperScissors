let user_score = 0;
let comp_score = 0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector(".result")

const user_text = document.querySelector(".u-score")
const comp_text = document.querySelector(".c-score")


const Comp_choice = ()=>{
    const options = ["stone","paper","scissors"];
    let ranIndex = Math.floor(Math.random() * 3 )
    return options[ranIndex]
}


const drawGame = ()=>{
    msg.innerText = "Its draw.";
    msg.style.backgroundColor = "#191970"
}


const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    user_score++; //0
    user_text.innerText = user_score;
    msg.innerText = `You win!`;
    msg.style.backgroundColor = "green";
  } else {
    comp_score++;
    comp_text.innerText = comp_score;
    msg.innerText = `You lost.`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  //Generate computer choice
  const compChoice = Comp_choice();

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

function reset(){
  user_score = 0;
  comp_score = 0;
  user_text.innerText = "0"
  comp_text.innerText = "0"
  msg.style.backgroundColor ="#191970"
  msg.innerText = "Pick Your Move"
}
