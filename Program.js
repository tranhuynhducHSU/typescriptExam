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
    return gt % 2 == 1; //Cac so le
});
var arrayC;
function contain(arrayA, arrayB) {
    var arrayC = new Array();
    for (var i = 0; i < arrayA.length; i++) {
        for (var j = 0; j < arrayB.length; j++) {
            if (arrayA[i] != arrayB[j]) {
                arrayC.push(arrayA[i]);
                break;
            }
        }
    }
    return arrayC;
}
console.log(arrayA);
console.log(arrayB);
arrayC = contain(arrayA, arrayB);
console.log(arrayC);
console.log(sayHi(ten));
