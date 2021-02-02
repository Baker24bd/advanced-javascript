// false value:
// 0
// ""
// undefined
// null
// NaN
// true value:
// "0", " ", [],
let name = '';
// console.log(name);
if(name || name == 0){
    console.log("Condition is true.");
}
else{
    console.log("Condition is false.");
}
