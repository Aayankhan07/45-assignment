//Current users
let current_user=["Adeen","Aayan","Zayan","Farazan","Osama"];

//New user
let new_user=["Mahad","Amaan","Zayan","Bilal","Adeen"];

// Optimization: Pre-compute lowercase current users into a Set for O(1) lookups.
// This reduces the complexity of the username availability check from O(N*M) to O(N+M),
// significantly improving performance when arrays are large.
const currentUsersLower = new Set(current_user.map(user => user.toLowerCase()));

//Loop through new user to check for username availability
new_user.forEach(new_one_user => {
    // Optimization: O(1) Set lookup instead of Array.some() loop
    if (currentUsersLower.has(new_one_user.toLowerCase())) {
        console.log("Sorry ", new_one_user, "is already taken!");
    } else {
        console.log("This username", new_one_user, "is available");
    }
});
