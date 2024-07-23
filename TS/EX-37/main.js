//Making a function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I love Typescipt"; }
    console.log("Creating a  ".concat(size, " shirt with the ").concat(printMessage, " print on shirt."));
}
//Calling a function with default value
make_shirt();
//Calling a function with medium size and default message
make_shirt("Medium");
//Calling a function with small size and diffrent message
make_shirt("Small", "I Love Javascript");
