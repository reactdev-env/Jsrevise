function person(fname,lname,age,ht,wt){
    console.log(fname+ ' ' + lname + ' ' + age + ' ' +ht + ' ' + wt)
}

person('pavan sai','pasupuleti','25','5.7','95')

//Calculating a value

function square(number){
    return number * number;
}

let op=square(2);
console.log(op);

//pi

function pi(){
    return Math.PI;
}

console.log(pi())


//Twotable

function printTable(num) {
  for (let i = 1; i <= 10; i++) {
    document.writeln(`${num} x ${i} = ${num * i}<br>`);
  }
}

printTable(2);


//square of two

function sqtwo(num){      // This is the another function
    return num * num;
}

console.log(square(2));     // This is the one function 
