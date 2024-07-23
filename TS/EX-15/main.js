var guest_list = ["Adeen", "Farzaan", "Zayan", "Aayan"];
var dontCome = guest_list[0];
console.log(dontCome, "cannot come");
guest_list.splice(0, 1, "Imran");
guest_list.forEach(function (one_guest) { return console.log("Salam ".concat(one_guest, " ,would you like to dinner with me")); });
