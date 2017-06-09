import { fromJS } from "immutable";

const obj = {
  1: "one",
  "2": "two",
  data: { name: "beace", color: "blue" },
  arr: [1, 2, 3, 4, 5]
};

console.log(obj[1]);
console.log(obj["1"]);
console.log(obj[2]);
console.log(obj["2"]);

const map = fromJS(obj);
console.log(map.get(1));
console.log(map.get("1"));
console.log(map.get(2));
console.log(map.get("2"));


console.log(map.getIn(['data', 'color']))
const map2 = map.updateIn(['data','color'], value => 'blue')
const map3 = map.update('arr', value => value.map(item => item * 2))
console.log(map2)
console.log(map3)
console.log(map3.toJS())
