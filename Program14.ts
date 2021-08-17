function DisplayNonFactor(a:number):void
{
    for(var i=2; i<a; i++)
    {
        if(~~(a%i)!=0)
        {
            console.log(i)
        }
    }
}

var no : number = 13;
DisplayNonFactor(no);