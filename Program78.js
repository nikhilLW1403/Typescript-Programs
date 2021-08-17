function Display(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= 'A' && arr[i] <= 'Z') {
            console.log(arr[i]);
        }
    }
}
var str = "Marvellous Multi OS";
Display(str);
