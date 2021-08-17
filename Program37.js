function DisplayDiv(ar) {
    for (var i = 0; i < ar.length; i++) {
        if (~~(ar[i] % 5) == 0) {
            console.log(ar[i]);
        }
    }
}
var arr = [85, 66, 3, 80, 93, 88];
DisplayDiv(arr);
