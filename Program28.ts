function DisplayOdd(a:number):void 
{
    for(var i=1; i<=a; i++)
    {
        if(~~(i%2)!=0)
        {
            console.log(i);
        }
    }
}

var no : number = 18;
DisplayOdd(no);
