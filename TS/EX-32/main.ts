//Currnet users

let current_user=["Adeen","Aayan","Zayan","Farazan","Osama"]
//New user
let new_user=["Mahad","Amaan","Zayan","Bilal","Adeen"]

// ⚡ Bolt Optimization: Pre-compute lowercase current users into a Set for O(1) lookup
// Expected performance impact: This turns an O(N*M) nested array search into an
// O(N+M) set lookup, significantly reducing CPU cycles for large user lists.
const current_users_lower = new Set(current_user.map(user => user.toLowerCase()));

//Loop through new user to check for username availablity
new_user.forEach(new_one_user =>{
    // O(1) Set lookup instead of O(M) array search
    let our_condition = current_users_lower.has(new_one_user.toLowerCase());

    if (our_condition)
    {
        console.log("Sorry " ,new_one_user,"is already taken!")

    }else{
        console.log("This username",new_one_user,"is available")
    }

});
