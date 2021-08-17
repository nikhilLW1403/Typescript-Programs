function Count(a:number,b:number):number
{
    var cnt:number=0;
    while(a!=0)
    {
        if(~~(a%10)<b)
        {
            cnt++;
        }
        a=~~(a/10);
    }
    return cnt;
}

var no : number = 2359;
var num : number = 6;
var ret : number = Count(no,num);
console.log(`Freq of number less than ${num} is`,ret);