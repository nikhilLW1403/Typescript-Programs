function CountFreq(ar, no) {
    var cnt = 0;
    for (var i = 0; i < ar.length; i++) {
        if (ar[i] == no) {
            cnt++;
        }
    }
    return cnt;
}
var arr = [85, 11, 3, 80, 11, 111];
var search = 11;
var ret = CountFreq(arr, search);
console.log("Frequency of " + search + " is: ", ret);
