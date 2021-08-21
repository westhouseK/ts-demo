function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    return cb(result);
}
var x = addAndHandle(1, 2, function (result) {
    console.log(result);
    return 'ok';
});
console.log(x);
var a;
a = add;
// a = printResult
console.log(a(8, 8));
printResult(add(1, 2));
// 注意！これはできるらしい
function sendRequest(data, cb) {
    // ... sending a request with "data"
    return cb({ data: 'Hi there!' });
}
sendRequest('Send this!', function (response) {
    console.log(response);
    return true;
});
