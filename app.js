function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var a = combine(30, 20, 'as-number');
console.log(a);
var b = combine('a', 'b', 'as-text');
console.log(b);
var c = combine('30', '20', 'as-number');
console.log(c);
