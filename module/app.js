let greet = require('./greet1');

greet();

let greet2 = require('./greet2').greet;
greet2();


let greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'Changed hello world';

let greet3b = require('./greet3');
greet3b.greet();

let Greet4 = require('./greet4');
let grtr = new Greet4();
grtr.greet();

let greet5= require('./greet5').greet;
greet5();