enum Role {
    ADMIN = 5, 
    READ_ONLY, 
    AUTHER
}

const person = {
    name: 'taro',
    age: 30,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN,
}
console.log(Role.ADMIN)

if (person.role === Role.ADMIN) {
    console.log('aaa')
}