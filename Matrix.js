"use strict";
exports.__esModule = true;
exports.NikhilArr = void 0;
var NikhilArr = /** @class */ (function () {
    function NikhilArr() {
        this.arr = null;
        this.str = "";
    }
    NikhilArr.prototype.Accept = function () {
        this.arr = [[3, 2, 5, 9], [4, 3, 2, 2], [8, 5, 1, 9], [3, 9, 7, 5]];
    };
    NikhilArr.prototype.Display = function () {
        for (var i = 0; i < this.arr.length; i++) {
            for (var j = 0; j < this.arr[i].length; j++) {
                this.str += this.arr[i][j] + " ";
            }
            this.str += "\n";
        }
        console.log(this.str);
    };
    return NikhilArr;
}());
exports.NikhilArr = NikhilArr;
