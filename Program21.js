function Count(a, b) {
    var cnt = 0;
    while (a != 0) {
        if (~~(a % 10) < b) {
            cnt++;
        }
        a = ~~(a / 10);
    }
    return cnt;
}
var no = 2359;
var num = 6;
var ret = Count(no, num);
console.log("Freq of number less than " + num + " is", ret);
