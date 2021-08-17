function FirstOccur(ar:number[],no:number):number
{
    for(var i=0; i<ar.length; i++)
    {
        if(ar[i]==no)
        {
            break;
        }
    }
    if(i==ar.length)
    {
        return -1;
    }
    else
    {
        return i;
    }
}

var arr:number[]=[85,66,3,66,93,88];
var search:number=66;
var ret : number = FirstOccur(arr,search);
console.log(`First occurence of ${search} is: `,ret);