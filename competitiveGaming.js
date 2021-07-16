/*
 * Complete the 'numPlayers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY scores
 */

function numPlayers(k, scores) {
  // Write your code here
  // Sort scores in descending order
  let playerScores = scores.sort((a, b) => b - a);
  // console.log(playerScores);

  // Assign weight to each value

  let rankWeight = [];
  let rank = 1;

  for (let i = 0; i < playerScores.length; i++) {
    if (playerScores[i] !== playerScores[i + 1]) {
      // console.log('rank:', rank, 'loop:', i);
      rankWeight.push(rank);
      if (rank <= i) {
        rank = i + 1;
      }
      rank++;
    } else {
      // console.log('rank:', rank, 'loop:', i, 'else');
      rankWeight.push(rank);
    }
  }

  // Filter how many weighted values are less than or equal to k
  // Exclude players with a score of zero
  let levelUp = 0;
  rankWeight.forEach((player, index) => {
    if (playerScores[index] !== 0 && player <= k) levelUp++;
  });

  console.log('Rank > ', rankWeight);
  console.log(levelUp);
  return levelUp;
}

let gameScoresCaseOne = [20, 40, 60, 80, 100]; // 4
// Ranks [1, 2, 3, 4, 5] // Sorted
// Ranks [5, 4, 3, 2, 1]
let rankCaseOne = 4;

let gameScoresCaseTwo = [2, 2, 3, 4, 5]; // 5
// Ranks [1, 2, 3, 4, 4] //Sorted
// Ranks [4, 4, 3, 2, 1]
let rankCaseTwo = 4;

let gameScoresCaseThree = [100, 50, 50, 25, 25, 10]; // 3
// Ranks [1, 2, 2, 4] //Sorted
// Ranks [1, 2, 2, 4]
let rankCaseThree = 3;

let gameScoresCaseFour = [10, 5, 0, 0, 0];
let rankCaseFour = 3;

numPlayers(rankCaseOne, gameScoresCaseOne);
console.log('---');
numPlayers(rankCaseTwo, gameScoresCaseTwo);
console.log('---');
numPlayers(rankCaseThree, gameScoresCaseThree);
console.log('---');
numPlayers(rankCaseFour, gameScoresCaseFour);
