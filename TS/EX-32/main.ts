//Currnet users

let current_user=["Adeen","Aayan","Zayan","Farazan","Osama"]
//New user
let new_user=["Mahad","Amaan","Zayan","Bilal","Adeen"]

// ⚡ Bolt: Cache lowercased current_user to avoid repeated lowercasing inside the loop (O(N) instead of O(N*M))
let current_user_lower = new Set(current_user.map(user => user.toLowerCase()));

//Loop through new user to check for username availablity
new_user.forEach(new_one_user =>{
    if (current_user_lower.has(new_one_user.toLowerCase()))
    {
        console.log("Sorry " ,new_one_user,"is already taken!")

    }else{
        console.log("This username",new_one_user,"is available")
    }

});
