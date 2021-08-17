var n:number = 6;
var str:string ="";

for(var i=1; i<=n; i++)
{
    for(var j=n; j>0; j--)
    {
        if(i==1 || i==n || j==1 || j==n)
        {
            str += "*" + " ";
        }
        else if(i==j)
        {
            str += "*" + " ";
        }
        else
        {
            str += "#" + " ";
        }
    }
    str = str + "\n";
}
console.log(str);