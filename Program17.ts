function DipslayDigit(a:number):void
{
    var iDigit:number=0;
    while(a!=0)
    {
        iDigit = ~~(a%10);
        console.log(iDigit);
        a = ~~(a/10);
    }
}

var no : number = 2395;
DipslayDigit(no);