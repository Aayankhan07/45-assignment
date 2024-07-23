//Creating an array
var username = ["Adeen", "Mahad", "Admin", "Farzaan"];
//Using for each  lopp on array
username.forEach(function (oneuser) {
    if (oneuser === "Admin") {
        console.log("Hello ".concat(oneuser, ", would you like to see status report."));
    }
    else {
        console.log("Hello ".concat(oneuser, ", thanks for logging in."));
    }
});
