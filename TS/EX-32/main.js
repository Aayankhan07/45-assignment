//Currnet users
var current_user = ["Adeen", "Aayan", "Zayan", "Farazan", "Osama"];
//New user
var new_user = ["Mahad", "Amaan", "Zayan", "Bilal", "Adeen"];
// ⚡ Bolt Optimization: Pre-compute lowercase current users into a Set for O(1) lookups
// This transforms an O(N * M) operation into an O(N + M) operation, significantly reducing comparisons
var currentUserLower = new Set(current_user.map(function (user) { return user.toLowerCase(); }));
//Loop through new user to check for username availablity
new_user.forEach(function (new_one_user) {
    var our_condition = currentUserLower.has(new_one_user.toLowerCase());
    if (our_condition) {
        console.log("Sorry ", new_one_user, "is already taken!");
    }
    else {
        console.log("This username", new_one_user, "is available");
    }
});
"";
