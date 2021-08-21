function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return n1 + n2;
  }
}

// let number1 = 5;
let number1: number = 5;
number1 = 'a';
const printResult = true;
const resulPhrase = 'Result: '

add(number1, number2, printResult, resulPhrase);
