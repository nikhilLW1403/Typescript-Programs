function CheckNumber(a:number):boolean
{
    if(a>=0 && a<=9)
    {
        return true;
    }
    else
    {
        return false;
    }
}

var num:number=7;
var bret:boolean=CheckNumber(num);
if(bret==true)
    console.log("TRUE");
else
    console.log("FALSE")