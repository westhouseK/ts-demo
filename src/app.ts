const button = document.querySelector('button')!

function add(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2
  }
}

function clickHandler(mes: string) {
  console.log('click!' + mes)
  console.log('aaa')
}

button.addEventListener('click', clickHandler.bind(null, ' OK')) 
