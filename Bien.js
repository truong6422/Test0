console.log('Test thoi co gi dau')
var a, b;
             
// Lấy giá trị từ ngươi dùng
a = prompt("Nhập số a");
b = prompt("Nhập số b");
 
// Đổi sang kiểu Number
a = parseInt(a);
b = parseInt(b);
 
// In kết quả ra trình duyệt
document.write("Tổng hai số " + a + " và " + b + " là " + (a + b) + "<br/>");
document.write("Hiệu hai số " + a + " và " + b + " là " + (a - b) + "<br/>");
document.write("Tích hai số " + a + " và " + b + " là " + (a * b) + "<br/>");
document.write("Thương hai số " + a + " và " + b + " là " + (a / b) + "<br/>");
document.write("Phần dư khi chia hai số " + a + " và " + b + " là " + (a % b) + "<br/>");