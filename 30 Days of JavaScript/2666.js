var once = function (fn) {
    called = false;
    let result;

    return function (...args) {
        if (!called) {
            result = fn(...args);
            called = true;
            return result;
        }
        return undefined;
    }
};

let fn = (a, b, c) => (a + b + c)
let onceFn = once(fn)
console.log(onceFn(1, 2, 3));
console.log(onceFn(2, 3, 6));
console.log(onceFn(1, 2, 3));
console.log(onceFn(2, 3, 6));
console.log(onceFn(1, 2, 3));
console.log(onceFn(2, 3, 6));

