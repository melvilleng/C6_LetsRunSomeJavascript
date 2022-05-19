function Greet3(){
    this.greeting='hello world';
    this.greet = function(){
        console.log(this.greeting);
    }
}

module.exports= new Greet3();