//Current users
let current_user = ["Adeen", "Aayan", "Zayan", "Farazan", "Osama"];
//New user
let new_user = ["Mahad", "Amaan", "Zayan", "Bilal", "Adeen"];

//⚡ Bolt Performance Optimization:
// Converting the current_user array to a Set of lowercased strings makes lookups O(1) instead of O(N).
// Original approach using .some() was O(N*M). This improvement reduces time complexity to O(N+M).
// Expected impact: Significant performance improvement for large arrays of users.
let current_user_lower = new Set(current_user.map(user => user.toLowerCase()));

//Loop through new user to check for username availablity
new_user.forEach(new_one_user => {
    let our_condition = current_user_lower.has(new_one_user.toLowerCase());
    if (our_condition) {
        console.log("Sorry ", new_one_user, "is already taken!");
    } else {
        console.log("This username", new_one_user, "is available");
    }
});
