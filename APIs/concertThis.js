var axios=require("axios");
var fs = require("fs");


const getConcert = (artist)=>{
        
                axios.get("http://www.bandsintown.com/event/13722599?app_id=foo&artist=Skrillex&came_from=67").then(
                        function(res) {
                        console.log("Name of Venue:" + res.data.name);
                        console.log("Venue location:" + res.data.city);
                        console.log("Date of the Event:" + res.data.datetime);

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