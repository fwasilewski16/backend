const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const printSchema = new Schema({
    type: { type: String },
    name: { type: String },
    price: { type: Number },
    additionalInfo: { type: Array },
    printedArea: { type: String },
    printSize: { type: String },
    image: { type: String },
    numberedSigned: { type: Boolean },
    qty: { type: Number },
    id: { type: String }
}, { collection: "riclae_print" });

module.exports = mongoose.model("riclae_print", printSchema); 