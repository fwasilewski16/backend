const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    artist_id: {
        type: String
    },
    city: {
        type: String
    },
    date: {
        type: String
    },
    event_id: {
        type: String
    },
    ticket_prices: {
        type: Object
    },
    venue: {
        type: String
    },
    img: {
        type: String
    },
    artist_name: {
        type: String
    }
});

module.exports = mongoose.model("encore_events", eventSchema); 