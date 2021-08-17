function Difference(ar:number[]):number
{
    var sum1:number=0;
    var sum2:number=0;
    for(var i=0; i<ar.length; i++)
    {
        if(~~(ar[i]%2)==0)
        {
            sum1 = sum1 + ar[i];
        }
        else
        {
            sum2 = sum2 + ar[i];
        }
    }
    return sum1 - sum2;
}

var arr : number[]=[85,66,3,80,93,88];
var ret : number = Difference(arr);
console.log("Difference is : ",ret);