import { Seq, Map } from "immutable";

const obj = { a: 1, b: 2, c: 3 };

const seq = Seq(obj).map(x => x * x);

console.log(typeof seq);

console.log(seq.toObject());

console.time("oddSquares");
const oddSquares = Seq([1, 2, 3, 4, 5, 6]).filter(x => x % 2).map(x => x * x);
console.log(oddSquares);
console.timeEnd("oddSquares"); //oddSquares: 1.021ms

console.time("oddArray");
const oddArray = [1, 2, 3, 4, 5, 6].filter(x => x % 2).map(x => x * x);
console.log(oddArray);
console.timeEnd("oddArray"); //oddArray: 0.543ms

const map2seq = Map({a: 1, b: 2, c: 3}).toSeq()
console.log(map2seq.flip().map(key => key.toUpperCase()).flip().toObject())
