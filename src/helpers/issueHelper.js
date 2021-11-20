const issueHelper = {
  largestByObjKey(arr, key) {
    let max = 0;
    arr.forEach(a => {
      if (a[key] > max) {
        max = a[key];
      }
    });
    return max;
  }
};

export default issueHelper;
