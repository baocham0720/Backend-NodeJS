function first() {
    setTimeout (function(){ //mô phỏng delay code
        console.log ("Một");
    }, 5000);
    
}
function second(){
    console.log ("Hai");
}
first();
second(); 

/*
Mặc dù chúng ta đã gọi hàm first() trước tiên, nhưng lại nhận được kết quả sau hàm second().

Nó không phải là JavaScript đã không thực hiện các hàm của chúng ta theo thứ tự mà chúng ta muốn, mà là JavaScript đã không đợi phản hồi từ hàm first() trước khi chuyển sang thực hiện second().

Vậy tại sao mình lại cho bạn thấy điều này?

Bởi vì bạn có thể chỉ cần gọi một hàm khác và hy vọng chúng thực hiện theo đúng thứ tự.

Callback là một cách để đảm bảo code nhất định không thực thi cho đến khi code khác thực hiện xong
*/

function doHomework(subject, callback) {
    console.log(`Bắt đầu làm bài tập ${subject}.`);
    callback();
}
function cb(){
    console.log ("Làm bài tập xong");
}
doHomework("Toán", cb);

//viết gọn hơn :
/* doHomework ("Toán", ()=>{
    console.log("Làm bài tập xong!");
});
*/

//tham số những hàm chứa trong function doHomework() và đối số là những hàm được view ra từ doHomework()

//hàm tính tổng có dùng Error-First:
const sum = (a,b) =>{
    if (typeof a === "string" || typeof b ==="string"){
        throw new Error ("Đối số không hợp lệ");
    }
    return a + b;
}
const t = sum (2,4);
console.log (t);
