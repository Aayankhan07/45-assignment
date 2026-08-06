//Current users
let current_user=["Adeen","Aayan","Zayan","Farazan","Osama"]

//New user
let new_user=["Mahad","Amaan","Zayan","Bilal","Adeen"]

// ⚡ Bolt Optimization:
// Created a lowercase Set for O(1) lookups instead of O(N) array iteration per user.
// This reduces the time complexity of checking usernames from O(N * M) to O(N + M).
let current_users_lower = new Set(current_user.map(user => user.toLowerCase()));

//Loop through new user to check for username availablity
new_user.forEach(new_one_user => {
    let our_condition = current_users_lower.has(new_one_user.toLowerCase());
    if (our_condition) {
        console.log("Sorry ", new_one_user, "is already taken!")
    } else {
        console.log("This username", new_one_user, "is available")
    }
});