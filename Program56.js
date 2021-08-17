function CheckNumber(a) {
    if (a >= 0 && a <= 9) {
        return true;
    }
    else {
        return false;
    }
}
var num = 7;
var bret = CheckNumber(num);
if (bret == true)
    console.log("TRUE");
else
    console.log("FALSE");
