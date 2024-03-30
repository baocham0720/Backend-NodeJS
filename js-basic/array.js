//ES6

let arrs = [1, 2, 3, 4, 5, 6, 7];
let arrss = [8, 9, 10];

//Bổ sung phần tử mới vào mảng
arrs = [...arrs, 8];
console.log (arrs);

//Truy cập đến 1 phần tử của mảng - dấu , này giữ lại ghế ngồi cho phần tử không trích xuất
const [, , three, ...agrs] = arrs;  //Dồn hết giá trị vào một biến bất kì thì dùng ...agrs
console.log (agrs);

//Khi gộp 2 mảng lại với nhau :
const newArr = [...arrs, ...arrss]; // ... là copy tất cả phần tử đang có của mảng đó
console.log (newArr);
