"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    discribe() {
        console.log(`Department: ${this.id} ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
class AccountingDepartmetn extends Department {
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
const it = new ITDepartment('D1', ['Max']);
console.log(it);
it.addEmployee('Max');
it.addEmployee('Manu');
it.discribe();
it.printEmployeeInformation();
const accouting = new AccountingDepartmetn('D2');
accouting.mostRecentReport = 'test';
accouting.addReport('something');
console.log(accouting.mostRecentReport);
accouting.printReports();
accouting.addEmployee('Max');
accouting.addEmployee('Manu');
accouting.printEmployeeInformation();
//# sourceMappingURL=app.js.map