function CountFrequency(a:number,b:number):number
{
    var cnt:number=0;
    while(a!=0)
    {
        if(~~(a%10)==2)
        {
            cnt++;
        }
        a=~~(a/10);
    }
    return cnt;
}

var no : number = 922432;
var search : number = 2
var ret : number = CountFrequency(no,search);
console.log(`Frequency of ${search} is : `,ret);