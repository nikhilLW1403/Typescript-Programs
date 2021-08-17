function CheckChar(arr, ch) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == ch) {
            break;
        }
    }
    if (i == arr.length)
        return false;
    else
        return true;
}
var str = "Marvellous";
var ch = 'e';
var bret = CheckChar(str, ch);
if (bret == true)
    console.log("TRUE");
else
    console.log("FALSE");
