function CheckChar(arr:string,ch:string):boolean
{
    for(var i=0; i<arr.length; i++)
    {
        if(arr[i]==ch)
        {
            break;
        }
    }
    if(i==arr.length)
        return false;
    else
        return true;
}

var str:string = "Marvellous";
var ch:string = 'e'
var bret:boolean = CheckChar(str,ch);
if(bret==true)
    console.log("TRUE");
else
    console.log("FALSE");
