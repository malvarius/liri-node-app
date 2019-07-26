// DO NOT USE THIS FILE
// THIS FILE IS SOLELY FOR GENERATING SPOTIFY TOKENS FOR TESTING

require("dotenv").config();
var keys = require("./keys.js");
var SpotifyWebApi = require('spotify-web-api-node');

// SPOTIFY CREDENTIALS
var spotifyApi = new SpotifyWebApi({
    clientId: keys.id,
    clientSecret: keys.secret
  });

  // Get an access token and 'save' it using a setter
  spotifyApi.clientCredentialsGrant().then(
    function(data) {
      console.log('The access token is ' + data.body['access_token']);
      spotifyApi.setAccessToken(data.body['access_token']);
      token.push( data.body['access_token']);
    },
    function(err) {
      console.log('Something went wrong!', err);
    }
  );