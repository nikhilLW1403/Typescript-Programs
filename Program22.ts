function CountEven(a:number):number
{
    var cnt : number = 0;
    while(a!=0)
    {
        if(~~(a%10)%2==0)
        {
            cnt++;
        }
        a=~~(a/10);
    }
    return cnt;
}

var no : number = 2395;
var ret : number = CountEven(no);
console.log("Count of even digit is: ",ret);