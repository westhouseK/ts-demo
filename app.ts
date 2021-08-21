function combine(input1: number | string, input2: number | string) {

    let result
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2
    } else {
        result = input1.toString() + input2.toString()
    }
    return result
}

const a = combine(30, 20)
console.log(a)

const b = combine('a', 'b')
console.log(b) 