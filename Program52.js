function DisplayDigit(ar) {
    var pos = 0;
    var cnt = 0;
    for (var i = 0; i < ar.length; i++) {
        cnt = 0;
        pos = ar[i];
        while (pos != 0) {
            if (~~(pos % 10)) {
                cnt++;
            }
            pos = ~~(pos / 10);
        }
        if (cnt == 3) {
            console.log(ar[i]);
        }
    }
}
var arr = [8225, 665, 3, 76, 953, 858];
DisplayDigit(arr);
