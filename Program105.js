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
        _this.sum = 0;
        _this.ret = "";
        return _this;
    }
    MatrixX.prototype.RowSummation = function () {
        for (var i = 0; i < this.arr.length; i++) {
            this.sum = 0;
            for (var j = 0; j < this.arr[i].length; j++) {
                this.sum = this.sum + this.arr[i][j];
            }
            this.ret += this.sum + "  ";
        }
        console.log(this.ret);
    };
    return MatrixX;
}(Matrix_1.NikhilArr));
var obj = new MatrixX();
obj.Accept();
obj.Display();
obj.RowSummation();
