var axios = require ("axios");
var Spotify = require("node-spotify-api");
require("dotenv").config();

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};
