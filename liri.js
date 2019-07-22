require("dotenv").config();
var keys = require("./keys.js");
var artistMov = process.argv.slice(3).join("+")
const axios = require('axios');




// if statement for bands in town info and sorting of search here
if (process.argv[2]==='concert-this'){
// console.log(artistMov);
axios.get("https://rest.bandsintown.com/artists/" + artistMov + "/events?app_id=codingbootcamp")
.then(function(response){
for(var i=0;i<5;i++){
    console.log(response.data[i].venue.name);
    console.log(response.data[i].venue.city+", "+response.data[i].venue.region);
    console.log(response.data[i].datetime);
}
})
 .catch(function(err){
     console.log(err);
 })
}

// api request to OMDB 
if (process.argv[2]==='movie-this'){
axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=9b07aacd&t='+artistMov)
.then(function(response){
    console.log("Movie Title: "+response.data.Title)
    console.log("Produced in: "+response.data.Year)
    console.log("IMDB rating: "+ response.data.Ratings[0].Value)
    console.log("Rotten Tomatoes rating: "+ response.data.Ratings[1].Value)
    console.log("Country(ies) filmed in: "+response.data.Country)
    console.log("Language: "+response.data.Language)
    console.log("Short Plot: "+response.data.Plot)
    console.log("Main Actors: "+response.data.Actors)
    
})
.catch(function(err){
    console.log(err);
})


}
