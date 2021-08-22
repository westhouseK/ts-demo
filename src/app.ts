let age = 30;




// 分割代入
// const arr1: ( string | number )[] = ['a', 'b', 1]
// const [x, y, z] = arr1
// console.log(y)

// const obj1 = {
//   a: 'a',
//   b: 'b'
// }
// const {a: xxx, b} = obj1
// console.log(xxx)

// レストパラメータ
// const add = (...number: number[]) => number.reduce((sum: number, val: number) => sum + val, 0)
// タプルver
// const add = (...number: [number, number, number]) => number.reduce((sum: number, val: number) => sum + val, 0)

// const addedNumbers = add(1,2,3)

// console.log(addedNumbers)

// スプレット演算子の練習
// const arr1: ( string | number )[] = ['a', 'b', 1]
// const arr2: string[] = ['c']

// arr1.push(...arr2)
// console.log(arr1)

// const obj1 = {
//   a: 'a',
//   b: 'b'
// }

// const obj2 = {
//   ...obj1
// }

// objのコピー
// console.log(obj2)


// アロー関数の練習
// const add = (a:number, b: number = 1) => a + b

// let b = add(1)
// console.log(b)

// const output: (output: number | string) => void = output => {
//   console.log(output)
// }
// output('a')

// const button = document.querySelector('button')!

// button.addEventListener('click', event => {
//   console.log(event)
// })

// letの練習
// function add(a: number, b:number) {
//   let result
//   result = a + b
//   return result
// }

// letを使う理由
// if (age > 20) {
//   let isAdult = true
// }
// console.log(isAdult)