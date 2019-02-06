var axios=require("axios");
require("dotenv").config();
var movieThis = require("./movieThis");
var getConcert = require("./APIs/concertThis");
var keys = require("./keys.js");
var spotify = require("./spotifyThisSong");
var doThis = require("./doWhatItSays");

var arg1 = process.argv[2]
console.log(arg1)
var arg2 = process.argv[3]


switch (arg1){
    case "movieThis":
        //Pull the the method from the Movie API methods....
        console.log("Hey from the switch ")
        console.log(movieThis)
        movieThis.getMovie(arg2)
        break;
    case "spotifyThisSong":
        console.log("is it working")
        spotify.spotifyThisSong(arg2)
        break;
    case "concertThis":
        console.log("hello")
        console.log(getConcert)
        getConcert.getConcert(arg2)
        break;
    case "doWhatItSays":
        console.log("I want it that way");
        doThis.doThis(arg2)
        break;
    default:
        console.log("None found ")
        break;
}
