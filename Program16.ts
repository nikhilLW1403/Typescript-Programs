function FactDiff(a:number):number
{
    var sum1:number=0;
    var sum2:number=0;
    for(var i=1; i<a; i++)
    {
        if(~~(a%i)==0)
        {
            sum1 = sum1 + i;
        }
        else
        {
            sum2 = sum2 + i;
        }
    }
    return sum1 - sum2;
}

var no : number = 12;
var ret : number = FactDiff(no);
console.log("Difference is : ",ret);