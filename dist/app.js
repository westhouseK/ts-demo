"use strict";
class Department {
    constructor(n) {
        this.name = n;
    }
    discribe() {
        console.log('Department: ' + this.name);
    }
}
const accouting = new Department('Accounting');
accouting.discribe();
const accountingCoby = { name: 'dummy', discribe: accouting.discribe };
accountingCoby.discribe();
//# sourceMappingURL=app.js.map