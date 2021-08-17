function DisplayEvenFactor(a:number)
{
    if(a<0)
    {
        a=-a;
    }
    for(var i=1; i<=a/2; i++)
    {
        if(~~(i%2)==0)
        {
            console.log(i)
        }
    }
}

var no : number = 24;
DisplayEvenFactor(no);