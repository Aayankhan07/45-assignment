//Make album function
function make_album(artist_name:string,album_title:string,tracks?:number)
{
let album:{artist:string,title:string,track?:number}=
{
    artist:artist_name,
    title:album_title,

};

if (tracks!==undefined)
    {
        album.track=tracks;
    }
return album;

}

//Calling three function with diffrent values

let album1=make_album("Adeen","Album title 1" );

let album2=make_album("Zayan","Album title 2" );

//Calling a make_album funtion with third parameter
let album3=make_album("Farzaan","Album title 3",10 );


//Printing the variable

console.log(album1);
console.log(album2);
console.log(album3);
