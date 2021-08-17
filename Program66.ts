function CheckSpecial(arr:string):boolean
{
    if((arr>='a' && arr<='z') || (arr>='A' && arr<='Z'))
        return false;
    else
        return true;
}

var ch:string = '%'
var bret:boolean = CheckSpecial(ch);
if(bret==true)
    console.log("TRUE");
else
    console.log("FALSE")