var userInput;
var userName;
userInput = 1;
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(mes, code) {
    throw { mes: mes, code: code };
}
var res = generateError('エラー発生', 500);
console.log(res);
