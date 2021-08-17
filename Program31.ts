function DisplayEven(a:number,b:number):void 
{
    for(var i=a; i<=b; i++)
    {
        if(~~(i%2)==0)
        {
            console.log(i);
        }
    }
}

var no1 : number = 23;
var no2 : number = 35;
DisplayEven(no1,no2);