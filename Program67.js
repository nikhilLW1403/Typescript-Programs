function StrLwr(arr) {
    var num = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= 'A' && arr[i] <= 'Z') {
            num = arr[i].charCodeAt(0);
            num = num + 32;
            console.log(String.fromCharCode(num));
        }
        else {
            console.log(arr[i]);
        }
    }
}
var str = "Marvellous Multi OS";
StrLwr(str);
