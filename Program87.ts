var ch:string = "A";
var num:number = ch.charCodeAt(0);
var str:string ="";

for(var i=1; i<=4; i++)
{
    for(var j=num; j<num+4; j++)
    {
        str += String.fromCharCode(j) + " ";
    }
    str = str + "\n";
}
console.log(str);