require("dotenv").config();
var movieThis = require("./movieThis");
var concertThis = require("./APIs/concertThis");
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotifyTHisSong = require("./spotifyThisSong")
var spotify = new Spotify(keys.spotify);


var arg1 = process.argv[2]
console.log(arg1)
var arg2 = process.argv[3]


switch (arg1){
    case "movieThis":
        //Pull the the method from the Movie API methods....
        console.log("Hey from the switch ")
        movieThis.getMovie(arg2)
        break;
    case "spotifyThisSong":
        console.log("is it working")
        spotifyThisSong.getSong(arg2)
        break;
    case "concertThis":
        console.log("hello")
        concertThis.getConcert(arg2)
        break;
    case "doWhatItSays":
        require("./doWhatItSays");
        break;
    default:
        console.log("None found ")
        break;
}
