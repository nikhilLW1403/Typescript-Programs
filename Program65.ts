function Display(arr:string):void
{
    var num:number = arr.charCodeAt(0);
    if(arr>='a' && arr<='z')
    {
        for(var i=num; i<=122; i++)
        {
            console.log(String.fromCharCode(i))
        }
    }
    else if(arr>='A' && arr<='Z')
    {
        for(var i=num; i<=90; i++)
        {
            console.log(String.fromCharCode(i))
        }
    }
    
}

var ch:string = 'W'
Display(ch);