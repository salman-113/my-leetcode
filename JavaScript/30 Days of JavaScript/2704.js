function expect(val) {
    return {
        toBe: function (otherVal) {
            if (val === otherVal) return true;
            else throw new Error("not equal")
        },
        notToBe: function (otherVal) {
            if (val !== otherVal) return true;
            else throw new Error("Equal")
        }
    }
}

console.log(expect(5).notToBe(6));
