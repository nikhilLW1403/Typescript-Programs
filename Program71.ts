function CountWhiteSpace(arr:string):number
{
    var cnt : number = 0;
    for(var i=0; i<arr.length; i++)
    {
        if(arr[i]==' ')
        {
            cnt++;
        }
    }
    return cnt;
}

var str:string = "Marvellous Infosystem by Piyush Manohar Khairnar";
var ret:number = CountWhiteSpace(str);
console.log("Number of white space: ",ret);
