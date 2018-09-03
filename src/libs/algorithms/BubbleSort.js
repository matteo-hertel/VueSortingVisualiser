const bubbleSort = nums => {
  const snapshots = [];
  const snapshot = array => snapshots.push(Array.from(array));

  do {
    var swapped = false;
    for (var i = 0; i < nums.length; i++) {
      snapshot(nums);
      if (nums[i] > nums[i + 1]) {
        var temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  snapshot(nums);
  return snapshots;
};

export default bubbleSort;
