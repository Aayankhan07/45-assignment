//Making an array and priting it original order
let countryVist:string[]=["Switzerland","Argentina","Japan","Brazil"];
console.log("Original order:",countryVist);

//Priting in alphabetical order
console.log("Alphabetical order:",[...countryVist].sort());

//Array is still in original order
console.log("Still in original order:",countryVist);

//printing in reverse order
console.log("Reverse order:",[...countryVist].reverse());

//Array is still in original order
console.log("Still in original order:",countryVist);

//Changing original order in reverse order 
 console.log("original reversed array:",countryVist.reverse());

 //Bringing it to original order
 console.log("Back to orginal order:",countryVist.reverse());

//Changing original order to Alphabetical order
console.log("Sorted in alphabetical order:",countryVist.sort());

//Changing original to reverse order
console.log("Original array reversed again:",countryVist.reverse());