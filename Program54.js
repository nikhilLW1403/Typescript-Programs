function CheckAlpha(str) {
    console.log(str + Number(65));
    if ((str >= 'A' && str <= 'Z') || (str >= 'a' && str <= 'z')) {
        return true;
    }
    else {
        return false;
    }
}
var ch = 'N';
var bret = CheckAlpha(ch);
if (bret == true)
    console.log("TRUE");
else
    console.log("FALSE");
