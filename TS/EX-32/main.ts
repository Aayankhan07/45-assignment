//Currnet users

let current_user=["Adeen","Aayan","Zayan","Farazan","Osama"]
//New user
let new_user=["Mahad","Amaan","Zayan","Bilal","Adeen"]

// ⚡ Bolt Performance Optimization:
// Converted O(N^2) nested array lookup into O(N) by creating a Set of lowercase current users.
// This reduces the time complexity from O(N * M) to O(N + M) and makes the check inside the loop O(1).
let current_user_lower_set = new Set(current_user.map(user => user.toLowerCase()));

//Loop through new user to check for username availablity
new_user.forEach(new_one_user =>{
    let our_condition= current_user_lower_set.has(new_one_user.toLowerCase());
    if (our_condition)
    {
        console.log("Sorry " ,new_one_user,"is already taken!")

    }else{
        console.log("This username",new_one_user,"is available")
    }

});
