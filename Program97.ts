var n:number = 5;
var str:string ="";

for(var i=1; i<=n; i++)
{
    for(var j=n; j>0; j--)
    {
        if(i<j)
        {
            str += "*" + " ";
        }
        else if(i==j)
        {
            str += "#" + " ";
        }
        else
        {
            str += "@" + " ";
        }
    }
    str = str + "\n";
}
console.log(str);