function Display(a) {
    for (var i = ~~(a / 2); i > 0; i--) {
        if (~~(a % i) == 0) {
            console.log(i);
        }
    }
}
var no = 13;
Display(no);
