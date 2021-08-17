var n:number = 5;
var str:string ="";

for(var i=1; i<=3; i++)
{
    for(var j=n; j>0; j--)
    {
        str += j + " ";
    }
    str = str + "\n";
}
console.log(str);