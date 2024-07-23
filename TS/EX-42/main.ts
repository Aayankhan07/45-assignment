//Define a fuction to prh magician name from an array


function show_magician(magician:string[]){
    magician.forEach(name=>console.log(name));
    }

    function make_great(magician:string[]){
        return magician.map(name=>`The Great ${name}`);
    }

    

    
    //define an arraycontaining magician name
    
    let magician_Name=["Harry Potter","Kevin","Adeen"];
    
    //Call make great function  to modify e magician name
    
     let greatMagician= make_great(magician_Name);

     //Call the magician that show modified  list of magicians
   show_magician(greatMagician);