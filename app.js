var person = {
    name: 'taro',
    age: 30,
    hobbies: ['sports', 'cooking']
};
var arr = ['a'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toLocaleUpperCase());
}
