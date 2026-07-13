"use strict";
//Currnet users
let current_user = ["Adeen", "Aayan", "Zayan", "Farazan", "Osama"];
//New user
let new_user = ["Mahad", "Amaan", "Zayan", "Bilal", "Adeen"];
// Optimization: Pre-compute a Set of lowercase current usernames to change
// the lookup complexity from O(N*M) to O(N+M)
const currentUserLower = new Set(current_user.map(user => user.toLowerCase()));
//Loop through new user to check for username availablity
new_user.forEach(new_one_user => {
    let our_condition = currentUserLower.has(new_one_user.toLowerCase());
    if (our_condition) {
        console.log("Sorry ", new_one_user, "is already taken!");
    }
    else {
        console.log("This username", new_one_user, "is available");
    }
});
