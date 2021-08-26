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

// 関数オーバーロード
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString()
  } 
  return a + b;
}
 
const result = add('a', 'b')
result.split('')

const fetchItem = {
  id: 'u1',
  name: 'user1',
  job: {
    title: 'a',
    des: 'b'
  }
}
// オプショナルチェイン
console.log(fetchItem?.job?.title)

const userInput = null
// null合体演算子
const storedData = userInput ?? 'xxx'
console.log(storedData)

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

// const input = <HTMLInputElement>document.getElementById('user')!
// const input = document.getElementById('user')! as HTMLInputElement
const input = document.getElementById('user')
if (input) {
  (input as HTMLInputElement).value = 'こんにちは'
}

interface ErrorContainer {
  id: string,
  [prop: string]: string // インデックス型
}

const errorBag: ErrorContainer = {
  id: '1',
  email: 'xxx',
  1: ''
}

