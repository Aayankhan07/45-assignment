//Currnet users
let current_user=["Adeen","Aayan","Zayan","Farazan","Osama"]
//New user
let new_user=["Mahad","Amaan","Zayan","Bilal","Adeen"]

// Bolt Optimization: Pre-compute a Set of lowercase current users.
// This changes the lookup from O(N * M) with .some() inside .forEach()
// to O(N + M) because Set.has() is O(1) time complexity.
let lowercase_current_users = new Set(current_user.map(user => user.toLowerCase()));

//Loop through new user to check for username availablity
new_user.forEach(new_one_user =>{
    let our_condition = lowercase_current_users.has(new_one_user.toLowerCase());

    if (our_condition)
    {
        console.log("Sorry " ,new_one_user,"is already taken!")

    }else{
        console.log("This username",new_one_user,"is available")
    }
});