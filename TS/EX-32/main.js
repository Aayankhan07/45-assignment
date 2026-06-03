"use strict";
//Current users
let current_user = ["Adeen", "Aayan", "Zayan", "Farazan", "Osama"];
//New user
let new_user = ["Mahad", "Amaan", "Zayan", "Bilal", "Adeen"];
// ⚡ Bolt: Performance Optimization
// What: Convert the current_user array to a Set of lowercase strings before the loop.
// Why: Replaces an O(N*M) nested iteration (where .some iterates over current_users inside new_users.forEach) with an O(N+M) Set lookup.
// Impact: Reduces time complexity from O(n^2) to O(n) for checking username availability.
// Measurement: Faster execution time for large arrays, preventing the O(n^2) bottleneck.
let current_user_lower = new Set(current_user.map(user => user.toLowerCase()));
//Loop through new user to check for username availability
new_user.forEach(new_one_user => {
    if (current_user_lower.has(new_one_user.toLowerCase())) {
        console.log("Sorry ", new_one_user, "is already taken!");
    }
    else {
        console.log("This username", new_one_user, "is available");
    }
});
