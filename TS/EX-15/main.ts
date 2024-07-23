let guest_list=["Adeen","Farzaan","Zayan","Aayan"];

let dontCome= guest_list[0];

console.log(dontCome,"cannot come");

guest_list.splice(0,1,"Imran");

guest_list.forEach(one_guest=>console.log(`Salam ${one_guest} ,would you like to dinner with me`));