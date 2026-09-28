//Currnet users

let current_user=["Adeen","Aayan","Zayan","Farazan","Osama"]
//New user
let new_user=["Mahad","Amaan","Zayan","Bilal","Adeen"]

// Convert current users to lowercase and store in a Set for O(1) lookup
// This optimizes the previous O(N^2) search (N loop * N some) to O(N)
const current_user_lower = new Set(current_user.map(u => u.toLowerCase()));

//Loop through new user to check for username availablity
new_user.forEach(new_one_user =>{
    if (current_user_lower.has(new_one_user.toLowerCase()))
    {
        console.log("Sorry " ,new_one_user,"is already taken!")

    }else{
        console.log("This username",new_one_user,"is available")
    }

});