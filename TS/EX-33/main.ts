let numbers=[1,2,3,4,5,6 ,7,8,9];

//Using for loop
for(let oneNumber of numbers){

     let ordinalending:string;
    if (oneNumber ===1){
        ordinalending="st"
    }

    else if (oneNumber ===2){
        ordinalending="nd"
    }

    if (oneNumber ===3){
        ordinalending="rd"
    }

    else{
        ordinalending="th"
    }

console.log (`${oneNumber}${ordinalending}`);

}