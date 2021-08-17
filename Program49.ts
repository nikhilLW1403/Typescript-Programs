function Largest(ar:number[]):number
{
    var iMax:number=ar[0];
    for(var i=1; i<ar.length; i++)
    {
        if(iMax<ar[i])
        {
            iMax = ar[i];
        }
    }
    return iMax;
}

var arr:number[]=[85,66,3,66,93,88];
var ret : number = Largest(arr);
console.log("Largest number is: ",ret);