/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    nums.sort();
    for (let index = 0; index < array.length; index++) {
        if (nums[index]===nums[index+1]) {return true};
    }
    return false
};

const array = [9,8,87,6,3,12,74,1,2,5];
console.log(array);
console.log(containsDuplicate(array))