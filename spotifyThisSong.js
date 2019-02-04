require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");

var text = process.argv[2];
var artistName = process.argv[3];
 
var spotify = new Spotify({
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET,
});
 
var spotifyThisSong = (song)=>{
//Function declared here
spotify.search({ type: 'track', query: song }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
  let results = data.tracks.items;

  results.forEach((song,i) => {
    console.log(`${song} at the index ${i}`);
  });


});
//closed this 
}
//mdoule.exports 
module.exports={

  spotifyThisSong : spotifyThisSong
}