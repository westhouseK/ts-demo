export function bind(_, _2, description) {
    const origin = description.value;
    const adjDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            return origin.bind(this);
        },
    };
    return adjDescriptor;
}
//# sourceMappingURL=decorator.js.map