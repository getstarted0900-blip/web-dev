let x = 10;
let y = 10;

if (x === 5) {
    console.log("number");
} else if (x == 5) {
    console.log("string");
}

function displayName(name) {
    console.log("My name is " + name);
}

displayName("Prashant");

function sum(x, y) {
    console.log("The sum of x and y is ", x + y);
}

sum(4, 5);

function product(x,y){
    console.log("The product of x and y is", x*y);

}
product(10,15);

function difference(x,y){
    console.log("The difference of x and y is ", x-y);

}
difference(5,4);



let result = check(x);

if (result === 0) {
    console.log("The number is even");
    alert("The number is even");
} else {
    console.log("The number is odd");
    alert("The number is odd");
}
function check(num) {
    return num % 2;
}
