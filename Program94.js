var n = 5;
var str = "";
for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= n; j++) {
        if (i <= j) {
            str += j + " ";
        }
        else {
            str += "  ";
        }
    }
    str = str + "\n";
}
console.log(str);
