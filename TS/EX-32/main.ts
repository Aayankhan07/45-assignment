//Currnet users

let current_user=["Adeen","Aayan","Zayan","Farazan","Osama"]
//New user
let new_user=["Mahad","Amaan","Zayan","Bilal","Adeen"]

// ⚡ Bolt Performance Optimization
// What: Convert current_user array to a Set of lowercase strings before the loop
// Why: The previous implementation used array.some() inside array.forEach(), resulting in O(N*M) time complexity
//      and repeated string.toLowerCase() conversions.
// Impact: Reduces time complexity from O(N*M) to O(N+M) and eliminates redundant string operations.
let currentUserLowerSet = new Set(current_user.map(user => user.toLowerCase()));

//Loop through new user to check for username availablity
new_user.forEach(new_one_user =>{
    let our_condition= currentUserLowerSet.has(new_one_user.toLowerCase());
    if (our_condition)
    {
        console.log("Sorry " ,new_one_user,"is already taken!")

    }else{
        console.log("This username",new_one_user,"is available")
    }

});