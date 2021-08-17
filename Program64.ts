function Display(arr:string):void
{
    var ch:number = arr.charCodeAt(0);
    if(arr>='a' && arr<='z')
    {
        ch = ch - 32;
        console.log(String.fromCharCode(ch));    
    }
    else if(arr>='A' && arr<='Z')
    {
        ch = ch + 32;
        console.log(String.fromCharCode(ch));
    }
    else
    {
        console.log(arr);
    }
    
}

var str:string='r';
Display(str);