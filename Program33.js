function RangeSumEven(a, b) {
    var iSum = 0;
    for (var i = a; i <= b; i++) {
        if (~~(i % 2) == 0) {
            iSum = iSum + i;
        }
    }
    return iSum;
}
var no1 = 23;
var no2 = 30;
var ret = RangeSumEven(no1, no2);
console.log("Addition is : ", ret);
