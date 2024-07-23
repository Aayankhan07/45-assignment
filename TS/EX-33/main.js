var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//Using for loop
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var oneNumber = numbers_1[_i];
    var ordinalending = void 0;
    if (oneNumber === 1) {
        ordinalending = "st";
    }
    else if (oneNumber === 2) {
        ordinalending = "nd";
    }
    if (oneNumber === 3) {
        ordinalending = "rd";
    }
    else {
        ordinalending = "th";
    }
    console.log("".concat(oneNumber).concat(ordinalending));
}
