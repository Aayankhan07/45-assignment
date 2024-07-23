//define variable
var apple = "apple";
var uppercaseApple = "APPLE";
var ten = 10;
var twenty = 20;
var fruit = ["Apple", "Banana", "Orange"];
//Test for equality and unequality with string
console.log("Is apple is equal to apple");
console.log(apple == "apple");
console.log("\nIs apple is not equal to apple");
console.log(apple != "apple");
//Test using Lowercase Function
console.log("\nIs APPLE is equal to apple after converting to lowercase");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("\nIs APPLE is not equal to apple after converting to lowercase");
console.log(uppercaseApple.toLowerCase() != "apple");
//Numerical Test
console.log("\nIs ten is equal to twenty");
console.log(ten == twenty);
console.log("\nIs ten is not equal to twenty");
console.log(ten != twenty);
//Greater than
console.log("\nIs ten is greater than 0");
console.log(ten > 0);
//Less than
console.log("\nIs twenty is less than 10");
console.log(twenty < 10);
//Greater than or equal to
console.log("\nIs ten is greater than or equal to 5");
console.log(ten >= 5);
//Less than or equal to
console.log("\nIs twenty is less than or equal to ten");
console.log(twenty <= ten);
//Test using "And" & "Or" operator
//Using && operator
console.log("\nTwenty is not equal to teb and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\nTwenty is not equal to teb and twenty is greater than 30");
console.log(twenty != 10 && twenty > 30);
//Using || operator
console.log("20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("20 is greater than 50 OR 20 is  not equal to 20");
console.log(20 > 50 || 20 != 20);
//Test weather an item is an array
console.log("\nIs orange include in friuts array");
console.log(fruit.includes("Orange"));
//Not include
console.log("\nIs orange not include in friuts array");
console.log(!fruit.includes("Orange"));
