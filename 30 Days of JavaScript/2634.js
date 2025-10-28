var filter = function (arr, fn) {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            result.push(arr[i])
        }
    }
    return result
}
const arr = [10, 20, 30, 40]
const fn = (num) => num > 10
console.log(filter(arr, fn));
 