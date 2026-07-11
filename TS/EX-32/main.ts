//Currnet users

let current_user=["Adeen","Aayan","Zayan","Farazan","Osama"]
//New user
let new_user=["Mahad","Amaan","Zayan","Bilal","Adeen"]

// ⚡ Bolt: Performance optimization
// Replaced O(N*M) array.some() lookup with O(N+M) Set lookup.
// Expected Impact: Faster execution for checking available usernames, especially with large datasets.
let current_user_lower = new Set(current_user.map(u => u.toLowerCase()));

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