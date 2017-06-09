import { List } from "immutable";

const list1 = List([1, 2, 3]);
const list2 = list1.withMutations(list => {
  list.push(4).push(5).push(6);
});

console.log(list1.size);
console.log(list2.size);
