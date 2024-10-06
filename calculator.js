function sum(x, y) {
    return x+y;
}
function subs(x, y) {
    return x-y;
}
function mul(x, y) {
    return x*y;
}
function div(x, y) {
    return x/y;
}
let x = parseInt(prompt("Enter x : "));
let y = parseInt(prompt("Enter y : "));
console.log("The value of sum is : ",sum(x,y));
console.log("The value of subs is : ",subs(x,y));
console.log("The value of mul is : ",mul(x,y));
console.log("The value of div is : ",div(x,y));
