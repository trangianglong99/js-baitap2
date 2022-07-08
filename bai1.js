//bài 1

/**
 * Mô hình 3 khối
 * INPUT:Nhập vào a,b,c khai báo temp
 *
 * PROCESS:điều kiện (a>b),(b>c),(a>c)
 *
 * OUTPUT:xuất ra màn hình thứ tự tăng dần của a,b,c
 *
 */

var a = prompt("Nhập số a :"); //nhập vào từ bàn phím
document.write("a = " + a + "<br>"); //in ra màn hình
var b = prompt("Nhập số b :");
document.write("b = " + b + "<br>");
var c = prompt("Nhập số c :");
document.write("c = " + c + "<br>");
var temp; //khai báo biến tạm
//điều kiện
if (a > b) {
  temp = a;
  a = b;
  b = temp;
}
if (a > c) {
  temp = a;
  a = c;
  c = temp;
}
if (b > c) {
  temp = b;
  b = c;
  c = temp;
}
document.write(
  "Sắp xếp theo thứ tự tăng dần :" + a + "\t" + b + "\t" + c + "<br />"
);

//bài2

/**
 * Mô hình 3 khối
 * INPUT:Nhập vào a,b,c,d
 *
 * PROCESS:khai báo hàm function ,cho người dùng nhập vào prompt từ bàn phím
 * điều kiện
 *
 * OUTPUT:xuất ra màn hình chào bố , chào mẹ , chào anh , chào em
 *
 */

var a = "dad";
var b = "mom";
var c = "brother";
var d = "sister";

function hello() {
  var answer = prompt("Ai đang sử dụng máy"); //nhập từ bàn phím
  //điều kiện
  if (answer === a) {
    alert("hello daddy");
  } else if (answer === b) {
    alert("hello mommy");
  } else if (answer === c) {
    alert("hello brother");
  } else if (answer === d) {
    alert("hello sister");
  } else {
    alert("Không có ai trong danh sách");
  }
}
hello();

//bài 3
/**
 * Mô hình 3 khối
 *
 * INPUT:nhập số chẵn lẽ
 *
 * PROCESS:điều kiện
 *
 * OUTPUT:xuất ra màn hình số chẵn hoặc lẽ
 *
 */

function soChanLe() {
  var a = 1;
  var b = 2;
  var c = 3;
  var sochan = 0;
  //điều kiện
  if (a % 2 === 0) {
    sochan++;
  }
  if (b % 2 === 0) {
    sochan++;
  }
  if (c % 2 === 0) {
    sochan++;
  }
  var sole = 3 - sochan;
  console.log("số lẽ >> " + sole);
  console.log("số chẵn >> " + sochan);
  return sochan;
}
soChanLe();

//bài 4

/**
 * Mô hình 3 khối
 *
 * INPUT:nhập 3 cạnh của tam giác
 *
 * PROCESS:điều kiện
 *
 * OUTPUT:xuất ra màn hình tam giác vuông, đều
 *
 */

function dinhNghiaTamGiac() {
  var a = 3;
  var b = 3;
  var c = 3;
  var tamGiac = " ";
  //điều kiện
  if (a === b && a === c) {
    tamGiac = "tam giác đều";
  } else if ((a === b && a !== c) || (b === c && b !== a)) {
    tamGiac = "tam giác cân";
  } else if (
    c * c === a * a + b * b ||
    a * a === b * b + c * c ||
    b * b === a * a + c * c
  ) {
    tamGiac = "tam giác vuông";
  } else {
    tamGiac = "tam giác thường";
  }
  console.log(tamGiac);
}
dinhNghiaTamGiac();

//bài 1 nâng cao

/**
 * Mô hình 3 khối
 *
 * INPUT:nhập vào ngày, tháng , năm
 *
 * PROCESS:điều kiện
 *
 * OUTPUT:xuất ra ngày trước, ngày sau
 *
 */

var ngay = 28;
var thang = 2;
var nam = 1;
var ngayNext = 0;
var thangNext = 0;
var namNext = 0;
var ngayprew = 0;
var thangprew = 0;
var namprew = 0;
//điều kiện
if (ngay === 31) {
  if (thang === 12) {
    ngay = 1;
    thang = 1;
    nam++;
  } else if (
    thang === 1 ||
    thang === 3 ||
    thang === 5 ||
    thang === 7 ||
    thang === 8 ||
    thang === 10
  ) {
    ngayNext = 1;
    thangNext = thang++;
    namNext = nam;
  }
} else if (ngay === 28) {
  if (thang === 2) {
    ngayNext = 1;
    thangNext = thang++;
    namNext = nam;
  }
} else if (ngay === 30) {
  if (thang === 4 || thang === 6 || thang === 9 || thang === 11) {
    ngayNext = 1;
    thangNext++;
    namNext = nam;
  }
} else {
  ngayNext++;
  thangNext = thang++;
  namNext = nam;
}

if (ngay === 1) {
  if (thang === 1) {
    ngayprew = 31;
    thangprew = 12;
    namprew = nam--;
  } else if (thang === 3) {
    ngayprew = 28;
    thangprew = thang--;
    namprew = nam;
  } else {
    ngayprew = ngay--;
    thangprew = thang--;
    namprew = nam;
  }
} else {
  ngayprew = ngay - 1;
  thangprew = thang;
  namprew = nam;
}
console.log(ngayprew); //xuất ra ngày trước
console.log(ngayNext); //xuất ra ngày sau

