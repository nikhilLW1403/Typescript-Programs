function Check(ch) {
    if ((ch == 'a') || (ch == 'e') || (ch == 'i') || (ch == 'o') || (ch == 'u')) {
        return true;
    }
    else {
        return false;
    }
}
var ch = "z";
var bret = false;
bret = Check(ch);
if (bret == true)
    console.log(ch + " is vowel");
else
    console.log(ch + " is not vowel");
