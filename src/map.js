import { Map } from "immutable";

const map1 = Map({ a: 1, b: 2, c: 3 });
const map2 = map1.set("b", 50);
console.log(map1.get("b"));
console.log(map2.get("b"));
console.log(map1);
console.log(map2);

const mapMap1 = map1.map((value, key) => value * value);
console.log(mapMap1);

const map3 = {e: 4, f: 5, g: 6};
const map4 = map1.merge(map3);
console.log(map4);
