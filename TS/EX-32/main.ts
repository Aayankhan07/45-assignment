//Current users
let current_user=["Adeen","Aayan","Zayan","Farazan","Osama"]
//New user
let new_user=["Mahad","Amaan","Zayan","Bilal","Adeen"]

// ⚡ Bolt Performance Optimization:
// Created a Set of lowercase usernames to replace O(N * M) nested loops with O(N + M) lookups.
// This prevents redundant string allocations from calling .toLowerCase() repeatedly
// inside the loop and improves lookup time from O(N) to O(1) per new user.
const currentUserLower = new Set(current_user.map(u => u.toLowerCase()));

//Loop through new user to check for username availablity
new_user.forEach(new_one_user =>{
    let our_condition = currentUserLower.has(new_one_user.toLowerCase());
    if (our_condition)
    {
        console.log("Sorry " ,new_one_user,"is already taken!")

    }else{
        console.log("This username",new_one_user,"is available")
    }

});
