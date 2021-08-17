function ReverseNum(no:number):number
{
    var sum:number=0;
    var iDigit:number=0;
    while(no!=0)
    {
        iDigit = ~~(no%10);
        sum = (sum * 10)+ iDigit;
        no = ~~(no/10);
    }
    return sum;
}

var no:number = 523;
var ret:number = ReverseNum(no);
console.log(ret);