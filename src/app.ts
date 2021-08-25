

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

const el: EleccatedEmploee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date()
}

type Combinable = string | number
type Numeric = number | boolean

type Universal = Combinable & Numeric