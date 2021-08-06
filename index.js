

function add (a,b) {
    return a + b;
}

function subtract (a,b) {
    return a - b;
}
function multiply (a,b){
    return a * b;
}
function divide (a,b){
    return a / b;
}

function increment(n) {
    return n + 1;
}

function decrement(n) {
    return n - 1;
}



function makeInt(n){
    return n = parseInt(n, 10);
}

function preserveDecimal(n) {
  return n = parseFloat(n)
}

let n = "2.8888";

console.log(preserveDecimal(n));
console.log(makeInt(n));