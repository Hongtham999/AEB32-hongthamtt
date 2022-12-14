function bt1() {
  console.log("bt1");
  let x = prompt("so nguyen x");
  console.log(x * 2);
}
// bt1()
function bt2() {
  let numberMin = prompt("so a");
  let b = prompt("so b");
  let c = prompt("so c");
  let d = prompt("so d");

  // console.log(a,b,c,d);

  //hoac
  // let input = promt ('nhap cac so tu nhien cach nhau boi dau ',')
  // console.log(input, typeof input);
  /**let ar = input.split(',')
   * console.log (ar[0])
   * console.log (ar[1])
   * console.log (ar[2])
   * console.log (ar[3])
   */
  /**
   *
   */

  // let numberMin = a;
  if (parseInt(numberMin) > parseInt(b)) {
    numberMin = b;
  }
  if (parseInt(numberMin) > parseInt(c)) {
    numberMin = c;
  }
  if (parseInt(numberMin) > parseInt(d)) {
    numberMin = d;
  }

  console.log(numberMin);
}
// bt2()

function bt3() {
  /**
   * n = 1 -> 0 --> (n-1)/2 = 0
   * n = 2 -> 0.5 --> (n-1)/2 = 0
   * n = 3 -> 1 --> (n-1)/2 = 1
   * n = 4 -> 1.5 --> (n-1)/2 = 1
   * n = 5 -> 2 --> (n-1)/2 = 2
   * n = 6 -> 2.5 --> (n-1)/2 = 2
   * res la phan nguyen duong cua (n-1)/2
   * */

  console.log("bt3");
  let n = prompt("nhap so nguyen n");
  console.log(Math.floor((n - 1) / 2));
}
// bt3()
// parseInt(n-1)/2)

// function bt4() {
//     let ab = prompt ('nhap so nguyen 2 chu so');
//     let abcat = ab.split('');
//     let number1 = parseInt(abcat[0]);
//     let number2 = parseInt(abcat[1]);
//     console.log(number1);
//     console.log(number2)
// }
function bt4() {
  let ab = prompt("nhap so nguyen 2 chu so");
  console.log("chu so hang chuc", parseInt(ab / 10));
  console.log("chu so hang don vi", ab % 10);
}

// bt4();
function bt10() {
  let n = prompt("muon mua ? lit xang");
  let a = prompt("gia xang khi mua 1 lit");
  let b = prompt("gia xang khi mua 2 lit");
  if (2 * a > b) {
    console.log(parseInt(n / 2) * b + (n % 2) * a);
  } else {
    // console.log((n-2)*a + 2*(b/2)) //xhien cả 2 loại
    console.log(a * n);
  }
}
// bt10()
function bt5() {
  let n = prompt("Nhap so n de kiem tra so nguyen to");
  let res = true;

  if (n < 2) {
    res = false;
  } else {
    for (let i = 2; i < n - 1; i++) {
      if (n % i == 0) {
        res = false;
        break;
      }
    }
  }
  if (res == true) {
    console.log("n la so nguyen to - yes");
  } else {
    console.log("n khong phai la so nguyen to - No");
  }
}
// // hoacj
// function checkNT(number) {
//   let i = true;
//   for (let index = 2; index < n; index++) {
//    if (number % index === 0) {
//     i = false;
//    }
//   }
//   return i;
// }
// let res = checkNT();
// console.log(res)

// bt5();

//bt6
// check max, min
function bt6() {
  let a = prompt("Nhap so thu nhat");
  let b = prompt("Nhap so thu hai");

  if (a % b === 0) {
    console.log(b);
  } else {
    for (let index = b; index >= 0; index--) {
      if (a % index === 0 && b % index === 0) {
        console.log(index);
        break;
      }
    }
  }
}
bt6();
// max%min ===0 ->res = min
// for 2-->min
/** hoajc for 2-->min/2
 * voi tim UCLN thi nen chon for nguoc, index --;
 *
 */
//bt7
function bt9() {
  let n = prompt("Nhap so n de phan tich thua so nguyen to");
  let demUoc = 0;

  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      document.write(i + "*");
      console.log(i + "*");
      n = n / i;
      demUoc += 1;
    } else {
    }
  }
}
// bt9();
