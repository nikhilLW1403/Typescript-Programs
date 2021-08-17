function Display(arr) {
    var ch = arr.charCodeAt(0);
    if (arr >= 'a' && arr <= 'z') {
        ch = ch - 32;
        console.log(String.fromCharCode(ch));
    }
    else if (arr >= 'A' && arr <= 'Z') {
        ch = ch + 32;
        console.log(String.fromCharCode(ch));
    }
    else {
        console.log(arr);
    }
}
var str = 'r';
Display(str);
