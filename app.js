const deuceBtn = document.querySelector(".deuce-btn");

const player1CurrentScore = document.querySelector(".player1-current-score");
const player2CurrentScore = document.querySelector(".player2-current-score");
const player1ScoreNumber = document.querySelector(".player1-score-number");
const player2ScoreNumber = document.querySelector(".player2-score-number");
const player1WinsGameBtn = document.querySelector(".player1-wins-game-btn");
const player2WinsGameBtn = document.querySelector(".player2-wins-game-btn");
const player1Set1Tally = document.querySelector(".player1-set1-tally");
const player2Set1Tally = document.querySelector(".player2-set1-tally");

let isTieBreak = false;
let player1TieBreakScore = 1;
let player2TieBreakScore = 1;

let isSet1 = true;

const score = ["15", "30", "40", "A"];


let player1startingIndex = 0;
let player2startingIndex = 0;
let player1Set1Score = 1;
let player2Set1Score = 1;



player1CurrentScore.addEventListener("click", function () {
    if (player1Set1Score == 7 && player2Set1Score == 7) {
        player1ScoreNumber.innerHTML = player1TieBreakScore++;

    } else {
        if (player1startingIndex == 3 && player2startingIndex < 3) {
            player1Set1Tally.innerHTML = player1Set1Score++;
            player1ScoreNumber.innerHTML = 0;

            player1startingIndex = 0;

            player2ScoreNumber.innerHTML = 0;
            player2startingIndex = 0;
        } else if (player1startingIndex == 4 && player2startingIndex == 3) {
            player1Set1Tally.innerHTML = player1Set1Score++;
            player1ScoreNumber.innerHTML = 0;
            player1startingIndex = 0;

            player2ScoreNumber.innerHTML = 0;
            player2startingIndex = 0;
        } else if (player1startingIndex == 3 && player2startingIndex == 4) {
            player1ScoreNumber.innerHTML = score[2];

        } else {
            player1ScoreNumber.innerHTML = score[player1startingIndex++];
        }
    } 








})

player2CurrentScore.addEventListener("click", function () {
    if (player1Set1Score == 7 && player2Set1Score == 7) {
        player2ScoreNumber.innerHTML = player2TieBreakScore++;

    } else {
        if (player2startingIndex == 3 && player1startingIndex < 3) {
            player2Set1Tally.innerHTML = player2Set1Score++;
            player2ScoreNumber.innerHTML = 0;
            player2startingIndex = 0;

            player1ScoreNumber.innerHTML = 0;
            player1startingIndex = 0;
        } else if (player2startingIndex == 4 && player1startingIndex == 3) {
            player2Set1Tally.innerHTML = player2Set1Score++;
            player2ScoreNumber.innerHTML = 0;
            player2startingIndex = 0;

            player1ScoreNumber.innerHTML = 0;
            player1startingIndex = 0;
        } else if (player1startingIndex == 4 && player2startingIndex == 3) {
            player2ScoreNumber.innerHTML = score[2];

        }
        else {
            player2ScoreNumber.innerHTML = score[player2startingIndex++];
        }
    }




})

deuceBtn.addEventListener('click', function () {
    if (player1startingIndex > 2 || player2startingIndex > 2) {
        player1startingIndex = 2;
        player2startingIndex = 2;
        player1ScoreNumber.innerHTML = score[player1startingIndex];
        player2ScoreNumber.innerHTML = score[player2startingIndex];
        player1startingIndex = 3;
        player2startingIndex = 3;
    }
})


// player1WinsGameBtn.addEventListener("click", function () {
//     if (player1ScoreNumber.innerHTML == "A") {
//         player1Set1Tally.innerHTML = player1Set1Score++;
//         player1ScoreNumber.innerHTML = score[0];
//         player1startingIndex = 1;

//         player2ScoreNumber.innerHTML = score[0];
//         player2startingIndex = 1;
//     } else if (player1ScoreNumber.innerHTML == "40" && player2ScoreNumber.innerHTML != "A") {
//         player1Set1Tally.innerHTML = player1Set1Score++;
//         player1ScoreNumber.innerHTML = score[0];
//         player1startingIndex = 1;

//         player2ScoreNumber.innerHTML = score[0];
//         player2startingIndex = 1;
//     }
// })

// player2WinsGameBtn.addEventListener("click", function () {
//     if (player2ScoreNumber.innerHTML == "A") {
//         player2Set1Tally.innerHTML = player2Set1Score++;
//         player2ScoreNumber.innerHTML = score[0];
//         player2startingIndex = 1;

//         player1ScoreNumber.innerHTML = score[0];
//         player1startingIndex = 1;
//     } else if (player2ScoreNumber.innerHTML == "40" && player1ScoreNumber.innerHTML != "A") {
//         player2Set1Tally.innerHTML = player2Set1Score++;
//         player2ScoreNumber.innerHTML = score[0];
//         player2startingIndex = 1;

//         player1ScoreNumber.innerHTML = score[0];
//         player1startingIndex = 1;
//     }
// })



