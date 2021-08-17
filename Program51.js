function Difference(ar) {
    var iMin = ar[0];
    var iMax = ar[0];
    for (var i = 1; i < ar.length; i++) {
        if (iMax < ar[i]) {
            iMax = ar[i];
        }
        else if (iMin > ar[i]) {
            iMin = ar[i];
        }
    }
    return iMax - iMin;
}
var arr = [85, 66, 3, 66, 93, 88];
var ret = Difference(arr);
console.log("Difference is: ", ret);
