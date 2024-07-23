//Making a function

function make_shirt(size:string="Large",printMessage:string="I love Typescipt"){
console.log(`Creating a  ${size} shirt with the ${printMessage} print on shirt.`)
}

//Calling a function with default value
make_shirt();

//Calling a function with medium size and default message
make_shirt("Medium")


//Calling a function with small size and diffrent message
make_shirt("Small","I Love Javascript")