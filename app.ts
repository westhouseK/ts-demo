const person: {
    name: string,
    age: number,
    hobbies: string[],
    role: [number, string] // tuple pushはできる
} = {
    name: 'taro',
    age: 30,
    hobbies: ['sports', 'cooking'],
    role: [2, 'author'],
}

person.role[0] = 10;
// person.role = [0, 'aaa', 'test']

let arr: string[] = ['a'] 

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby.toLocaleUpperCase())
}