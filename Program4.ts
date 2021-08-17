function Check(a:number):boolean
{
    if(~~(a%4)==0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
var no : number = 12;
var bret : boolean = false;
bret = Check(no);
if(bret==true)
    console.log(`${no} is divisible by 4`);
else
    console.log(`${no} is NOT divisible by 4`)