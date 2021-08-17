function CountDiff(a) {
    var sum1 = 0;
    var sum2 = 0;
    var iDigit = 0;
    while (a != 0) {
        iDigit = ~~(a % 10);
        if (iDigit % 2 == 0) {
            sum1 = sum1 + iDigit;
        }
        else {
            sum2 = sum2 + iDigit;
        }
        a = ~~(a / 10);
    }
    return sum1 - sum2;
}
var no = 2395;
var ret = CountDiff(no);
console.log("Difference is : ", ret);
