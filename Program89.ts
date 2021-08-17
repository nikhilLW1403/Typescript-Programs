var n:number = 4;
var str:string ="";

for(var i=n; i>0; i--)
{
    for(var j=1; j<=n; j++)
    {
        str += i + " "
    }
    str = str + "\n";
}
console.log(str);