function CountFrequency(a, b) {
    var iDigit = 0;
    var cnt = 0;
    while (a != 0) {
        if (~~(a % 10) == 2) {
            cnt++;
        }
        a = ~~(a / 10);
    }
    return cnt;
}
var no = 922432;
var search = 2;
var ret = CountFrequency(no, search);
console.log("Frequency of " + search + " is : ", ret);
