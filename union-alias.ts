type Conbinable = number | string
type ConversionDescriptor = 'as-number' | 'as-text'
type User = {name: string, age: number}

function combine(
  input1: Conbinable | string,
  input2: Conbinable | string,
  resultConversion: ConversionDescriptor
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


const user: User = {name: 'taro', age: 30}
console.log(user)