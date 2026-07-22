//Currnet users

let current_user=["Adeen","Aayan","Zayan","Farazan","Osama"]
//New user
let new_user=["Mahad","Amaan","Zayan","Bilal","Adeen"]

// ⚡ Bolt: Performance optimization
// Replacing O(N*M) nested array lookup with O(N+M) Set lookup.
// This reduces the number of toLowerCase() calls and comparisons, improving performance significantly as user lists grow.
// Expected Impact: Scales O(N) instead of O(N^2).

// Pre-process current users into a Set for O(1) lookups
const currentUserSet = new Set(current_user.map(user => user.toLowerCase()));

//Loop through new user to check for username availablity
new_user.forEach(new_one_user =>{
    let our_condition = currentUserSet.has(new_one_user.toLowerCase());
    if (our_condition)
    {
        console.log("Sorry " ,new_one_user,"is already taken!")

    }else{
        console.log("This username",new_one_user,"is available")
    }

});