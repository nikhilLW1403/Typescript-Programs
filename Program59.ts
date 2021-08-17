function CountCapital(arr:string):number
{
    var cnt:number=0;
    for(var i=0; i<arr.length; i++)
    {
        if(arr[i]>='A' && arr[i]<='Z')
        {
            cnt++;
        } 
    }
    return cnt;
}

var str:string = "Marvellous Multi OS";
var ret:number = CountCapital(str);
console.log("Capital letter is: ",ret);
