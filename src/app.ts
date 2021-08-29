function Logger(log: string) {
  console.log('Logger factory')
  return function(constructor: Function) {
    console.log('Logger')
    console.log(constructor)
  }
}

function func(tmp: string, hookid: string) {
  console.log('func factory')
  return function<T extends {new(...args: any[]): {name: string}}>(originconstructor: T) {
    return class extends originconstructor {
      constructor(..._: any[]) {
        super()
        console.log('func')
        const hookEl = document.getElementById(hookid)
        if (hookEl) {
          hookEl.innerHTML = tmp
          hookEl.querySelector('h1')!.textContent = this.name
        }
      }
    }
  }
}

// デコレーターはクラスが定義された時に実行される
@Logger('log') // ②
@func("<h1>h1タグ</h1>", "app") // ①
class Person {
  name = 'Max'

  constructor() {
    console.log('aaa')
  }
}

const p = new Person()
console.log(p)

// .....
// プロパティデコレーター
function Log(target: any, propetyName: string | Symbol) {
  console.log('Log1')
  console.log(target, propetyName)
}

// アクセサデコレーター
function Log2(target: any, name: string, des: PropertyDescriptor): PropertyDescriptor {
  console.log('Log2')
  console.log(target)
  console.log(name)
  console.log(des)
  return {}
}

// メソッドデコレーター
function Log3(target: any, name: string | Symbol, des: PropertyDescriptor) {
  console.log('Log3')
  console.log(target)
  console.log(name)
  console.log(des)
}

// パラメータデコレーター
function Log4(target: any, name: string | Symbol, position: number) {
  console.log('Log4')
  console.log(target)
  console.log(name)
  console.log(position)
}

class Product {
  @Log
  title: string
  private _price: number

  @Log2
  set price(v: number) {
    if (v > 0) {
      this._price = v
    } else {
      throw new Error('incorrect')
    }
  }

  constructor(t: string, p: number) {
    this.title = t
    this._price = p
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax)
  } 
}

function Autobind(_: any, _2: string, des: PropertyDescriptor) {
  const oriM = des.value
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      // デコレーターをつけたオブジェクト
      const boundFn = oriM.bind(this) // ここが大事！
      return boundFn
    }
  }
  return adjDescriptor
}


class Printer {
  message = 'クリックしました'

  @Autobind
  showMsg() {
    console.log(this.message)
  }

}

const pri = new Printer

const button = document.querySelector('button')!
button.addEventListener('click', pri.showMsg)

// .......

interface ValidatorConfig {
  [prop: string]: {
    [ValidatableProp: string]: string[] //['required'. 'positive']
  }
}

const resisteredValidators: ValidatorConfig = {}

function Required(target: any, propName: string) {
  resisteredValidators[target.constructor.name] = {
    ...resisteredValidators[target.constructor.name],
    [propName]: ['required']
  }
}

function PostiveNumber(target: any, propName: string) {
  resisteredValidators[target.constructor.name] = {
    ...resisteredValidators[target.constructor.name],
    [propName]: ['positive']
  }
}

function validate(obj: any) {
  const objValidatorConfig = resisteredValidators[obj.constructor.name]
  if (!obj) {
    true
  }

  let isValid = true
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case 'required': 
          isValid = isValid && !!obj[prop]
          break
        case 'positive': 
          isValid = isValid && obj[prop] > 0
          break
      }
    }
  }

  return isValid; 
}

class Course {
  @Required
  title: string
  @PostiveNumber
  price: number

  constructor(t: string, p: number) {
    this.title = t
    this.price = p
  }
}

const c = document.querySelector('form')!
c.addEventListener('submit', event => {
  event.preventDefault()
  const titleEL = document.getElementById('title') as HTMLInputElement
  const priceEL = document.getElementById('price') as HTMLInputElement

  const title = titleEL.value
  const price = +priceEL.value

  const createdCourse = new Course(title, price)

  if (!validate(createdCourse)) {
    throw new Error('エラー')
  }
  console.log(createdCourse)
})