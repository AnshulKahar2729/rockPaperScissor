// paper beats rock
// scissor beats paper
// rock beats scissor
// STEPS
// 1. COMPUTER RANDOMLY SELECTS A MOVE
// 2. COMPARE THE MOVES TO GET THE RESULT
// 3. DISPLAY THE RESULT IN A POPUP

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorBtn = document.getElementById("scissor-btn");
const resetBtn = document.getElementById("reset-btn");
const winCountText = document.getElementById("winCountText");
const lossCountText = document.getElementById("lossCountText");
const tieCountText = document.getElementById("tieCountText");
let youChoose = document.getElementById("youChoose");
let compChoose = document.getElementById("compChoose");
let result = document.getElementById("result");

const score = {
  wins : 0,
  losses : 0,
  ties : 0
}

let compSelect = "";

function pickComputerMove() {
  const randNum = Math.random();

  // 0 to 1/3 --> ROCK
  // 1/3 TO 2/3 --> PAPER
  // 2/3 TO 3/3 --> SCISSOR

  if (randNum >= 0 && randNum < 1 / 3) {
    compSelect = "ROCK";
    compChoose.innerText = compSelect;
  } else if (randNum >= 1 / 3 && randNum < 2 / 3) {
    compSelect = "PAPER";
    compChoose.innerText = compSelect;
  } else if (randNum >= 2 / 3 && randNum <= 1) {
    compSelect = "SCISSOR";
    compChoose.innerText = compSelect;
  }
}

function playGame(playerMove) {
  if (playerMove === "ROCK") {
    youChoose.innerText = playerMove;

    if (compSelect === "ROCK") {
      score.ties+= 1;
      tieCountText.innerText =score.ties
      result.innerText = "TIE";
    } else if (compSelect === "PAPER") {
      score.losses+= 1;
      lossCountText.innerText =score.losses
      result.innerText = "YOU LOSS";
    } else if (compSelect === "SCISSOR") {
      score.wins+= 1;
      winCountText.innerText =score.wins
      result.innerText = "YOU WIN";
    }
  } else if (playerMove === "PAPER") {
    youChoose.innerText = playerMove;

    if (compSelect === "ROCK") {
      score.wins+= 1;
      winCountText.innerText =score.wins
      result.innerText = "YOU WIN";
    } else if (compSelect === "PAPER") {
      score.ties+= 1;
      tieCountText.innerText =score.ties
      result.innerText = "TIE";
    } else if (compSelect === "SCISSOR") {
      score.losses+= 1;
      lossCountText.innerText =score.losses
      result.innerText = "YOU LOSS";
    }
  } else if (playerMove === "SCISSOR") {
    youChoose.innerText = playerMove;

    if (compSelect === "ROCK") {
      score.losses+= 1;
      lossCountText.innerText =score.losses
      result.innerText = "YOU LOSS";
    } else if (compSelect === "PAPER") {
      score.wins+= 1;
      winCountText.innerText =score.wins
      result.innerText = "YOU LOSS";
    } else if (compSelect === "SCISSOR") {
      score.ties+= 1;
      tieCountText.innerText =score.ties
      result.innerText = "TIE";
    }
  }
}

rockBtn.addEventListener("click", function () {
  pickComputerMove();
  playGame("ROCK");
});

paperBtn.addEventListener("click", function () {
  pickComputerMove();
  playGame("PAPER");
});

scissorBtn.addEventListener("click", function () {
  pickComputerMove();
  playGame("SCISSOR");
});

resetBtn.addEventListener("click", () => {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;

    youChoose.innerText = "";
    compChoose.innerText = "";
    result.innerText = "";

    winCountText.innerText = score.wins;
    lossCountText.innerText = score.losses;
    tieCountText.innerText = score.ties;
})
