const twoSum = function (nums, target) {
  let result;
  nums.forEach((num, index) => {
    const remainder = target - num;
    const pairIndex = nums.indexOf(remainder, index + 1);
    if (pairIndex > -1) {
      result = [index, pairIndex];
    }
  });
  return result;
};

const pointerMethod = function (nums, target) {
  const sorted = [...nums];
  sorted.sort(function compareNumbers(a, b) {
    return a - b;
  });

  let smaller = sorted[0];
  let larger = sorted[sorted.length - 1];
  while (smaller <= larger) {
    const sum = smaller + larger;
    const smallerIndex = sorted.indexOf(smaller);
    const largerIndex = sorted.lastIndexOf(larger);
    if (sum === target) {
      return [nums.indexOf(smaller), nums.lastIndexOf(larger)];
    } else if (sum < target) {
      smaller = sorted[smallerIndex + 1];
    } else if (sum > target) {
      larger = sorted[largerIndex - 1];
    }
  }
};

console.log('pointerMethod', pointerMethod([1, 3, 5, 9], 8));
console.log('twoSum', twoSum([1, 3, 5, 9], 8));
