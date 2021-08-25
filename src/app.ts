// 交差型
type Admin = {
  name: string,
  privileges: string[],
}

type Employee = {
  name: string,
  startDate: Date
}

// interface EleccatedEmploee extends Admin, Employee {}
type EleccatedEmploee = Admin & Employee

const e1: EleccatedEmploee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date()
}

type Combinable = string | number
type Numeric = number | boolean

type Universal = Combinable & Numeric

function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString()
  } 
  return a + b;
}

type UnknownEployee = Employee | Admin

function printEmployeeInfo(emp: UnknownEployee) {
  console.log(emp.name)
  if ('privileges' in emp) {
    console.log(emp.privileges)
  }
}

printEmployeeInfo({name: 'a', startDate: new Date()})

class Car {
  drive() {
    console.log('運転中')
  }
}

class Truck {
  drive() {
    console.log('トラック運転中')
  }

  loadCargo(acount: number) {
    console.log(acount)
  }
}

type Vehicle = Car | Truck

const v1 = new Car()
const v2 = new Truck()

function useVehicle(vehicle: Vehicle) {
  vehicle.drive()
  if ('loadCargo' in vehicle) {
    vehicle.loadCargo(1);
  } 
}

useVehicle(v1)
useVehicle(v2)

interface Bird {
  type: 'bird',
  flyingSpeed: number
}

interface Horse {
  type: 'horse',
  runningSpeed: number
}

type Animal = Bird | Horse

function moveAnimal(animal: Animal) {
  let speed;
  switch(animal.type) {
    case 'bird':
      speed = animal.flyingSpeed
      break
    case 'horse':
      speed = animal.runningSpeed
      break
  }
  console.log(speed)
}
moveAnimal({type: 'horse', runningSpeed: 100})