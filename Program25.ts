function DigitMult(a:number):number
{
    var iMult : number = 1;
    var iDigit : number = 0;
    while(a!=0)
    {
        iDigit = ~~(a%10);
        if(iDigit!=0)
        {
            iMult = iMult * iDigit;
        }
        a=~~(a/10);
    }
    return iMult;
}

var no : number = 10111;
var ret : number = DigitMult(no);
console.log("Multiplication is : ",ret);