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
    console.log('=======================')
    console.log("Concert Venue: "+response.data[i].venue.name);
    console.log("Concert location: "+response.data[i].venue.city+", "+response.data[i].venue.country);
    console.log("Concert date: "+response.data[i].datetime);
    console.log("=======================")
}
})
 .catch(function(err){
     console.log(err);
 })
}
// api request to OMDB if argument is movie-this
else if (process.argv[2]==='movie-this'){
    if(!process.argv[3]){
        artistMov='Mr.+Nobody'
    }
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
// do-what it says to read text file
else if(process.argv[2]==='do-what-it-says'){
    var fs = require('fs');
    fs.readFile('./random.txt','utf8',function(err,data){
        if (err)console.log(err);
        var Arr = data.split(",")
       var song = Arr[1].replace(/"/g,"")
    })
}
