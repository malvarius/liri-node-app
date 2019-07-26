# liri-node-app
The nature of this app is to output information of movies, concert information about an artist, or spotify information about a specific song.  
It works by typing the following in the command line: node liri (and one of the following: spotify-this-song, movie-this, concert-this, do-what-it-says)  

**Make sure to run the following in the command line to install necessary node packages before execution: npm install**

**An example input would look like this:** node liri movie-this bad santa (this will return the following:)

Movie Title: Bad Santa  
Produced in: 2003  
IMDB rating: 7.1/10  
Rotten Tomatoes rating: 78%  
Country(ies) filmed in: USA, Germany  
Language: English  
Short Plot: A miserable conman and his partner pose as Santa and his Little Helper to rob department stores on Christmas Eve. But they run into  
problems when the conman befriends a troubled kid.  
Main Actors: Billy Bob Thornton, Tony Cox, Brett Kelly, Lauren Graham  

**Your own api keys will be needed in a .env file to use this and will look as follows:**  
SPOTIFY_ID=yourSpotifyIDhere  
SPOTIFY_SECRET=yourSpotifysecrethere  
OMDBkey=yourOMDBkeyhere  
bandsKey=bandsintownkeyhere  

**As well as you will need the following node packages:**  
axios  
spotify-web-api-node  
dotenv  

