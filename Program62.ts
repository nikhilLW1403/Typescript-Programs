function CheckVowel(arr:string):boolean
{
    for(var i=0; i<arr.length; i++)
    {
        if(arr[i]=='a' || arr[i]=='e'|| arr[i]=='i'|| arr[i]=='o'|| arr[i]=='u')
        {
            break;
        } 
    }
    if(i == arr.length)
        return false;
    else
        return true;
}

var str:string = "Marvellous";
var bret:boolean = CheckVowel(str);
if(bret==true)
    console.log("TRUE");
else
    console.log("FALSE");
