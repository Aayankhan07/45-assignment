"use strict";
//Currnet users
let current_user = ["Adeen", "Aayan", "Zayan", "Farazan", "Osama"];
//New user
let new_user = ["Mahad", "Amaan", "Zayan", "Bilal", "Adeen"];
// ⚡ Bolt Optimization:
// What: Replaced nested array search (O(N*M)) with a Set lookup (O(N+M)).
// Why: current_user.some() with .toLowerCase() inside a .forEach loop creates an O(N*M) time complexity and redundant string allocations.
// Impact: Significantly faster lookups for larger arrays.
// Measurement: Benchmarking with larger arrays will show drastically reduced execution time and memory allocations.
// Pre-compute lowercased current users into a Set for O(1) lookups
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
