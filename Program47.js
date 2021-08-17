function DisplayRange(ar, a, b) {
    for (var i = 0; i < ar.length; i++) {
        if (ar[i] > a && ar[i] < b) {
            console.log(ar[i]);
        }
    }
}
var arr = [85, 66, 3, 76, 93, 88];
var no1 = 60;
var no2 = 90;
DisplayRange(arr, no1, no2);
