function countOccurrences(n) {
  let numArray = [];
  let count = 0;

  for (let i = 0; i < n + 1; i++) {
    numArray.push(i);
  }

  for (let i = 0; i < numArray.length; i++) {
    let numSplit = numArray[i].toString().split('');
    for (let j = 0; j < numSplit.length; j++) {
      if (parseInt(numSplit[j]) === 0 || parseInt(numSplit[j]) === 2 || parseInt(numSplit[j]) === 4) count++;
    }
  }
  console.log(count);
  return count;
}

countOccurrences(10);
