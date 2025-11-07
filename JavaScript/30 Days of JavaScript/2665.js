var createCounter = function (init) {
    return {
        increment: function () {
            return ++init
        },
        reset: function () {
            return init
        },
        decrement: function () {
            return --init
        }
    }
}

const counter = createCounter(5)
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());


