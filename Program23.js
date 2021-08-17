function CountOdd(a) {
    var cnt = 0;
    while (a != 0) {
        if (~~((a % 10) % 2) != 0) {
            cnt++;
        }
        a = ~~(a / 10);
    }
    return cnt;
}
var no = 2395;
var ret = CountOdd(no);
console.log("Count of odd digit : ", ret);
