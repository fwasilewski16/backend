const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const originalSchema = new Schema({
    name: { type: String },
    price: { type: Number },
    year: { type: String },
    additionalInfo: { type: Array },
    size: { type: String },
    images: { type: Array },
    qty: { type: Number },
    id: { type: String }
}, { collection: "riclae_original" });

module.exports = mongoose.model("riclae_original", originalSchema); 