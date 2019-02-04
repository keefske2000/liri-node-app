var fs = require("fs");




var doThis = (doIt)=>{





// This block of code will create a file called "movies.txt".
// It will then print "Inception, Die Hard" in the file
fs.writeFile("random.txt", "I want it that way", function(err) {

  // If the code experiences any errors it will log the error to the console.
  if (err) {
    return console.log(err);
  }

  // Otherwise, it will print: "movies.txt was updated!"
  console.log("I want it that way");
});
}

module.exports={
  doThis: doThis
}