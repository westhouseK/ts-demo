var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 6] = "READ_ONLY";
    Role[Role["AUTHER"] = 7] = "AUTHER";
})(Role || (Role = {}));
var person = {
    name: 'taro',
    age: 30,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN
};
console.log(Role.ADMIN);
if (person.role === Role.ADMIN) {
    console.log('aaa');
}
