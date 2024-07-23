//Creating an array
let username=["Adeen","Mahad","Admin","Farzaan"];

//Using for each  lopp on array
username.forEach(oneuser=>{
    if(oneuser==="Admin"){
        console.log(`Hello ${oneuser}, would you like to see status report.`)
    }
    else{
        console.log(`Hello ${oneuser}, thanks for logging in.`)
    }
})