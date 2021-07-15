/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 *
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
  let sides = expressions[0];
  //   [0] > Area
  //   [1] > Perimeter
  let s1 = (sides[1] + Math.sqrt(Math.pow(sides[1], 2) - 16 * sides[0])) / 4;
  let s2 = (sides[1] - Math.sqrt(Math.pow(sides[1], 2) - 16 * sides[0])) / 4;

  let values = [s1, s2];
  let array = values.sort();
  return array;
}

let strings = ['The area is: ', '.\nThe perimeter is: ', '.'];

let rectangle = [140, 48];

sides(strings, rectangle);

function sidesAlt(literals, ...expressions) {
  // ES6 allows destructuring of arrays into multiple variables
  const [a, p] = expressions;
  console.log(a, p);
  // Perform this operation only once and assign to variable
  const root = Math.sqrt(p * p - 16 * a);
  const s1 = (p + root) / 4;
  const s2 = (p - root) / 4;
  // s2 will always be smaller because of the (-/+) above
  return [s2, s1];
}

console.log(sidesAlt(strings, rectangle));
