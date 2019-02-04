var axios=require("axios");
var fs = require("fs");


const getConcert = (artist)=>{
        
                axios.get("https://rest.bandsintown.com/artist/" + artist + "/events?app_id=codingbootcamp").then(
                        function(res) {
                        console.log("Name of Venue" + res.data.venue.name);
                        console.log("Venue location" + res.data.venue.location);
                        console.log("Date of the Event" + res.data.datetime);

                        fs.appendFile("log.txt", artist, function(err) {
                                // If an error was experienced we will log it.
                                if (err) {
                                  console.log(err);
                                }
                                // If no error is experienced, we'll log the phrase "Content Added" to our node console.
                                else {
                                  console.log("Content Added");
                                }     
        });
        });
}

        module.exports={
                getConcert: getConcert
        }