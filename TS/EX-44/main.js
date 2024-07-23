//Define fuction with a rest parameter that accepts item argument representing our sandwich
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following item:\n");
    items.forEach(function (singleItem) { return console.log("-" + singleItem); });
    console.log("\nNow enjoy sandhwich");
}
//calling the function 3 time with 3 diffrent number of argument
makeSandwich("Chicken", "Cheese", "Mayo", "Egg ");
makeSandwich("Bread", "Butter");
makeSandwich("Bread", "Butter", "Chicken", "Cheese", "Mayo", "Egg ", "lettuce", "Tomato");
