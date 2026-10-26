//Currnet users

let current_user=["Adeen","Aayan","Zayan","Farazan","Osama"]
//New user
let new_user=["Mahad","Amaan","Zayan","Bilal","Adeen"]

// Optimize checking by creating a Set of lowercase current users O(N)
// This makes the subsequent checks O(1) instead of O(M*N) when checking new_user against current_user with .some()
let current_user_lower = new Set(current_user.map(user => user.toLowerCase()));

//Loop through new user to check for username availablity
new_user.forEach(new_one_user =>{
    let our_condition = current_user_lower.has(new_one_user.toLowerCase());
    if (our_condition)
    {
        console.log("Sorry " ,new_one_user,"is already taken!")

    }else{
        console.log("This username",new_one_user,"is available")
    }

});