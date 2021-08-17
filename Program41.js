function CountEven(ar) {
    var cnt = 0;
    for (var i = 0; i < ar.length; i++) {
        if (~~(ar[i] % 2) == 0) {
            cnt++;
        }
    }
    return cnt;
}
var arr = [85, 66, 3, 80, 93, 88];
var ret = CountEven(arr);
console.log("Frequncy of even number: ", ret);
