function DisplayDivisible(ar:number[]):void
{
    for(var i=0; i<ar.length; i++)
    {
        if(~~(ar[i]%3)==0 && ~~(ar[i]%5)==0)
        {
            console.log(ar[i]);
        }
    }
}

var arr:number[]=[85,66,3,15,93,88];
DisplayDivisible(arr);