"use strict";
//Currnet users
let current_user = ["Adeen", "Aayan", "Zayan", "Farazan", "Osama"];
//New user
let new_user = ["Mahad", "Amaan", "Zayan", "Bilal", "Adeen"];
//Loop through new user to check for username availablity
// ⚡ Bolt Optimization: Pre-calculate lowercase current users in a Set for O(1) lookup
// This prevents O(N*M) time complexity by avoiding the inner .some() loop and repeated .toLowerCase() calls
const currentUserLower = new Set(current_user.map(user => user.toLowerCase()));
new_user.forEach(new_one_user => {
    let our_condition = currentUserLower.has(new_one_user.toLowerCase());
    if (our_condition) {
        console.log("Sorry ", new_one_user, "is already taken!");
    }
    else {
        console.log("This username", new_one_user, "is available");
    }
});
