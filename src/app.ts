class Department {
  
  // letもconstもつけない
  name: string

  constructor(n: string) {
    this.name = n
  }

  discribe(this: Department) {
    console.log('Department: ' + this.name)
  }
}

const accouting = new Department('Accounting')
accouting.discribe()

const accountingCoby = { name: 'dummy', discribe : accouting.discribe }
accountingCoby.discribe()