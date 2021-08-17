function CheckAlphabate(str) {
    if (str >= 'A' && str <= 'Z') {
        return true;
    }
    else {
        return false;
    }
}
var ch = 'N';
var bret = CheckAlphabate(ch);
if (bret == true)
    console.log("TRUE");
else
    console.log("FALSE");
