require("dotenv").config();
var keys = require("./keys.js");

const axios = require('axios');




// if statement for bands in town info and sorting of search here

if (process.argv[2]==='concert-this'){
var artist = process.argv.slice(3).join(" ")
console.log(artist);

axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
.then(function(response){

    console.log(response.data[0]);
})
 .catch(function(err){
     console.log(err);
 })
}
