//Define a fuction to prh magician name from an array
function show_magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
function make_great(magician) {
    return magician.map(function (name) { return "The Great ".concat(name); });
}
//define an arraycontaining magician name
var magician_Name = ["Harry Potter", "Kevin", "Adeen"];
//Call make great function  to modify e magician name
var greatMagician = make_great(magician_Name);
//Call the magician that show modified  list of magicians
show_magician(greatMagician);
