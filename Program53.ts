function SumDigit(ar:number[]):void
{
    var sum:number=0;
    var pos:number=0;
    for(var i=0; i<ar.length; i++)
    {
        sum=0,pos=ar[i];
        while(pos!=0)
        {
            sum = sum + ~~(pos%10);
            pos = ~~(pos/10);
        }
        console.log(sum);
    }
    
}


var arr:number[]=[8225,665,3,76,953,858];
SumDigit(arr);