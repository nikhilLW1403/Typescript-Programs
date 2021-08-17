function StrUpr(arr) {
    var num = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= 'a' && arr[i] <= 'z') {
            num = arr[i].charCodeAt(0);
            num = num - 32;
            console.log(String.fromCharCode(num));
        }
        else if (arr[i] >= 'A' && arr[i] <= 'Z') {
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
StrUpr(str);
