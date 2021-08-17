function DisplayAlpha(a:number):void
{
    for(var i=65,j=1; j<=a; i++,j++)
    {
        console.log(String.fromCharCode(i));
    }
}

var no : number = 5;
DisplayAlpha(no);