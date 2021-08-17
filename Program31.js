function DisplayEven(a, b) {
    for (var i = a; i <= b; i++) {
        if (~~(i % 2) == 0) {
            console.log(i);
        }
    }
}
var no1 = 23;
var no2 = 35;
DisplayEven(no1, no2);
