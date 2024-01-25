const express = require("express");
const uploadImage = require("../controllers/riclae/imageController");
const { uploadOriginal, updateOriginal, deleteOriginal, getSingleOriginal } = require("../controllers/riclae/originalController");
const { uploadPrint, updatePrint, deletePrint, getSinglePrint } = require("../controllers/riclae/printController");
const { getAllPaintings } = require("../controllers/riclae/paintingController");
const router = express.Router();

// upload image
router.post("/uploadImage", uploadImage);

// original routes
router.post("/uploadOriginal", uploadOriginal); // upload
router.patch("/updateOriginal/:id", updateOriginal); // edit
router.delete("/deleteOriginal/:id", deleteOriginal); // delete
router.get("/original/:id", getSingleOriginal); // get

// print routes
router.post("/uploadPrint", uploadPrint); // upload
router.patch("/updatePrint/:id", updatePrint); // edit
router.delete("/deletePrint/:id", deletePrint); // delete
router.get("/print/:id", getSinglePrint); // get

// get all paintings
router.get("/paintings", getAllPaintings);

module.exports = router;