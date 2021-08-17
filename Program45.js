function FirstOccur(ar, no) {
    for (var i = 0; i < ar.length; i++) {
        if (ar[i] == no) {
            break;
        }
    }
    if (i == ar.length) {
        return -1;
    }
    else {
        return i;
    }
}
var arr = [85, 66, 3, 66, 93, 88];
var search = 66;
var ret = FirstOccur(arr, search);
console.log("First occurence of " + search + " is: ", ret);
