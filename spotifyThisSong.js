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

  spotify
  .request("https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums?offset=0&limit=2&include_groups=appears_on&market=ES")
  .then(function(response) {
    console.log(response);
    console.log("Artist:" + response[0]);
    console.log("Song's Title:" + response[0]);
    console.log("Preview Link:" + response[0]);
    console.log("Album:" + response[0]);
    // console.log(data); 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });
// Function declared here
// spotify
//   .search({ type: 'artist', query: 'song' })
//   .then(function(response) {
//     console.log("Artist:" + response[0]);
//     console.log("Song's Title:" + response[0]);
//     console.log("Preview Link:" + response[0]);
//     console.log("Album:" + response[0]);
//   })
//   .catch(function(err) {
//     console.log(err);
//   });

}

module.exports={

  spotifyThisSong : spotifyThisSong
}