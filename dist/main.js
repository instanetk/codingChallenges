var a = '1';
// Type Definitions: Function return & parameters
var getFullName = function (name, surname) {
    return { name: name, surname: surname };
};
console.log(getFullName('david', 'quintero'));
// Type Definitions: Object
var user = {
    name: 'David',
    age: 35
};
var user2 = {
    name: 'Gabi',
    age: 29,
    getName: function () {
        return 'Hello' + name;
    }
};
var user3 = {
    name: 'Artemis',
    getName: function () {
        return 'Hello' + name;
    }
};
var popularTags = ['happy', 'dragon'];
var dragonTags = 'dragon';
