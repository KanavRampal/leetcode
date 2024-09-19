nums = [1,2,3];
k = 4;

var rotate = function(nums, k) {
    if(k>nums.length)
        {
            k = Math.floor(k%nums.length);
            for(let i=0; i<k; i++) 
            {
                nums.unshift(nums.pop());
            }
        }
    else 
        {
            let firstPart = nums.slice(0, nums.length - k);
            let secondPart = nums.slice(nums.length - k, nums.length);
            nums.splice(0, nums.length, ...secondPart, ...firstPart);
        }
    return nums;
}

console.log(rotate(nums, k));