var axios=require("axios");
var fs = require("fs");


module.exports = {
        getConcert: function(artist){
                axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=13722599").then((res)=>{
                        console.log("Name of Venue" + res.data.venue)
                        console.log("Venue location" + res.data.location)
                        console.log("Date of the Event" + res.data.date)
        })
        }
}

