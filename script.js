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

const isPalindrome = function (x) {
  let num = x.toString();
  let reverse = x.toString().split('').reverse().join('');

  if (num === reverse) return true;
  else return false;
};

let isHeadPalindrome = function (head) {
  let original = head.join('');
  let reversed = head.reverse().join('');

  if (original === reversed) return true;
  else return false;
};

// Destination City

// You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.

// It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

const cities = [
  ['London', 'New York'],
  ['New York', 'Lima'],
  ['Lima', 'Sao Paulo'],
];

const nodes = [
  ['B', 'C'],
  ['D', 'B'],
  ['C', 'A'],
];
const binary = [['A', 'Z']];

const destCity = function (paths) {
  let from = [];
  let to = [];

  for (let i = 0; i < paths.length; i++) {
    from.push(paths[i][0]);
    to.push(paths[i][1]);
  }

  let destination;

  to.forEach((path, index) => {
    if (from.indexOf(path) === -1) {
      destination = path;
    }
  });
  return destination;
};

destCity(cities);
destCity(nodes);
destCity(binary);
