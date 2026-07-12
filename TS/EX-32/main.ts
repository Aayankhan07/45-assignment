//Currnet users

let current_user=["Adeen","Aayan","Zayan","Farazan","Osama"]
//New user
let new_user=["Mahad","Amaan","Zayan","Bilal","Adeen"]

// ⚡ Bolt Optimization: Replaced O(n^2) nested loop with O(n) Set lookup
// What: Convert current_user to a Set of lowercase strings beforehand
// Why: `.some()` inside `.forEach()` performs O(m * n) operations. A Set lookup reduces this to O(m + n).
// Impact: Significantly reduces lookup time, especially for large arrays of users.

// Pre-compute lowercase current users into a Set for O(1) lookups
const currentUserLower = new Set(current_user.map(user => user.toLowerCase()));

//Loop through new user to check for username availablity
new_user.forEach(new_one_user =>{
    let our_condition= currentUserLower.has(new_one_user.toLowerCase());
    if (our_condition)
    {
        console.log("Sorry " ,new_one_user,"is already taken!")

    }else{
        console.log("This username",new_one_user,"is available")
    }

});