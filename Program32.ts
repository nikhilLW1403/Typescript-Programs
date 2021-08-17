function RangeSum(a:number,b:number):number 
{
    var iSum:number=0;
    for(var i=a; i<=b; i++)
    {
        iSum = iSum + i;
    }
    return iSum;
}

var no1 : number = 23;
var no2 : number = 30;
var ret: number = RangeSum(no1,no2);
console.log("Addition is : ",ret);