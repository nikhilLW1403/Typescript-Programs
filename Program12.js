function MultFactor(a) {
    var iMult = 1;
    for (var i = 1; i <= 10; i++) {
        if (~~(a % i) == 0) {
            iMult = iMult * i;
        }
    }
    return iMult;
}
var no = 0;
var ret = MultFactor(no);
console.log("Multiplication is : ", ret);
