function CountWhiteSpace(arr) {
    var cnt = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == ' ') {
            cnt++;
        }
    }
    return cnt;
}
var str = "Marvellous Infosystem by Piyush Manohar Khairnar";
var ret = CountWhiteSpace(str);
console.log("Number of white space: ", ret);
