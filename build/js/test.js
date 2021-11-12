"use strict";
function* g(n) {
    while (n < 100) {
        yield n;
        n++;
    }
}
for (const n of g(10))
    console.log(n);
//# sourceMappingURL=test.js.map