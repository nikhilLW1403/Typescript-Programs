function CheckZero(a:number):boolean
{
    var iDigit:number=0;
    while(a!=0)
    {
        iDigit = ~~(a%10);
        if(iDigit==0)
        {
            break;
        }
        a=~~(a/10);
    }
    if(a==0)
    {
        return false;
    }
    else
    {
        return true;
    }
}

var no : number = 9000;
var bret : boolean = CheckZero(no);
if(bret==true)
    console.log(`${no} contains zero`);
else
    console.log(`There is no zero`);