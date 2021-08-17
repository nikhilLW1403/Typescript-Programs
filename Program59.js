function CountCapital(arr) {
    var cnt = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= 'A' && arr[i] <= 'Z') {
            cnt++;
        }
    }
    return cnt;
}
var str = "Marvellous Multi OS";
var ret = CountCapital(str);
console.log("Capital letter is: ", ret);
