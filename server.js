require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const encoreRoutes = require("./routes/encore");
const riclaeRoutes = require("./routes/riclae");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/encore", encoreRoutes);
app.use("/riclae", upload.single("newImage"), riclaeRoutes);

mongoose.connect(process.env.MONG_URI, { dbName: "portfolioBackend" })
    .then(
        app.listen(process.env.PORT, "0.0.0.0", () => { console.log("Started"); })
    )
    .catch(error => console.log(error));