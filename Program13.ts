function Display(a:number)
{
    for(var i=~~(a/2); i>0; i--)
    {
        if(~~(a%i)==0)
        {
            console.log(i);
        }
    }
}
var no : number = 13;
Display(no);