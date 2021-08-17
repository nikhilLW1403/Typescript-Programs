function Divide(a:number,b:number):number
{
    return ~~(a/b);
}
var no1 : number = 15;
var no2 : number = 5;
var ret :number = 0;

ret = Divide(no1,no2);
console.log("Division is: ",ret);