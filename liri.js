require("dotenv").config();
var movieThis = require("./movieThis");
var concertThis = require("./APIs/concertThis");
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotifyTHis = require("./spotifyThisSong")

var doWhatItSays = require("./doWhatItSays");

var spotify = new Spotify(keys.spotify);


var arg1 = process.argv[2]
var arg2 = process.argv[3]

console.log(concertThis)
switch (arg1){
    case "movie-this":
        //Pull the the method from the Movie API methods....
        console.log("Hey from the switch ")
        movieThis.getMovie(arg2)
        break;
    // case "spotify-this-song":
    //     console.log("is it working")
    //     spotifyThis.getSong(arg2)
    //     break;
    // case "concertThis":
    //     console.log("hello")
    //     concertThis.getConcert(arg2)
    //     break;
    // case "do-what-it-say":
    //     doWhatItSays();
    //     break;
    default:
        console.log("None found ")
        break;
}
