class Department {
  
  // letもconstもつけない
  protected employees: string[] = []

  // プロパティをかかなくて済む
  constructor(private readonly id: string, public name: string) {}

  discribe(this: Department) {
    console.log(`Department: ${this.id} ${this.name}`)
  }

  addEmployee(employee: string) {
    this.employees.push(employee)
  }

  printEmployeeInformation() {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

class ITDepartment extends Department {
  
  admins: string[]
  
  constructor(id: string, admins: string[]) {
    super(id, 'IT')
    this.admins = admins
  }
 }

class AccountingDepartmetn extends Department {
  
  constructor(id: string, private reports: string[] = []) {
    super(id, 'Accouting')
  }

  addReport(report: string) {
    this.reports.push(report)
  }

  printReports() {
    console.log(this.reports)
  }

  addEmployee(name: string) {
    if(name === 'Max') {
      return 
    }
    this.employees.push(name)
  }
}

const it = new ITDepartment('D1', ['Max'])
console.log(it)
it.addEmployee('Max')
it.addEmployee('Manu')
it.discribe()
it.printEmployeeInformation()

const accouting = new AccountingDepartmetn('D2')
accouting.addReport('something')
accouting.printReports()
accouting.addEmployee('Max')
accouting.addEmployee('Manu')
accouting.printEmployeeInformation()



// const accountingCoby = { name: 'dummy', discribe : it.discribe }
// accountingCoby.discribe()