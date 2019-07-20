require("dotenv").config();
var keys = require("./keys.js");

const axios = require('axios');




// if statement for bands in town info and sorting of search here
var artist = 'blink-182'

axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
.then(function(response){

    console.log(response.data[0]);
})
 .catch(function(err){
     console.log(err);
 })
