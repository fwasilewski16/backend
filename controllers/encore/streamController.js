const Stream = require("../../models/encore/Stream");

// get all streams
async function getStreams(req, res) {
    const streams = await Stream.find();
    res.status(200).json(streams);
}

module.exports = {
    getStreams
};