function DisplayDigit(ar:number[]):void
{
    var pos:number=0;
    var cnt:number=0;
    for(var i=0; i<ar.length; i++)
    {
        cnt=0;
        pos=ar[i];
        while(pos!=0)
        {
            if(~~(pos%10))
            {
                cnt++;
            }
            pos = ~~(pos/10);
        }
        if(cnt==3)
        {
            console.log(ar[i]);
        }
    }
}

var arr:number[]=[8225,665,3,76,953,858];
DisplayDigit(arr);