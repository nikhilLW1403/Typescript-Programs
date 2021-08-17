function Display(arr:string):void
{
    for(var i=0; i<arr.length; i++)
    {
        if(arr[i]>='a' && arr[i]<='z')
        {
            console.log(arr[i])
        }
    }
}

var str:string = "Marvellous Multi OS";
Display(str);