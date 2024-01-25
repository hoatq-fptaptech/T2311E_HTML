// đây là ngôn ngữ logic
var x; // x ko có kiểu dữ liệu  = null
x  = 10;// x : Number
var y = "hello world!"; // String
var t = true; // boolean

// khai báo biến kiểu mới
let n = 20;

var z = x + 10; // 20
z = "xin chao";
var z1 = x + y; // "10hello world"
var z2 = y+y; // "hello worldhello world"
var z3 = "20" + 10;// "2010"
console.log(x+y+"20"+10);// "10hello world2010"


if(x>=10){

}else{

}

for(var i=0;i<10;i++){
    console.log("i="+i);
}

var arr = [];
arr[0] = 2;
arr[1] = "abc";

arr.push(135); // arr[2] = 135;
arr.push("hello"); // arr[3] = "hello"
console.log("Size of arr: "+arr.length);

for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}

arr.forEach(e=>{
    console.log(e);
})

function tinh_tong(a,b){
    // thích làm gì thì làm
    // return a+b;
    console.log(a+b);
}
tinh_tong(5,7);
tinh_tong(5,"ABC");

// alert("Yêu cầu phải trên 18 tuổi"); // void

// var tl = confirm("Bạn chắc chắn chưa?"); // boolean
// if(tl){
//     alert("Người dùng đã chắc chắn với câu trả lời");
// }else{
//     alert("Người dùng cần tìm hiểu thêm");
// }

var kq = prompt("Bạn bao nhiêu tuổi");// string "18"
var kq2 = parseInt(kq) +10; // 1810
/*
    "18" => 18
    "18a" => 18
    "18a2"=> 18
    "a18"=> NaN ( not a number)
*/
// alert("Sau 10 năm, bạn đã "+kq2+" tuổi");

var rd = Math.random(); // 0<rd<1 0.00291291923
rd = rd * 100; // 0.01244 -> 1.244
rd = parseInt(rd); 
// Cho người dùng nhập vào 1 số bất kỳ (0->99)
// sinh ra số ngẫu nhiên và xem họ có trúng giải hay không
