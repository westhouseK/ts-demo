"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEployee(name) {
        return { name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = '2020';
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    discribe() {
        console.log('IT部門' + this.id);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports = []) {
        super(id, 'Accouting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('レポートなし');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('正しいレポートにしてね');
        }
        this.addReport(value);
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('D2');
        return this.instance;
    }
    discribe() {
        console.log(`会計: ${this.id} ${this.name}`);
    }
    addReport(report) {
        this.reports.push(report);
        this.lastReport = report;
    }
    printReports() {
        console.log(this.reports);
    }
    addEmployee(name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }
}
const e = Department.createEployee('John');
console.log(e, Department.fiscalYear);
const it = new ITDepartment('D1', ['Max']);
console.log(it);
it.addEmployee('Max');
it.addEmployee('Manu');
it.discribe();
it.printEmployeeInformation();
const accouting = AccountingDepartment.getInstance();
const accouting2 = AccountingDepartment.getInstance();
accouting.mostRecentReport = 'test';
accouting.addReport('something');
console.log(accouting.mostRecentReport);
accouting.addEmployee('Max');
accouting.addEmployee('Manu');
accouting.discribe();
//# sourceMappingURL=classes.js.map