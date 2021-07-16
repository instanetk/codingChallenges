/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
  // Write your code here
  let count = 0;
  ar.sort();

  for (let i = 0; i < n; i++) {
    if (ar[i] === ar[i + 1]) {
      count++;
      i++;
    }
  }
  return count;
}

let socks = [10, 20, 20, 10, 10, 30, 50, 10, 20];
let num = socks.length;

console.log(sockMerchant(num, socks));
