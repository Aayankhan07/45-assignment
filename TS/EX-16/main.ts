let guest_list=["Adeen","Farzaan","Zayan","Aayan"];

let dontCome= guest_list[0];

console.log(dontCome,"cannot come");

guest_list.splice(0,1,"Imran");

console.log("Good News ! we have foung a bigger table for dinner ");

guest_list.unshift("Ali");

guest_list.push("Zain");

let middleIndex : number= Math.floor(guest_list.length / 2);

guest_list.splice(middleIndex,0,"Hamza");

console.log("Updated list of Guest")

guest_list.forEach(one_guest=>console.log(`Salam ${one_guest} ,would you like to dinner with me`));