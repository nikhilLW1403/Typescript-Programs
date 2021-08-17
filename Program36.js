function Difference(ar) {
    var sum1 = 0;
    var sum2 = 0;
    for (var i = 0; i < ar.length; i++) {
        if (~~(ar[i] % 2) == 0) {
            sum1 = sum1 + ar[i];
        }
        else {
            sum2 = sum2 + ar[i];
        }
    }
    return sum1 - sum2;
}
var arr = [85, 66, 3, 80, 93, 88];
var ret = Difference(arr);
console.log("Difference is : ", ret);
