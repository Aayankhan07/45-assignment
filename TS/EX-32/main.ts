//Current users
let current_user = ["Adeen", "Aayan", "Zayan", "Farazan", "Osama"];

//New user
let new_user = ["Mahad", "Amaan", "Zayan", "Bilal", "Adeen"];

// ⚡ Bolt Performance Optimization:
// Pre-calculate lowercased current users and store in a Set for O(1) lookup.
// This reduces the time complexity from O(N*M) down to O(N+M) and avoids
// repeatedly calling .toLowerCase() on current users in the loop.
const lowercaseCurrentUsers = new Set(current_user.map(user => user.toLowerCase()));

//Loop through new user to check for username availability
new_user.forEach(new_one_user => {
    let our_condition = lowercaseCurrentUsers.has(new_one_user.toLowerCase());
    if (our_condition) {
        console.log("Sorry ", new_one_user, "is already taken!");
    } else {
        console.log("This username", new_one_user, "is available");
    }
});
