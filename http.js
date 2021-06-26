// 引入模块
const http = require("http");
const server = http.createServer((req, res) => {
  res.write("hello world111");
  res.end();
})
server.listen(3000);