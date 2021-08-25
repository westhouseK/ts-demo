"use strict";
var _a;
const e1 = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add('a', 'b');
result.split('');
const fetchItem = {
    id: 'u1',
    name: 'user1',
    job: {
        title: 'a',
        des: 'b'
    }
};
console.log((_a = fetchItem === null || fetchItem === void 0 ? void 0 : fetchItem.job) === null || _a === void 0 ? void 0 : _a.title);
function printEmployeeInfo(emp) {
    console.log(emp.name);
    if ('privileges' in emp) {
        console.log(emp.privileges);
    }
}
printEmployeeInfo({ name: 'a', startDate: new Date() });
class Car {
    drive() {
        console.log('運転中');
    }
}
class Truck {
    drive() {
        console.log('トラック運転中');
    }
    loadCargo(acount) {
        console.log(acount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if ('loadCargo' in vehicle) {
        vehicle.loadCargo(1);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log(speed);
}
moveAnimal({ type: 'horse', runningSpeed: 100 });
const input = document.getElementById('user');
if (input) {
    input.value = 'こんにちは';
}
const errorBag = {
    id: '1',
    email: 'xxx',
    1: ''
};
//# sourceMappingURL=app.js.map