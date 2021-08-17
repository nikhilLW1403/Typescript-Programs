function SumDigit(ar) {
    var sum = 0;
    var pos = 0;
    for (var i = 0; i < ar.length; i++) {
        sum = 0, pos = ar[i];
        while (pos != 0) {
            sum = sum + ~~(pos % 10);
            pos = ~~(pos / 10);
        }
        console.log(sum);
    }
}
var arr = [8225, 665, 3, 76, 953, 858];
SumDigit(arr);
