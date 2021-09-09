function repeatedString(s, n, x) {
  // Write your code here

  let avg = Math.trunc(n / s.length);
  let remainder = n % s.length;

  console.log('avg', avg, 'remainder', remainder, 'length', s.length, 'n', n);

  let array = s.split('');

  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'a') count++;
  }

  count = count * avg;
  console.log(count);
  // Check for the remainder characters in the infinite string
  for (let i = 0; i < remainder; i++) {
    console.log(i, array[i] === 'a', count);
    if (array[i] === 'a') count++;
  }

  // let result = count * avg;
  console.log(count, x === count);
  return count;
}

let s2 = 'bcbccacaacbbacabcabccacbccbababbbbabcccbbcbcaccababccbcbcaabbbaabbcaabbbbbbabcbcbbcaccbccaabacbbacbc';
let n2 = 649606239668;
let x2 = 162401559918;

let s3 = 'aadcdaccacabdaabadadaabacdcbcacabbbadbdadacbdadaccbbadbdcadbdcacacbcacddbcbbbaaccbaddcabaacbcaabbaaa';
let n3 = 942885108885;
let x3 = 330009788107;

let s4 = 'gfcaaaecbg';
let n4 = 547602;
let x4 = 164280;

let s5 = 'a';
let n5 = 1000000000000;
let x5 = 1000000000000;
repeatedString(s2, n2, x2);
// repeatedString(s3, n3, x3);
// repeatedString(s4, n4, x4);
// repeatedString(s5, n5, x5);
