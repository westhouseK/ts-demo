const names: Array<string> = ['max', 'manuel'] // string[]
console.log(names[0].split('a'))

const pro: Promise<string> = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve('fin!')
  }, 1000)
})

pro.then(data => {
  console.log(data.toString())
})

// generics 交差型
function merge<T extends object, U extends object>(o1: T, o2: U) {
  return Object.assign(o1, o2)
}

// const a = merge<{name: string}, {age: number}>({ name: 'max' }, { age: 20 })
// const a = merge({ name: 'max' }, 20 )
const a = merge({ name: 'max' }, { age: 20 })
console.log(a.name)

interface Lengthy {
  length: number
}

function countAndDescribe<T extends Lengthy>(e: T): [T, string] {
  let text = 'aaa'
  if (e.length > 0) {
    text = 'bbb'
  }
  return [e, text];
}

console.log(countAndDescribe(['ccc', 'ccc']))

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key]
}

extractAndConvert({name: 'max'}, 'name')

class D<T extends string | number | boolean> {
  private data: T[] = []

  addItem(item: T) {
    this.data.push(item)
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1) // -1
  }

  getItem() {
    return [...this.data]
  }
}

const ts = new D<string>()
ts.addItem('a');
ts.addItem('b');
ts.removeItem('b');
console.log(ts.getItem())

const ds = new D<number>()

// const os = new D<object>()
// プリミティブ型のみ
// os.addItem({name: 'a'})
// os.addItem({name: 'b'})
// os.removeItem({name: 'a'})
// console.log(os.getItem())

interface C {
  title: string,
  des: string,
  date: Date
}

// 難しい
function createCGoul(title: string, des: string, date: Date): C {
  let c: Partial<C> = {}
  c.title = title
  c.des = des
  c.date = date
  return c as C
}

const ns: Readonly<string[]> = ['a', 'b']

