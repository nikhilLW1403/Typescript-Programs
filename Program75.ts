function IndexChar(arr:string,ch:string):number
{
    var pos:number = -1;
    for(var i=0; i<arr.length; i++)
    {
        if(arr[i]==ch)
        {
            pos = i;
        }
    }
    return pos;
}

var str:string = "Marvellous Multi OS";
var ch:string = 'M'
var ret:number = IndexChar(str,ch);
console.log(`Last index of ${ch} is: `,ret)