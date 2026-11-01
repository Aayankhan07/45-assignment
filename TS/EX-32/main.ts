//Current users
let current_user = ["Adeen", "Aayan", "Zayan", "Farazan", "Osama"];

//New user
let new_user = ["Mahad", "Amaan", "Zayan", "Bilal", "Adeen"];

// OPTIMIZATION: Replaced nested loop (O(N*M)) with a Set lookup (O(N+M)).
// This avoids calling current_user.some() for every new_user.
// Expected Impact: Improves performance from O(N*M) to O(N+M) time complexity.
const currentUserSet = new Set(current_user.map(user => user.toLowerCase()));

//Loop through new user to check for username availability
new_user.forEach(new_one_user => {
    let our_condition = currentUserSet.has(new_one_user.toLowerCase());

    if (our_condition) {
        console.log("Sorry ", new_one_user, "is already taken!");
    } else {
        console.log("This username", new_one_user, "is available");
    }
});
