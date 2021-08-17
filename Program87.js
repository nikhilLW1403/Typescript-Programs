var ch = "A";
var num = ch.charCodeAt(0);
var str = "";
for (var i = 1; i <= 4; i++) {
    for (var j = num; j < num + 4; j++) {
        str += String.fromCharCode(j) + " ";
    }
    str = str + "\n";
}
console.log(str);
