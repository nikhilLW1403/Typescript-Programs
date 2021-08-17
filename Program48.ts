function OddMult(ar:number[]):number
{
    var iMult:number=1;
    for(var i=0; i<ar.length; i++)
    {
        if(~~(ar[i]%2)!=0)
        {
            iMult = iMult * arr[i];
        }
    }
    if(iMult==1)
        return 0;
    else
        return iMult;
}

var arr:number[]=[15,66,3,70,10,88];
var ret : number = OddMult(arr);
console.log("Multiplication is: ",ret);