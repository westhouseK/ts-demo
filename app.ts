const person = {
    name: 'taro',
    age: 30,
    hobbies: ['sports', 'cooking']
}

let arr: string[] = ['a'] 

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby.toLocaleUpperCase())
}