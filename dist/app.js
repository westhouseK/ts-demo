"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Logger(log) {
    console.log('Logger factory');
    return function (constructor) {
        console.log('Logger');
        console.log(constructor);
    };
}
function func(tmp, hookid) {
    console.log('func factory');
    return function (originconstructor) {
        return class extends originconstructor {
            constructor(..._) {
                super();
                console.log('func');
                const hookEl = document.getElementById(hookid);
                if (hookEl) {
                    hookEl.innerHTML = tmp;
                    hookEl.querySelector('h1').textContent = this.name;
                }
            }
        };
    };
}
let Person = class Person {
    constructor() {
        this.name = 'Max';
        console.log('aaa');
    }
};
Person = __decorate([
    Logger('log'),
    func("<h1>h1タグ</h1>", "app")
], Person);
const p = new Person();
console.log(p);
function Log(target, propetyName) {
    console.log('Log1');
    console.log(target, propetyName);
}
function Log2(target, name, des) {
    console.log('Log2');
    console.log(target);
    console.log(name);
    console.log(des);
    return {};
}
function Log3(target, name, des) {
    console.log('Log3');
    console.log(target);
    console.log(name);
    console.log(des);
}
function Log4(target, name, position) {
    console.log('Log4');
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    set price(v) {
        if (v > 0) {
            this._price = v;
        }
        else {
            throw new Error('incorrect');
        }
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
function Autobind(_, _2, des) {
    const oriM = des.value;
    const adjDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = oriM.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}
class Printer {
    constructor() {
        this.message = 'クリックしました';
    }
    showMsg() {
        console.log(this.message);
    }
}
__decorate([
    Autobind
], Printer.prototype, "showMsg", null);
const pri = new Printer;
const button = document.querySelector('button');
button.addEventListener('click', pri.showMsg);
const resisteredValidators = {};
function Required(target, propName) {
    resisteredValidators[target.constructor.name] = Object.assign(Object.assign({}, resisteredValidators[target.constructor.name]), { [propName]: ['required'] });
}
function PostiveNumber(target, propName) {
    resisteredValidators[target.constructor.name] = Object.assign(Object.assign({}, resisteredValidators[target.constructor.name]), { [propName]: ['positive'] });
}
function validate(obj) {
    const objValidatorConfig = resisteredValidators[obj.constructor.name];
    if (!obj) {
        true;
    }
    let isValid = true;
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}
class Course {
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
}
__decorate([
    Required
], Course.prototype, "title", void 0);
__decorate([
    PostiveNumber
], Course.prototype, "price", void 0);
const c = document.querySelector('form');
c.addEventListener('submit', event => {
    event.preventDefault();
    const titleEL = document.getElementById('title');
    const priceEL = document.getElementById('price');
    const title = titleEL.value;
    const price = +priceEL.value;
    const createdCourse = new Course(title, price);
    if (!validate(createdCourse)) {
        throw new Error('エラー');
    }
    console.log(createdCourse);
});
//# sourceMappingURL=app.js.map