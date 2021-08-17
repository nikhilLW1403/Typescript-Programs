import { NikhilArr } from "./Matrix";

class MatrixX extends NikhilArr
{
    sum:number;
    ret:string;
    constructor()
    {
        super();
        this.sum = 0;
        this.ret = "";
    }
    RowSummation():void
    {
        for(var i=0; i<this.arr.length; i++)
        {
            this.sum = 0;
            for(var j=0; j<this.arr[i].length; j++)
            {
                this.sum = this.sum + this.arr[i][j];
            }
            this.ret += this.sum + "  ";
        }
        console.log(this.ret);
    }
}

var obj = new MatrixX()
obj.Accept();
obj.Display();
obj.RowSummation();