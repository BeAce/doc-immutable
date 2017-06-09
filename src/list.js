import { List } from "immutable";

const list1 = List([1, 2]);
const list2 = list1.push(3, 4, 5);
const list3 = list1.unshift(0);
const list4 = list1.concat(list2, list3);

console.log(list1);
console.log(list1.size);
console.log(list2);
console.log(list2.size);
console.log(list3);
console.log(list3.size);
console.log(list4);
console.log(list4.size);
console.log(list4.get(0) === 1);
