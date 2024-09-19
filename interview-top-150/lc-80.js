nums = [1,1,1,2,2,3];

var removeDuplicates = function(nums) {
    let lastScanned = null;
    let lastScannedCount = 0;
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if(lastScanned !== nums[i]) {
            lastScanned = nums[i];
            lastScannedCount = 1;
        } 
        else {
            lastScannedCount++;
        }

        if(lastScannedCount > 2) {
            continue;
        }
        nums[k] = nums[i];
        k++;
    }
    return k;
};

console.log(nums);
console.log(removeDuplicates(nums));
