function CountEven(ar:number[]):number
{
    var cnt:number=0;
    for(var i=0; i<ar.length; i++)
    {
        if(~~(ar[i]%2)==0)
        {
            cnt++;
        }
    }
    return cnt;
}

var arr:number[]=[85,66,3,80,93,88];
var ret : number = CountEven(arr);
console.log("Frequncy of even number: ",ret);