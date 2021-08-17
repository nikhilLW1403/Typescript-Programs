var ch1 = "A";
var ch2 = "a";
var num1 = ch1.charCodeAt(0);
var num2 = ch2.charCodeAt(0);
var str = "";
for (var i = 1; i <= 4; i++) {
    for (var j = num1, k = num2; j < num1 + 4; j++, k++) {
        if (~~(i % 2) == 0) {
            str += String.fromCharCode(k) + " ";
        }
        else {
            str += String.fromCharCode(j) + " ";
        }
    }
    str = str + "\n";
}
console.log(str);
