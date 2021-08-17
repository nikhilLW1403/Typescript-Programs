function CheckNumber(ar, no) {
    for (var i = 0; i < ar.length; i++) {
        if (ar[i] == no) {
            break;
        }
    }
    if (i == ar.length) {
        return false;
    }
    else {
        return true;
    }
}
var arr = [85, 66, 3, 80, 93, 88];
var search = 80;
var bret = CheckNumber(arr, search);
if (bret == true)
    console.log(search + " is present");
else
    console.log(search + " is absent");
