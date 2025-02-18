let nums = [3, 1, 4, 6, 5];
const target = 9;

const findTwoPairs = (nums, target) => {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement) && Math.abs(map.get(complement) - i) > 1) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
};

console.log(findTwoPairs(nums, target));