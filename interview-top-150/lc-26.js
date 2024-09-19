nums = [1,1,2];

var removeDuplicates = function(nums) {
    let k = 0;
    lastScanned = null;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== lastScanned) {
            nums[k] = nums[i];
            k++;
        }
        lastScanned = nums[i];
    }
    return k;
};

let k = removeDuplicates(nums);
console.log(k);
console.log(nums.slice(0, k));