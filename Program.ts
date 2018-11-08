var a: number = 1;
var b: number = 2;
var c: number = a + b;

var ten:string="map"
function sayHi(ten:string){
    return "hello "+ten;
}
var isRaining:boolean=true;
var goHome:boolean=false;

var arrayA:Array<number>=new Array<number>();
arrayA.push(1);
arrayA.push(2);
arrayA.push(3);
arrayA.push(10);
arrayA.push(11);

var arrayB=arrayA.filter((gt:number,chiso:number,mang:number[])=>{
    return gt>3;
})

console.log(arrayA); 
console.log(arrayB);



console.log(sayHi(ten))