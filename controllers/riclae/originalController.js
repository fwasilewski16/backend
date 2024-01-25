const Original = require("../../models/riclae/Original");

async function uploadOriginal(req, res) {
    try {
        const upload = await Original.create(req.body);
        if (upload) {
            res.status(200).json({ status: "Painting added to database" });
        } else {
            throw new Error("Something went wrong");
        }
    } catch (error) {
        res.status(500).json({ status: error.message });
    }
}

async function updateOriginal(req, res) {
    const id = req.params.id;
    try {
        const update = await Original.updateOne({ _id: id }, req.body);
        if (update) {
            res.status(200).json({ status: "OK" });
        } else {
            throw new Error("Something went wrong");
        }
    } catch (error) {
        res.status(500).json({ status: error.message });
    }
}

async function deleteOriginal(req, res) {
    const id = req.params.id;
    const response = await Original.deleteOne({ _id: id });
    if (response === null) {
        res.status(500).json({ status: "Deleta failed" });
    }
    res.status(200).json({ status: "OK" });
}

async function getSingleOriginal(req, res) {
    const id = req.params.id;
    const original = await Original.findOne({ _id: id });
    if (original === null) {
        res.status(500).json({ status: "No painting with this ID" });
        return;
    }
    res.status(200).json({ painting: original });
}

module.exports = { uploadOriginal, updateOriginal, deleteOriginal, getSingleOriginal };