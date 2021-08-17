function CheckAlphabate(str:string):boolean
{
    if(str>='a' && str<='z')
    {
        return true;
    }
    else
    {
        return false;
    }
}

var ch:string='n';
var bret:boolean=CheckAlphabate(ch);
if(bret==true)
    console.log("TRUE");
else
    console.log("FALSE")