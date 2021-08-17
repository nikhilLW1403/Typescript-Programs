function DigitMult(a) {
    var iMult = 1;
    var iDigit = 0;
    while (a != 0) {
        iDigit = ~~(a % 10);
        if (iDigit != 0) {
            iMult = iMult * iDigit;
        }
        a = ~~(a / 10);
    }
    return iMult;
}
var no = 10111;
var ret = DigitMult(no);
console.log("Multiplication is : ", ret);
