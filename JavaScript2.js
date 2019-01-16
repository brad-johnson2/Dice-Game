"use strict"

function runGame() {

  let playerNumber = prompt("How many players?");
  let gamePlayers = [];

  for (let i = 1; i <= playerNumber; i++) {
     gamePlayers.push(0);
   }
  console.log(gamePlayers);

  let turnCount = 1;
  while (isNoWinner(gamePlayers)) {
    console.log(turnCount);
    turnCount++;
    runTurn(gamePlayers);
    console.log(gamePlayers);

  }
  console.log(gamePlayers);
    // end game
  console.log("Player " + gamePlayers.indexOf() + 1 + " is the winner");
}

function isNoWinner(gamePlayers) {
  let isWinner = false;
  for (let i=0; i < gamePlayers.length; i++) {
      if (gamePlayers[i] >= 500) {
        isWinner = true;;
      }
  }
  return !isWinner;
}

function runTurn(gamePlayers) {
  let dieFourSide;
  let dieSixSide;
  let dieEightSide;
  let dieTenSide;
  let dieTwelveSide;
  let dieTwentySide;

  for (let i=0; i < gamePlayers.length; i++) {
    dieFourSide = rollDie(4);
    dieSixSide = rollDie(6);
    dieEightSide = rollDie(8);
    dieTenSide = rollDie(10);
    dieTwelveSide = rollDie(12);
    dieTwentySide = rollDie(20);
    gamePlayers[i] += findSpacedMoved(dieFourSide, dieSixSide, dieEightSide, dieTenSide);
    if (dieTwentySide === 11 || dieTwentySide === 13) {
      gamePlayers[i] = 0;
    }
    if (dieTwelveSide <= 8) {
       gamePlayers[i] += 20;
    }    //for (let j = 1; j < i; j++) {
    //       if (j !== i){
    //         gamePlayers += 30;
    //       }
    //     }
  }
}


function findSpacedMoved(dieFourSide, dieSixSide, dieEightSide, dieTenSide) {
  let spacesMoved = dieFourSide * dieSixSide;
  if (dieTenSide % 2 !== 0) {
    spacesMoved /= 2;
  } else {
    spacesMoved *= 2;
  }
  if (dieEightSide === 7 || dieEightSide === 8) {
    spacesMoved *= -1;
  }
  return spacesMoved;
}

 function rollDie(sides) {
   let result;
   result = (Math.floor(Math.random() * sides) + 1);
   return result;
 }

runGame();




//
// Mario kart – to 500
// 4 x 6 = distance
// 6 x 4 = distance
// 8 – 1-6 (positive direction) 7-8 negative direction
// 10 even (6x4) is doubled, odd (6x4) is halved
// 12  - 1-8 player moves up 20, 9-12 all other plays move back 30
// 20 – 13 or 11 back to 0
