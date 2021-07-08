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

console.log(destCity(cities));
console.log(destCity(nodes));
