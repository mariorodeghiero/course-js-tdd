import * as R from "ramda";
import sum from "./utils";
import { sub, multiplicacao, div } from "./utils";

const arr1 = [1, 3, 1, 3, 1, 3, 1, 3];
const arr2 = [1, 2, 9, 3, 9, 3, 9, 3];

const arr3 = R.union(arr1, arr2);
const arr4 = R.uniq(arr1);

console.log("------------------------------------");
console.log(arr3);
console.log(arr4);
console.log(sum(2, 4));
console.log(sub(2, 4));
console.log(multiplicacao(2, 4));
console.log(div(2, 4));
console.log("------------------------------------");
