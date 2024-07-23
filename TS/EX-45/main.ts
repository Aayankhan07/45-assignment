//Define a function to create a car object with optional options..

function create_car(manufacture,model,...options){


    //Initialize car object with manufacture and model \
let car={
    manufacture :manufacture,
    model:model
}
//Adding additional opption to the car object 
options.forEach(option=>{
let [key,value]= option.split(":");
car[key.trim()]=value.trim();

})   ;
return car;

}

//Call the function to create car object 
let my_car=create_car("Toyota","Corolla","color:Silver","Sunroof:True ","Year:2010");


//print the variable 
console.log(my_car);