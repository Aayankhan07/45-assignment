"use strict";
//Currnet users
let current_user = ["Adeen", "Aayan", "Zayan", "Farazan", "Osama"];
//New user
let new_user = ["Mahad", "Amaan", "Zayan", "Bilal", "Adeen"];
// ⚡ Bolt: Performance Optimization
// Instead of an O(n^2) nested loop checking every current_user for every new_user,
// we pre-compute a Set of lowercased current usernames.
// This changes the lookup time from O(n) to O(1), improving overall time complexity from O(n*m) to O(n+m).
// Expected impact: Faster username availability checks, especially as the user list grows.
const lowerCaseCurrentUsers = new Set(current_user.map(user => user.toLowerCase()));
//Loop through new user to check for username availablity
new_user.forEach(new_one_user => {
    let our_condition = lowerCaseCurrentUsers.has(new_one_user.toLowerCase());
    if (our_condition) {
        console.log("Sorry ", new_one_user, "is already taken!");
    }
    else {
        console.log("This username", new_one_user, "is available");
    }
});
