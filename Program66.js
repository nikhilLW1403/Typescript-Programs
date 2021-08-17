function CheckSpecial(arr) {
    if ((arr >= 'a' && arr <= 'z') || (arr >= 'A' && arr <= 'Z'))
        return false;
    else
        return true;
}
var ch = '%';
var bret = CheckSpecial(ch);
if (bret == true)
    console.log("TRUE");
else
    console.log("FALSE");
