const express = require("express");
const { getStreams } = require("../controllers/encore/streamController");
const { getEvents, getSingleEvent, getRegexEvent } = require("../controllers/encore/eventController");
const { getAllArtists, getSingleArtist } = require("../controllers/encore/artistController");

const router = express.Router();

// get all streams
router.get("/streams", getStreams);

//get all events
router.get("/events", getEvents);

// get events with regex
router.get("/events/search", getRegexEvent);

// get single event
router.get("/events/:id", getSingleEvent);

// get all artists
router.get("/artists/", getAllArtists);

// // get single artist
router.get("/artists/:id", getSingleArtist);

module.exports = router;