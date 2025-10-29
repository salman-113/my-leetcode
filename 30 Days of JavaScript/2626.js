var reduce = function (nums, fn, init) {
    let acc = init;
    for (let i = 0; i < nums.length; i++) {
        acc = fn(acc, nums[i]);
    }
    return acc;
};

const nums1 = [1, 2, 3, 4];
const fn1 = (acc, curr) => acc + curr;
const init1 = 0;
console.log(reduce(nums1, fn1, init1));