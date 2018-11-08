"use strict";
var a = 1;
var b = 2;
var c = a + b;
var ten = "map";
function sayHi(ten) {
    return "hello " + ten;
}
var isRaining = true;
var goHome = false;
var arrayA = new Array();
arrayA.push(1);
arrayA.push(2);
arrayA.push(3);
arrayA.push(10);
arrayA.push(11);
var arrayB = arrayA.filter(function (gt, chiso, mang) {
    return gt > 3;
});
console.log(arrayA);
console.log(arrayB);
console.log(sayHi(ten));
