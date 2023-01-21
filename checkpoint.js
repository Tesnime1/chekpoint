//1 push just the different elements in the first array
//solution1
function different1(arr1, arr2) {
  var arr3 = [];
  var b;
  for (let i = 0; i < arr1.length; i++) {
    b = true;
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        b = false;
      }
    }
    if (b) {
      arr3.push(arr1[i]);
    }
  }
  return arr3;
}
different1([1, 2], [1, 3]);
//sollution2
function different2(arr1, arr2) {
  var som = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] != arr2[j]) {
        som = arr1[i] + arr2[j];
      }
    }
  }

  return som;
}
different2([1, 2], [1, 3]);
//2
function commonsom(arr1, arr2) {
  var som = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        som = arr1[i] + arr2[j] + som;
      }
    }
  }
  return som;
}
commonsom([2, 4, 3], [1, 2, 7]);
