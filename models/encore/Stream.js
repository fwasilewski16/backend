const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const streamSchema = new Schema({ any: Schema.Types.Mixed });

module.exports = mongoose.model("encore_streams", streamSchema);