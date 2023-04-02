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
const winCountText = document.getElementById("winCountText");
const lossCountText = document.getElementById("lossCountText");
const tieCountText = document.getElementById("tieCountText");
let youChoose = document.getElementById("youChoose");
let compChoose = document.getElementById("compChoose");
let result = document.getElementById("result");

let winCount = 0;
let lossCount = 0;
let tieCount = 0;
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
      tieCount += 1;
      tieCountText.innerText = tieCount;
      result.innerText = "TIE";
    } else if (compSelect === "PAPER") {
      lossCount += 1;
      lossCountText.innerText = lossCount;
      result.innerText = "YOU LOSS";
    } else if (compSelect === "SCISSOR") {
      winCount += 1;
      winCountText.innerText = winCount;
      result.innerText = "YOU WIN";
    }
  } else if (playerMove === "PAPER") {
    youChoose.innerText = playerMove;

    if (compSelect === "ROCK") {
      winCount += 1;
      winCountText.innerText = winCount;
      result.innerText = "YOU WIN";
    } else if (compSelect === "PAPER") {
      tieCount += 1;
      tieCountText.innerText = tieCount;
      result.innerText = "TIE";
    } else if (compSelect === "SCISSOR") {
      lossCount += 1;
      lossCountText.innerText = lossCount;
      result.innerText = "YOU LOSS";
    }
  } else if (playerMove === "SCISSOR") {
    youChoose.innerText = playerMove;

    if (compSelect === "ROCK") {
      lossCount += 1;
      lossCountText.innerText = lossCount;
      result.innerText = "YOU LOSS";
    } else if (compSelect === "PAPER") {
      winCount += 1;
      winCountText.innerText = winCount;
      result.innerText = "YOU LOSS";
    } else if (compSelect === "SCISSOR") {
      tieCount += 1;
      tieCountText.innerText = tieCount;
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
