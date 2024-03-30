const fs = require('node:fs');

fs.rename('log.txt', 'logs.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});

//Rename "mynewfile.txt" to "myrenamedfile.txt":
//tham số thứ 1 là tên cũ, tham số thứ 2 là tên mới