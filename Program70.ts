function DisplayDigit(arr:string)
{
    for(var i=0; i<arr.length; i++)
    {
        if(arr[i]>='1' && arr[i]<='9')
        {
            console.log(arr[i]);
        }
    }
}

var str:string = "marve89llous121";
DisplayDigit(str);
