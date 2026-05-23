//Currnet users

let current_user=["Adeen","Aayan","Zayan","Farazan","Osama"]
//New user
let new_user=["Mahad","Amaan","Zayan","Bilal","Adeen"]

// ⚡ Bolt Optimization: Cache lowercase current users in a Set for O(1) lookup.
// This converts an O(n*m) loop with repeated string allocations to an O(n+m) operation.
let current_user_lower = new Set(current_user.map(user => user.toLowerCase()));

//Loop through new user to check for username availablity
new_user.forEach(new_one_user =>{
    let our_condition= current_user_lower.has(new_one_user.toLowerCase())
    if (our_condition)
    {
        console.log("Sorry " ,new_one_user,"is already taken!")

    }else{
        console.log("This username",new_one_user,"is available")
    }

});