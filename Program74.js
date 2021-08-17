function IndexChar(arr, ch) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == ch) {
            break;
        }
    }
    if (i == arr.length)
        return -1;
    else
        return i;
}
var str = "Marvellous Multi OS";
var ch = 'M';
var ret = IndexChar(str, ch);
console.log("First index of " + ch + " is: ", ret);
