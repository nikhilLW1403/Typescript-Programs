function CheckAlphabate(str) {
    if (str >= 'a' && str <= 'z') {
        return true;
    }
    else {
        return false;
    }
}
var ch = 'n';
var bret = CheckAlphabate(ch);
if (bret == true)
    console.log("TRUE");
else
    console.log("FALSE");
