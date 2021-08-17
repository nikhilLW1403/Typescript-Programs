function CountChar(arr:string,ch:string):number
{
    var cnt:number = 0;
    for(var i=0; i<arr.length; i++)
    {
        if(arr[i]==ch)
        {
            cnt++;
        }
    }
    return cnt;
}

var str:string = "Marvellous Multi OS";
var ch:string = 'M'
var ret:number = CountChar(str,ch);
console.log(`Count of ${ch} is: `,ret)