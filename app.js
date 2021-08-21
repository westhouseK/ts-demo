var person = {
    name: 'taro',
    age: 30,
    hobbies: ['sports', 'cooking'],
    role: [2, 'author']
};
person.role[0] = 10;
// person.role = [0, 'aaa', 'test']
var arr = ['a'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toLocaleUpperCase());
}
