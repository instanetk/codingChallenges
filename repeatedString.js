function repeatedString(s, n) {
  // Write your code here

  let avg = n / s.length;
  console.log('avg', avg, 'length', s.length);

  let array = s.split('');

  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'a') count++;
  }
  console.log('count', n / count);
  console.log('simple', count * avg);
  console.log('ceil', Math.ceil(count * avg));
  console.log('round', Math.round(count * avg));
  console.log('expected', 9428851088.77143 * 35);

  return count * avg;
}

let s = 'udjlitpopjhipmwgvggazhuzvcmzhulowmveqyktlakdufzcefrxufssqdslyfuiahtzjjdeaxqeiarcjpponoclynbtraaawrps';
let n = 872514961806;

let s2 = 'bcbccacaacbbacabcabccacbccbababbbbabcccbbcbcaccababccbcbcaabbbaabbcaabbbbbbabcbcbbcaccbccaabacbbacbc';
let n2 = 649606239668;
// 162401559918

let s3 = 'aadcdaccacabdaabadadaabacdcbcacabbbadbdadacbdadaccbbadbdcadbdcacacbcacddbcbbbaaccbaddcabaacbcaabbaaa';
let n3 = 942885108885;
// 330009788107

// repeatedString(s, n);
// repeatedString(s2, n2);
repeatedString(s3, n3);
