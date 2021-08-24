/*
 * Complete the 'jumpingOnClouds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY c as parameter.
 */

// There is a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads [1] and others are cumulus [0]. The player can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus 1 or 2 . The player must avoid the thunderheads. Determine the minimum number of jumps it will take to jump from the starting postion to the last cloud. It is always possible to win the game.

function jumpingOnClouds(c) {
  // Write your code here
  let jumps = -1;

  for (let i = 0; i < c.length; i++) {
    if (c[i + 2] === 0) {
      i++;
    }
    jumps++;
  }

  console.log(jumps, 'jumps');
  return jumps;
}

let clouds = [0, 1, 0, 0, 0, 1, 0]; // return 3
let seven = [0, 0, 1, 0, 0, 1, 0]; // return 4
let ten = [0, 0, 1, 0, 0, 0, 0, 1, 0, 0]; // return 6

jumpingOnClouds(clouds);
jumpingOnClouds(seven);
