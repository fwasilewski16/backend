const Print = require("../../models/riclae/Print");

async function uploadPrint(req, res) {
    try {
        const upload = await Print.create(req.body);
        if (upload) {
            res.status(200).json({ status: "Painting added to database" });
        } else {
            throw new Error("Something went wrong");
        }
    } catch (error) {
        res.status(500).json({ status: error.message });
    }
}

module.exports = uploadPrint;