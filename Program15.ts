function SummationNonFactor(a:number):number
{
    var iSum:number=0;
    for(var i=1; i<a; i++)
    {
        if(~~(a%i)!=0)
        {
            iSum = iSum + i;
        }
    }
    return iSum;
}

var no : number = 12;
var ret : number = SummationNonFactor(no);
console.log("Summation of factor : ",ret);