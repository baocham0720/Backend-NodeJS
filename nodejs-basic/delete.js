const fs = require ("node:fs");

fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});

//sử dụng fs.unlink() để xoá