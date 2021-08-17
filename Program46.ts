function LastOccur(ar:number[],no:number):number
{
    var pos:number=-1;
    for(var i=0; i<ar.length; i++)
    {
        if(ar[i]==no)
        {
            pos = i;
        }
    }
    return pos;
}

var arr:number[]=[85,66,3,66,93,88];
var search:number=66;
var ret : number = LastOccur(arr,search);
console.log(`Last occurence of ${search} is: `,ret);