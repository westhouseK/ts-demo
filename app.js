function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
var a;
a = add;
// a = printResult
console.log(a(8, 8));
printResult(add(1, 2));
