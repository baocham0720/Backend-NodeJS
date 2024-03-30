let user = { id: 1, name: "softech", password: "123456", childs: { id:1}};
let users = {gender : "male"};
//Truy cập vào giá trị của phần tử trong Object
const {name} = user;
console.log(name);

//Giữ lại tất cả các trường nhưng loại bỏ password
const {password, ...resulfs} = user;
console.log (resulfs); //dùng resulfs của ES6 để loại bỏ nhanh

//Thêm phần tử vào object
user = {...user, email: "softech@gamil.com"};
console.log (user);

//Thay đổi giá trị của phần tử trong object
user = {...user, password: "123456@"};
console.log (user);

//Thay đổi giá trị của sub object
user = {...user, childs: {...user.childs, id:2} };
console.log (user);

//Gộp 2 object lại với nhau
const newObj = {...user, ...users};
console.log (newObj);
