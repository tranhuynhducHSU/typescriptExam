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
    return gt%2==1; //Cac so le
})
var arrayC;

function contain(arrayA:Array<number>, arrayB:Array<number>){
    var arrayC=new Array<number>();
    for(let i=0;i<arrayA.length;i++)
    {
        for(let j=0;j<arrayB.length;j++){
            if(arrayA[i]!=arrayB[j])
            {
            arrayC.push(arrayA[i]);
            break;
            }
        }
    }
    return arrayC;
}


console.log(arrayA); 
console.log(arrayB);
arrayC=contain(arrayA,arrayB);
console.log(arrayC);


console.log(sayHi(ten))