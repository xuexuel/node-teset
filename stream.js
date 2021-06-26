const fs = require("fs");
fs.require("fs");
// 流可以将大文件拆分读取
// 会把数据分成64kb的小文件传输 
let rs = fs.createReadStream("1.txt");
rs.on("data", chunk => {
  console.log(chunk.toString());
})