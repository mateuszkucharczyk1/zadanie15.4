// ZADANIE PIERWSZE
const hello = 'Hello';
const world = 'World';
const helloWorld = `${hello} ${world}`;
console.log(helloWorld);


// ZADANIE DRUGIE
var multiply = function multiply(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return a * b;
};
multiply(2, 6);
multiply(6);
multiply(4);
multiply(4, 8);

// ZADANIE TRZECIE

const average = (...args) => (args.reduce((acc,current) => acc + current))/args.length;
console.log(average(1,2,3,));

// ZADANIE CZWARTE

var srednia = [1, 5, 5, 5, 4, 3, 3, 2, 1];

var first = srednia[0],
    second = srednia[1],
    third = srednia[2],
    fourth = srednia3],
    fith = srednia[4],
    sixth = srednia[5],
    seventh = srednia[6],
    eighth = srednia[7],
    nineth = srednia[8];

average(first, second, third, fourth, fith, sixth, seventh, eighth, nineth);

// ZADANIE PIATE

var osoba = [1, 4, 'Iwona', false, 'Nowak'];

var firstname = osoba[2],
    lastname = osoba[4];


var osobaNames = function osobaNames(osoba) {
  return firstname + " " + lastname;
};

osobaNames(osoba);
