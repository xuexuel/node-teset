// 文件操作
const fs = require('fs');
// 增删改查
// 1、文件操作    2、目录操作
// 文件操作
// fs.writeFile("1.txt", "我是写入的文字", function (err) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log("写入成功");
// })

// flag：a:追加写入   w:写入  r:读取 
// fs.writeFile("1.txt", "这是我追加的文字", { flag: "a" }, function (err) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log("写入成功");
// })

// 文件读取
// fs.readFile("1.txt", "utf8", (err, data) => {
//   if (err) {
//     return console.log(err);
//   }
//   console.log(data);
// })
// fs.readFile("1.txt", (err, data) => {
//   if (err) {
//     return console.log(err);
//   }
//   console.log(data.toString());
// })

// 所有文件操作 ，没有加 sync都是异步操作，否则是同步 
// 修改；（修改名称）
// fs.rename("1.txt","2.txt",err=>{
//   if(err){
//     return console.log(err);
//   }
//   console.log("修改成功");
// })
// 删除
// fs.unlink("2.txt",err=>{
//   if(err){
//     return console.log(err);
//   }
//   console.log("删除成功");
// })
// 复制：先读取 ，再写入
// fs.copyFile("index.html","myindex.html",err=>{
//   if(err){
//     return console.log(err);
//   }
//   console.log("复制成功");
// })

// 目录操作
// 创建目录
// fs.mkdir("11",err=>{
//   if(err){
//     return console.log(err);
//   }
//   console.log("创建成功");
// })

// 修改目录名称
// fs.rename("11", "22", err => {
//   if (err) {
//     return console.log(err);
//   }
//   console.log("修改成功");
// })

// 读取目录
// fs.readdir("22", (err, data) => {
//   if (err) {
//     return console.log(err);
//   }
//   console.log(data);
// })
// 删除目录（空文件夹 /目录）
// fs.rmdir("22", err => {
//   if (err) {
//     return console.log(err);
//   }
//   console.log("删除成功");
// })
// 判断文件或者目录是否存在
// fs.exists("22.txt", exists => {
//   console.log(exists);
// })

// 获取 文件或目录的详细信息
// fs.stat("index.html", (err, stat) => {
//   if (err) {
//     return console.log(err);
//   }
//   console.log(stat);
//   // 判断文件是否是文件
//   let res = stat.isFile();
//   // 是否是一个文件夹
//   let res = stat.isDirectory();
//   console.log(res);
// })

// 删除非空文件夹
// 先把目录里面的文件删除，然后删除空目录
function removeDir(path) {
  let data = fs.readdirSync(path);
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    let url = path + "/" + item;
    let stat = fs.statSync(url);
    if (stat.isDirectory()) {
      // 目录，继续查找
      removeDir(url);
    } else {
      // 文件，删除
      fs.unlinkSync(url);
    }
  }
  // 删除空目录
  fs.rmdirSync(path);
}