//bài 2 nâng cao

/**
 * Mô hình 3 khối
 *
 * INPUT:nhập vào ngày, tháng
 *
 * PROCESS:điều kiện,swich case
 *
 * OUTPUT:xuất ra màn hình tháng có bao nhiêu ngày
 *
 */

var month = 1; //khai báo tháng
var day = 0; //khai báo ngày
var year = 0; //khai báo năm
// điều kiện
if (month === 1)
  //xét điều kiện tháng
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      day = 31; //những tháng có 31 ngày
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      day = 30; //những tháng có 30 ngày
    case 2:
      //điều kiện năm nhuận
      if (year % 4 === 0) {
        day = 29;
      } else {
        day = 28;
      }
  }

//bài 3

/**
 * Mô hình 3 khối
 *
 * INPUT:nhập vào số nguyên có 3 chữ số
 *
 * PROCESS:điều kiện để đọc
 *
 * OUTPUT:xuất ra màn hình cách đọc
 *
 */

var a = 123; //khai báo biến a = số nguyên có 3 số
var hundred; //khai báo biến hàng trăm
hundred = Math.floor(a / 100); //tách biến hàng trăm

var unit; //khai báo biến hàng đơn vị
unit = a % 10; //tách biến hàng đơn vị

var tens; //khai báo biến hàng chục
tens = (a - hundred * 100 - unit) / 10; //tách biến hàng chục
var callUnit = ""; //khai báo biến cách đọc hàng đơn vị
switch (unit) {
  case 0:
    callUnit = "không";
    break;
  case 1:
    callUnit = "một";
    break;
  case 2:
    callUnit = "hai";
    break;
  case 3:
    callUnit = "ba";
    break;
  case 4:
    callUnit = "bốn";
    break;
  case 5:
    callUnit = "năm";
    break;
  case 6:
    callUnit = "sáu";
    break;
  case 7:
    callUnit = "bảy";
    break;
  case 8:
    callUnit = "tám";
    break;
  case 9:
    callUnit = "chín";
    break;
}

var callTens = ""; //khai báo biến cách đọc hàng chục
switch (tens) {
  case 1:
    callTens = "mười";
    break;
  case 2:
    callTens = "hai mươi";
    break;
  case 3:
    callTens = "ba mươi";
    break;
  case 4:
    callTens = "bốn mươi";
    break;
  case 5:
    callTens = "năm mươi";
    break;
  case 6:
    callTens = "sáu mươi";
    break;
  case 7:
    callTens = "bảy mươi";
    break;
  case 8:
    callTens = "tám mươi";
    break;
  case 9:
    callTens = "chín mươi";
    break;
  //điều kiện nếu bằng 0
  case 0:
    if (unit !== 0) {
      callTens = "lẻ";
      break;
    } else {
      callTens = "";
    }
}

var callHundred = ""; //khai báo biến cách đọc hàng trăm
switch (hundred) {
  case 1:
    callHundred = "một trăm";
    break;
  case 2:
    callHundred = "hai trăm";
    break;
  case 3:
    callHundred = "ba trăm";
    break;
  case 4:
    callHundred = "bốn trăm";
    break;
  case 5:
    callHundred = "năm trăm";
    break;
  case 6:
    callHundred = "sáu trăm";
    break;
  case 7:
    callHundred = "bảy trăm";
    break;
  case 8:
    callHundred = "tám trăm";
    break;
  case 9:
    callHundred = "chín trăm";
    break;
}

var callA = callHundred + callTens + callUnit; //output
console.log(callA); //xuất ra màn hình

//bài 4 nâng cao

/**
 * Mô hình 3 khối
 *
 * INPUT:nhập vào tọa độ nhà của 3 sinh viên
 *
 * PROCESS:điều kiện
 *
 * OUTPUT:xuất ra màn hình sinh viên xa trường nhất
 *
 */

var sinhVien1 = "Long";
var sinhVien2 = "Thịnh";
var sinhVien3 = "Cường";

var xsinhVien1 = 12;
var ysinhVien1 = 20;

var xsinhVien2 = 20;
var ysinhVien2 = 10;

var xsinhVien3 = 6;
var ysinhVien3 = 30;

var xSchool = 40;
var ySchool = 35;

var distanceStudentOne = Math.sqrt(
  Math.pow((xSchool - xsinhVien1),2) + Math.pow((ySchool - ysinhVien1),2)
);
  

var distanceStudentTwo = Math.sqrt(
  Math.pow((xSchool - xsinhVien2),2) + Math.pow((ySchool - ysinhVien2),2)
);

var distanceStudentThree = Math.sqrt(
  Math.pow((xSchool - xsinhVien3),2) + Math.pow((ySchool - ysinhVien3),2)
);

var distance = "";
if (
  distanceStudentOne > distanceStudentTwo &&
  distanceStudentOne > distanceStudentThree
) {
  distance = sinhVien1;
} else if (
  distanceStudentTwo > distanceStudentOne &&
  distanceStudentTwo > distanceStudentThree
) {
  distance = sinhVien2;
} else
  distanceStudentThree > distanceStudentOne &&
    distanceStudentThree > distanceStudentTwo;
{
  distance = sinhVien3;
}

console.log(distance);
