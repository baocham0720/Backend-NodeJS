const path = require('node:path');

const filename = path.basename('/Users/Refsnes/demo_path.js');
console.log(filename);

//Liên quan đến đường dẫn file, dùng để dẫn file
/*
basename(): Trả về phần cuối cùng của một đường dẫn.
delimiter: Trả về dấu phân cách được chỉ định cho nền tảng.
dirname(): Trả về các thư mục của một đường dẫn.
extname(): Trả về phần mở rộng tệp của một đường dẫn.
format(): Định dạng một đối tượng đường dẫn thành một chuỗi đường dẫn.
isAbsolute(): Trả về true nếu một đường dẫn là đường dẫn tuyệt đối, ngược lại trả về false.
join(): Kết hợp các đường dẫn được chỉ định thành một.
normalize(): Chuẩn hóa đường dẫn được chỉ định.
parse(): Định dạng một chuỗi đường dẫn thành một đối tượng đường dẫn.
posix: Trả về một đối tượng chứa các thuộc tính và phương thức cụ thể POSIX.
relative(): Trả về đường dẫn tương đối từ một đường dẫn được chỉ định đến một đường dẫn khác được chỉ định.
resolve(): Giải quyết các đường dẫn được chỉ định thành một đường dẫn tuyệt đối.
sep: Trả về bộ phân đoạn được chỉ định cho nền tảng.
win32: Trả về một đối tượng chứa các thuộc tính và phương thức cụ thể cho Windows.
*/