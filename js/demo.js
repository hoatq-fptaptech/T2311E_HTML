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

// var kq = prompt("Bạn bao nhiêu tuổi");// string "18"
// var kq2 = parseInt(kq) +10; // 1810
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
console.log(rd);
// Cho người dùng nhập vào 1 số bất kỳ (0->99)
// sinh ra số ngẫu nhiên và xem họ có trúng giải hay không
// var dd = prompt("Nhập 1 giá trị: ");
// dd = parseInt(dd);
// if(dd == rd){
//     alert("Chúc mừng bạn đã trúng 1 tỷ");
// }else{
//     alert("Hẹn gặp lại bạn vào ngày mai hoặc ở đê");
// }

// tạo ra 1 bộ 23 số (0->99)
// người chơi sẽ chọn 1 số mỗi lần ( tối đa 7 lần chơi) và số tiền đặt 
// cược của ngày hôm đó. (giả sử tỉ lệ là 23đ 1 điểm -> trúng 1 số thì đc 80đ)
// Sau 7 ngày hãy tính số tiền đã bỏ và số tiền thu được

var st = 0;
var dt = 0;
for(var i=1;i<=7;i++){
    var kq = [];
    for(var j=0;j<23;j++){
        var rd = Math.random() * 100;
        rd = parseInt(rd);
        kq.push(rd);
    }
    var lc = prompt(`Nhập số muốn đặt hôm nay (ngày thứ ${i}):`);
    lc = parseInt(lc);
    var td = prompt(`Nhập số tiền muốn đặt của hôm nay(ngày thứ ${i}):`);
    td = parseInt(td);
    st+= td;
    kq.forEach(e=>{
        if(e ==lc){
            dt+= (td/23)*80;
        }
    })
}
alert(`Tổng tiền ban đầu: ${st} và số tiến thu được ${dt}`);

var t = 20;

var str = "Năm nay tôi 20 tuổi";
var str2 = 'Năm nay tôi '+t+' tuổi';
var str3 = `Năm nay tôi ${t} tuổi`;