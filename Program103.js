"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Matrix_1 = require("./Matrix");
var MatrixX = /** @class */ (function (_super) {
    __extends(MatrixX, _super);
    function MatrixX() {
        var _this = _super.call(this) || this;
        _this.cnt = 0;
        return _this;
    }
    MatrixX.prototype.CountFrequency = function (no) {
        for (var i = 0; i < this.arr.length; i++) {
            for (var j = 0; j < this.arr[i].length; j++) {
                if (this.arr[i][j] == no) {
                    this.cnt++;
                }
            }
        }
        return this.cnt;
    };
    return MatrixX;
}(Matrix_1.NikhilArr));
var obj = new MatrixX();
var a = 9;
obj.Accept();
obj.Display();
var ret = obj.CountFrequency(a);
console.log("Frequency of " + a + " is:", ret);
