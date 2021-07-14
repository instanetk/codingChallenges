function getSecondLargest(nums) {
  // Complete the function
  nums.sort(function (a, b) {
    return b - a;
  });
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      i++;
      console.log(nums[i + 1]);
      return nums[i + 1];
    } else {
      console.log(nums[i + 1]);
      return nums[i + 1];
    }
  }
}

getSecondLargest([2, 3, 6, 6, 5]);
getSecondLargest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
