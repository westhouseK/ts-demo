// Decorator
export function bind(_: any, _2: string, description: PropertyDescriptor) {
  const origin = description.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      return origin.bind(this);
    },
  };
  return adjDescriptor;
}
