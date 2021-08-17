function CountRange(a) {
    var cnt = 0;
    while (a != 0) {
        if (~~(a % 10) > 3 && ~~(a % 10) < 7) {
            cnt++;
        }
        a = ~~(a / 10);
    }
    return cnt;
}
var no = 2395;
var ret = CountRange(no);
console.log("Count between 3 and 7 is : ", ret);
