function CountWhite(arr) {
    var cnt = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == ' ') {
            cnt++;
        }
    }
    return cnt;
}
var str = "HE llo WOr ID";
var ret = CountWhite(str);
console.log("Number of white spaces:", ret);
