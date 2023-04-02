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
const winCountText = document.getElementById("winCountText")
const lossCountText = document.getElementById("lossCountText")
const tieCountText = document.getElementById("tieCountText")
let youChoose = document.getElementById("youChoose");
let compChoose = document.getElementById("compChoose");
let result = document.getElementById("result");

let randNum = Math.random();
let winCount = 0;
let lossCount = 0;
let tieCount = 0;

rockBtn.addEventListener("click", function (){

    youChoose.innerText = "ROCK";

    let compSelect = "";
    // 0 to 1/3 --> ROCK
    // 1/3 TO 2/3 --> PAPER
    // 2/3 TO 3/3 --> SCISSOR

    if (randNum>=0 && randNum <1/3) {
        compSelect = "ROCK";
        compChoose.innerText = compSelect;
    }

    else if (randNum >= 1 / 3 && randNum < 2 / 3) {
        compSelect = "PAPER";
        compChoose.innerText = compSelect;
    }

    else if (randNum >= 2 / 3 && randNum < 1) {
        compSelect = "SCISSOR";
        compChoose.innerText = compSelect;
    }

    if(compSelect === "ROCK"){
        tieCount += 1;
        tieCountText.innerText = tieCount;
        randNum = Math.random();
        result.innerText = "TIE";
    }
    else if (compSelect === "PAPER"){
        lossCount += 1;
        lossCountText.innerText = lossCount;
        randNum = Math.random();
        result.innerText = "YOU LOSS";
    }
    else if(compSelect === "SCISSOR"){
        winCount += 1;
        winCountText.innerText = winCount;
        randNum = Math.random();
        result.innerText = "YOU WIN";
    }
})

paperBtn.addEventListener("click", function (){

    youChoose.innerText = "PAPER";

    let compSelect = "";
    // 0 to 1/3 --> ROCK
    // 1/3 TO 2/3 --> PAPER
    // 2/3 TO 3/3 --> SCISSOR

    if (randNum>=0 && randNum <1/3) {
        compSelect = "ROCK";
        compChoose.innerText = compSelect;
    }

    else if (randNum >= 1 / 3 && randNum < 2 / 3) {
        compSelect = "PAPER";
        compChoose.innerText = compSelect;
    }

    else if (randNum >= 2 / 3 && randNum < 1) {
        compSelect = "SCISSOR";
        compChoose.innerText = compSelect;
    }

    if(compSelect === "ROCK"){
        winCount += 1;
        winCountText.innerText = winCount;
        randNum = Math.random();
        result.innerText = "YOU WIN";
    }
    else if (compSelect === "PAPER"){
        tieCount += 1;
        tieCountText.innerText = tieCount;
        randNum = Math.random();
        result.innerText = "TIE";
    }
    else if(compSelect === "SCISSOR"){
        lossCount += 1;
        lossCountText.innerText = lossCount;
        randNum = Math.random();
        result.innerText = "YOU LOSS";
    }
})

scissorBtn.addEventListener("click", function (){

    youChoose.innerText = "SCISSOR";

    let compSelect = "";
    // 0 to 1/3 --> ROCK
    // 1/3 TO 2/3 --> PAPER
    // 2/3 TO 3/3 --> SCISSOR

    if (randNum>=0 && randNum <1/3) {
        compSelect = "ROCK";
        compChoose.innerText = compSelect;
    }

    else if (randNum >= 1 / 3 && randNum < 2 / 3) {
        compSelect = "PAPER";
        compChoose.innerText = compSelect;
    }

    else if (randNum >= 2 / 3 && randNum < 1) {
        compSelect = "SCISSOR";
        compChoose.innerText = compSelect;
    }

    if(compSelect === "ROCK"){
        lossCount += 1;
        lossCountText.innerText = lossCount;
        randNum = Math.random();
        result.innerText = "YOU LOSS";
    }
    else if (compSelect === "PAPER"){
        winCount += 1;
        winCountText.innerText = winCount;
        randNum = Math.random();
        result.innerText = "YOU LOSS";
    }
    else if(compSelect === "SCISSOR"){
        tieCount += 1;
        tieCountText.innerText = tieCount;
        randNum = Math.random();
        result.innerText = "TIE";
    }
})

