//Current users
let current_user=["Adeen","Aayan","Zayan","Farazan","Osama"]
//New user
let new_user=["Mahad","Amaan","Zayan","Bilal","Adeen"]

// Bolt: Optimization - Pre-compute a Set of lowercase current usernames for O(1) lookups
// This changes the overall time complexity from O(N*M) to O(N+M)
let current_users_lower = new Set(current_user.map(user => user.toLowerCase()));

//Loop through new user to check for username availablity
new_user.forEach(new_one_user =>{
    // O(1) lookup instead of O(N) array scan with lowercase conversion
    if (current_users_lower.has(new_one_user.toLowerCase()))
    {
        console.log("Sorry " ,new_one_user,"is already taken!")
    }else{
        console.log("This username",new_one_user,"is available")
    }
});
