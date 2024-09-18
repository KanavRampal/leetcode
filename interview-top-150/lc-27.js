let nums = [0,1,2,2,3,0,4,2];
let val = 2;
console.log(nums);
function removeElement(nums, val) {
    let orignalLength = nums.length;
    let filtered = nums.filter((num) => num !== val);
    console.log(filtered);
    nums.splice(0, nums.length, ...filtered);
    return orignalLength - nums.length;
}
console.log(removeElement(nums, val));
console.log(nums);