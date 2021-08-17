function Frequency(ar:number[]):number
{
    var even:number=0;
    var odd:number=0;
    for(var i=0; i<ar.length; i++)
    {
        if(~~(ar[i]%2)==0)
        {
            even++;
        }
        else
        {
            odd++;
        }
    }
    return even - odd;
}

var arr:number[]=[85,66,3,80,93,88,90];
var ret : number = Frequency(arr);
console.log("Difference between Frequncy : ",ret);