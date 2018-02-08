import * as R from "ramda";

const arr1 = [1, 3, 1, 3, 1, 3, 1, 3];
const arr2 = [1, 2, 9, 3, 9, 3, 9, 3];

const arr3 = R.union(arr1, arr2);

console.log("------------------------------------");
console.log(arr3);
console.log("------------------------------------");
