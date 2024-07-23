//Define a fuction to prh magician name from an array


function show_magician(magician:string[]){
    magician.forEach(name=>console.log(name));
    }

    function make_great(magician:string[]){
        return magician.map(name=>`The Great ${name}`);
    }

    

    
    //define an arraycontaining magician name
    
    let magician_Name=["Harry Potter","Kevin","Adeen"];
    

   //Making the copy of original through .Slice() function
   let copy_magician_name=magician_Name.slice();

   //Modify the copied array to include "The Great " with their name 
   let copyGreatMagician=make_great(copy_magician_name);

   //Show both array and original  and copied 

   //Original
   console.log("Original array\n")
   show_magician(magician_Name);

   //Copied 
   console.log("\nCopied  array\n")
   show_magician(copyGreatMagician);