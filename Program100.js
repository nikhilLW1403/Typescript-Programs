function ReverseNum(no) {
    var sum = 0;
    var iDigit = 0;
    while (no != 0) {
        iDigit = ~~(no % 10);
        sum = (sum * 10) + iDigit;
        no = ~~(no / 10);
    }
    return sum;
}
var no = 523;
var ret = ReverseNum(no);
console.log(ret);
