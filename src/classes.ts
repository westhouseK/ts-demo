abstract class Department {

  static fiscalYear = '2020'
  
  // letもconstもつけない
  protected employees: string[] = []

  static createEployee(name: string) {
    return { name }
  }

  // プロパティをかかなくて済む
  constructor(protected readonly id: string, public name: string) {
    
  }

  abstract discribe(this: Department): void;

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

  discribe() {
    console.log('IT部門' + this.id)
  }
 }

class AccountingDepartment extends Department {

  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport
    }
    throw new Error('レポートなし')
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('正しいレポートにしてね')
    }
    this.addReport(value)
  }
  
  private constructor(id: string, private reports: string[] = []) {
    super(id, 'Accouting')
    this.lastReport = reports[0]
  }

  static getInstance() {
    if (this.instance) {
      return this.instance
    }
    this.instance = new AccountingDepartment('D2')
    return this.instance
  }

  discribe() {
    console.log(`会計: ${this.id} ${this.name}`)
  }

  addReport(report: string) {
    this.reports.push(report)
    this.lastReport = report
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

const e = Department.createEployee('John')
console.log(e, Department.fiscalYear)

const it = new ITDepartment('D1', ['Max'])
console.log(it)
it.addEmployee('Max')
it.addEmployee('Manu')
it.discribe()
it.printEmployeeInformation()

const accouting = AccountingDepartment.getInstance()
const accouting2 = AccountingDepartment.getInstance()
// getterは()がいらない
// console.log(accouting.mostRecentReport)

accouting.mostRecentReport = 'test'

accouting.addReport('something')
console.log(accouting.mostRecentReport)

// accouting.printReports()
accouting.addEmployee('Max')
accouting.addEmployee('Manu')
// accouting.printEmployeeInformation()
accouting.discribe()



// const accountingCoby = { name: 'dummy', discribe : it.discribe }
// accountingCoby.discribe()