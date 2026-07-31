"use strict";
//Current users
let current_user = ["Adeen", "Aayan", "Zayan", "Farazan", "Osama"];
//New user
let new_user = ["Mahad", "Amaan", "Zayan", "Bilal", "Adeen"];
// Optimization: Pre-compute lowercased current users in a Set for O(1) lookup
// This replaces the O(n²) nested loop (some inside forEach) with an O(n) operation
const currentUserSet = new Set(current_user.map(user => user.toLowerCase()));
//Loop through new user to check for username availability
new_user.forEach(new_one_user => {
    let our_condition = currentUserSet.has(new_one_user.toLowerCase());
    if (our_condition) {
        console.log("Sorry ", new_one_user, "is already taken!");
    }
    else {
        console.log("This username", new_one_user, "is available");
    }
});
