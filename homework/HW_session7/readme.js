// let n=a;
// if (n%2 == 0) {
//     document.write (n,'la so chan');
// } else {
//     document.write (n,'la so le');
 
// }
function b1() {

console.log('b1');
let elm = document.getElementById('n');
console.log(typeof parseInt(elm.value));

if (parseInt(elm.value)  % 2 == 0) {
    document.write ('n la so chan');
} else {
    document.write ('n la so le');
}
}
