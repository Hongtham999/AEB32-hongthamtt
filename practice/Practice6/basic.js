function basic() {
  // kieu nguyen thuy: number, string, boolean, undefined, null
  //kieu phuc tap: object, array, function
  let str = "hiii"; //string
  let num = 123; //number
  // hoisting trong JS, thuc chat chua 2 cau lenh: let num va num = 1
  let boole = true; //boolean
  let undefi = undefined; // hoac udf
  let nul = null;

  console.log("number", num);
  console.log("string", str);
  console.log("boolean", boole);
  console.log("undefined", undefi);
  console.log("nul", null);

  let objName = {
    name: "Luku",
    age: "24",
  };
  console.log("object.Name", objName.name);
  console.log("object", objName);

  let ar = [1, 2, 3];
  let ar1 = ["a", "b"]; // kieu: arrayString
  console.log("arrayNumber", ar[1]);
  console.log(ar);

  let user = { name: "Tham", age: 16 };
  // tên function có động từ trong tên
  function getName() {
    let user = { name: "Tham", age: 16 };
    console.log(user);
    return user;
  }
  // sẽ chạy khi không có param
  let res = getName;
  console.log(res);

  function getUserParam(_user) {
    console.log(_user);
  }
  getUserParam(user); //nhận giá trị khi gọi vào
}
// alert("hiiii"); //truyen hop thoai tbao

// prompt("Enter ur name"); // box tbao va nhaps

// input type: text, email, pass--> quan ly gia tri = value, su
// input type: checkbox, radio --> elm.checked

// 1 khoi tao func vaf cosole.log('func')
// 2 handle even : set thuoc tinh event truoc the mo cua elm html5 (o file confirm.html)
// truyen ten func
// 3. viet cac cau lenh vao trong func

// vd:  change text
// 5 get elm: document.grtElementById('#Id')
// 6 ,console.log (elm)
// 7 elm.style.color
// 8 elm.innerHTML

//tao func
function handleDelete() {
  console.log("handleDelete");
  let elm  = document.getElementById('result')
  console.log(elm);
  elm.style.color = 'red'
  elm.innerHTML = '<span>ABC</span>'
}
