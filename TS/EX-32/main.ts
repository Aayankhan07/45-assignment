//Currnet users

let current_user=["Adeen","Aayan","Zayan","Farazan","Osama"]
//New user
let new_user=["Mahad","Amaan","Zayan","Bilal","Adeen"]

// ⚡ Bolt: Performance Optimization
// What: Pre-computed a Set of lowercased current usernames.
// Why: The original code used O(N*M) nested iterations by calling .some() and .toLowerCase() inside the loop.
// Impact: Reduces time complexity from O(N*M) to O(N+M) and removes repeated redundant string operations.
let lowerCaseCurrentUsers = new Set(current_user.map(user => user.toLowerCase()));

//Loop through new user to check for username availablity
new_user.forEach(new_one_user =>{
    let our_condition = lowerCaseCurrentUsers.has(new_one_user.toLowerCase());
    if (our_condition)
    {
        console.log("Sorry " ,new_one_user,"is already taken!")

    }else{
        console.log("This username",new_one_user,"is available")
    }

});