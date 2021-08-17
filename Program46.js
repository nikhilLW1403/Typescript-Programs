function LastOccur(ar, no) {
    var pos = -1;
    for (var i = 0; i < ar.length; i++) {
        if (ar[i] == no) {
            pos = i;
        }
    }
    return pos;
}
var arr = [85, 66, 3, 66, 93, 88];
var search = 66;
var ret = LastOccur(arr, search);
console.log("Last occurence of " + search + " is: ", ret);
