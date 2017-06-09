import { Range } from "immutable";

console.log(Range());
console.log(Range(1, 10).toJS());
console.log(Range(10, 1).toJS());
console.log(Range(1, 10, 5).toJS());
console.log(Range(10, 1, 5).toJS());
console.log(Range(10, 10, 5).toJS());
//console.log(Range(10, 10, 0).toJS()); ERROR
