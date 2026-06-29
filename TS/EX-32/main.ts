//Currnet users
let current_user=["Adeen","Aayan","Zayan","Farazan","Osama"]

//New user
let new_user=["Mahad","Amaan","Zayan","Bilal","Adeen"]

// ⚡ Bolt Performance Optimization:
// Converting current_user to a Set of lowercase strings for O(1) lookups.
// This changes the overall time complexity from O(N * M) (using .some() inside .forEach())
// to O(N + M) (creating the Set + one pass through new_user).
let current_users_lower = new Set(current_user.map(u => u.toLowerCase()));

//Loop through new user to check for username availablity
new_user.forEach(new_one_user =>{
    // O(1) lookup instead of O(N) array iteration
    if (current_users_lower.has(new_one_user.toLowerCase()))
    {
        console.log("Sorry " ,new_one_user,"is already taken!")

    }else{
        console.log("This username",new_one_user,"is available")
    }
});
