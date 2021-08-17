function Difference(arr) {
    var cnt1 = 0;
    var cnt2 = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= 'a' && arr[i] <= 'z') {
            cnt1++;
        }
        else if (arr[i] >= 'A' && arr[i] <= 'Z') {
            cnt2++;
        }
    }
    return cnt1 - cnt2;
}
var str = "MarvellouS";
var ret = Difference(str);
console.log("Difference is: ", ret);
