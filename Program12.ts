function MultFactor(a:number):number
{
    var iMult:number=1;
    for(var i=1; i<=a/2; i++)
    {
        if(~~(a%i)==0)
        {
            iMult = iMult * i;
        }
    }
    return iMult;
}
var no : number = 12;
var ret : number = MultFactor(no);
console.log("Multiplication is : ",ret);