function CountWhite(arr:string):number
{
    var cnt:number=0;
    for(var i=0; i<arr.length; i++)
    {
        if(arr[i]==' ')
        {
            cnt++;
        }
    }
    return cnt;
}

var str:string = "HE llo WOr ID"
var ret:number = CountWhite(str);
console.log("Number of white spaces:",ret);