function IndexChar(arr, ch) {
    var pos = -1;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == ch) {
            pos = i;
        }
    }
    return pos;
}
var str = "Marvellous Multi OS";
var ch = 'M';
var ret = IndexChar(str, ch);
console.log("Last index of " + ch + " is: ", ret);
