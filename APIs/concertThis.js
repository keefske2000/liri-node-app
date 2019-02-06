var axios=require("axios");
var fs = require("fs");


const getConcert = (artist)=>{
        
                axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
                        function(res) {
                                let results = res.data;
                        console.log("Name of Venue:" + results[0].lineup[0]);
                        console.log("Venue location:" + results[0].venue.city);
                        console.log("Date of the Event:" + results[0].datetime);

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