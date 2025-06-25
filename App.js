var a = function b(){
  console.log("function assigning to a var")
}

a();

//passed as arguments to other functions

function sayHello(){
  return "Hello"
}

function greet(){
  console.log("Anonymus function");
}

greet(sayHello);


// returning from other functions

function outer(){
  return function(){
    console.log("I am inner")
  };
}

const inner= outer();    // Took new variable inner and assigned outer to inner 
inner();