function Difference(arr:string):number
{
    var cnt1:number=0;
    var cnt2:number=0;
    for(var i=0; i<arr.length; i++)
    {
        if(arr[i]>='a' && arr[i]<='z')
        {
            cnt1++;
        }
        else if(arr[i]>='A' && arr[i]<='Z')
        {
            cnt2++;
        } 
    }
    return cnt1 - cnt2;
}

var str:string = "MarvellouS";
var ret:number = Difference(str);
console.log("Difference is: ",ret);
