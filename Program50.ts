function Smallest(ar:number[]):number
{
    var iMin:number=ar[0];
    for(var i=1; i<ar.length; i++)
    {
        if(iMin>ar[i])
        {
            iMin = arr[i];
        }
    }
    return iMin;
}

var arr:number[]=[85,66,3,66,93,88];
var ret : number = Smallest(arr);
console.log("Smallest number is: ",ret);