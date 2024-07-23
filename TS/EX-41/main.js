//Define a fuction to prh magician name from an array
function show_magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
//define an arraycontaining magician name
var magician_Name = ["Harry Potter", "Kevin", "Adeen"];
//Call the function to print each magician name
show_magician(magician_Name);
