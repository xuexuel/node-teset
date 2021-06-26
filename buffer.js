

const { StringDecoder } = require("string_decoder");


// buffer创建
// new Buffer()  不需要new创建
let buffer1 = Buffer.alloc(10);
console.log(buffer1);
let buffer2 = Buffer.from("大家好");
console.log(buffer2);
let buffer3 = Buffer.concat([buffer1, buffer2]);
console.log(buffer3);

let decoder = new StringDecoder();
let res1 = decoder.write(buffer1);
let res2 = decoder.write(buffer2);
console.log(res1 + res2);