function CountDiff(a:number):number
{
    var sum1:number=0;
    var sum2:number=0;
    var iDigit:number=0
    while(a!=0)
    {
        iDigit = ~~(a%10);
        if(iDigit%2==0)
        {
            sum1 = sum1 + iDigit;
        }
        else
        {
            sum2 = sum2 + iDigit;
        }
        a=~~(a/10);
    }
    return sum1-sum2;
}

var no : number = 2395;
var ret : number = CountDiff(no);
console.log("Difference is : ",ret);