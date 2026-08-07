"use strict";
//Currnet users
let current_user = ["Adeen", "Aayan", "Zayan", "Farazan", "Osama"];
//New user
let new_user = ["Mahad", "Amaan", "Zayan", "Bilal", "Adeen"];
// ⚡ Bolt Optimization: Replacing O(N*M) array `.some()` inside loop with an O(N+M) `Set` lookup.
// We pre-calculate lowercase versions of current users and store them in a Set.
// Expected Impact: Significantly improves performance for large arrays by reducing redundant lowercase operations and converting O(N) array scans to O(1) Set lookups.
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
