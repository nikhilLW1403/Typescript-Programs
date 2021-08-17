import { NikhilArr } from "./Matrix";

class MatrixX extends NikhilArr
{
    iMax:number;
    constructor()
    {
        super();
        this.iMax = 0;
    }
    Largest():number
    {
        for(var i=0; i<this.arr.length; i++)
        {
            for(var j=0; j<this.arr[i].length; j++)
            {
                if(this.iMax < this.arr[i][j])
                {
                    this.iMax = this.arr[i][j];
                }
            }
        }
        return this.iMax;
    }
}

var obj = new MatrixX();
obj.Accept();
obj.Display();
var ret:number = obj.Largest();
console.log("Largest number is:",ret);