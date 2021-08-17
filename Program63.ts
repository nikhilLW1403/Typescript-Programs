function DisplayReverse(arr:string):void
{
    for(var i=arr.length-1; i>=0; i--)
    {
        console.log(arr[i])
    }
}

var str:string = "MarvelloS";
DisplayReverse(str);