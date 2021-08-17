function DisplayNonFactor(a) {
    for (var i = 2; i < a; i++) {
        if (~~(a % i) != 0) {
            console.log(i);
        }
    }
}
var no = 13;
DisplayNonFactor(no);
