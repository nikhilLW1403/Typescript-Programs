var arr = [[1, 3, 4, 4], [1, 2, 3, 4], [4, 5, 6, 7], [5, 6, 7, 8]];
var str = "";
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        str += arr[i][j] + " ";
    }
    str += "\n";
}
console.log(str);
