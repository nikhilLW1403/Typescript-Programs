function Check(a:number):boolean
{
    if(~~(a%2)==0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

var no : number = 10;
var bret : boolean = false;
bret = Check(no);
if(bret==true)
    console.log(`${no} is even`);
else
    console.log(`${no} is odd`)