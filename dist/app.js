"use strict";
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
//# sourceMappingURL=app.js.map