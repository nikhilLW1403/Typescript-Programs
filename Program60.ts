function CountSmall(arr:string):number
{
    var cnt:number=0;
    for(var i=0; i<arr.length; i++)
    {
        if(arr[i]>='a' && arr[i]<='z')
        {
            cnt++;
        } 
    }
    return cnt;
}

var str:string = "Marvellous";
var ret:number = CountSmall(str);
console.log("Small letter is: ",ret);
