// Current users
let current_user = ["Adeen", "Aayan", "Zayan", "Farazan", "Osama"];
// New users
let new_user = ["Mahad", "Amaan", "Zayan", "Bilal", "Adeen"];

// ⚡ Bolt Optimization:
// Created a Set of lowercase current usernames to reduce lookup complexity from O(n*m) to O(n+m)
// This also avoids repeatedly calling .toLowerCase() on current users inside the loop.
let current_users_lower = new Set(current_user.map(user => user.toLowerCase()));

// Loop through new user to check for username availability
new_user.forEach(new_one_user => {
    let our_condition = current_users_lower.has(new_one_user.toLowerCase());

    if (our_condition) {
        console.log("Sorry " ,new_one_user,"is already taken!");
    } else {
        console.log("This username",new_one_user,"is available");
    }
});