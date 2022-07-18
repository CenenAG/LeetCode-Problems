/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i]===nums[j]){
                return true
            }
        } 
    }
    return false
};

const array = [1,2,3,4,4,5];
console.log(containsDuplicate(array))