const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const artistSchema = new Schema({
    bio: {
        type: String
    },
    artist_id: {
        type: String
    },
    img: {
        type: String
    },
    name: {
        type: String
    }
});

module.exports = mongoose.model("encore_artist", artistSchema); 