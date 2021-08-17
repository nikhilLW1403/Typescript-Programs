import { NikhilArr } from "./Matrix";

class MatrixX extends NikhilArr
{
    cnt:number;
    constructor()
    {
        super();
        this.cnt=0;
    }
    CountFrequency(no:number):number
    {
        for(var i=0; i<this.arr.length; i++)
        {
            for(var j=0; j<this.arr[i].length; j++)
            {
                if(this.arr[i][j]==no)
                {
                    this.cnt++;
                }
            }
        }
        return this.cnt;
    }
}

var obj = new MatrixX();
var a:number = 9;
obj.Accept();
obj.Display();
var ret:number = obj.CountFrequency(a);
console.log(`Frequency of ${a} is:`,ret);