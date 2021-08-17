function CheckAlpha(str:string):boolean
{
    if((str>='A' && str<='Z') || (str>='a' && str<='z'))
    {
        return true;
    }
    else
    {
        return false;
    }
}

var ch:string='N';
var bret:boolean=CheckAlpha(ch);
if(bret==true)
    console.log("TRUE");
else
    console.log("FALSE")