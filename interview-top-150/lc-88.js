nums1 = [2,0];
m = 1;
nums2 = [1];
n = 1;
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    
    if(n === 0)
    {
        return;
    }
    if(m === 0)
    {
        for(let i = 0; i < n; i++)
        {
            nums1[i] = nums2[i];
        }
        return;
    }
    counter = m+n-1;
    i = m-1;
    j = n-1;
    while(i >= 0 && j >= 0)
    {
        if(nums1[i] < nums2[j])
        {
            nums1[counter] = nums2[j];
            j--;
        }
        else
        {
            nums1[counter] = nums1[i];
            i--;
        }
        counter--;
    }
    while(j >= 0)
    {
        nums1[counter] = nums2[j];
        j--;
        counter--;
    }
};

merge(nums1, m, nums2, n);

console.log(nums1);