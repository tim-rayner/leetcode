// The starting point of my Leetcode journey... how did I do?

// Runtime: 32ms
// Memory: 56.5MB
function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let y = i + 1; y < nums.length; y++) {
      if (nums[i] + nums[y] === target) {
        return [i, y];
      }
    }
  }
  return [];
}
