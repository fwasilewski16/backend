const express = require("express");
const uploadImage = require("../controllers/riclae/imageController");
const uploadOriginal = require("../controllers/riclae/originalController");
const uploadPrint = require("../controllers/riclae/printController");
const router = express.Router();

// upload image
router.post("/uploadImage", uploadImage);

// add original
router.post("/uploadOriginal", uploadOriginal);

// add print
router.post("/uploadPrint", uploadPrint);

module.exports = router;