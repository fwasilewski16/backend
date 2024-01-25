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

async function updatePrint(req, res) {
    const id = req.params.id;
    try {
        const update = await Print.updateOne({ _id: id }, req.body);
        if (update) {
            res.status(200).json({ status: "OK" });
        } else {
            throw new Error("Something went wrong");
        }
    } catch (error) {
        res.status(500).json({ status: error.message });
    }
}

async function deletePrint(req, res) {
    const id = req.params.id;
    const response = await Print.deleteOne({ _id: id });
    if (response === null) {
        res.status(500).json({ status: "Deleta failed" });
    }
    res.status(200).json({ status: "OK" });
}

async function getSinglePrint(req, res) {
    const id = req.params.id;
    const print = await Print.findOne({ _id: id });
    if (print === null) {
        res.status(500).json({ status: "No painting with this ID" });
        return;
    }
    res.status(200).json({ painting: print });
}


module.exports = { uploadPrint, updatePrint, deletePrint, getSinglePrint };