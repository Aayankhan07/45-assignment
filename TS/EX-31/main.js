//Creating an array
var username = ["Adeen", "Mahad", "Zayan", "Admin", "Farzaan"];
//Remove all value from array  now are array is empty
username = [];
if (username.length === 0) {
    console.log("Your array in empty, We need to find some user!");
}
else {
    //Using for each  lopp on array
    username.forEach(function (oneuser) {
        if (oneuser === "Admin") {
            console.log("Hello ".concat(oneuser, ", would you like to see status report."));
        }
        else {
            console.log("Hello ".concat(oneuser, ", thanks for logging in."));
        }
    });
}
