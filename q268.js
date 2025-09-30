var missingNumber = function (nums) {
    var n = nums.length;
    var expectedSum = (n * (n + 1)) / 2;
    var sum = nums.reduce((a, b) => a + b);
    return expectedSum - sum;
};

console.log(missingNumber([3, 0, 1]));