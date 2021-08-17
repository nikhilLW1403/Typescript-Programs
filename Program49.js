function Largest(ar) {
    var iMax = ar[0];
    for (var i = 1; i < ar.length; i++) {
        if (iMax < ar[i]) {
            iMax = ar[i];
        }
    }
    return iMax;
}
var arr = [85, 66, 3, 66, 93, 88];
var ret = Largest(arr);
console.log("Largest number is: ", ret);
