const snapSortingArray = (arr, sortingFn) => {
  const snap = [];
  const snapshotArray = (target, property, value) => {
    target[property] = value;
    snap.push([...target]);
    return true;
  };
  var p = new Proxy(arr, {set: snapshotArray});
  sortingFn(p);
  return snap;
};

export default snapSortingArray;
