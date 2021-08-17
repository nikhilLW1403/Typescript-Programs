function CountSmall(arr) {
    var cnt = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= 'a' && arr[i] <= 'z') {
            cnt++;
        }
    }
    return cnt;
}
var str = "Marvellous";
var ret = CountSmall(str);
console.log("Small letter is: ", ret);
