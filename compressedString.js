function compressedString(message) {
  // Write your code here

  let msgArray = message.split('');
  let compressed = [];

  for (let i = 0; i < msgArray.length; i++) {
    let count = 1;

    if (msgArray[i] !== msgArray[i + 1]) {
      compressed.push(msgArray[i]);
    } else {
      while (msgArray[i] === msgArray[i + 1]) {
        count++;
        i++;
      }
      compressed.push(msgArray[i - 1] + count);
    }
  }

  let result = compressed.join('');

  return result;
}

console.log(
  compressedString(
    'zzzzzzzzzzzzjjjjjjaiiiiapppppppppppppppppppppjryyttttgsggjkwopppqkkkkdhhkakkamncbbcbbcmmmvmbbbaccazzzaaaaaarrrrwweewqyqjjqqqq'
  )
);
