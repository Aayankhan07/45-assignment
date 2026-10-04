"use strict";
//Currnet users
let current_user = ["Adeen", "Aayan", "Zayan", "Farazan", "Osama"];
//New user
let new_user = ["Mahad", "Amaan", "Zayan", "Bilal", "Adeen"];
// Create a Set of lowercased current usernames for O(1) lookups
const currentUserLower = new Set(current_user.map(user => user.toLowerCase()));
//Loop through new user to check for username availablity
new_user.forEach(new_one_user => {
    // O(1) Set lookup instead of O(N) array some/includes
    let our_condition = currentUserLower.has(new_one_user.toLowerCase());
    if (our_condition) {
        console.log("Sorry ", new_one_user, "is already taken!");
    }
    else {
        console.log("This username", new_one_user, "is available");
    }
});
