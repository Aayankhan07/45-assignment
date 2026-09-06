"use strict";
//Current users
let current_user = ["Adeen", "Aayan", "Zayan", "Farazan", "Osama"];
//New user
let new_user = ["Mahad", "Amaan", "Zayan", "Bilal", "Adeen"];
// ⚡ Bolt Performance Optimization:
// Converting the array of current users to a Set of lowercased strings
// before the loop reduces the lookup time complexity from O(n * m) to O(n + m),
// where n is the number of current users and m is the number of new users.
// This prevents redundant lowercasing of current users on every check and speeds up the search.
let current_user_set = new Set(current_user.map(user => user.toLowerCase()));
//Loop through new user to check for username availablity
new_user.forEach(new_one_user => {
    let our_condition = current_user_set.has(new_one_user.toLowerCase());
    if (our_condition) {
        console.log("Sorry ", new_one_user, "is already taken!");
    }
    else {
        console.log("This username", new_one_user, "is available");
    }
});
