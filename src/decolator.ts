import "reflect-metadata";

const KEY = Symbol("count");

function decorator(target: any, props: string) {
  Reflect.defineMetadata(KEY, undefined, target, props);
}

class A {
  @decorator
  a: string = "aaa";
  @decorator
  b?: string = undefined;
  // @decorator
  c: string = "ccc";

  count() {
    let count = 0;
    for (const key of Object.getOwnPropertyNames(this)) {
      if (this[key] === undefined) continue;
      if (Reflect.hasMetadata(KEY, this, key)) count++;
    }
    console.log(count); // 1
  }
}

new A().count();

