function DisplayEvenFactor(a) {
    for (var i = 1; i <= a / 2; i++) {
        if (~~(i % 2) == 0) {
            console.log(i);
        }
    }
}
var no = 24;
DisplayEvenFactor(no);
