function SummationNonFactor(a) {
    var iSum = 0;
    for (var i = 1; i < a; i++) {
        if (~~(a % i) != 0) {
            iSum = iSum + i;
        }
    }
    return iSum;
}
var no = 12;
var ret = SummationNonFactor(no);
console.log("Summation of factor : ", ret);
