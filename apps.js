/*
//display the largest integer among two integers
var var1;
var var2;

function isBigger(var1, var2) {
    if (var1 > var2) {
        console.log("var1 is the largest integer")
    } else if (var2 > var1) {
        console.log("var2 is the largest integer")
    }
    else {
        console.log("the numbers " +var1+ " and " +var2+ " is equal")
    }
}

console.log(isBigger(30, 20))

//conditionals statement to sort three numbers

let inputs = window.prompt("type 3 numbers seperated by comma, no spaces");

console.log(inputs);

alert(inputs.split(",").sort(function(a,b){return (b-a)}).join(", "));

//find the largest of 5 numbers
let arr = [-5, -2, -6, 0, -1];
let largest = arr[0];

function largestNumber() {
    for (let i = 1; i < arr.length; i++){
        if (arr[i] > largest)
            largest = arr[i];
    }
    return largest;
}
largestNumber (); 
*/

// write a function that accepts an argument and return the type.
function returnTypeOf(type) {
    return typeof type
}

console.log(returnTypeOf( ))

