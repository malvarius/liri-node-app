// setup keys spotify and axios stuffs
require("dotenv").config();
var keys = require("./keys.js");
var SpotifyWebApi = require('spotify-web-api-node');
var artistMov = process.argv.slice(3).join(" ")
const axios = require('axios');
var token = [];

// SPOTIFY CREDENTIALS
// var spotifyApi = new SpotifyWebApi({
//     clientId: keys.id,
//     clientSecret: keys.secret
//   });

//   // Get an access token and 'save' it using a setter
//   spotifyApi.clientCredentialsGrant().then(
//     function(data) {
//       console.log('The access token is ' + data.body['access_token']);
//       spotifyApi.setAccessToken(data.body['access_token']);
//       token.push( data.body['access_token']);
//     },
//     function(err) {
//       console.log('Something went wrong!', err);
//     }
//   );

//  CONCERT_THIS FUNCTION
var concert = function (concert) {
    // console.log(artistMov);
    axios.get("https://rest.bandsintown.com/artists/" + concert + "/events?app_id=codingbootcamp")
        .then(function (response) {
            for (var i = 0; i < 5; i++) {
                console.log('=======================')
                console.log("Concert Venue: " + response.data[i].venue.name);
                console.log("Concert location: " + response.data[i].venue.city + ", " + response.data[i].venue.country);
                console.log("Concert date: " + response.data[i].datetime);
                console.log("=======================")
            }
        })
        .catch(function (err) {
            console.log(err);
        })
}
//  MOVIE_THIS FUNCTION

var movie = function (movies) {
    if (!process.argv[3]) {
        artistMov = 'Mr.+Nobody'
    }
    axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=9b07aacd&t=' + movies)
        .then(function (response) {
            console.log("Movie Title: " + response.data.Title)
            console.log("Produced in: " + response.data.Year)
            console.log("IMDB rating: " + response.data.Ratings[0].Value)
            console.log("Rotten Tomatoes rating: " + response.data.Ratings[1].Value)
            console.log("Country(ies) filmed in: " + response.data.Country)
            console.log("Language: " + response.data.Language)
            console.log("Short Plot: " + response.data.Plot)
            console.log("Main Actors: " + response.data.Actors)
        })
        .catch(function (err) {
            console.log(err);
        })
}
// SPOTIFY FUNCTION
var spotFunction = function (songs) {

    // Create the api object with the credentials
    var spotifyApi = new SpotifyWebApi({
        clientId: keys.id,
        clientSecret: keys.secret,
        accessToken: 'BQCoNZyo3L41j3m9Dy_VY1SsNE_DI83hylrsbWudB_AB2ZvNhbV1SVUiz7_iPnnb-RFHTAuhkosfiN_tr9E'
    });
    spotifyApi.searchTracks('track:' + songs)
        .then(
            function (data) {
                console.log("Song Name: " + data.body.tracks.items[0].name);
                var artistLength = data.body.tracks.items[0].artists.length
                for (i = 0; i < artistLength; i++) {
                    console.log("Artist " + (i + 1) + ": " + data.body.tracks.items[0].artists[i].name)
                }
                console.log("Album Name: " + data.body.tracks.items[0].album.name)
                console.log("Preview URL: " + data.body.tracks.items[0].preview_url)
            },
            function (err) {
                console.log('Something went wrong!', err);
            }
        )
}


// BELOW ARE ALL IF STATEMNTS FOR WHICH FUNCTIONS TO RUN BASED ON USER INPUT
// if statement for bands in town info and sorting of search here
if (process.argv[2] === 'concert-this') {
    concert(artistMov);
}
// api request to OMDB if argument is movie-this
else if (process.argv[2] === 'movie-this') {
    movie(artistMov);
}
// do-what it says to read text file
else if (process.argv[2] === 'do-what-it-says') {
    var fs = require('fs');
    fs.readFile('./random.txt', 'utf8', function (err, data) {
        if (err) console.log(err);
        var Arr = data.split(",")
        var input = Arr[1].replace(/"/g, "")
        var command = Arr[0];
        if (command === 'spotify-this-song') {
            spotFunction(input)
        } else if (command === 'movie-this') {
            movie(input);
        } else if (command === 'concert-this') {
            concert(input);
        }
    })
}
// if statement for spotify-this USING NPM of spotify-web-api
else if (process.argv[2] === 'spotify-this-song') {
    spotFunction(artistMov);
}
