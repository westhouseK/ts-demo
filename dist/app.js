"use strict";
const names = ['max', 'manuel'];
console.log(names[0].split('a'));
const pro = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('fin!');
    }, 1000);
});
pro.then(data => {
    console.log(data.toString());
});
function merge(o1, o2) {
    return Object.assign(o1, o2);
}
const a = merge({ name: 'max' }, { age: 20 });
console.log(a.name);
function countAndDescribe(e) {
    let text = 'aaa';
    if (e.length > 0) {
        text = 'bbb';
    }
    return [e, text];
}
console.log(countAndDescribe(['ccc', 'ccc']));
function extractAndConvert(obj, key) {
    return obj[key];
}
extractAndConvert({ name: 'max' }, 'name');
class D {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItem() {
        return [...this.data];
    }
}
const ts = new D();
ts.addItem('a');
ts.addItem('b');
ts.removeItem('b');
console.log(ts.getItem());
const ds = new D();
function createCGoul(title, des, date) {
    let c = {};
    c.title = title;
    c.des = des;
    c.date = date;
    return c;
}
const ns = ['a', 'b'];
//# sourceMappingURL=app.js.map