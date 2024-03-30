//Dùng appendFile : Nối thêm nội dung vào cuối file, nếu file chưa tồn tại thì tạo mới
const fs = require ("node:fs");
fs.appendFile ("log.txt", "Hello content !", function (err) {
   if (err) throw err;
    console.log ("Saved !");
});

//Dùng open: sử dụng tham số thứ hai w để ghi, nếu file không tồn tại thì nó tạo file trống mới.
  fs.open('mynewfile2.txt', 'w', function (err, file) {
     if (err) throw err;
     console.log('Saved!');
  });

//Dùng fs.writeFile() nó sẽ thay thế nội dung file đã tồn tại, nếu không nó tạo file mới và ghi nội dung vào file đó.
    fs.writeFile('mynewfile2.txt', 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Saved!');
});

/*
Sự khác nhau giữa hàm appendFile và write:
- appendfile : ghi nối nội dung vào cuối, dùng để ghi log hằng ngày được nối dữ liệu theo từng ngày
- writefile: ghi chèn đè hết lên toàn bộ nội dung, dùng để thay thế cập nhật nội dung cần thay thế
*/