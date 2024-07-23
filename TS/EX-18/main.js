var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Making an array and priting it original order
var countryVist = ["Switzerland", "Argentina", "Japan", "Brazil"];
console.log("Original order:", countryVist);
//Priting in alphabetical order
console.log("Alphabetical order:", __spreadArray([], countryVist, true).sort());
//Array is still in original order
console.log("Still in original order:", countryVist);
//printing in reverse order
console.log("Reverse order:", __spreadArray([], countryVist, true).reverse());
//Array is still in original order
console.log("Still in original order:", countryVist);
//Changing original order in reverse order 
console.log("original reversed array:", countryVist.reverse());
//Bringing it to original order
console.log("Back to orginal order:", countryVist.reverse());
//Changing original order to Alphabetical order
console.log("Sorted in alphabetical order:", countryVist.sort());
//Changing original to reverse order
console.log("Original array reversed again:", countryVist.reverse());
