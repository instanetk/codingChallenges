// The String object is used to represent and manipulate a sequence of characters.

// Text Processing

let tolstoy = 'All happy families are alike, every unhappy family is unhappy in their own way.';
let bulgakov = 'Who told you there is no truthful, faithful, eternal love in this world?';

// Instance Methods
console.log('String: ', tolstoy);

// String.prototype.at() - Chrome only
// let prototypeAt = tolstoy.at(0);
// console.log(prototypeAt);

let charAt = tolstoy.charAt(0);
console.log('charAt: ', charAt);

let charCodeAt = tolstoy.charCodeAt(0);
console.log('charCodeAt: ', charCodeAt);

let codePointAt = tolstoy.codePointAt(0);
console.log('codePointAt: ', codePointAt);

let concat = tolstoy.concat(bulgakov);
console.log('concat: ', concat);

let includes = tolstoy.includes('family');
console.log('includes: ', includes);

let endsWith = bulgakov.endsWith('?');
console.log('endsWith: ', endsWith);

let indexOf = bulgakov.indexOf('?');
console.log('indexOf: ', indexOf);

let lastIndexOf = tolstoy.lastIndexOf('w');
console.log('lastIndexOf: ', lastIndexOf);
