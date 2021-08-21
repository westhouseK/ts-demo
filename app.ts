let userInput: unknown
let userName: string

userInput = 1

if (typeof userInput === 'string') {
  userName = userInput
}

function generateError(mes: string, code: number): never {
  throw { mes, code }
}

const res = generateError('エラー発生', 500)
console.log(res); 