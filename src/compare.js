import { Map, is } from "immutable";
const map1 = Map({ a: 1, b: 2, c: 3 })
const map2 = Map({ a: 1, b: 2, c: 3 })

console.log(map1 === map2)
console.log(is(map1, map2));
console.log(map1.equals(map2));
