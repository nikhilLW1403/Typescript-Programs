function CountChar(arr, ch) {
    var cnt = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == ch) {
            cnt++;
        }
    }
    return cnt;
}
var str = "Marvellous Multi OS";
var ch = 'M';
var ret = CountChar(str, ch);
console.log("Count of " + ch + " is: ", ret);
