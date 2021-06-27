/**
 * @param {number[]} nums
 * @return {number}
 */
// // 思路：把每个元素保存在一个临时变量里面，然后依次遍历数组 比较数组元素是否有与temp值相等的元素 
var findRepeatNumber = function (nums) {
    let i = 0;
    let temp = nums[i]; //temp用来存储遍历数组时的每一个元素
    let arr = []; //用一个新数组来接受重复的元素
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] === temp) {
            return nums[j];
            // arr.push(nums[j]); //把重复元素保存到一个新数组arr中
            // console.log(arr);
        }
    }
    // console.log(arr);
    // if (arr.length === 0) return null;
    // i++;
    // return arr;
};
let nums = [1, 1, 2, 6, 5, 4, 8, 4, 3];

findRepeatNumber(nums)

// 答案用的哈希表，如果哈希表中没有的数组元素，就把他保存到哈希表里面 有的话直接返回