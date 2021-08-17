import { NikhilArr } from "./Matrix";

class MatrixX extends NikhilArr
{
    sum:number;
    constructor()
    {
        super();
        this.sum=0;
    }
    AddDiagonal():number
    {
        for(var i=0; i<this.arr.length; i++)
        {
            for(var j=0; j<this.arr[i].length; j++)
            {
                if(i==j)
                {
                    this.sum = this.sum + this.arr[i][j];
                }
            }
        }
        return this.sum;
    }
}

var obj=new MatrixX()
obj.Accept();
obj.Display();
var ret:number = obj.AddDiagonal();
console.log("Addition of diagonal is:",ret);
