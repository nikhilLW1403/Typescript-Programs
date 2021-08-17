var n:number = 4;
var str:string ="";

for(var i=1; i<=n; i++)
{
    for(var j=1; j<=n; j++)
    {
        if(~~(j%2)==0)
        {
            str = str + "# ";
        }
        else
        {
            str = str + "* ";
        }
    }
    str = str + "\n";
}
console.log(str);