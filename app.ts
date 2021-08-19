function add(n1: number, n2: number) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //     throw new Error('入力値が不正です')
    // }

    return n1 + n2;
}

const number1 = '5';
const number2 = 2.4;

const result = add(number1, number2);
console.log(result);
