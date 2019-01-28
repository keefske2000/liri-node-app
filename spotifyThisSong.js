require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");

var text = process.argv[2];
var artistName = process.argv[3];
 
var spotify = new Spotify({
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET,
});
 

spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
console.log(data); 
});