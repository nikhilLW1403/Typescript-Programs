function Check(a) {
    if (~~(a % 2) == 0) {
        return true;
    }
    else {
        return false;
    }
}
var no = 10;
var bret = false;
bret = Check(no);
if (bret == true)
    console.log(no + " is even");
else
    console.log(no + " is odd");
