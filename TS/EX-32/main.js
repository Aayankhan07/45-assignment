"use strict";
//Currnet users
let current_user = ["Adeen", "Aayan", "Zayan", "Farazan", "Osama"];
//New user
let new_user = ["Mahad", "Amaan", "Zayan", "Bilal", "Adeen"];
// ⚡ Bolt Optimization: Pre-compute lowercase current users into a Set for O(1) lookups
// This reduces the time complexity from O(N*M) to O(N+M) where N is current_users and M is new_users.
// Replaces nested loop (forEach + some) with a single hash map lookup.
const currentUserSet = new Set(current_user.map(user => user.toLowerCase()));
//Loop through new user to check for username availablity
new_user.forEach(new_one_user => {
    let our_condition = currentUserSet.has(new_one_user.toLowerCase());
    if (our_condition) {
        console.log("Sorry ", new_one_user, "is already taken!");
    }
    else {
        console.log("This username", new_one_user, "is available");
    }
});
