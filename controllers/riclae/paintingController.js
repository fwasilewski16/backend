const Original = require("../../models/riclae/Original");
const Print = require("../../models/riclae/Print");

// get all paintings
async function getAllPaintings(req, res) {
    const originals = await Original.find();
    const prints = await Print.find();
    res.status(200).json({ originals: originals, prints: prints });
}

module.exports = { getAllPaintings };