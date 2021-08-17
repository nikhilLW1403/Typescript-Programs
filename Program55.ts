function CheckAlphabate(str:string):boolean
{
    if(str>='A' && str<='Z')
    {
        return true;
    }
    else
    {
        return false;
    }
}

var ch:string='N';
var bret:boolean=CheckAlphabate(ch);
if(bret==true)
    console.log("TRUE");
else
    console.log("FALSE")