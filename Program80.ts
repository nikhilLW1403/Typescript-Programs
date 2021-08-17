var n:number = 5;
var str:string= " ";
for(var i=0; i<n; i++)
{
    for(var j=0; j<i; j++)
    {
        str = str + "*" + " ";
    }
    str = str + "\n";
}

console.log(str);