// Your Javascript Code Goes Here

// Note: The 'starter' folders that appear in this course's downloadable source code is here to give you a starting point to try out coding yourself. The 'finished' folder contains the code as it is when we finish the lecture. You can use the 'finished' folder to compare to your own code, or just examine the finished code.

//function statement
function greet(){
    console.log("hi");
}

greet();

//functions are first-class
function logGreeting(fn){
    fn();
}
logGreeting(greet);

//function expression
let greetMe = function(){
    console.log('Hi Tony');
}

greetMe();

//it is still first-class
logGreeting(greetMe);

//use a function expression on the fly
logGreeting(function(){
    console.log('Hello Tony!');
});
