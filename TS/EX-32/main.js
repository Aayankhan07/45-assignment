"use strict";
//Currnet users
let current_user = ["Adeen", "Aayan", "Zayan", "Farazan", "Osama"];
//New user
let new_user = ["Mahad", "Amaan", "Zayan", "Bilal", "Adeen"];
// ⚡ Bolt Performance Optimization: Replace O(N^2) array search with O(N) Set lookup
// Converting current_user to a Set of lowercase strings beforehand prevents redundant
// Array.some() iterations and toLowerCase() calls during the loop.
// Expected Impact: Faster username availability checking, especially for large arrays.
let currentUserLower = new Set(current_user.map(u => u.toLowerCase()));
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
