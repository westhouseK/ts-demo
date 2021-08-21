function add(n1: number, n2: number): number {
  return n1 + n2
}

function printResult(num: number): void {
  console.log('Result: ' + num)
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => string): string {
  const result = n1 + n2
  return cb(result)
}

const x = addAndHandle(1, 2, (result) => {
  console.log(result)
  return 'ok'
})
console.log(x)


let a: (a: number, b: number) => number;
a = add
// a = printResult
console.log(a(8, 8))
printResult(add(1, 2))


// 注意！これはできるらしい
function sendRequest(data: string, cb: (response: any) => void) {
  // ... sending a request with "data"
  return cb({data: 'Hi there!'});
}
 
sendRequest('Send this!', (response) => {
  console.log(response);
  return true;
});