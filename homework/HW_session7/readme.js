// let n=a;
// if (n%2 == 0) {
//     document.write (n,'la so chan');
// } else {
//     document.write (n,'la so le');

// }
function b1() {
  console.log("b1");
  let elm = document.getElementById("n");
  console.log(typeof parseInt(elm.value));

  if (parseInt(elm.value) % 2 == 0) {
    document.write("n la so chan");
  } else {
    document.write("n la so le");
  }
}
// b1()

// index=1 --> so * = 1
// index=2 --> so * = 2
// index=3 --> so * = 3 = index

function b3_1() {
  let h = prompt("nhap so h");

  for (let i = 1; i <= h; i++) {
    //ve sao cua 1 hang
    let str = "";
    for (let star = 0; star < i; star++) {
      str += "*";
    } //in ra * va de xuong dong
    console.log(str);
  }
}
// b3_1();
//ve tam giac deu:kiem soat sao va dau cach h=5
//    *           -> index = 1 : cach = 4 : sao = 1
//   ***          -> index = 2 : cach = 3 : sao = 3
//  *****         -> index = 3 : cach = 2 : sao = 5
// *******        -> index = 4 : cach = 1 : sao = 7
//*********       -> index = 5 : cach = 0 : sao = 9
//cach tinh:
//cach = h - index
//sao = 2xindex - 1
function b3_2() {
  let h = prompt("nhap so h");

  for (let i = 1; i <= h; i++) {
    let str = "";
    for (let star = 0; star < i; star++) {
      str += "*";
    }
    console.log(str);
  }
}
b3_2();
