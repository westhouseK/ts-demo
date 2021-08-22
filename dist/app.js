"use strict";
const button = document.querySelector('button');
function add(n1, n2) {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
}
function clickHandler(mes) {
    console.log('click!' + mes);
    console.log('aaa');
}
button.addEventListener('click', clickHandler.bind(null, ' OK'));
//# sourceMappingURL=app.js.map