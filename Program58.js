function DisplaySchedule(str) {
    if (str == 'A' || str == 'a')
        console.log("Your exam time at 7AM");
    else if (str == 'B' || str == 'b')
        console.log("Your exam time at 8.30AM");
    else if (str == 'C' || str == 'c')
        console.log("Your exam time at 9.30AM");
    else if (str == 'D' || str == 'd')
        console.log("Your exam time at 10.30AM");
}
var ch = 'c';
DisplaySchedule(ch);
