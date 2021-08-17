function DipslayDigit(a) {
    var iDigit = 0;
    while (a != 0) {
        iDigit = ~~(a % 10);
        console.log(iDigit);
        a = ~~(a / 10);
    }
}
var no = 2395;
DipslayDigit(no);
