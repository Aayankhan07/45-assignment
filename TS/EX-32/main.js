//Currnet users
var current_user = ["Adeen", "Aayan", "Zayan", "Farazan", "Osama"];
//New user
var new_user = ["Mahad", "Amaan", "Zayan", "Bilal", "Adeen"];
//Loop through new user to check for username availablity
new_user.forEach(function (new_one_user) {
    var our_condition = current_user.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    if (our_condition) {
        console.log("Sorry ", new_one_user, "is already taken!");
    }
    else {
        console.log("This username", new_one_user, "is available");
    }
});
"";
