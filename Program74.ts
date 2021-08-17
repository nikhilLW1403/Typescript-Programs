function IndexChar(arr:string,ch:string):number
{
    for(var i=0; i<arr.length; i++)
    {
        if(arr[i]==ch)
        {
            break;
        }
    }
    if(i==arr.length)
        return -1;
    else
        return i;
}

var str:string = "Marvellous Multi OS";
var ch:string = 'M'
var ret:number = IndexChar(str,ch);
console.log(`First index of ${ch} is: `,ret)