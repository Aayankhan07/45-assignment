//Define a function to create a car object with optional options..
function create_car(manufacture, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    //Initialize car object with manufacture and model \
    var car = {
        manufacture: manufacture,
        model: model
    };
    //Adding additional opption to the car object 
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
//Call the function to create car object 
var my_car = create_car("Toyota", "Corolla", "color:Silver", "Sunroof:True ", "Year:2010");
//print the variable 
console.log(my_car);
