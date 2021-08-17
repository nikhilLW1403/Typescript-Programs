function Difference(ar:number[]):number
{
    var iMin:number=ar[0];
    var iMax:number=ar[0];
    for(var i=1; i<ar.length; i++)
    {
        if(iMax<ar[i])
        {
            iMax = ar[i];
        }
        else if(iMin>ar[i])
        {
            iMin = ar[i];
        }
    }
    return iMax - iMin;
}

var arr:number[]=[85,66,3,66,93,88];
var ret : number = Difference(arr);
console.log("Difference is: ",ret);