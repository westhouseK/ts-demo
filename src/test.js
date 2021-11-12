var Name = {
    taro: 10,
    jiro: 20,
    sabu: 30
};
var getName = function (name) {
    return Name[name];
};
console.log(getName('taro'));
