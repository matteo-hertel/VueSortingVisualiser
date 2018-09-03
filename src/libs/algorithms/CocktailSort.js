const cocktailSort = arr => {
  function swap(arr, a, b) {
    if (a === b) return arr;

    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    return arr;
  }

  var i,
    left = 0,
    right = arr.length - 1;

  while (left < right) {
    for (i = left; i < right; i++)
      if (arr[i] > arr[i + 1]) {
        arr = swap(arr, i, i + 1);
      }

    right--;
    for (i = right; i > left; i--)
      if (arr[i - 1] > arr[i]) {
        arr = swap(arr, i - 1, i);
      }

    left++;
  }
  return snapshots;
};
