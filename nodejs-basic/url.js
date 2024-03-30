const url = require ("node:url");

// Ví dụ có một URL, hoặc có thể tạo server rồi lấy url bằng req.url
const adr = 'http://localhost:8080/default.htm?year=2017&month=february';
const q = url.parse(adr, true);

console.log(q);

//muốn lấy gì trên url thì dùng cú pháp này để tách ra lấy