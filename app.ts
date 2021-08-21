function add(n1: number, n2: number): number {
  return n1 + n2
}

function printResult(num: number): void {
  console.log('Result: ' + num)
}

let a: (a: number, b: number) => number;
a = add
// a = printResult
console.log(a(8, 8))
printResult(add(1, 2))