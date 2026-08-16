"use strict";
//Currnet users
let current_user = ["Adeen", "Aayan", "Zayan", "Farazan", "Osama"];
//New user
let new_user = ["Mahad", "Amaan", "Zayan", "Bilal", "Adeen"];
// ⚡ Bolt Performance Optimization:
// Converted O(N*M) nested array iteration (.forEach + .some) to O(N+M) Set lookup.
// Mapped `current_user` to a Set of lowercase strings once, eliminating redundant `.toLowerCase()` calls.
// Expected Impact: Reduces array iteration and string allocations inside the loop,
// significantly improving username validation time for large user arrays.
const lowercasedCurrentUserSet = new Set(current_user.map(user => user.toLowerCase()));
//Loop through new user to check for username availablity
new_user.forEach(new_one_user => {
    let our_condition = lowercasedCurrentUserSet.has(new_one_user.toLowerCase());
    if (our_condition) {
        console.log("Sorry ", new_one_user, "is already taken!");
    }
    else {
        console.log("This username", new_one_user, "is available");
    }
});
