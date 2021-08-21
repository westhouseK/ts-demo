function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: 'as-number' | 'as-text'
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result
}

const a = combine(30, 20, 'as-number')
console.log(a)

const b = combine('a', 'b', 'as-text')
console.log(b) 

const c = combine('30', '20', 'as-number')
console.log(c);