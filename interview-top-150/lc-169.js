nums = [2,2,1,1,1,2,2];

var majorityElement = function(nums) {
    let countMap = new Map();
    let majorityCount = Math.floor(nums.length / 2);

    // Count occurrences of each element
    for (let num of nums) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    // Find the majority element
    for (let [num, count] of countMap) {
        if (count > majorityCount) {
            return num;
        }
    }
};