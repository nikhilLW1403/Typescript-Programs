function CountFreq(ar:number[],no:number):number
{
    var cnt:number=0;
    for(var i =0; i<ar.length; i++)
    {
        if(ar[i]==no)
        {
            cnt++;
        }
    }
    return cnt;
}

var arr:number[]=[85,11,3,80,11,111];
var search : number = 11;
var ret : number = CountFreq(arr,search);
console.log(`Frequency of ${search} is: `,ret);