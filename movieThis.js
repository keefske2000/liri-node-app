var axios = require("axios");
var fs = require("fs");

const getMovie = (movieName)=>{

  axios.get("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&country=&type=&apikey=a409037").then(
    function(response) {   
    console.log("Title of the Movie: " + response.data.Title);
      console.log("Year the movie came out: " + response.data.Year);
      console.log("The movie's rating is: " + response.data.imdbRating);
      console.log("Rotten Tomatoes Rating of the movie:" + response.data.Value);
      console.log("Country Where the movie was produced:" + response.data.Country);
      console.log("language if the movie:" + response.data.Language);
      console.log("Plot of the movie:" + response.data.Plot);
    console.log("Actors in the movie:" + response.data.Actors);
      

    fs.appendFile("log.txt", movieName, function(err) {
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
  getMovie: getMovie

// Then run a request with axios to the OMDB API with the movie specified
}




