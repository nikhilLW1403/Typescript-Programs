function DisplayMultiple(ar:number[]):void
{
    for(var i=0; i<ar.length; i++)
    {
        if(~~(ar[i]%11)==0)
        {
            console.log(ar[i]);
        }
    }
}

var arr:number[]=[85,66,3,55,93,88];
DisplayMultiple(arr);