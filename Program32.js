function RangeSum(a, b) {
    var iSum = 0;
    for (var i = a; i <= b; i++) {
        iSum = iSum + i;
    }
    return iSum;
}
var no1 = 23;
var no2 = 30;
var ret = RangeSum(no1, no2);
console.log("Addition is : ", ret);
