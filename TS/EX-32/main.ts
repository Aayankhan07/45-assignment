//Currnet users

let current_user=["Adeen","Aayan","Zayan","Farazan","Osama"]
//New user
let new_user=["Mahad","Amaan","Zayan","Bilal","Adeen"]

//Loop through new user to check for username availablity
new_user.forEach(new_one_user =>{
    let our_condition= current_user.some(current_one_user=>current_one_user.toLowerCase()===new_one_user.toLowerCase())
    if (our_condition)
    {
        console.log("Sorry " ,new_one_user,"is already taken!")

    }else{
        console.log("This username",new_one_user,"is available")
    }

});``